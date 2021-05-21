const express = require('express');
const app = express();
const path = require('path');
const url = require('url');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
  }))

app.use(express.static('public'));  
app.use('/images', express.static('images')); 

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/templates/index.html'))
})


app.use('/api/caesar', require('./server/api/Caesar'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));