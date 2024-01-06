var inputField= document.getElementById('input2');

function abc(value){
    inputField.value += value
    var last = inputField.value[inputField.value.length -1]
    console.log(last)
    var arr = ["+","-","*","/"]
    if(arr.indexOf(last) !== -1){
        inputField.value = inputField.value.slice(0,2);
    }
    return inputField
}

function emptyInput(){
    inputField.value = "";
}
function operation(){
    var last = inputField.value[inputField.value.length -1]
    var arr = ["+","-","*","/"]
    if(arr.indexOf(last) !== -1){
        // inputField.value = inputField.value.slice(0, -1);
        
        alert("Something is wrong check again.")
    }else{
        var x = document.getElementById('input2').value
        var y = eval(x);
        document.getElementById('input2').value = y
        return y
       
    }
}

function lastRemove(){
    var currentValue = inputField.value;
    if (currentValue.length > 0) {
      // Remove the last character from the input value
      currentValue = currentValue.slice(0, -1);
      inputField.value = currentValue;
}
}