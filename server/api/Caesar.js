const express = require('express');
const router = express();
const path = require('path');
const caesarCipher = require('../helper/cipherFunctions');

router.use(express.json());


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../../public/templates/caesar.html'));
})

router.post("/form", (req, res) => {
    if(req.body['message'] == ''){
        res.sendFile(path.join(__dirname, './../../public/templates/caesarFormError.html'));
    }
    else{
        let key = '3';
        if(req.body.key != ''){
            key = req.body.key
        }
        res.send("Your cipher text is: \t" + caesarCipher(req.body.message, key));
    }
})

router.get('/:key/:message', (req, res) => {  
    let start = Date.now();
    const secret = caesarCipher(req.params.message, req.params.key);
    let end = Date.now();
    end = end - start;
    const cipherText = {
        'plainText': req.params.message,
        'key': req.params.key,
        'cipherText': secret,
        'timeTaken': end,
        'greetings': 'Thanks for using Cipher as a service. You have been an awesome customer!'
    };
    res.json(cipherText);
})

router.get('/:message', (req, res)=>{
    let start = Date.now();
    const secret = caesarCipher(req.params.message, 3);
    let end = Date.now();
    end = end - start;
    const cipherText = {
        'plainText': req.params.message,
        'key': 3,
        'cipherText': secret,
        'timeTaken': end,
        'greetings': 'Thanks for using Cipher as a service. You have been an awesome customer!'
    };
    res.json(cipherText);
})

module.exports = router;