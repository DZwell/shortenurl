const express = require('express');
const app = express();
const path = require('path');
const port = process.argv[2] || 3000;

app.use(express.static('src'));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
