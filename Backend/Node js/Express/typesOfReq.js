
import express from "express";

const server=express();

// Get Request
server.get('/', (req, res)=>{
    res.send("Hello world , this is Express Server ")
})

// POST request

server.post('/', (req, res)=>{
    res.set('content-type', 'text/plain') // use for set the header
    res.status(201).send("Post request recieved")// status for passing the status code 
})
server.put('/', (req, res)=>{
    res.send("Putrequest recieved") 
})
server.delete('/', (req, res)=>{
    res.send("Deleterequest recieved")
})


// server is listening 

server.listen(4300, ()=>{
    console.log("Server is Listening")
})
