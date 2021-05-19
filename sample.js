var message = 'ABC';
console.log(message);
message = message.toLowerCase();
console.log(message);
var messageArr = []
var i = 0;

for(i = 0; i < message.length; i++){
    messageArr.push(message[i].charCodeAt() - 'a'.charCodeAt());
}


console.log(messageArr)