var winCounter = 0;
var lossCounter = 0;
var tieCounter = 0;
var roundCounter = 0;
var userInput = "";

const validValues = ["R", "P", "S"];

alert("Welcome to Rack Paper Scissors!");

// If user does NOT want to play, end program
if(!confirm("Would you like to play!")){
    return 0;
}

roundCounter += 1;
userInput = prompt("Round: " + roundCounter + "\n\nEnter P, R, S").toUpperCase;

function validInput(userInput){
    var test = false;

    // if user entered more than one char
    // we got bad input
    if( userInput.length > 1 ){
        return test;
    }

    for(var i = 0; i < validValues.length; i++ ){
        if( userInput === validValues[i] ){
            test = true;
        }
    }

    return test;
}