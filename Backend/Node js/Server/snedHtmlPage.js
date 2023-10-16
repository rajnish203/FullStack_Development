const http=require('http');
// we need to import the fs
 const fs=require('fs');

const port=5000;

const server=http.createServer((req, res)=>{
// for sending html file we have to first read the file using file system 'fs'
const data=fs.readFileSync('index1.html');
res.end(data);
})


server.listen(port, ()=>{
    console.log("Server is Listening on "+port)
})