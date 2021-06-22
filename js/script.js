'use strict'

confirm("Hi there, my name is Dima Zeklam, living in Amman,Jordan");
let firstName = prompt(" What is your name ?");
confirm("Hi " + firstName + " You have to answer the questions by typing yes/no or y/n , let's get started");
//question 1
let Q1 = prompt(" my major is electrical engineering ?").toLowerCase();

if(Q1 == 'y' || Q1 == 'yes')
{
  //  console.log("wrong");
    alert("your answer is wrong ");
}else{
//console.log("correct");
alert("your answer is correct ");
}

//question 2
let Q2 = prompt("Do i like programming ?").toLowerCase();
switch(Q2){
    case 'yes':
        case 'y':
           // console.log("correct");
            alert("your answer is correct ");
            break;
            case 'no':
                case 'n':
                    //console.log("wrong");
                    alert("your answer is wrong ");
                      break;

}

//question 3
let Q3 = prompt("Do you think i studied at Alhashemih university ?").toLowerCase();
if(Q3 == 'y' || Q3 == 'yes')
{
    //console.log("wrong");
    alert("your answer is wrong ");
}else{
//console.log("correct");
alert("your answer is correct ");
}
//question 4
let Q4 = prompt("did i graduated in 2019 ?").toLowerCase();
if(Q4 == 'y' || Q4 == 'yes')
{
    //console.log("correct");
    alert("your answer is correct ");
}else{

//console.log("wrong");
alert("your answer is wrong ");
}
//question 5
let Q5 = prompt("Is my goal to be professional in computer security ?").toLowerCase();

if(Q5 == 'y' || Q5 == 'yes')
{
    //console.log("wrong");
    alert("your answer is wrong ");
}else{
//console.log("correct");
alert("your answer is correct ");
}

let input = Number(prompt('Try to guess the number and type it belwo,you have just 4 attempts'));
for(let i=1;i<4;i++){
    if(input < 8){
        alert('Too low , try again');
        input = Number(prompt('Try to guess the number again  and type it belwo'));
    }else if(input == 8){
        alert('That is correct , good job ');
        break;
    }
    else
    {
        alert('Too high, try again');
        input = Number(prompt('Try to guess the number again  and type it belwo'));
    }
}
if(input < 8)
    alert('Too low, your attempts are ended');
    else
    alert('Too high, your attempts are ended');

alert('The correct answer is 8');


let input2 = Number(prompt('Try to guess the any of the numbers and type it belwo,you have just 6 attempts'));

let arr=[5,80,8]; 
for(let y=1;y<6;y++){
    if(input2 === arr[0] || input2=== arr[1] || input2 === arr[2]){
        alert('That is correct , good job ');
      break;
    }      
    else{
        alert('Try again');
        input = Number(prompt('Try to guess the number again and type it belwo'));
    }
    }

    alert('The correct answers are '+ arr); 

alert("Hello " + firstName + " thank you for visiting this site , see you again ^_^ " );