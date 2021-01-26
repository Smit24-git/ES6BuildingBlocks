
import readlineSync from 'readline-sync';


//3. Modify the grades program to do all of the letter grades

//input
let nGrade = readlineSync.question("Enter your grade out of 100? ");
//select among letter grades

if(nGrade < 50){
    console.log("you failed");
}else if(nGrade < 60){
    console.log("D");
}else if(nGrade < 70){
    console.log("C");
}else if(nGrade < 80){
    console.log("B");
}else if(nGrade < 90){
    console.log("A");
}else if(nGrade < 100){
    console.log("A+");
}

