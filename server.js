const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Elevate Lab This is completion of my first task for sample nodejs app ');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
