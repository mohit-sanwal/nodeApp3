const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
//    console.log(rer.url, request.method, resquest.headers);
  // this callback executes whenever a request reaches to the server
//    console.log('req', req);
    //  process.exit()

    // sending the response
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.write(`<html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <form action="/message" method="POST">
                <input type="text" name="message" />
                <button type="submit">send</button>
            </form>
        </body>
        </html>`)
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.text', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
        
         // redirect
    }
    
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

