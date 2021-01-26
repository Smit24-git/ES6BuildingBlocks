import readlineSync from 'readline-sync'
//7. Write a program that prints the short form for a month given it's proper name. For instance October => Oct.
const monthShort={
    'january' : 'jan',
    'february' : 'feb',
    'march' : 'mar',
    'april' : 'apr',
    'may' : 'may',
    'june' : 'jun',
    'july' : 'jul',
    'august' : 'aug',
    'september' : 'sept',
    'october' : 'oct',
    'november' : 'nov',
    'december' : 'dec'
}

let month=readlineSync.question('Enter Month (for eg. January): ')

let getShortMonth=(month)=>monthShort[month.toLowerCase()];

let shortM=getShortMonth(month);
if(shortM){
    console.log(`the short form of ${month} is ${shortM}`);
}else{
    console.log(`Sorry, month ${month} not found! Please try again...`);
}