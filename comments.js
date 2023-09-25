// create web server
// 1. import express
const express = require('express');
// 2. create web server
const app = express();
// 3. create route
app.get('/comments', (req, res) => {
  const { callback } = req.query;
  const data = {
    code: 200,
    data: [
      { id: 1, content: 'hello world' },
      { id: 2, content: 'hello kitty' },
      { id: 3, content: 'hello java' },
    ],
  };
  res.send(`${callback}(${JSON.stringify(data)})`);
});
// 4. listen port
app.listen(3000, () => {
  console.log('server running at http://www.localhost:3000');
});