// const express= require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();


// // app.get('/', (req, res) => {

// // 	res.send('Hello World!');
// //     }); 

//     router.get('/',function(req,res){
//         res.sendFile(path.join(__dirname+'/index.html'));
//         //__dirname : It will resolve to your project folder.
//       });
      
//     //   router.get('/about',function(req,res){
//     //     res.sendFile(path.join(__dirname+'/about.html'));
//     //   });
      
//     //   router.get('/sitemap',function(req,res){
//     //     res.sendFile(path.join(__dirname+'/sitemap.html'));
//     //   });
      
//       //add the router
//       app.use(express.static(__dirname + '/View'));
//       //Store all HTML files in view folder.
//       app.use(express.static(__dirname + '/Script'));
//       //Store all JS and CSS in Scripts folder.
      
//       app.use('/', router);
    
// const port = process.env.PORT || 5000;
// 	app.listen(3000, () => {
// 		console.log(`listening on port ${port}..`);
// 	});