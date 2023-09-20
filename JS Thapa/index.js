// var myName = "pravin"

// console.log(typeof(myName))

// console.log(3**2)

// var year = 2029;
  
// if(year%4 === 0 ){
//     console.log("This is Leap year")
// }else{
//     console.log("This is not Leap year")
// }


// var age = 15;
// console.log((age >= 19) ? "You can vote" : "Not eligible for vote");

// Table formula from For Loop

// for(var num=1; num<=10; num++){
//     var tableof = 47
//     console.log(tableof + " * " + num + " = " + tableof*num)
// }


// Table formula from While Loop

// var num = 1
// while(num<=10){
//     var tableof = 47;
//     console.log(tableof + " * " + num + " = " + tableof*num);
//     num++ ;
// }

 //Functoin
//  function sum(a,b){
//     var add = a+b;
//     console.log(add)
//  }
//  sum(20,40)

//Arrays
var chutiye = ['chhotu', 'kumar', 'daddu', 'paria', 'jene', 'pandit', 'laalu', 'saab ji', 'thombre']
// console.log(chutiye[3])
//For Loop
// for(var i=0; i<chutiye.length; i++){
//     console.log(chutiye[i])
// }

//For In Loop
for(let elements in chutiye){
    console.log(elements)
}

for(let elements of chutiye){
    console.log(elements)
}