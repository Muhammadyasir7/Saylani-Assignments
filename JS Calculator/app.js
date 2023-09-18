var inputField= document.getElementById('input2');

function abc(value){
    inputField.value += value
    return inputField
}

function emptyInput(){
    inputField.value = "";
}
function operation(){
    var last = inputField.value[inputField.value.length -1]
    var arr = ["+","-","*","/"]
    if(arr.indexOf(last) !== -1){
        inputField.value = inputField.value.slice(0, -1);
    }else{
        var x = document.getElementById('input2').value
        var y = eval(x);
        document.getElementById('input2').value = y
        return y
    }
}

// function lastRemove(){
//     var newField = inputField.value.lastIndexOf();
//     newField = inputField.value
// }
