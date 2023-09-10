// ==================Chapter 26-30================

/*====Q1. Write a program that takes a positive integer from user & display the following in your browser.
    a. number
    b. round off value of the number
    c. floor value of the number
    d. ceil value of the number
*/

/*var userInput = parseFloat(prompt("Enter any number in points"));

document.write(userInput +"<br />")
document.write("Round off Value: " +Math.round(userInput) +"<br />")
document.write("Floor Value: "+ Math.floor(userInput) +"<br />")
document.write("Ceil Value: "+ Math.ceil(userInput) +"<br />")
*/

/* =====Q2.Write a program that takes a negative floating point number from user & display the following in your browser.
    a. number
    b. round off value of the number
    c. floor value of the number
    d. ceil value of the number
*/
/*var userInput = parseFloat(prompt("Enter any negative floating number in points"));

document.write(userInput +"<br />")
document.write("Round off Value of the number: " +Math.round(userInput) +"<br />")
document.write("Floor Value of the number: "+ Math.floor(userInput) +"<br />")
document.write("Ceil Value of the number: "+ Math.ceil(userInput) +"<br />")
*/

/* 3. Write a program that displays the absolute value of a number. E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var absNum = parseFloat(prompt("Enter any number to check absoulute number."))

document.write("The absolute value of "+absNum+" is "+Math.abs(absNum)) */

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

// var num = 6;
// for (var i = 1; i <= 2 ;i++){
//     document.write("random dice Value: "+Math.ceil(Math.random()*6)+"<br />")
// }

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

/* var num = Math.ceil(Math.random()*2);

if(num == 1){
    document.write("<h1>"+num + "<br />random coin value: Heads")
}else{
    document.write("<h1>"+num + "<br />random coin value: Tails")
}
*/
// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var numInput = Math.round(Math.random()*100)
// document.write("<h1>random number between 1 and 100: " + numInput)

/*7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.Possible user inputs can be:
    a. 50
    b. 50kgs
    c. 50.2kgs
    d. 50.2kilograms
*/

// var userInput = parseFloat(prompt("Enter your weight in kilograms"));
// document.write("The weight of user is "+userInput+" kilograms")

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var secretNum = Math.ceil(Math.random()*10);
// var userNum = Number(prompt("Enter a number between 1 and 10"));

// if(secretNum == userNum){
//     alert("Congratulations ! You guessed right")
// }else{
//     alert("Try Again!")
// }

// =====================CHAPTER 31-34=================================

// 1. Write a program that displays current date and time in your browser.

// var date = new Date();
// console.log(date)

// 2. Write a program that alerts the current month in words.For example December.

// var date = new Date();
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// document.write("Current Month: "+months[date.getMonth()])

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var date = new Date();
// var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// document.write("Today is "+days[date.getDay()])

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.
/*
var date = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]

if(days[date.getDay()] === "Sun" ||days[date.getDay()] === "Sat"){
    document.write("It's Fun day.")
}else{
    document.write(days[date.getDay()])
}
*/

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.
/*
var date = new Date();
if(date.getDay() < 15){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month")
}
*/
// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var minMid = new Date();
// document.write("Elapsed milliseconds since January 1, 1970: "+minMid.getTime()+"<br />")
// document.write("Elapsed minutes since January 1, 1970: "+(minMid.getTime()/1000)/60)

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.
/*
var date = new Date();

if(date.getHours() < 12){
document.write("It's AM")
}
else{
document.write("It's PM")
}
*/

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

// var laterDate = new Date("12/31/2023");

// document.write("Later Date: "+laterDate)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var ramdanDate = new Date("June 18, 2015");
// var seconds = ramdanDate.getTime();
// var date = new Date();

// var milSecondReamaining = date.getTime() - seconds
// var days = (milSecondReamaining / 1000)/60/60/24
// document.write(Math.round(days)+"days have passed since 1st Ramdan, 2015")

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.
/*
var date = new Date("Jan/1/2015");
var secDate = (((date.getTime()/1000)/60))
var newDate= new Date()
var secNewDate = newDate.getTime()/1000/60

document.write("On refrence date "+newDate+", <br />"+Math.round(secNewDate - secDate)+"seconds had passed since beginning of 2015")
*/

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.
/*
var date = new Date();
var newDate = date.getHours()+1
var setDate = new Date(date.setHours(newDate))
document.write("Current Date: "+ setDate);
var currentDate = new Date();
document.write("<br />"+newDate+" hour ago "+ currentDate);
*/


// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
/*
var date = new Date();
var centuryMonth = date.getMonth();
var centuryDay = date.getDate();
var centuryYear = date.getFullYear() -100;
var centuryDate = new Date(centuryMonth+1 +'/'+ centuryDay+'/'+centuryYear);

document.write("Current Date: "+date+"<br /> 100 years back, it was"+centuryDate)
*/

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.
/*
var userDob = Number(prompt("Enter your age."));
var date = new Date();
var year = date.getFullYear() - userDob

document.write("Your age is "+ userDob+"<br />")
document.write("Your birth year is "+ year+"<br />")
*/

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
/*
var date = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var numOfUnits = Number(prompt("Enter your units of this month"));
var chargesPerUnit = 16;
var lateCharges = 350;
var netAmount = numOfUnits * chargesPerUnit
var grossAmount = netAmount + lateCharges

document.write("<h1>K-Electric Bill</h1>")
document.write("<h4>Customer name: ABC Customer </h4>")
document.write("<h4>Month:"+months[date.getMonth()]+" </h4>");
document.write("<h4>Number of Units: "+numOfUnits+"</h4>");
document.write("<h4>Charges Per Unit: "+chargesPerUnit+"</h4>");

document.write("<h4>Net Amount Payable (within Due Date): "+netAmount+"</h4> ");
document.write("<h4>Gross Amount Payable (after Due Date): "+grossAmount+"</h4>");
*/






