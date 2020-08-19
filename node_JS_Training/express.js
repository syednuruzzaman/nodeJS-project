const express = require('express');

var exp = express();
//setting ejs view engine for express:
exp.set('view engine', 'ejs');

// exp.get('/', function(req, res){
//     console.log(req.url);
//     res.send('this is home page');
// })
// exp.get('/about', function(req, res){
//     console.log(req.url);
//     res.send('This is about page');
// })
// //passing id. On browser pass as '/profile/123123'
// exp.get('/profile/:id', function(req, res){
//     console.log(req.url);
//     res.send("you have requested your profile " + req.params.id );
// });
// //passing name. On browser pass as '/profile/Syed
// exp.get('/profile/:name', function(req, res){
//     console.log(req.url);
//     res.send("you have requested your profile " + req.params.name );
// });

//sending file:
// exp.get('/', function(req, res){
//         console.log(req.url);
//         console.log( __dirname);
//         res.sendFile(__dirname+'/views/index.html');
//     })

//sending ejs templet file just to mention views as is knows it location:
exp.get('/profile/:name', function(req, res){
    //using render method for ejs file. Passing person param on the browser
    var data = {age: 30, name: 'Syed', job: 'consulting', hobbies: ['eating','fighting','fishing']};
    res.render('profile', {person: req.params.name, data: data});
});

exp.listen(3000);
console.log('server started');