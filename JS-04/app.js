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

//===== 10. Write a program to print multiples of 5 ranging 1 to 100.

// for(var i = 1; i <= 100;i++){
//     if(i%5 === 0){
//         document.write(i+",")
//     }
// }

// ================= Chapter 21-25 =================

//===== 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name");

// var fullName = firstName+" "+lastName;

// alert("Hello "+ fullName)

//====== 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser;

// var mobileModel = prompt("Enter your favorite mobile phone model");

// var lengthOfModel= mobileModel.length;

// document.write("My favorite phone is: "+mobileModel+"<br /> Length of string: "+lengthOfModel)

//===== 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser

// var word = "Pakistani";
// var indexOfWord= word.indexOf("n");

// document.write("String: "+ word+ "<br />")
// document.write("Index of 'n': "+ indexOfWord)

//===== 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var greeting = "Hello World";
// var greetingLastIndex = greeting.lastIndexOf("l");

// document.write("String: "+ greeting+ "<br />")
// document.write("Index of 'l': "+ greetingLastIndex)

// ======5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var country = "Pakistani";
// var countryChar = country.charAt(3);

// document.write("String: "+ country+ "<br />")
// document.write("Character at Index 3: "+ countryChar)

// =======6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name");

// var fullName = firstName.concat(" ",lastName);

// alert("Hello "+ fullName)

// ======7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad";
// city = city.replace("Hyder","Islam")
// alert(city)

// ====8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. var message = “Ali and Sami are best friends. They play cricket and football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// message = message.replace(/and/g,"&")
// alert(message)

//===== 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var num = "472"
// document.write("Value: ",num)
// document.write("<br />Type: ",typeof num);
// num = Number(num);
// document.write("<br />Value: ",num)
// document.write("<br />Type: ",typeof num);

// 10. Write a program that takes user input. Convert and show the input in capital letters.

// var text = prompt("Enter your hobbies to see in capital");
// document.write("User Input: "+text+ "<br />")
// text = text.toUpperCase();
// document.write("Upper case: "+text+ "<br />")

// =====11. Write a program that takes user input. Convert and show the input in title case.

// var text = prompt("Enter your hobbies to see in capital");
// document.write("User Input: "+text+ "<br />")
// var firstWord = text.slice(0,1);
// firstWord= firstWord.toUpperCase();
// var remainingWord = text.slice(1);
// remainingWord= remainingWord.toLowerCase();
// var newWord= firstWord.concat(remainingWord)
// document.write("Capital Word: "+newWord+ "<br />")

// ==== 12. Write a program that converts the variable num to string. var num = 35.36 ;Remove the dot to display “3536” display in your browser.

// var num= 35.36;
// document.write("Number: ",num+ "<br />")
// num = num.toString();
// num = num.replace(".","")
// document.write("Number: ",num+ "<br />")

// ====13. Write a program to take user input and store usernamein a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username.For character codes of [@ .

// var userName = prompt("Enter your User name.");
// for(var i=0; i < userName.length; i++){
//     if (userName[i] == "!"||userName[i]=="," ||userName[i]=="."||userName[i]=="@" ){
//         alert("Plese enter a valid username")
//     }
// }

//====14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var bakeryItem = ["cake","apple pie","cookie","chips", "patties"];
// var inputSearch = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
// flag= " is not Available"

// for(i=0;i <bakeryItem.length;i++){
//     if(inputSearch.toLowerCase() ==bakeryItem[i]){
//         flag =" is Available"
//         alert(bakeryItem[i]+flag+" at index "+i+" in our bakery")
//     }
// }
// if(flag == " is not Available"){
//     alert("We are sorry."+inputSearch+" is not available")
// }

// ====15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long If the password does not meet above requirements, prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

// var inputPassword = prompt("Enter your password to save.");
// var num1 = "1234567809";
// for (var i=0; i < inputPassword.length; i++){
//     if(inputPassword.length >= 6){
//         if(inputPassword[0] == num1.charAt(inputPassword[0] -1)){
//             alert("Password cannot begin with number")
//             break;
//         }
//     }else{
//         alert("Your password must have 6 characters")
//         break;
//     }
// }

// 16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; Display the elements of array in your browser.

var university = "University of Karachi";
var universityArr=[""]

for(var i =0; i< university.length;i++){
    universityArr += university[i].split(",")
    // console.log(universityArr)
}
console.log(universityArr)
