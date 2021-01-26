import readlineSync from 'readline-sync'
/*
2. Write a loop that asks the user for a number of rows and then prints out a pattern that looks like this:
```
#######
######
#####
####
###
##
#
*/
let count=readlineSync.question('Enter Number:');
let pattern="";
for(let i=0;i<count;i++){
    for(let j=0;j<count-i;j++){
        pattern+=`#`;
    }
    pattern+=`\n`
}
console.log(pattern);