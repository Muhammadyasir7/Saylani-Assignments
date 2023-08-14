// ====================== ASSIGNMENT CHAPTER 6-9 ==========================

// ====== QUESTION 01. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:


/* var a = +prompt("Enter a number")
document.write("Result <br /> The value of a is: "+ a + "<hr />")

var message = "Now the value of a is: ";

document.write("The Value of ++a is: "+ ++a + "<br />"+ message + a +"<hr />");


document.write("The Value of a++ is: "+ a++ + "<br />"+ message + a +"<hr />")

document.write("The Value of --a is: "+ --a + "<br />"+ message + a +"<hr />")

document.write("The Value of a-- is: "+ a-- + "<br />"+ message + a +"<hr />") */

// ====== QUESTION 02. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// ANSWER

// var a = 2, b= 1;
// var result = --a - --b + ++b + b--;

// document.write("a is: "+ a + "<br />");
// document.write("b is: "+ b+ "<br />");
// document.write("Result is: "+ result+ "<br />");


/*--a; //a=1  in this Step the value a will be decrese by 1 and then display and save it's new value;
--a - --b; //a=1 and b=0 (So 1-0 =1) in this Step the value b will be decrese by 1 and then display and save it's new value and minus with 1st value;
--a - --b + ++b //a=1, b=0 and ++b = 1 (So 1-0 + 1 =2) in this Step the value b will be increase by 1 and then display and save it's new value and plus with 1st and second value;
--a - --b + ++b + b-- //a=1, b=0 , ++b = 1 and b-- =1(So 1-0 + 1 +1 =3) in this Step the value b will be disply and after that decrease by 1 and then save it's new value b;
*/

//======== 3. Write a program that takes input a name from user & greet the user.=========

// var greeting = prompt("What is your good name");

// alert("Hi ! " + greeting + " Have a nice day")

/*======= 05 Write a program to take input a number from user & display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5 should be displayed by default.*/

// var num = +prompt("Enter a number pls")

// if (num === num){
// document.write(num+"X"+1+"="+ num*1 +"<br />"
// +num+"X"+2+"="+ num*2 +"<br />"
// +num+"X"+3+"="+ num*3 +"<br />"
// +num+"X"+4+"="+ num*4 +"<br />"
// +num+"X"+5+"="+ num*5 +"<br />"
// +num+"X"+6+"="+ num*6 +"<br />"
// +num+"X"+7+"="+ num*7 +"<br />"
// +num+"X"+8+"="+ num*8 +"<br />"
// +num+"X"+9+"="+ num*9 +"<br />"
// +num+"X"+10+"="+ num*10 +"<br />")}

// else{
//     var num = 5;
//     document.write(num+"X"+1+"="+ num*1 +"<br />"
//     +num+"X"+2+"="+ num*2 +"<br />"
//     +num+"X"+3+"="+ num*3 +"<br />"
//     +num+"X"+4+"="+ num*4 +"<br />"
//     +num+"X"+5+"="+ num*5 +"<br />"
//     +num+"X"+6+"="+ num*6 +"<br />"
//     +num+"X"+7+"="+ num*7 +"<br />"
//     +num+"X"+8+"="+ num*8 +"<br />"
//     +num+"X"+9+"="+ num*9 +"<br />"
//     +num+"X"+10+"="+ num*10 +"<br />")
// }

/* ===== 6. Take
    a) Take three subjects name from user and store them in 3
    different variables.
    b) Total marks for each subject is 100, store it in another
    variable.
    c) Take obtained marks for first subject from user and
    stored it in different variable.
    d) Take obtained marks for remaining 2 subjects from user
    and store them in variables.
    e) Now calculate total marks and percentage and show the
    result in browser like this.(Hint: user table)
*/
// var sub_1 = prompt("Enter your first Subject");
// var sub_2 = prompt("Enter your Second Subject");
// var sub_3 = prompt("Enter your Third Subject");
// var totalMarks = 100;
// var totalMarksAllSubject= 100*3;
// var obtainMarksSub_1 = +prompt("Enter your first Subject Marks");
// var obtainMarksSub_2 = +prompt("Enter your Second Subject Marks");
// var obtainMarksSub_3 = +prompt("Enter your Third Subject Marks");
// totalObtainMarks = obtainMarksSub_1+obtainMarksSub_2+obtainMarksSub_3;

