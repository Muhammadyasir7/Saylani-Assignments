// ====================    Chapter 01 Assignment    =========================

// 1. Write a script to greet your website visitor using JS alert
// box.

// alert("Welcome! Hi there! Nice to see you.");

// 2.

// alert("Error! Please enter a valid password.");

// 3.

// alert("Welcome to JS Land... \nHappy Coding!");

//4 .

// alert("Welcome to JS Land...");
// alert("Happy Coding");

// 5.
// alert("Hello... I can run JS through my web browser's console.");

// ====================    Chapter 02 Assignment    =========================

// 1. Declare a variable called username.

// var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

// var myName = "Muhammad Yasir Hussain";

// 3. Write script to
//      a) Declare a JS variable, titled message.
//      b) Assign “Hello World” to variable message
//      c) Display the message in alert box.

// var message = "Hello World";
// alert(message);

// 4.

// var myName = "Yasir";
// var age = "27 years old";
// var job = "Certified Mobile Application Developer";

// alert(myName);
// alert(age);
// alert(job);

// 5.

// var food = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(food);

// 6.

// var email = "optimisticyasir@outlook.com";
// alert("My Email address is "+email)

// 7.

// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book "+ book)

// 8.

// document.write("Yah! I can write HTML content through JavaScript")

// 9.

// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬")

// ====================    Chapter 03 Assignment    =========================

// 01 .

// var age = 27;
// alert("I am "+age+" old");

// 02.

// var visited = 1;
// alert("You have visited this site "+ visited++ +" times")
// alert("You have visited this site "+ visited++ +" times")
// alert("You have visited this site "+ visited++ +" times")

// 03. 

// var birthYear = 1995;
// alert("My birth year is " + birthYear +"\nData type of my declared variable is number");

// 04.

    // var visitorName = prompt("Your Name");
    // var productTitle = prompt("Product Title");
    // var quantity = prompt("How many products you wants to order");
    // var store = "www.xyzClothing.com";

    // document.write(visitorName + " ordered "+quantity+"-"+ productTitle+" on "+ store);

// ====================    Chapter 04 Assignment    =========================

// 01 Declare 3 variables in one statement.

// var name =fullname=fullName;

// 2. Declare 5 legal & 5 illegal variable names.

// Legal Names Are:
// var name;
// var fullName;
// var full_name;
// var fullname1;
// var full_name1234;

// Illegal Names Are:
// var 1name;
// var full-Name;
// var @full_name;
// var delete;
// var "full_name1234";

// 3. Display this in your browser
    // a) A heading stating “Rules for naming JS variables”
    // b) Variable names can only contain ______, ______,
    // ______ and ______.
    // For example $my_1stVariable
    // c) Variables must begin with a ______, ______ or
    // _____. For example $name, _name or name
    // d) Variable names are case _________
    // e) Variable names should not be JS _________

// document.write("<h1>Rule for naming JS variables</h1>");

// document.write("<p>Variable name can only contain letters, numbers,underscore and $. For example $my_1stVariable</p>")
// document.write("<p>Variables must begin with a letter , $ or _ . For example $name, _name or name</p>")
// document.write("<p>Variable names are case Sensitive</p>")
// document.write("<p>Vairales names should not be JS Keywords.</p>")

// ====================    Chapter 05 Assignment    =========================

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var a = parseInt(prompt("Enter the first number"));
// var b = parseInt(prompt("Enter the second number"));

// var c = a + b;
// document.write("Sum of "+a+" and "+b+" is "+ c); 

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// var a = parseInt(prompt("Enter the first number"));
// var b = parseInt(prompt("Enter the second number"));

// var c = a - b;
// document.write("Subtraction of "+a+" and "+b+" is "+ c); 

// var a = parseInt(prompt("Enter the first number"));
// var b = parseInt(prompt("Enter the second number"));

// var c = a * b;
// document.write("Multiplication of "+a+" and "+b+" is "+ c); 

// var a = parseInt(prompt("Enter the first number"));
// var b = parseInt(prompt("Enter the second number"));

// var c = a / b;
// document.write("Division of "+a+" and "+b+" is "+ c); 


// var a = parseInt(prompt("Enter the first number"));
// var b = parseInt(prompt("Enter the second number"));

// var c = a % b;
// document.write("Modulus of "+a+" and "+b+" is "+ c); 

// 3. Do the following using JS Mathematic Expressions
//     a. Declare a variable.
//     b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
//     c. Initialize the variable with some number.
//     d. Show the value of variable in your browser like “Initial value: 5”.
//     e. Increment the variable.
//     f. Show the value of variable in your browser like “Value after increment is: 6”.
//     g. Add 7 to the variable.
//     h. Show the value of variable in your browser like “Value after addition is: 13”.
//     i. Decrement the variable.
//     j. Show the value of variable in your browser like “Value after decrement is: 12”.
//     k. Show the remainder after dividing the variable’s value by 3.
//     l. Output : “The remainder is : 0”.

// var num;
// document.write("<p>Value after variable declaration is "+num +"</p>");
// num = 5;
// document.write("<p>Initial value: "+num +"</p>");
// num++;
// document.write("<p>Value after increament is "+num +"</p>");
// num = num +7;
// document.write("<p>Value after addition is is "+num +"</p>");
// num--;
// document.write("<p>Value after decreament is is "+num +"</p>");
// var num = num % 3;
// document.write("<p> The Remainder is "+num +"</p>");

//4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output:

// var movieTicket = 600;
// var total = movieTicket * 5;

// document.write("Total cost to buy 5 tickets to a movie is " +total+"PKR");

// 5. Write a script to display multiplication table of any number in your browser.

