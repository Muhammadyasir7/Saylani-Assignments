var forward = 0;
var right = 0;
function abc(){
    var ioriCharacter = document.getElementById('character1');
    console.log(event.keyCode)
    if(event.keyCode === 39){
        forward = forward + 10;
        ioriCharacter.style.left = forward + 'px';
        ioriCharacter.src = 'images/iori-xi-walk2.gif'
        setTimeout(function(){
            
        })
    }
    if(event.keyCode === 37){
        forward = forward - 10;
        ioriCharacter.style.left = forward + 'px';
        ioriCharacter.src = 'images/iori-xi-walk2.gif'
    }
}
window.onkeydown = abc;