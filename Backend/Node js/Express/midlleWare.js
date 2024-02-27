import express from 'express';

// Create a server
const server = express();
const server1=express();
const server2=express();

// Handle the default request
server.get(
    "/", 

    //first middleware
    (req, res,next)=>{
    //  res.send("Hits the first middleware") // it will end  the function and do not execute code after this.
        console.log("Hi, i am console ")// it will not end the res so we have to call next with it 
        next()
    },

    // second middlware
    (req, res) => {
    res.send("Welcome to Express server");
});


/* we can also write the massive function like */

server1.get('/', (req, res, next)=>{
    console.log("This is second sever middlewar")
    next()
})
 server1.get('/', (req, res, next)=>{
    res.send("I am second sever middleware")
 })


 // order of middleware is matter first come first excute 


// More on middleware

function firstMiddleware(req, res, next){
    console.log("This is first middleware");
    next()
}
function secondMiddleware(req, res, next){
    console.log("This is second middleare")
    next()
}

function globalMiddleWare(req, res, next){
    console.log("This is global middle ware run for all request")
    next();
}

server2.use(globalMiddleWare); // for calling global or default middleware, calling for all request

server2.get('/send', [firstMiddleware, secondMiddleware], (req, res)=>{ // or we can pass middleware m1, m2 m3... like this 
    res.send(" Hi This is express js server2")
})




// Listen on the specified port
server.listen(3200, () => {
    console.log("Server is listening on port 3200");

});

server1.listen(4200, ()=>{
    console.log("server is listening on port 4200")
})

server2.listen(5400, ()=>{
    console.log('server is listening on http://localhost:5400')
})
