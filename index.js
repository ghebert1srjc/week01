// Week 01

// Use HTTP Package (shared code) from node.js
let myhttp = require("http");

// use http package createServer()
// command that runs a web server for me !!!
// It will deal with all the low-level request and response activity that a web server negotiates when a browser asks for a file or URL

let myserver = myhttp.createServer(
    // createServer() uses our function to run when a request comes in
    function ( myrequest, myresponse) {
            console.log( myrequest.url );

            let mytext;
            if (myrequest.url === '/hey') {
                mytext = "well hello there!";
            } else {
                if (myrequest.url === '/fight') {
                mytext = "Ok big guy lets fight";
            } else {
                
                mytext = "Whats up";
            }
            }

            // writeHead() creates an http response header, including the status code (200 OK),
            // writeHead() takes 1 args: http status code, MIME type 
            myresponse.writeHead( 200, { "Content-Type": "text/plain" } );

            //end() returns some data and closes the response (send it)
            myresponse.end(mytext + "\n");
    }
);

// ask http to start listening on a tcp port for incoming http receipts
// listen() takes 2 arguments: 1: tcp port #, string of the ip address to listen (0.0.0.0)
myserver.listen( 8080, "127.0.0.1");
