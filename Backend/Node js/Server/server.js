// create a server using the Node js

//1. import the library/, module
const http =require('http');

//2. Create server 
const server=http.createServer((req, res)=>{
    //Here comes the request
    res.end("Welcome to node js server")
})

// Specify the port number to listen the client's request
// const port=3100;
// server.listen(port, ()=>{
//     console.log("server  is listening on port 3100");
// });

// console.log("server  is listening on port 3100");



/* Handling the multiple request  
create another server to handle the multiple request
*/

const serverForMultipleReq=http.createServer((req, res)=>{
    console.log(req.url);
    res.write("welcome to my application");// this is append to the res but not end the res.
    // for handle the multiple request we have to check the req url

    if(req.url=='/product'){
        return   res.end("This is product page ");
        
    }else if(req.url=='/user'){
        return res.end('This is User page');
    }
    // we are modifying the res after end the res we can not do it generate an error
    // to fix the error we have to end the excution of the function after the req end
    // so we use return keyword where the first res is end.
    res.end("Welcome to the new Server");
})



 



