const caesarCipher = (message, key) => {
    let cipherText = '', messageArr = [], messageStr = message.toLowerCase();
    for(var i = 0; i < message.length; i++){
        messageArr.push(messageStr[i].charCodeAt() - 'a'.charCodeAt());
        messageArr[i] += parseInt(key);
        messageArr[i] %= 26;
        messageArr[i] += 97;
        cipherText += String.fromCharCode(messageArr[i]);
    }
    return cipherText;
}

module.exports = caesarCipher;
