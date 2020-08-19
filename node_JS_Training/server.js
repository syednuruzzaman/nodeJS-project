const http = require('http');
const fs = require('fs');
const { isAbsolute } = require('path');

//install lodash, nodemon, express

// var server = http.createServer(function(req, res){
//     console.log('request was made ' + req.url);
//     res.writeHead(200, {'content-type': 'text/plain'});
//     res.end('Hey Ninja');
// });

// server.listen(5500, '127.0.0.1');
// console.log('you browser, now listen');

var server = http.createServer(function(req, res){
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            //path += 'about-me.html';
            res.statusCode = 301;
            //redirection of Page
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;    
    }

    //fs.readFile('./views/index.html', (err, data) =>{
    fs.readFile(path, (err, data) =>{
        if(err){
            console.log(err);
        }
        else{
           // res.write(data);
            res.end(data);
        }
    })
    
});

server.listen(3000, 'localhost', () => {
    console.log('server is listening');
});

