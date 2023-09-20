'use strict';
// window.alert("You shall not pass");
// console.log("why don't you do it");
// document.write("lorem10")

var agentName = "Aayana George";

// console.log(agentName);
// console.log(agentName);
// console.log(agentName);

// agentName = "Ganesh Gaitonde";
// console.log(agentName);

// agentName ='My Name is Pravin. <br> I read in class 5th'
// console.log(agentName);

// let age = 30;
// let drink = age>= 5 ? "Coffee" : "milk";
// console.log(drink);

// let firstName = "787hgiuhbsjbiuy";
// console.log(firstName[14]);

// let candidate = "SC";
// let age = 20;

// if(candidate === "OBC" || age > 18)
// {
//     console.log("Eligible for reservation");
// }else{
//     console.log("Not Eligible");
// }

// var string = 'I\'m coming'
// var string1 = "I'm coming"
// var string3 = `I\'m not coming
// bacause people call me filthy`
// console.log(string3 + " trader")

// Nested If Else ----------
// let a = 120;

// if(a<30){
//     if(a%2==0){
//         document.write("number is divisible by 2")
//     }
//     else{
//         document.write("number is not divisible by 2")
//     }
// }
// else{
//     document.write("Invalid number")
// }

// Switch - to call up week days--------------------- 

// var week = 1
// switch(week){
//     case(1) : document.write("Monday");
//     break;
//     case(2) : document.write("Tuesday");
//     break;
//     case(3) : document.write("Wednesday");
//     break;
//     case(4) : document.write("Thursday");
//     break;
//     case(5) : document.write("Friday");
//     break;
//     case(6) : document.write("Saturday");
//     break;
//     case(7) : document.write("Sunday");
//     break;
//     default: document.write("Invalid Input");
// }

// Confirm box ------------------
//  var a = confirm("Do you like my Page User ?");
//  if(a){
//     alert("Thanks");
//  }else{
//     alert("Chal chal Nikal !");
//  } 
// (It will come out like pop up)

// Promt box --------------------
// let winningnumber = 65;
// let userGuess = prompt("Guess a number");

// if(userGuess == winningnumber){
//     document.write("Your guess is right")
// }else{
//     if(userGuess < winningnumber){
//         document.write("Too Low");
//     }else{
//         document.write("Too High");
//     }
// }
// (It will come out like pop up and you will enter the number insid that)

// Array ---------------------
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', '9'];
// const array3 = array1.concat(array2);
// document.write(array3);

// Push and Pop method in Array 
// Push 

// let fruits = ['Apple', 'mango', 'banana']
// document.write(fruits);
// fruits.push('Spoon & Salt');
// document.write(fruits);

// Loop - For Loop
// for(var i = 1; i<100; i++){
//     if(i%2==0){
//         document.write(i+ " Number is even <br>");
//     }
//     else{
//         document.write(i+ " Number is odd <br>");
//     }
// }

// Do While Loop
// let w = 5;

// while(w<=100){
//     if(w%5==0){
//         document.write(w +" Number is divisible by 5<br>");
//     }else{
//         document.write(w +" Number is not divisible by 5<br>");
//     }
//     w++;
// } 

// Prime Number
// var n = 10;
// x = 2;

// if (n===1){
//     document.write("False");
// }
// else if(n === 2){
//     document.write("True");
// }
// if(n % x==0){
//     document.write("Number is Even")
// }
// else{
//     document.write("Number is odd")
// }

// Table
// var list = ["Oil","Vegies","Rice","Daal"];

// for( var i = 0; i<list.length; i++){
//     document.write(list[i]+"<br>");
// }

// Multidimentional Array
// var emp = [
//     ["Arjun", "Karna", "Yudhistir", "Bheem"],
//     ["Seeta", "Karna", "Yudhistir", "Bheem"],
//     ["mandodari", "Karna", "Yudhistir", "Bheem"],
//     ["Tadka", "Karna", "Yudhistir", "Bheem"],
//     ["Shabri", "Karna", "Yudhistir", "Bheem"]
// ]

// for (var i = 0; i < emp.length; i++) {
//     for(var j=0; j<emp[i].length; j++){
//         document.write(emp[i][j]+"&nbsp")
//     }
//     document.write("<br>");
// }

// Multidimentional Array in table
// var emp = [
//     ["Arjun", "Karna", "Yudhistir", "Bheem"],
//     ["Seeta", "Karna", "Yudhistir", "Bheem"],
//     ["mandodari", "Karna", "Yudhistir", "Bheem"],
//     ["Tadka", "Karna", "Yudhistir", "Bheem"],
//     ["Shabri", "Karna", "Yudhistir", "Bheem"]
// ]
// document.write("<table border='1 px'>")
// for (var i = 0; i < emp.length; i++) {
//     document.write("<tr>");
//     for(var j=0; j<emp[i].length; j++){
//         document.write("<td>"+ emp[i][j]+"&nbsp"+"</td>");
//     }
//     document.write("<tr>");
// } 
// document.write("</table>")

// Functions -1
// function mycolor(C1, C2) {
//     for (var i = 0; i < C1.length; i++) {
//         if (C1[i] === C2) {
//             return i;
//         } else {
//             return "No match found Single hi rahoge";
//         }
//     }
// }
// var tgt = "Urfi Javed"
// var ind = ["Sakshi", "Reena", "Neha", "Komal"]
// var myind = mycolor(ind,tgt);
// document.write(myind);
// ------------------------------
// function in different syntax 
// function app(){

//     const myfunc = () =>{
//         console.log( "Hello World")
//     }

//     const adtwo = (num1, num2) => {
//         return num1 + num2;
//     }
     
//     const mul = (num1, num2) => num1*num2

//     myfunc();
//     console.log(adtwo(10,33));
//     console.log(mul(75,98));
// }
// app();
// -----------------------

// function percent(a,b){
//     return a*b/100;
// }
// document.write(percent(18000,2));

// ------------------------
// function codered(){
//     document.write("War begins");
// }
// codered();
// --------------------------------

// Object 
// const person = {
//     name : "Vinay",
//     age : 23,
//     rohan : 54,
//     hobbies: ["Singing", "Dancing", "Playing"],  
// }
// document.write(person.name+"<br>"+person.age+"<br>"+person.rohan+"<br>");

// document.write(person["name"]+"<br>")
// for( var i in person.hobbies){
//     document.write(i + " = " + person.hobbies[i]+"<br>");
// }
// ------------------------------------
// Function in object or Object inside a fx
// function personinfo(){
//     document.write(`person name is ${this.firstname} and age is ${this.age}`);
// }
// const person1 = {
//     firstname : "Aayana",
//     age : 23,
//     about : personinfo
// }
// person1.about();
// ------------------------------------
// Bind and apply method in Fx 
// function about(hobby, favmusic){
//     console.log(this.firstname, this.age, hobby, favmusic);
// }
// const user1 = {
//     firstname : "Aaina",
//     age : 24,
// }
// const user2 = {
//     firstname : "Alex",
//     age : 29,
// }
// ---------------------------
// Click Event with colours 





