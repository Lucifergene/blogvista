const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
var BodyParser = require('body-parser');
var request = require('request');
// Load User model
const User = require('../models/User');
router.use(expressLayouts);
router.use(BodyParser.json());
router.use(BodyParser.urlencoded({ extended: true }));

const RECAPTCHA_SECRET = "6LdIXJ4UAAAAAHX1zSsRsGGhV8CujACpvSWd2CXS";


// Login Page
router.get('/login', (req, res) => {
res.render('login');
});

// Register Page
router.get('/register', (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  
  var recaptcha_url = "https://www.google.com/recaptcha/api/siteverify?";
  recaptcha_url += "secret=" + RECAPTCHA_SECRET + "&";
  recaptcha_url += "response=" + request.body["g-recaptcha-response"] + "&";
  recaptcha_url += "remoteip=" + request.connection.remoteAddress;
  Request(recaptcha_url, function(error, resp, body) {
      body = JSON.parse(body);
      if(body.success !== undefined && !body.success) {
          return response.send({ "message": "Captcha validation failed" });
      }
      response.header("Content-Type", "application/json").send(body);
  });
  
  const {name , email , password, password2 } = req.body;
  let errors = [];

  if (!name || !email ||   !password || !password2) {
    errors.push({ msg: 'Please enter all fields' });
  }

  if (password != password2) {
    errors.push({ msg: 'Passwords do not match' });
  }

  if (password.length < 6) {
    errors.push({ msg: 'Password must be at least 6 characters' });
  }

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      password,
      password2
    });
  } else {
    User.findOne({ email: email }).then(user => {
      if (user) {
        errors.push({ msg: 'Email already exists' });
        res.render('register', {
          errors,
          name,
          email,
          password,
          password2
        });
      } else {
        const newUser = new User({
          name,
          email,
          password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/welcomeback',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
    // req.session.destroy(err => {
    // //   if (err) {
    // //     return res.redirect('/welcomeback')
    // //   }
    // res.clearCookie(sess_name);
    // req.flash('success_msg', 'You are logged out');
    // res.redirect('/'); 
    // })

  req.logOut();

  req.flash('success_msg', 'You are logged out');
  // res.redirect('/users/login');
  res.redirect('/');
});

module.exports = router;
