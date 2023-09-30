
function img2(e){
    var imageUrl = e.src
    console.log(imageUrl)
    return imageUrl;
}

function post(){
    var sharedWith = document.getElementById('share').value;
    var text = document.getElementById('text').value;
    if(text === ""){
        swal("Oops...", "Something went wrong!", "Write something here");
    }
    else{
    document.getElementById('main2').style.display ="block";
    document.getElementById('shared-with').innerHTML =sharedWith;
    document.getElementById('text-sec').innerHTML = text;

    var textDiv = document.getElementById('text-sec');
    // textDiv.style.backgroundImage = url(selectedImageUrl);
    textDiv.style.backgroundRepeat = 'no-repeat';
    textDiv.style.backgroundSize = 'cover';
;
}
}
function returnBtn(){
    var returnId = document.getElementById('retrn')
    var noneBtn = document.getElementById('main2').style.display ="none";
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
      });
    document.getElementById('text').value = ""
    return noneBtn
}