const http = require('http');

const server = http.createServer((req, res) => {

  // this callback executes whenever a request reaches to the server
//    console.log('req', req);
     process.exit()
})

server.listen(3000)

