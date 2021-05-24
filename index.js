const { count } = require('console');
const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
let counter = 0


app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))

app.use(
  express.static('public', {
    setHeaders: (res, path, stat) => {
      ++counter;
    },
  })
)
app.use(express.static('public'));  
app.use('/images', express.static('images')); 

app.get('/', function (req, res) {
  res.render('./../public/views/index', {count: parseInt(counter/3)});
});

app.use('/api/caesar', require('./server/api/Caesar'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
