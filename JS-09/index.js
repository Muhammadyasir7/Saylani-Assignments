var backImg;
var textColor;  

function img2(src){
    backImg = src;
    var text = document.getElementById('text')
    text.style.backgroundImage = 'url(' + backImg + ')'
}

function textCol(){
    textColor = document.getElementById('text-col').value;
    document.getElementById('text').style.color = textColor;
    return textColor;
}

function post(){
    var sharedWith = document.getElementById('share').value;
    var text = document.getElementById('text');
    if(text.value === ""){
        sweetAlert("Oops...", "Something went wrong!", "error");
    }
    else{
        var main3 = document.getElementById('main3')
        main3.innerHTML += `
    <div class="main main1" id="main1">
        <h1>Your post</h1> <hr>
        <div class="main-profile">
            <img src="images/yasir-removebg-preview.png" width="50px" class="profile-pic">
            <span>
                <p>Muhammad Yasir</p>
                <p id="shared-with">${sharedWith}</p>
            </span>
        </div>
        <div class="textarea-inp" id="text-sec" style="background-image: url(${backImg});background-size:cover;background-repeat:no-repeat;color:${textColor}">${text.value}
        </div>
        <button onclick="returnBtn()" id="retrn">Delete this Post</button>
    </div>
    `
    text.value = ""
    document.getElementById('text').style.background = "none"
}
}

function returnBtn(){
    var returnId = document.getElementById('retrn')
    var noneBtn = document.getElementById('main2').style.display ="none";
    swal("Done!", "Deleted Successfully!", "success")
    document.getElementById('text').value = ""
    return noneBtn
}