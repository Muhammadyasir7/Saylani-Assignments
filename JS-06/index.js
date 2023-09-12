// ========Chapter 35 Functions ============

// function abc(){
//     console.log("Hello!")
// }
// abc()
// abc()

// after function keyword it is called parameter and when we call the function we give argument

// function abc1(name){
//     console.log(name)
// }
// abc("Muhammad Yasir")
// // 
// function foo(a,b,c){
//     console.log(a,b,c)
// }
// foo("HEllo",212315,true)

// function abc2(a,b){
//     var output = a*b
//     // return output;
// }
// console.log(abc2(2,3))
// console.log(abc2(5,5))

// function calcTot(merchTot) {
// var orderTot;
// if (merchTot >= 100) {
// orderTot = merchTot;}
// else if (merchTot < 50.01) {orderTot = merchTot + 5;
// }
//  else {
// orderTot = merchTot + 5 + (.03 * (merchTot - 50)); }
//  return orderTot;}

//  var totalToCharge = calcTot(79.99);
//  console.log(totalToCharge)

function factorialNum(n){
    var factorial= 1;
    for(i=n;i>1;i--){
        factorial*= i;
        }
    return factorial
}
console.log(factorialNum(9))