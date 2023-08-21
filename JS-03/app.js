// ========================== CHAPTER 14-16 =================================

// Q :1. Declare an empty array using JS literal notation to store student names in future.

// var studentName = [];


// Q 2. Declare an empty array using JS object notation to store student names in future.

// var students = new Array();

// Q3. Declare and initialize a strings array.

// var myArr = ["Myself Muhammad Yasir"];

// Q4. Declare and initialize a numbers array.

// var count = [22]

// Q4. Declare and initialize a boolean array.

// var arr = [true,false];

// 6. Declare and initialize a mixed array.

//var mixArr = ["Muhammad Yasir", 27, true];

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

//var eduQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];

//document.write("<h1>Qualifications</h1> <h3>1)"+eduQualification[0]+"</h3><h3>2)"+eduQualification[1]+"</h3><h3>3)"+eduQualification[2]+"</h3><h3>4)"+eduQualification[3]+"</h3><h3>5)"+eduQualification[4]+"</h3><h3>6)"+eduQualification[5]+"</h3><h3>7)"+eduQualification[6]+"</h3><h3>8)"+eduQualification[7]+"</h3>")


// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:

/*var student1 = prompt("Enter student 1 name");
var student2 = prompt("Enter student 2 name");
var student3 = prompt("Enter student 3 name");

var studentsName =[student1Score,student2Score,student3Score]

var student1Score = +prompt("Enter student 1 score out of 500 Marks");
var student2Score = +prompt("Enter student 2 score out of 500 Marks");
var student3Score = +prompt("Enter student 3 score out of 500 Marks");

var totalMarks = 500;

var studentOnePercentage = student1Score/500 *100;
var studentTwoPercentage = student2Score/500 *100;
var studentThreePercentage = student3Score/500 *100;

if(student1Score <= totalMarks && student1Score <= totalMarks && student1Score <= totalMarks){
document.write("<h2>Score of "+student1+" is "+ student1Score+". Percentage: "+studentOnePercentage+"% </h2>"+
"<h2>Score of "+student2+" is "+ student2Score+". Percentage: "+studentTwoPercentage+"% </h2>"+
"<h2>Score of "+student3+" is "+ student3Score+". Percentage: "+studentThreePercentage+"% </h2>"
)}
else{
    alert("Enter less than 500 numbers number")
}
*/

// =======Question 09=======

/*var colors = ["Red","Blue","White","Black"]
alert(colors);

var startColor = prompt("Enter any color you want to add in the start.")
colors.unshift(startColor);
alert (colors)

var endColor = prompt("Enter any color you want to add in the last array.")
colors.push(endColor);
alert (colors)

var startColor1 = prompt("Enter any color you want to add in the start of array.")
var startColor2 = prompt("Enter any color you want to add in the start of array.")

colors.unshift(startColor1,startColor2);
alert (colors)

colors.pop();
alert(colors);

colors.shift();
alert(colors);

var newColor= prompt("Enter any color you want to add.")
var newColorPosition= +prompt("Enter any position/index you want to add.")

-------------Continued--------------
*/
// Q 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
/*
var score1 = +prompt("Enter your first subject Score");
var score2 = +prompt("Enter your Secont subject Score");
var score3 = +prompt("Enter your Third subject Score");
var score4 = +prompt("Enter your Fourth subject Score");

var studentScore =[score1,score2,score3,score4]
document.write("<h2>"+studentScore+"</h2>")

studentScore.sort(function(a, b){return a-b});
alert(studentScore)
-------------Continued--------------
*/

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
/*
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selectedCities = ["Islamabad","Quetta"];
var sliceValue=cities.slice(0,2)
var sliceValue2=cities.slice(4)

selectedCities.unshift(sliceValue[0],sliceValue[1])
selectedCities.push(sliceValue2[0])

document.write("<h2>"+cities+<"/h2">)
document.write("<h2>"+selectedCities+<"/h2">)
*/

// 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

/*
var arr = ["This","is","my","cat"]
document.write(arr)
var stringValue= arr.join(" ")
console.log(stringValue)
*/

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// Not Studied yet

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)

// Not Studied yet

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:

var phoneManufactures = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write("<select name='' id=''><option>"+phoneManufactures[0]+"</option><option>"+phoneManufactures[1]+"</option><option>"+phoneManufactures[2]+"</option><option>"+phoneManufactures[3]+"</option>+<option>"+phoneManufactures[4]+"</option><option>"+ phoneManufactures[5]+"</option>+</select>")