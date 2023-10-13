// create a server using the Node js

//1. import the library/, module
const http =require('http');

//2. Create server 
const server=http.createServer((req, res)=>{
    //Here comes the request
    res.end("Welcome to node js server")
})

// Specify the port number to listen the client's request
const port=3100;
server.listen(port, ()=>{
    console.log("server  is listening on port 3100");
});

// console.log("server  is listening on port 3100");


/* Handling the multiple request  */



