import readlineSync from 'readline-sync'

//1. Take a distance in kilometers as input and output the same distance converted to miles.
let kilometer;
do{
    kilometer=readlineSync.question('Please Enter Distance in Kilometer:');
    if(isNaN(kilometer)){console.log('Numbers only!')}
}while(isNaN(kilometer));

const kiloToMile = kilometer*0.621371;

console.log(`Distance in Miles is: ${kiloToMile}`);
