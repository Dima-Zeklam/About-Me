'use strict'

confirm("Hi there, my name is Dima Zeklam, living in Amman,Jordan");
let firstName = prompt(" What is your name ?")
alert("Hi " + firstName + ", welcome to my page , thanks for visiting About Me site ^_^ " );
confirm("You have to answer the questions by typing yes/no or y/n , let's get started");
//question 1
let Q1 = prompt(" my major is electrical engineering ?").toLowerCase();

if(Q1 == 'y' || Q1 == 'yes')
{
    console.log("wrong");
    alert("your answer is wrong ");
}else{
console.log("correct");
alert("your answer is correct ");
}

//question 2
let Q2 = prompt("Do i like programming ?").toLowerCase();
if(Q2 == 'y' || Q2 == 'yes')
{
    console.log("correct");
    alert("your answer is correct ");
}else{

console.log("wrong");
alert("your answer is wrong ");
}
//question 3
let Q3 = prompt("Do you think i studied at Alhashemih university ?").toLowerCase();
if(Q3 == 'y' || Q3 == 'yes')
{
    console.log("wrong");
    alert("your answer is wrong ");
}else{
console.log("correct");
alert("your answer is correct ");
}
//question 4
let Q4 = prompt("did i graduated in 2019 ?").toLowerCase();
if(Q4 == 'y' || Q4 == 'yes')
{
    //console.log("correct");
    alert("your answer is correct ");
}else{

console.log("wrong");
alert("your answer is wrong ");
}
//question 5
let Q5 = prompt("Is my goal to be professional in computer security ?").toLowerCase();

if(Q5 == 'y' || Q5 == 'yes')
{
    console.log("wrong");
    alert("your answer is wrong ");
}else{
console.log("correct");
alert("your answer is correct ");
}