const error_message = "Error";
function clicked(val){
    var screen = document.getElementById('output');
    if(val === 'C'){
        screen.innerText = "";
    }
    else if(val === '='){
        try{
            screen.innerText = eval(screen.innerText);
        }
        catch(error){
            screen.innerText = error_message;
        }
    }
    else if(screen.innerText === error_message){
        screen.innerText = val;
    }
    else{
        screen.innerText += val;
    }
}