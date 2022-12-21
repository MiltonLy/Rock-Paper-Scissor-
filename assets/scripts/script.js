var winCounter = 0;
var lossCounter = 0;
var tieCounter = 0;
var roundCounter = 0;
var userInput = "";
var pcHand = "";

const validValues = ["R", "P", "S"];

// If user does NOT want to play, end program
if(!confirm("Welcome to Rack Paper Scissors!\n\nWould you like to play?")){
    // return;
}

do{
    roundCounter += 1;
    userInput = promptUser();
    pcHand = getPcHand();
    scoreRound(userInput, pcHand);
} while(playAgain());

function scoreRound(userInput, pcHand){
    
    if( userInput === pcHand){
        tieCounter += 1;
    }
    else if( (userInput === "R" && pcHand === "S") ||
        (userInput === "P" && pcHand === "R") ||
        (userInput === "S" && pcHand === "P")){
            winCounter +=1;
    } else {
        lossCounter += 1;
    }
}

function promptUser(){
    userInput = prompt("Round: " + roundCounter + "\n\nWins: " + winCounter + "\nLosses: " + lossCounter + "\nTies: " + tieCounter + "\n\nEnter P, R, S");
    userInput = userInput.toUpperCase();
    if( !isValidInput(userInput)){
        promptUser();
    }
    return userInput;
}

function playAgain(){
    return confirm("Round: " + roundCounter + "\n\nWins: " + winCounter + "\nLosses: " + lossCounter + "\nTies: " + tieCounter + "\n\nPlay again?");
}

function isValidInput(userInput){
    var test = false;

    // if user entered more than one char
    // we got bad input
    if( userInput.length > 1 || userInput === null){
        return test;
    }

    for(var i = 0; i < validValues.length; i++ ){
        if( userInput === validValues[i] ){
            test = true;
        }
    }

    return test;
}

function getPcHand(){
    var hand = "";

    hand = validValues[(Math.floor(Math.random() * validValues.length))];
    return hand;
}