import readlineSync from 'readline-sync'


//6. If `254` is code for bed write a program that decrypts a string made from an encoded sentence that the user inputs.

let code=readlineSync.question('Enter Code:');

const decodingAlgorithm=['a','b','c','d','e','f','g','h','i'];

let decryptCode=(code)=>{
    let decodedMessage='';
    for(let value of code){
        if(decodingAlgorithm[value-1])
            decodedMessage+=decodingAlgorithm[value-1];
        else
            return 'Code is Altered by someone!'
    }
    return decodedMessage
}
console.log(decryptCode(code));