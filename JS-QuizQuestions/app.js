function submitQs(){
    event.preventDefault()
    var text = document.getElementById("txt")
    var arr = [];
    var obj ={};
    var value =text.value.split("\n")
    var count = 1

    for(var i =0; i< value.length; i++){
        if(value[i] === ""){
            arr.push(obj);
            obj = {};
            count = 1 ;
        }
        else{
            if(value[i].lastIndexOf("?") !== -1){
                obj.question = value[i]
            }
            else{
                if(value[i].lastIndexOf("*") !== -1){
                obj.answer = value[i].slice(0,-1)
                obj['option'+count] =value[i].slice(0,-1)
                }
                else{
                obj['option'+ count] = value[i]
                }
            count++
            }
        }
    }
    console.log(arr)
    }