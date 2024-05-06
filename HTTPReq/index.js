const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res)=>{
    //this will get the routing that we search for in chrome
    // console.log(req.url);
    if (req.url === '/') {
        res.end('hello from other side');
    }else if(req.url === '/About'){
        res.end('hello from Aboutus side');
     }else if(req.url.toUpperCase() === '/CONTACT'){
        
        res.end('hello from Contactus side');
     }else if(req.url === '/userapi'){
        fs.readFile(`${__dirname}/UserApi/userapi.json`,'utf-8',(err,data)=>{
            // console.log(data);
            res.end(data)
        })
        // res.end('hello from user Api side');
        
     }else{
        res.writeHead(404,{'Content-type':'text/html'}).end('<h1>Page not found</h1>');
        // res.end('404 page not found');
     }
    
})
server.listen(3000,'127.0.0.1',()=>{
    console.log('server is listning the port number 3000');
})