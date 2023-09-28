
function img2(clickedImg){
    var imageUrl = clickedImg.src
    return `url('${imageUrl}')`
}
function post(){
    var sharedWith = document.getElementById('share').value;
    var text = document.getElementById('text').value;
    var selectedImageUrl = img2(clickedImg);

    console.log(selectedImageUrl+"sdfsdfs")

    document.getElementById('main2').style.display ="block";
    document.getElementById('shared-with').innerHTML =sharedWith;
    document.getElementById('text-sec').innerHTML = text;

    var textDiv = document.getElementById('text-sec');
    textDiv.style.backgroundImage = url(selectedImageUrl);
    textDiv.style.backgroundRepeat = 'no-repeat';
    textDiv.style.backgroundSize = 'cover';

}