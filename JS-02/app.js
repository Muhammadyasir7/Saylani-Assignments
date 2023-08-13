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
var sub_1 = prompt("Enter your first Subject");
var sub_2 = prompt("Enter your Second Subject");
var sub_3 = prompt("Enter your Third Subject");
var totalMarks = 100;
var obtainMarksSub_1 = prompt("Enter your first Subject Marks");
var obtainMarksSub_2 = prompt("Enter your Second Subject Marks");
var obtainMarksSub_3 = prompt("Enter your Third Subject Marks");

document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr> <br /><tr><td>"+sub_1+"</td> <td>"+ totalMarks+"</td></td"+ obtainMarksSub_1+"</td>"+"</tr></table>")


