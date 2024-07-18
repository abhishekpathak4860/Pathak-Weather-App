 //  const http=require('http');
 // const fs=require('fs');
 //  const path=require('path');

 // const home=fs.readFileSync("/public/index.html","utf-8");
 // const about=fs.readFileSync("/public/about.html","utf-8");
 // const contact=fs.readFileSync("/public/contact.html","utf-8");
 // const services=fs.readFileSync("/public/services.html","utf-8");

 // const server=http.createServer((req,res)=>{
 //         if(req.url==="/"){
 //              res.end(home);
 //         }
 //        else if(req.url.match("\.css$")){
 //             const csspath=path.join(__dirname,req.url);
        
 //          const filestream=fs.readFileSync(csspath,"utf-8");
 //             res.writeHead(200,{"content-type":"text/css"});
 //             res.end(filestream);
 //        }
 //         else if(req.url.match("\.js$")){
 //             const jspath=path.join(__dirname,req.url);
        
 //              const javascript=fs.readFileSync(jspath,"utf-8");
 //             res.writeHead(200,{"content-type":"application/javascript"});
 //           res.end(javascript);
 //         }
 //          else if(req.url.match("\.jpg$") || req.url.match("\.jpeg$") || req.url.match("\.png$") || req.url.match("\.webp")){
 //             const imagepath=path.join(__dirname,req.url);
 //              const image=fs.readFileSync(imagepath);
 // //              const ext = path.extname(req.url).substring(1);
 //              res.writeHead(200,{"content-type":`image/${ext}`});
 //              res.end(image);
 //         }
 //         else if(req.url==="/about"){
 //             res.end(about);
 //          }
 //          else if(req.url==="/contact"){
 //              res.end(contact);
 //          }
 //         else if(req.url==="/services"){
 //             res.end(services);
 //          }
 //          else{           
 //             res.writeHead(404,{"content-type":"text/html"});
 //             res.end("<h1>404 not found<h1>");
 //        }
 // });
 //  server.listen(8002,"0.0.0.0",()=>{
 //     console.log("currently listening to the port");
 // });


const path=require('path');
const express = require("express");
const server = express();

 const staticPath=path.join(__dirname,"/public");
// built in middleware
server.use(express.static(staticPath));
   const port=8000;
   server.get("/",(req,res)=>{
      res.sendFile(path.join(staticPath,'index.html'));
    });

    server.get("/about",(req,res)=>{  
       res.sendFile(path.join(staticPath,'about.html'));
 });  
 server.get("/contact",(req,res)=>{  
       res.sendFile(path.join(staticPath,'contact.html'));
 });  
 server.get("/services",(req,res)=>{  
       res.sendFile(path.join(staticPath,'services.html'));
 });  
   server.listen(port,"0.0.0.0"()=>{
    console.log("listening the port at 8000");
   });
