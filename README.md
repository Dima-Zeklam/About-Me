# About-Me

I was Navigator : Dima zeklam .

I was Driver : Abdalrahman abu alata .


## our code .
 
 
let str=['my major is electrical engineering ?','"Do i like programming ?','Do you think i studied at Alhashemih university ?','did i graduated in 2019','Is my goal to be professional in computer security '];

let q1,q2,q3,q4,q5;
let arr=[q1,q2,q3,q4,q5];
let counter=0;
function questions (){

for(let i=0;i<arr.length;i++){
  arr[i]= prompt(str[i]);
  if(arr[i] =='y' || arr[i]=='yes' && i%2==0 ){
    
    alert("your answer is wrong ");
 }else if(arr[i] =='n' || arr[i]=='no' && i%2==0 ){
        counter++;
 alert("your answer is correct ");
  }else if(arr[i] =='y' || arr[i]=='yes' && i%2!=0 ){
    counter++;
    alert("your answer is correct ");
}else if(arr[i] =='n' || arr[i]=='no' && i%2==0 ){

 alert("your answer is wrong ");
}

}

}
questions();


let numb =8;
let x= 4;
function guessNum (){ 
for(let i=1;i<=4;i++){
    let input = Number(prompt('Try to guess the number and type it belwo,you have just ' + x + ' attempts'));
    if(input < numb){
        alert('Too low , try again');
        x--;
    }else if(input >numb)
    {
        alert('Too high, try again');
        x--;
    }else if(input === numb){
        counter++;
        alert('That is correct , good job ');
        break;
    }
}
}
guessNum();

alert('The correct answer is 8');



let n= 6;
let arrnum=[5,80,8]; 
function question7 (){
for(let y=1;y<=6;y++){
    
    let input2 = Number(prompt('Try to guess the any of the numbers and type it belwo,you have just' + n + ' attempts'));
    for(let z=0;z<arrnum.length;z++){
    if(input2 === arrnum[z]){
        counter++;
        alert('That is correct , good job ');
      y=7;
      break;
    } 
       
   }  
   if(y == 7 ){
   break;}
       alert('try again ');
        n--;
   
    }
}

question7();

    alert('The correct answers are '+ arrnum); 
    alert("the correct answers is ( "+counter+'/7 )');

    alert("Hello " + firstName + " thank you for visiting this site , see you again ^_^ " );
