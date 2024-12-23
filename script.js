const screen = document.getElementById("outputScreen");

function showOnScreen(input){
    if(screen.value === "0"){
        screen.value = input;
    }
    else if(screen.value === "Error"){     //     Errordan sonra input almaya devam
        screen.value = input;
    }
    else
    screen.value += input;
}

function clearing(){
    screen.value = "0";
}

function calculate(){

    if(screen.value === "Error"){         //    Error = Error
        try {
            screen.value = eval(screen.value);
        }
        catch(error) {
            screen.value = "Error";
        }
    }
    
    try {
        screen.value = eval(screen.value);
    }
    catch(error) {
        screen.value = "Error";
    }

}
