const express = require('express');
const app = express();
const port = 5000 ;


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/data', (req, res) => {
    res.send('More Data')
  })
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })