// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);

// require('dotenv').config();
// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   return res.status(200).json({ message: 'Hello World' });
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