// var percentageOfFistSubject = obtainMarksSub_1 *100 /totalMarks;
// var percentageOfSecondSubject = obtainMarksSub_2 *100 /totalMarks;
// var percentageOfThirdSubject = obtainMarksSub_3 *100 /totalMarks;

// var overAllPercentage = totalObtainMarks *100 /totalMarksAllSubject;


// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr> <br /><tr><td>"+sub_1+"</td> <td>"+ totalMarks+"</td><td>"+ obtainMarksSub_1+"</td><td>"+ percentageOfFistSubject+"% </td>"+"</tr>"
// +"<tr><td>"+sub_2+"</td> <td>"+ totalMarks+"</td><td>"+ obtainMarksSub_2+"</td><td>"+ percentageOfSecondSubject+"% </td>"+"</tr>"+
// "<tr><td>"+sub_3+"</td> <td>"+ totalMarks+"</td><td>"+ obtainMarksSub_3+"</td><td>"+ percentageOfThirdSubject+"% </td>"+"</tr>"+
// "<tr><th></th><th>"+ totalMarksAllSubject+"</th><th>"+ totalObtainMarks+"</th><th>"+ overAllPercentage+"% </th>"+"</tr></table>")



// ====================== ASSIGNMENT CHAPTER 9-11 ==========================

//1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this:“Welcome to city of lights”

// var city = prompt("Where do you live?")
// if(city === "karachi"){
//     alert("Welcome to city of lights")
// }else(
//     alert("Welcome!")
// )

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Tell us your Gender");
// var message = "";

// if (gender === "male"){
//     message = "Good Morning Sir";
// }
// if(gender === "female"){
//     message = "Good Morning Ma'am"
// }
// alert(message);

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var signalColor = prompt("Tell us Road Traffic Signal Color");
// var signal = "";

// if (signalColor === "red"){
//     signal = "Must Stop";
// }
// else if(signalColor === "yellow"){
//     signal = "Ready to move"
// }
// else if(signalColor === "green"){
//     signal = "Move now"
// }
// alert(signal);

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Fuel Remaining in Your Tank in Litres");
// if (fuel< 0.25){
//     alert("Please refill the fuel in your car")
// }

// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }

// ====QUESTION 6=======

// var obatinMarks1 = +prompt("Enter your first subject Marks")
// var obatinMarks2 = +prompt("Enter your Second subject Marks")
// var obatinMarks3 = +prompt("Enter your Third subject Marks")
// var totalMarks = +prompt("Enter Total Marks")
// var totalMarksObtained = obatinMarks1+obatinMarks2+obatinMarks3;
// var totalPercentage = totalMarksObtained*100 / totalMarks;
// message = "";
// if(totalPercentage >= 80){
//     document.write("<h1>Marks Sheet</h1> <p>Total Marks : "+totalMarks+"</p>"+
//     "<p>Marks Obtained : "+totalMarksObtained+"</p>"+
//     "<p>Percentage : "+totalPercentage+"%</p>"+
//     "<p>Grade: A-one</p><p>Remarks : Excellent</p>") 
// }else if (totalPercentage >= 70){
//     document.write("<h1>Marks Sheet</h1> <p>Total Marks : "+totalMarks+"</p>"+
//     "<p>Marks Obtained : "+totalMarksObtained+"</p>"+
//     "<p>Percentage : "+totalPercentage+"%</p>"+
//     "<p>Grade: A</p><p>Remarks : Good</p>") 
// }else if (totalPercentage >= 60){
//     document.write("<h1>Marks Sheet</h1> <p>Total Marks : "+totalMarks+"</p>"+
//     "<p>Marks Obtained : "+totalMarksObtained+"</p>"+
//     "<p>Percentage : "+totalPercentage+"%</p>"+
//     "<p>Grade: B</p><p>Remarks : You need to Improve</p>") 
// }
// else if (totalPercentage < 60){
//     document.write("<h1>Marks Sheet</h1> <p>Total Marks : "+totalMarks+"</p>"+
//     "<p>Marks Obtained : "+totalMarksObtained+"</p>"+
//     "<p>Percentage : "+totalPercentage+"%</p>"+
//     "<p>Grade: Fail</p><p>Remarks : Sorry</p>") 
// }else{
//     alert("Incorrect Information given")
// }

// =====QUESTION 7=========

// var num = 7;
// var input = +prompt("Guess a number between 1 to 10");
// if(num === input){
//     alert("Bingo! Correct answer")
// }else if (num < ++input){
//     alert("Close enough to the correct answer.")
// }else{
//     alert("Try Again")
// }

