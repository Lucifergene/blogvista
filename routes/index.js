const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
const bodyParser = require('body-parser');
// const bootstrap = require('bootstrap');

const Post = require('../models/post');
const User = require('../models/user');
router.use(expressLayouts); 
router.use(bodyParser.urlencoded({ extended: true }))
// const posts = [
//     {
//       id: 1,
//       author: 'John',
//       title: 'Templating with EJS',
//       body: 'Blog post number 1'
//     },
//     {
//       id: 2,
//       author: 'Drake',
//       title: 'Express: Starting from the Bottom',
//       body: 'Blog post number 2'
//     },
//     {
//       id: 3,
//       author: 'Emma',
//       title: 'Streams',
//       body: 'Blog post number 3'
//     },
//     {
//       id: 4,
//       author: 'Cody',
//       title: 'Events',
//       body: 'Blog post number 4'
//     }
//   ]

// Welcome Page
// router.get('/', (req, res) =>
//  res.render('welcome'));
// // res.sendFile(path.resolve('./pages/index.html')));

// router.get('/', async (req, res) => {
//     const posts = await Post.find({})
//     res.render('welcome', { posts
//     })
// });

router.get('/', async (req, res) => {
    // render `home.ejs` with the list of posts
    const {userId} = req.session
    console.log(req.session)    
    // $ { userId ? res.redirect('/welcomeback') : res.redirect('/') }
    const posts = await Post.find().sort({ "createdAt" : -1})
    res.render('welcome', { posts: posts })
  });

// // render the `post.ejs` template with the post content
// res.render('post', {
//     author: post.author,
//     title: post.title,
//     body: post.body
//   })
// })

router.get('/welcomeback',ensureAuthenticated, async (req, res) => {    
    const posts = await Post.find().sort({ "createdAt" : -1})
    res.render('welcomeback', { posts: posts , user: req.user}) 
});

// db.orders.find().sort( { amount: -1 } )
// {user: req.user}
//db.posts.find().sort({ "createdAt" : -1})


router.get('/contact', (req, res) =>
res.render('contact'));
// res.sendFile(path.resolve('./pages/contact.html')));

router.get('/about', (req, res) =>
 res.render('about'));
// res.sendFile(path.resolve('./pages/about.html')));

router.get('/post',ensureAuthenticated, (req, res) =>
 res.render('create',{ user: req.user})
 );
// res.sendFile(path.resolve('./pages/post.html')));

// router.get('/post/new', (req, res) =>
//     res.render('create'));




router.get('/post/:id',ensureAuthenticated,  async (req, res) => {
    const post = await Post.findById(req.params.id)
    // const lay =  { layout: './views/layout' }
    res.render('post', {post: post ,  user: req.user})
});

// router.post('/posts/store', (req, res) => {
//     console.log(req.body)
//     res.redirect('/')
// });

router.post('/posts/store', (req, res) => {
    console.log(req.body)
    Post.create(req.body, (error, post) => {
        res.redirect('/welcomeback')
    })
});

// Dashboard
router.get('/dashboard', ensureAuthenticated, async (req, res) =>{
const indpost = await Post.find({username: req.user.name }).sort({ "createdAt" : -1})
  res.render('dashboards',{ indpost: indpost , user: req.user})
  });

//DELETE POST
router.get('/delete/:id',(req, res) => {
  Post.findOneAndDelete({_id: req.params.id}, (err, docs) => {
    if(err) res.json(err);
    else {
      res.redirect('/welcomeback');
    }
  });
});
// { layout: 'layout_2', locals: { name: 'test' } }

router.get('/update/:id', ensureAuthenticated, async (req, res) =>{
  const post = await Post.findById(req.params.id)
    res.render('updatepost', { post: post ,user: req.user})
   
    });

  router.post('/update/:id/store',function(req, res, next){
    console.log(req.body)
      Post.findById(req.params.id, function (err, post) {
        if (!post) {
          req.flash('error', 'No post found');
          return res.redirect('/dashboard');
      }

      var title = req.body.title;
      var description = req.body.description;
      var content = req.body.content;

      post.title = title;
      post.description = description;
      post.content = content;
      post.save((err) => {

          res.redirect('/welcomeback');
      });
  });
});




router.post('/dashboard/store',(req, res, next) =>{

  User.findById(req.user.id,(err, user) => {

      // todo: don't forget to handle err

      if (!user) {
          req.flash('error', 'No account found');
          return res.redirect('/dashboard');
      }

      // good idea to trim 
      var email = req.body.email.trim();
      var name = req.body.name.trim();
      

      // // validate 
      // if (!email || !name) { // simplified: '' is a falsey
      //     req.flash('error', 'One or more fields are empty');
      //     return res.redirect('/dashboard'); // modified
      // }

      // no need for else since you are returning early ^
      user.email = email;
      // user.local.email = email; // why do you have two? oh well
      user.name = name;

      // don't forget to save!
      user.save((err) => {

          // todo: don't forget to handle err

          res.redirect('/welcomeback');
      });
  });
});

module.exports = router;


// router.patch('#',(req,res) => {

//   const mid = req.params.id;

//   const updateOps = {};
//   for(const ops in req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Post.update({_id: mid} , {$set: updateOps})
//   .exec()
//   .then(result => {
//     console.log(result);
//     res.status(200).json(result);
//     })
//   .catch(err => {
//     console.log(err);
//     res.status(500).json({
//        error: err
//     });
//   });
// });

