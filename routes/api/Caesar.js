const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const express = require('express');
const router = express();
const path = require('path');
const caesarCipher = require('./cipherFunctions');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../../public/caesar.html'));
})

router.get('/:key/:message', (req, res) => {  
    res.send('Your cipher text is:\t' + caesarCipher(req.params.message, req.params.key));
})

router.get('/:message', (req, res)=>{
    res.send('Your cipher text is:\t' + caesarCipher(req.params.message, 3));
})

module.exports = router;