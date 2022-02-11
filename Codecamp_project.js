
// PROJECT-1 ===>


// // document.getElementById("count-el").innerText=5
// let countEl=document.getElementById("count-el");
// let saveEl=document.getElementById("save-btn");
// let count=0;
// function increment(){
//     count+=1;
//     countEl.innerText=count;
// }

// function save(){
//     let saved=count+" - ";
//     saveEl.textcontent=saved;
//     console.log(saved);
//     countEl.innerText=0;
//     count=0;
// }

// ----------------------------------------------------------------------------------------------------------------

// PROJECT-2 ===>



// let err=document.getElementById("error");
// function purchase(){
//     // console.log(err);
//     err.textContent="Something wnet wrong, please try again";
//     // console.log(err);
// }

// ----------------------------------------------------------------------------------------------------------------------

// project-3 ===>


// let num1=8;
// let num2=2;
// document.getElementById("num1-el").innerText=num1;
// document.getElementById("num2-el").innerText=num2;
// let result=document.getElementById("sum-el");
// let sum;
// function add(){
//     sum=num1+num2;
//     result.textContent="sum: "+sum;
// }
// function subtract(){
//     sum=num1-num2;
//     result.textContent="subtract: "+sum;
// }
// function divide(){
//     sum=num1/num2;
//     result.textContent="divide: "+sum;
// }
// function multiply(){
//    sum=num1*num2;
//    result.textContent="multiply: "+sum;
// }

// -----------------------------------------------------------------------------------------------------------------

// PROJECT-4 ===>


// 
// let firstCard=10;
// let secondCard=12;
// let sum = firstCard + secondCard;
// let hasBlackJack= false;
// let isAlive=true;
// let message="";
// let messageEl=document.getElementById("message-el");

// function startGame(){  
// if(sum<21){
//     message="Do you wnat to draw a new card!";
// }
//  else if(sum === 21){
//      message="Wohoo! you have got black jack";
//      hasBlackJack=true;
//  }
//  else if(sum>21){
//     message="you are out of the game!";
//     isAlive=false;
//  }
//  messageEl.textContent= message;
// }
// function newcard(){
//     console.log("Drawing a new card from the deck!")
// }

// ------------------------------------------------------------------------------------------------------------


// PROJECT-5 ===>

function age() {  
    var birthday_Date = document.getElementById('date').value;  
    var birthday_Month = document.getElementById('month').value;  
    var birthday_Year = document.getElementById('year').value;  
    var date = new Date();  
    var today_Date = date.getDate();  
    var today_Month = date.getMonth();  
    var today_Year = date.getFullYear();  
    if(birthday_Date>today_Date){
        
    }
    if(today_Month>birthday_Month){
        calculated_age = today_Year - birthday_Year;
    }
    else{
        claculated_age = today_Year - birthday_Month-1;
    }

      
    var d = today_Date - birthday_Date;  
    var m = today_Month - birthday_Month;  
    var y = today_Year - birthday_Year;  
    document.getElementById('age').innerHTML = 'Your Age is '+y+' Years '+m+' Months '+d+' Days';  
   }  