// var tableOf5 =5;
// document.write("<p> Table of 5 </p>")
// document.write("<p>"+tableOf5+"X"+1+"="+tableOf5*1)
// document.write("<p>"+tableOf5+"X"+2+"="+tableOf5*2)
// document.write("<p>"+tableOf5+"X"+3+"="+tableOf5*3)
// document.write("<p>"+tableOf5+"X"+4+"="+tableOf5*4)
// document.write("<p>"+tableOf5+"X"+5+"="+tableOf5*5)
// document.write("<p>"+tableOf5+"X"+6+"="+tableOf5*6)
// document.write("<p>"+tableOf5+"X"+7+"="+tableOf5*7)
// document.write("<p>"+tableOf5+"X"+8+"="+tableOf5*8)
// document.write("<p>"+tableOf5+"X"+9+"="+tableOf5*9)
// document.write("<p>"+tableOf5+"X"+10+"="+tableOf5*10)

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//     a. Store a Celsius temperature into a variable.
//     b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//     c. Now store a Fahrenheit temperature into a variable.
//     d. Convert it to Celsius & output “NNoF is NNoC”.

// var celsiusTemperature = 36;
// var fahrenheitTemperature = (celsiusTemperature*9/5)+32
// document.write(celsiusTemperature+"&degC is "+ fahrenheitTemperature+"&degF");

// var fahrenheitTemperature= 112;
// var fahrenheitIntoCelsius = (fahrenheitTemperature-32)*5/9;
// document.write("<p>"+fahrenheitTemperature+"&degF is "+ fahrenheitIntoCelsius+"&degC</p>");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
    // a. Price of item 1
    // b. Price of item 2
    // c. Ordered quantity of item 1
    // d. Ordered Quantity of item 2
    // e. Shipping charges

    // Compute the total cost & show the receipt in your browser.

// var itemPrice1= 550;
// var itemPrice2= 750;
// var quantityOfItem1= 5;
// var quantityOfItem2= 3;
// var shippingCharge = 100;
// var totalCost= (itemPrice1*quantityOfItem1)+(itemPrice2*quantityOfItem2)+shippingCharge;

// document.write("<h1>Shopping Cart</h1>")
// document.write("Price of item 1 is "+itemPrice1+"</br>")
// document.write("Ordered quantity of item 1 is "+quantityOfItem1+"</br>")
// document.write("Price of item 2 is "+itemPrice2+"</br>")
// document.write("Ordered quantity of item 2 is "+quantityOfItem2+"</br>")
// document.write("Shipping Charges is "+shippingCharge+"</br>")

// document.write("<h1>Total Cost of your order is "+totalCost+"</h1>")

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// var totalMarks = 980;
// var marksObtained = 804;

// var prcntge= (marksObtained/totalMarks)*100;

// document.write("<h1>Marks Sheet</h1>");
// document.write("<p>Total Marks: "+totalMarks+"</p>");
// document.write("<p>Marks Obtained: "+marksObtained+"</p>");
// document.write("<p>Percentage: "+prcntge+"%</p>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var dolarRate= 104.8
// var saudiRiyalRate= 28
// var dollarQuantity= 10
// var saudiRiyalQuantity= 25
// var totalAmount= (dolarRate*dollarQuantity)+(saudiRiyalRate*saudiRiyalQuantity)

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total Currency in PKR: " +totalAmount)

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
//     a. Add 5
//     b. Multiply by 10
//     c. Divide the result by 2
//     Perform all calculations in a single expression

// var sum= 15;
// var totalSum= ((sum+5)*10)/2

// document.write(totalSum)

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
//     a. Store the current year in a variable.
//     b. Store their birth year in a variable.
//     c. Calculate their 2 possible ages based on the stored
//     values.

//     Output them to the screen like so: “They are either NN or NN
//     years old”.

// var currentYear = 2023;
// var birthYear = 1992;
// var age = currentYear-birthYear;


// document.write("<h1>Age Calculator</h1>");
// document.write("<p> Current Year: " + currentYear + "</p>");
// document.write("<p> Birth Year: " + birthYear +"</p>");
// document.write("<p> Your age is: " + age +"</p>");

// 12. The Geometrizer: Calculate properties of a circle.
//     a. Store a radius into a variable.
//     b. Calculate the circumference based on the radius, and
//     output “The circumference is NN”.
//     (Hint : Circumference of a circle = 2 π r , π = 3.142)
//     Calculate the area based on the radius, and output “The
//     area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radiusOfCircle = 20;
// var circumference = (2*3.142)*radiusOfCircle;
// var areaOfRadius = 3.142*(radiusOfCircle**2)

// document.write("<h1>The Geometrizer</h1>");
// document.write("<p> Raidus of circle: "+radiusOfCircle+"</p>")
// document.write("<p>The Circumference is: "+circumference+"</p>")
// document.write("<p>The Area is: "+areaOfRadius+"</p>")

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
//     a. Store your favorite snack into a variable
//     b. Store your current age into a variable.
//     c. Store a maximum age into a variable.
//     d. Store an estimated amount per day (as a number).
//     e. Calculate how many would you eat total for the rest of
//     your life.
//     Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

var fvrtSnack = "chocolate";
var age = 15;
var maxAge = 65;
var estimatedAmount= 3;

var totalSnackNeed= (maxAge-age)*estimatedAmount;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p> Favourite Snack: "+fvrtSnack+"</p>")
document.write("<p> Current age: "+age+"</p>")
document.write("<p> Estimated Maximum Age: "+maxAge+"</p>")
document.write("<p> Amount of snacks per day: "+estimatedAmount+"</p>")

document.write("<p> You Will need "+totalSnackNeed+" Chocolate to last you until the ripe old age of 65</p>")
