const http = require('http');

const server = http.createServer((req, res) => {
//    console.log(rer.url, request.method, resquest.headers);
  // this callback executes whenever a request reaches to the server
//    console.log('req', req);
    //  process.exit()

    // sending the response
    
    res.setHeader('content-type', 'text/html');
    res.write(`<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> this is a text from server side </h1>
    </body>
    </html>`);
    // with single quote we have to write each tag line by line
    
    res.end()
})

server.listen(3000)

