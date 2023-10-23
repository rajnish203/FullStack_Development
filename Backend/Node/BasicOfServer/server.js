const http=require('http');

// this the logical defining value assign to the runnig application for unique identification.
const port=8000;

const fs=require('fs');

// this is the fucntion to handle the request and send the response the response to the browser according to their req.
function requestHandler(req, res){
    console.log(req.url); 

    //It tells the browser about the response and the type of response
    // serviing html content to the browser.
    res.writeHead(404, {'content-type':'text/html'});

    let filePath;
    switch(req.url){
        case '/':
            filePath='./index.html'
            break;
        case '/profile':
            filePath='./profile.html'
            break;
        default:
            filePath='./404.html'
    }
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error', err);
            return res.end('<h1> Error!</h1>');
        }

        return res.end(data);
    });

    //res.end('<h1>Hey this is the server response on your request</h1>');
}


// this is for create the server
const server=http.createServer(requestHandler);


// this is for running the server on a parcticular port
server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running up on port", port);
})