# CaaS - Cipher as a service! 🔐

Hey there! I bring to you the world's first CaaS - Cipher as a service!

## Getting to know CaaS

API link: `https://cipher-as-a-service.herokuapp.com/api/caesar/{key}/{message}`
Just type in your key value and plain text message in the above URL respectively and >bam< you get the encrypted value right inside your project.

Demo: **[https://cipher-as-a-service.herokuapp.com/api/caesar/e/3/demotext](https://cipher-as-a-service.herokuapp.com/api/caesar/e/3/demotext)** would give you the caesar encrypted value of **demotext** , key being **3**.

In case you need the decrypted value of your message, use **d** as your service type.
If you don't enter the value of key, it'll be automatically read as 3.

## API response

The JSON response returned by the API call contains following parameters which are explained in the below table.

|API parameters                 |             Significance    |
|-------------------------------|-----------------------------|
|`plainText`            |This is the unencrypted version of your message            |
|`cipherText`            |This is the encrypted version of your message            |
|`timeTaken`|This is the time taken by the server to offer your service|
|`key`|This is the value of the key (default: 3)|

## The web version

There is even a web version of my CaaS which is accessible at "https://cipher-as-a-service.herokuapp.com/"

### Contribute

Feel free to contribute to this project by adding in more ciphers and functionalities.

> Inspired by [Aditeya Baral's](https://github.com/aditeyabaral) [AaaS](https://github.com/aditeyabaral/arithmetic-as-a-service) xD. Hope you like this too!
