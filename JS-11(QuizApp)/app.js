var login= document.getElementById('login-btn');
var userName = "admin";
var passWord = "admin";
var index = 0;
var scrore = 0;

function loginPage(){
    var userInput = document.getElementById('userInput').value
    var userPass = document.getElementById('userPass').value

    if(userName === userInput.trim() && passWord === userPass.trim()){
    Swal.fire(
        'Done!',
        'Login Successfully',
        'success'
    )
    
    var main= document.getElementById('main2');
    main.style.display = "none";
    var fistDiv = document.getElementById('firstDiv');
    fistDiv.style.display = "block";
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User Name or password is wrong!',
          })
          
    }
}


function showPass(){
  Swal.fire('Username : admin',
  'Password : admin')
}

var arrObj = [
    {
        question: "Which of the following selector matches all elements of a type?",
        option1: "The Type Selector",
        option2: "The Universal Selector",
        option3: "The Descendant Selector",
        option4: "The Class Selector",
        answer: "The Type Selector"
    },
    {
        question: "Which of the following selector selects all paragraph elements whose lang attribute contains values that are exactly 'fr', or begin with 'fr-'?",
        option1: "p[lang]",
        option2: "p[lang='fr']",
        option3: "p[lang~='fr']",
        option4: "p[lang|='fr']",
        answer: "p[lang|='fr']"
    },
    {
        question: "Which of the following defines a measurement in millimeters?",
        option1: "in",
        option2: "mm",
        option3: "pt",
        option4: "pt",
        answer: "mm"
    },
    {
        question: "Which of the following is correct about RGB Values format of CSS colors?",
        option1: "This color value is specified using the rgb( ) property.",
        option2: "This property takes three values, one each for red, green, and blue.",
        option3: "The value can be an integer between 0 and 255 or a percentage.",
        option4: "All of the above.",
        answer: "All of the above."
    },
    {
        question: "Which of the following property is used to control the scrolling of an image in the background?",
        option1: "background-attachment",
        option2: "background",
        option3: "background-repeat",
        option4: "background-position",
        answer: "background-attachment"
    },
    {
        question: "Which of the following property is used to underline, overline, and strikethrough text?",
        option1: "text-indent",
        option2: "text-align",
        option3: "text-decoration",
        option4: "text-transform",
        answer: "text-decoration"
    },
    {
        question: "Which of the following property specifies the right margin of an element?",
        option1: "margin-right",
        option2: "margin-bottom",
        option3: "margin-top",
        option4: "margin-left",
        answer: "margin-right"
    },
    {
        question: "Which of the following property of a anchor element signifies an element that currently has the user's mouse pointer hovering over it?",
        option1: ":link",
        option2: ":active",
        option3: ":visited",
        option4: ":hover",
        answer: ":hover"
    },
    {
        question: "Which of the following property of a table element specifies whether the browser should control the appearance of the adjacent borders that touch each other or whether each cell should maintain its style?",
        option1: "border-collapse",
        option2: "caption-side",
        option3: "border-spacing",
        option4: "empty-cells",
        answer: "border-collapse"
    },
    {
        question: "Which of the following property changes the width of top border?",
        option1: "border-bottom-width",
        option2: "border-top-width",
        option3: "border-left-width",
        option4: "border-right-width",
        answer: "border-top-width"
    },
]

function testStart(){
    var fistDiv = document.getElementById('firstDiv');
    fistDiv.style.display = "none";
    var nextDiv = document.getElementById('nextDiv');
    nextDiv.style.display = "block";
    renderPage()
}

function renderPage(){
    var testPage = document.getElementById('testPage');
    testPage.style.display = "block";
    var options = document.getElementsByName('option')

    testPage.innerHTML =`
    <div class="div-main">
        <nav class="navbar navbar-light bg-light justify-content-between">
            <a class="navbar-brand">MCQ Quiz</a>
            <p id="timer"></p>
        </nav> <hr>
    <div>
        <h5><span>Q.${index +1} </span>${arrObj[index].question}</h5>
        <div class="options">
            <div >
                <label class="input-rad" for=""><input type="radio" class="input-radio" name="option" value="${arrObj[index].option1}" id="">${arrObj[index].option1}</label>
            </div>
            <div >
                <label class="input-rad" for=""><input type="radio" class="input-radio" name="option" value="${arrObj[index].option2}" id="">${arrObj[index].option2}</label>
            </div>
            <div >
                <label class="input-rad" for=""><input type="radio" class="input-radio" name="option" value="${arrObj[index].option3}" id="">${arrObj[index].option3}</label>
            </div>    
            <div >
                <label class="input-rad" for=""><input type="radio" class="input-radio" name="option" value="${arrObj[index].option4}" id="">${arrObj[index].option4}</label>
            </div>
           
            <hr>
        </div>
    </div>
    </div>
    `
    for(var i =0; i < options.length; i++){
        if(options[i].checked){
            if(options[i].value == arrObj[index -1].answer){
                scrore++;
                console.log(scrore)
            }
        }
    }
    if(arrObj.length){
        index++;
    }else{
        alert("ends")
    }
}



// var sec= 10;
// var min = 1;
// function abc(){
//     var timers = document.getElementById("timer")
//     timers.innerHTML = min+":"+ (sec -= 1)
//     if(sec <1 && min <1){
//         resetTimer;
//     }
//     if(sec<1){
//         sec =10;
//         min--
//     }

// }
// var resetValue = setInterval(abc,1000);

// clearInterval(resetValue)