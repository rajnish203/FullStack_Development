import http from 'http'
const server=http.createServer((req, res)=>{
    if(req.method=='POST'){
        console.log(req.body)
        // expecting data from client
        let body=""
        req.on('data', (chunk)=>{
           body+=chunk.toString()
        })
        req.on('end', ()=>{
            console.log(body);
            res.end("The  data is recieved")
        })

    }else{
        res.end("this is welcome page")
    }

    
})
const port =7200;
server.listen(port, ()=>{
    console.log("Server is listening on "+ port)
})