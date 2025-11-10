const http = require('http');


const server = http.createServer( (req,res)=>{ //request and response
  if (req.url === '/') {
  res.end('Welcome to our homepage');
} else if (req.url === '/about') {
  res.end('Here is our short history');
} else {
  res.end('404 page');
}

})

server.listen(5000)