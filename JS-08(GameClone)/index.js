var forward = 0;
var right = 0;
function abc(){
    var ioriCharacter = document.getElementById('character1');
    console.log(event.keyCode)
    if(event.keyCode === 68 && forward < 1100){
        forward = forward + 30;
        ioriCharacter.style.left = forward + 'px';
        ioriCharacter.src = 'images/iori-xi-walk2.gif'
        setTimeout(function(){
            ioriCharacter.src = 'images/iori-newerkofstance.gif';
            
        },500)
    }
    if(event.keyCode === 65 && forward >0){
        forward = forward - 30;
        ioriCharacter.style.left = forward + 'px';
        ioriCharacter.src = 'images/iori-xi-walk2.gif';
        setTimeout(function(){
            ioriCharacter.src = 'images/iori-newerkofstance.gif';
            
        },500)
    }
    if(event.keyCode === 87){
        // ioriCharacter.style.left = forward + 'px';
        ioriCharacter.src = 'images/iori-xi-jump.gif';
        ioriCharacter.style.height = '500px'
        ioriCharacter.style.width = '220px'

        setTimeout(function(){
            ioriCharacter.src = 'images/iori-newerkofstance.gif';
            ioriCharacter.style.height = '280px';
            ioriCharacter.style.width = 'auto';  
        },1000)
    }
    if(event.keyCode === 84){
        ioriCharacter.src = 'images/iori-xi-projectile.gif';
        setTimeout(function(){
            ioriCharacter.src = 'images/iori-newerkofstance.gif';
            
        },1000)
    }
    if(event.keyCode === 89){
        ioriCharacter.src = 'images/iori-xi-super2.gif';
        ioriCharacter.style.height = '300px'
        ioriCharacter.style.width = '300px'
        setTimeout(function(){
            ioriCharacter.src = 'images/iori-newerkofstance.gif';
            ioriCharacter.style.height = '280px';
            ioriCharacter.style.width = 'auto';
        },6000)
    }

    var orochiCharacter = document.getElementById('character2');
    if(event.keyCode === 37 && right <1150) {
        right = right + 30;
        orochiCharacter.style.right = right + 'px';
    }
    if(event.keyCode === 39  && right >0){
        right = right - 30;
        orochiCharacter.style.right = right + 'px';
    }
    if(event.keyCode === 97){
        orochiCharacter.src = 'images/orochi-power.gif';
        orochiCharacter.style.height ='400px';
        orochiCharacter.style.width ='350px';

    setTimeout(function(){
            orochiCharacter.src = 'images/orochi-stand.gif';
            orochiCharacter.style.height = '300px'
            orochiCharacter.style.width = 'auto'

        },1400)
    }
}
    
window.onkeydown = abc;