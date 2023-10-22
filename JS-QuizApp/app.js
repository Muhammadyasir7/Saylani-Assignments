var login= document.getElementById('login-btn');
var userName = "admin";
var passWord = "admin";
var optionSelect;
var index = 0;

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
        question: "Which of the following property is used to control the scrolling of an image in the background?",
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
]
function optSelect(e){
    optionSelect = e.value
}
function renderPage(){
    
    var testPage = document.getElementById('testPage')
    testPage.innerHTML =`
    <div class="div-main">
    <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">MCQ Quiz</a>
        <p id="timer"></p>
    </nav> <hr>
    <div>
        <h5><span>Q.</span>${arrObj[0].question}</h5>
        <div class="options">
            <option class="animate__animated animate__pulse" onclick="optSelect(this)" value="${arrObj[index].option1}">${arrObj[index].option1}</option>
            <option onclick="optSelect(this)" value="${arrObj[index].option2}">${arrObj[index].option2}</option>
            <option onclick="optSelect(this)" value="${arrObj[index].option3}">${arrObj[index].option3}</option>
            <option onclick="optSelect(this)" value="${arrObj[index].option4}">${arrObj[index].option4}</option>
        </div>
    </div>
    <hr>
    <div class="next-div"><button onclick="changeQs()" class="next">Next</button></div>
</div>

    `
    index++;
}

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
    renderPage()
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'User Name or password is wrong!',
          })
          
    }
}



function changeQs(){
    console.log(index)
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