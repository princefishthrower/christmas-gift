const http = require('http');
const express = require('express');
const app = express();

// Serve static assets
app.use(express.static('./build'));

server = http.createServer(app);

// listening ports - reverse proxyed from nginx nlp-champs.com
server.listen(9010);