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
    else if(val === "DEL"){
        screen.innerText = screen.innerText.slice(0, -1);
    }
    else{
        screen.innerText += val;
    }
}

console.log("MinOr".toLocaleLowerCase());
