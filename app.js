const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
// const connectMongo = require('connect-mongo')(session);
const MongoStore = require('connect-mongo')(session);


const app = express();

const {
  sess_name = 'sid',
} = process.env

// const Post = require('../models/Post');

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').MongoURI;

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://avik6028:avik240299@node-rest-shop-cumuq.mongodb.net/test?retryWrites=true', { useNewUrlParser: true }
  )
// mongoose.connect(config.DB,{ useMongoClient:true })
  .then(() => console.log('You Are MongoDB Connected !'))
  .catch(err => console.log(err));

// const mongoStore = connectMongo(expressSession);
// app.use(expressSession({
//   secret: 'secret',
//   store: new mongoStore({
//       mongooseConnection: mongoose.connection
//   })
// }));

//DELETING CACHE IN EVERY ROUTE
app.use(function(req, res, next) {
  res.set('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});


// EJS
app.use(expressLayouts);           
app.set('view engine', 'ejs'); 
   

// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

//set public folder
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));

// Express session
app.use(session({
    name: sess_name ,
    secret: 'secret',    
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({mongooseConnection: mongoose.connection,
                           ttl: 60 * 60 * 24 * 4}),
    cookie: {
      originalMaxAge: 7200000,
      sameSite: true,

    }
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));
app.use('/users', require('./routes/users.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


