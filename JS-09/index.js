var backImg;

function img2(src){
    backImg = src;
    var text = document.getElementById('text')
    text.style.backgroundImage = 'url(' + backImg + ')'
}

function post(){
    var sharedWith = document.getElementById('share').value;
    var text = document.getElementById('text').value;
    if(text === ""){
        sweetAlert("Oops...", "Something went wrong!", "error");
    }
    else{
    document.getElementById('main2').style.display ="block";
    document.getElementById('shared-with').innerHTML =sharedWith;
    document.getElementById('text-sec').innerHTML = text;

    var textDiv = document.getElementById('text-sec');
    textDiv.style.backgroundImage= 'url(' + backImg + ')'
    textDiv.style.backgroundRepeat = 'no-repeat';
    textDiv.style.backgroundSize = 'cover';
;
}
}
function returnBtn(){
    var returnId = document.getElementById('retrn')
    var noneBtn = document.getElementById('main2').style.display ="none";
    swal("Done!", "Deleted Successfully!", "success")
    document.getElementById('text').value = ""
    return noneBtn
}