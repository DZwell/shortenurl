const express = require('express');
const app = express();
const path = require('path');
let port = process.argv[2] || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(portNumber, () => {
  console.log(`listening on ${portNumber}`);
});