// =====QUESTION 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num =9;
// var answer = +prompt("Enter your number to check divisible by 3");
// var remainder = num % answer

// if ((remainder === 0)){
//     alert("Number is divisible by 3")
// }
// else {
//     alert("Number is not visible by num")
// }

// QUESTION 9. Write a program that checks whether the given input is an even number or an odd number.

// var inputNum = +prompt("Enter your number to check it's even or odd");
// inputRemainder = inputNum % 2;

// if (inputRemainder === 0){
//     alert("It's even number")
// }else{
//     alert("It's an odd number")
// }

// ======= QUESTION 10.

// var temperature = +prompt("Enter Temperature in your area");

// if (temperature >40){
//     alert("It is too hot outside")
// }
// else if (temperature >30){
//     alert("The Weather today is Normal.")
// }
// else if (temperature >20){
//     alert("Today’s Weather is cool.")
// }
// else if (temperature >10){
//     alert("OMG! Today’s weather is so Cool.")
// }
// else{
//     alert("Enter correct temperature")
// }

// ===========  QUESTION 11

/* var num1 = +prompt("Enter your first number");
var operator = prompt("Type your operation to perform")
var num2 = +prompt("Enter your Second number");
var totalAnswer = "";

if (operator === "+"){
    totalAnswer = num1 +num2
}
else if(operator === "-"){
    totalAnswer = num1 - num2
}
else if(operator === "*"){
    totalAnswer = num1 * num2
}
else if(operator === "/"){
    totalAnswer = num1 / num2
}
else if(operator === "%"){
    totalAnswer = num1 % num2
}
alert(totalAnswer)
*/

// ====================== ASSIGNMENT CHAPTER 12-13 ==========================

// =====QUESTION 01 =======

/*var inputChar = prompt("Enter any character, alphabet or number in Uppercase or Lowercase");

if(inputChar >= 'A' && inputChar <= 'Z'){
    alert("Your character is in Uppercase")
}
else if (inputChar >= 'a' && inputChar <= 'z'){
    alert("Your character is in Lowercase")
}else(
    alert("It's a number")
)*/

// =====QUESTION 02 Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

// var numOne = +prompt("Enter first number")
// var numTwo = +prompt("Enter Second number")

// if(numOne > numTwo){
//     alert("1st Integar was greater "+ numOne)
// }
// else if (numOne < numTwo){
//     alert("2nd Integar was greater "+ numTwo)
// }
// else if( numOne == numTwo){
//     alert ("Integars are equal")
// }
// else{
//     alert("Type numbers only")
// }

// ============ QUESTION 03. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var inputNum = +prompt("Enter an integar positive, negative or zero to check")

// if(inputNum > 0){
//     alert("Your Number is Positive Integar")
// }
// else if(inputNum < 0){
//     alert("Your Number is Negative Integar")
// }
// else if (inputNum === 0){
//     alert("Your Number is 0")
// }
// else{
//     alert("Type numbers only")
// }

// ===========QUESTION 04 Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise
/*
var vowel = prompt("Enter an alphabet to check it's a vowel or not !")

if(vowel === "a" ||vowel === "e"||vowel ==="i"||vowel === "o"||vowel ==="u"){
    alert ("True "+vowel + " is a vowel")
}else{
    alert("False "+ vowel+ " is not a vowel")
}*/

// ==========QUESTION 05 =====================

/*var password = prompt("Enter your password to save");
var inputPassword = prompt ("Enter your password to Login.");

if(inputPassword === ""){
    alert("Please enter your password")
}
else if(password === inputPassword){
    alert("Correct! The password you entered matches the original password.")
}
else{
    alert("Incorrect Password")
}*/

// ==========QUESTION 06 =====================

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";}
// else{
// greeting = "Good evening";
// }

// ==========QUESTION 07 =====================

// var time = +prompt("Enter time in 24hrs format like 1700");

// if(time >= "0000" && time < 1200){
//     alert ("Good Morning")
// }
// else if (time >= 1200 && time < 1700){
//     alert ("Good Afternoon")
// }
// else if (time >= 1700 && time < 2100){
//     alert ("Good Evening")
// }
// else if (time >= 2100 && time < 2359){
//     alert ("Good Night")
// }
// else{
//     alert("Enter 4 Integars only")
// }
