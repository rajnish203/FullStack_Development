import express from 'express'

// create a server
const server=express();



server.get('/', (req, res)=>{
 res.send("Welcome to express server ")
 return;   

})

// whatever is in the public folder is directly accessed by the express.static middleware
// after the res is end can also access the public folder 
// it is use to send the static html file or static content
server.use(express.static('PUBLIC'))

server.listen(3300, ()=>{
    console.log("Serever is listening on 3300");
})