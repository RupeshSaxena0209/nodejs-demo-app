const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from Node.js Demo App running on Jenkins + EC2!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
