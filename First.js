// Importing the built-in 'http' module to create an HTTP server
const http = require('http');

// Creating a server that listens on port 3000
const server = http.createServer((req, res) => {
  // Setting the response header to indicate content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Sending a response message to the client
  res.end('Hello, World!\n');
});

// The server listens on port 3000 for incoming requests
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
