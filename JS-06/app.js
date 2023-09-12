// =======================CHAPTER 35-38========================

// 1. Write a function that displays current date & time in your browser.
/*
function currentDate(){
    var date = new Date()
    document.write(date)
    return date
}
currentDate();
*/

// 2. Write a function that takes first & last name and then it greets the user using his full name.
/*
function greeting(){
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your Last name");
    var fullName = firstName+lastName;
    alert("Hello "+ fullName)
    return fullName;
}
greeting();
*/

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
/*
function sumNum(){
    var sum1 = Number(prompt("Enter your first Number"))
    var sum2 = Number(prompt("Enter your Second Number"))
    var totalSum = sum1+sum2;
    // alert(totalSum)
    return totalSum;
}
console.log(sumNum());
*/

// 4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
/*
function calculate(){
    var value1 = Number (prompt("Enter your first number"))
    var value2 = Number (prompt("Enter your Second number"))
    var operator = prompt("Enter operator to +/-*");
    var totalNum;
    if(operator === "+"){
        totalNum = value1+value2;
    }
    else if(operator=== "-"){
        totalNum = value1-value2;
    }
    else if(operator=== "*"){
        totalNum = value1*value2;
    }
    else if(operator=== "/"){
        totalNum = value1/value2;
    }
    else{"Enter correct operator"};
    return totalNum;
}
console.log(calculate())
*/

// 5. Write a function that squares its argument.
// function sqr(num){
//     var sum =0;
//     for(i=1;i<=num;i+=1){
//         sum += i*i
//     }
//     document.write(sum)
//     return sum;
// }
// var num = Number(prompt("Enter the for it's square"))
// sqr(num)

// 6. Write a function that computes factorial of a number.
/*
function factorialNum(n){
    var factorial= 1;
    for(i=n;i>1;i--){
        factorial*= i;
        }
    return factorial
}
console.log(factorialNum(9))
*/

// 7. Write a function that take start and end number as inputs & display counting in your browser.
/*
function count(){
    if(startNum < endNum){
    for(var i= startNum; i <= endNum;i++){
        document.write(i+",")
    }}
}
var startNum = Number(prompt("Enter first number to start counting"));
var endNum = Number(prompt("Enter end number to end counting"));
count();
*/

// 8. Write a nested function that computes hypotenuse of a right angle triangle. Hypotenuse2 = Base2 + Perpendicular2

// 9. Write a function that calculates the area of a rectangle.
/*
function areaOfRectangle(w,h){
    var area = w*h;
    return area
}
var w = 10;
console.log(areaOfRectangle(w,5))
*/

// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
/*
function isPalindrome(){
    var inputWord = "";
    for (var i=palindromeWord.length -1;i>=0;i--){
        inputWord += palindromeWord[i]
    }if(palindromeWord == inputWord){
        console.log("It is palindrome")
    }else{
        console.log("It is not palindrome")
    }
    return palindromeWord;
}
var palindromeWord = prompt("Check wheather it is palindrome or not");
isPalindrome()

*/
// 11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

