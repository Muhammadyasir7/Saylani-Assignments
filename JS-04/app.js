//================== Chapter 17-20 Assignments ==================

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// var arr = [[],[]];

// 2. Declare and initialize a multidimensional array representing the following matrix:

/* var arr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]]
document.write(arr[0]+"<br />"+ arr[1]+"<br />"+arr[2]); */

// 3. Write a program to print numeric counting from 1 to 10.

/*for (var i=1; i<11;i++){
    document.write(i+"<br />")
}*/

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

/*var table = +prompt("Enter a number to show its multiplication table");
var lengthOfMultiplication = +prompt("Enter length multiplication table");

for (var i= 1; i <= lengthOfMultiplication; i++){
    document.write(table+" X "+i+"="+table*i+"<br />")
}*/

// 5. Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”,“strawberry”]

/* var fruits = ["apple","banana","mango","orange","strawberry"];
for (var i =0; i< fruits.length;i++){
    document.write(fruits[i]+"<br />")
}
for(var i=0;i<fruits.length;i++){
    document.write("Element at index "+i+" is "+fruits[i]+"<br />")
} */

// Generate the following series in your browser. See example output.
/*
document.write("<h1>Counting</h1>")

for (var i = 1; i< 16;i++){
    document.write(i+",")
}
document.write("<br /> <h1>Reverse Counting</h1>")
for (var i=10; i>0;i--){
    document.write(i,",")
}

document.write("<br /> <h1>Even</h1>")

for (var i=1; i<=20;i++){
    if(i%2 == 0){
        document.write(i+",")
    }
}
document.write("<br /> <h1>Odd</h1>")

for (var i=1; i<=20;i++){
    if(i%2 == 1){
        document.write(i+",")
    }
}
document.write("<br /> <h1>Even</h1>")

for (var i=1; i<=20;i++){
    if(i%2 == 0){
        document.write(i+"k,")
    }
}
*/

// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:
/*
var bakeryItem = ["cake","apple","cookie","chips","patties"];
var inputSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
flag= " is not Available"

for(i=0;i <bakeryItem.length;i++){
    if(inputSearch==bakeryItem[i]){
        flag =" is Available"
        alert(bakeryItem[i]+flag+" at index "+i+" in our bakery")
    }
}
if(flag == " is not Available"){
    alert("We are sorry."+inputSearch+" is not available")
}*/

// Write a program to identify the largest number in the given array.A = [24, 53, 78, 91, 12].
/*
var newArr = [24, 53, 78, 91, 12];
var largestNum = [24]
document.write("Array items: "+newArr +"<br />")

for(i=0; i<newArr.length; i++){
    if(newArr[i] > largestNum){
        largestNum = newArr[i]
    }
}
document.write("The largest number is"+largestNum); */

// 9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
/*
var newArr = [24, 53, 78, 91, 12];
var smallestNum = [24]
document.write("Array items: "+newArr +"<br />")

for(i=0; i<newArr.length; i++){
    if(newArr[i] < smallestNum){
        smallestNum = newArr[i]
    }
}
document.write("The Smallest number is"+smallestNum); */

// 10. Write a program to print multiples of 5 ranging 1 to 100.


// ================= Chapter 21-25 =================

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name");

var fullName = firstName+" "+lastName;

alert("Hello "+ fullName)

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser;

var mobileModel = prompt("Enter your favorite mobile phone model");

var lengthOfModel= mobileModel.length;

alert(lengthOfModel)