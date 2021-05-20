const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const express = require('express');
const router = express();
const path = require('path');
const bodyParser = require('body-parser');
const caesarCipher = require('./cipherFunctions');

router.use(express.json());
router.exports

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './../../public/caesar.html'));
})

router.post('/form', (req, res) => {
    if(req.body['message'] == ''){
        res.sendFile(path.join(__dirname, './../../public/caesarFormError.html'));
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
    res.send('Your cipher text is:\t' + caesarCipher(req.params.message, req.params.key));
})

router.get('/:message', (req, res)=>{
    res.send('Your cipher text is:\t' + caesarCipher(req.params.message, 3));
})

module.exports = router;