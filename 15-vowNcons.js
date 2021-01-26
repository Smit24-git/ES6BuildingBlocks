import readlineSync from 'readline-sync'

//5. Use 2 functions to display the number of vowels and consonants in a string that you prompt the user to enter.

let countCons=(text)=>{
    let cons=0;
    for(let letter of text ){
        if(isConsonant(letter)){
            cons++;
        }
    }
    return cons;
}
let countVows=(text)=>{
    let vows=0;
    for(let letter of text ){
        if(isVowel(letter)){
            vows++;
        }
    }
    return vows;
}
const vowels=['a','e','i','o','u'];
const consonants=['b','c','d','f','g','h','j','k','l','m','n','p',
                  'q','r','s','t','v','w','x','y','z'];
let isVowel = (letter)=> vowels.includes(letter.toLowerCase());
let isConsonant = (letter)=> consonants.includes(letter.toLowerCase());
let text=readlineSync.question('Write something you would never tell anyone:');

console.log(`Don't worry! I just needed something to count consonants and vowels in the text.`);
console.log(`Consonants: ${countCons(text)} | Vowels: ${countVows(text)}`);
