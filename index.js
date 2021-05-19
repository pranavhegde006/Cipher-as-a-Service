const express = require('express');
const app = express();
const path = require('path');
const url = require('url');
const caesar = require('./routes/api/Caesar');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.use('/api/caesar', require('./routes/api/Caesar'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));