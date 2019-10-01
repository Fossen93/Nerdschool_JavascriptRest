const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');

app.use(morgan('dev'));

app.get('/', function (request, response) {
    response.send('Hello World');
  });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`); // Note the `` backticks is NOT the same as single quotes ''
});

