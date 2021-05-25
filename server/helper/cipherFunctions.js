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

const modulo = (number1, number2) => {
    if(number1 < 0){
        return number1%number2 + number2;
    }
    return number1%number2;
}

const caesarDecrypt = (message, key) => {
    let plainText = '', messageArr = [], messageStr = message.toLowerCase();
    for(var i = 0; i < message.length; i++){
        messageArr.push(messageStr[i].charCodeAt() - 'a'.charCodeAt());
        messageArr[i] -= parseInt(key);
        messageArr[i] = modulo(messageArr[i], 26);
        messageArr[i] += 97;
        plainText += String.fromCharCode(messageArr[i]);
    }
    return plainText;
}

module.exports = {caesarCipher, caesarDecrypt};
