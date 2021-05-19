const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const express = require('express');
const router = express();
const path = require('path');




router.get('/', (req, res) => {
    res.send('Welcome to caesar cipher CaaS');
})

router.get('/:key/:message', (req, res) => {
    let message = req.params.message, key = req.params.key, cipherText = '', messageArr = [];
    message = message.toLowerCase();

    for(var i = 0; i < message.length; i++){
        messageArr.push(message[i].charCodeAt() - 'a'.charCodeAt());
        messageArr[i] += parseInt(key);
        messageArr[i] %= 26;
        messageArr[i] += 97;
        cipherText += String.fromCharCode(messageArr[i]);
    }
    
    res.send('Your cipher text is:\t' + cipherText);
})

router.get('/:message', (req, res)=>{

})

module.exports = router;