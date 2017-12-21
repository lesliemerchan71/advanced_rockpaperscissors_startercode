// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

var random = "";
var choices = ["rock", "paper", "scissors"];
var userChoice="";
var computerChoice="";
var winner="";




// DOCUMENT READY FUNCTION BELOW

$(document).ready (function(){
        
function randomizer(){
        random = Math.floor(Math.random()*3);
}        
        
function ComputerChoice(){
        randomizer();
        var selection = choices[random];
        computerChoice = selection; 
        console.log(computerChoice);
}
function UserChoice(){
        var selection = $('.input').val();
        userChoice = selection; 
        console.log(userChoice);
}
function reset(){
        userChoice = "";
        computerChoice = "";
}


$('button').click(function(){
             reset();
             ComputerChoice();
             UserChoice();
            if (computerChoice == 'rock' && userChoice == 'paper' || computerChoice == 'paper' && userChoice == 'scissors'|| computerChoice == 'scissors' && userChoice == 'rock'){
                    alert('You win!');
                    $("#You").append("<br /> You chose " +userChoice+ "   ");
                    $("#You").append("Computer chose " +computerChoice+ "  W");
                    
            } else {
            if (computerChoice == 'rock' && userChoice == 'scissors' || computerChoice == 'paper' && userChoice == 'rock'|| computerChoice == 'scissors' && userChoice == 'paper'){
                    alert('You LOSE!');
                    $("#You").append("<br /> You chose " +userChoice+ "   ");
                    $("#You").append("Computer chose " +computerChoice+ "  L");
            } else {
            if (computerChoice == 'rock' && userChoice == 'rock' || computerChoice == 'paper' && userChoice == 'paper'|| computerChoice == 'scissors' && userChoice == 'scissors'){
                    alert('You TIE!');
                    $("#You").append("<br /> You chose " +userChoice+ "   ");

$("#You").append("Computer chose " +computerChoice+ "  T");
            } else {
            if (userChoice != 'rock' || userChoice != 'paper' || userChoice != 'scissors') {
                    alert("Try doing it right this time...");
            }  
            }
            }   
            }
    });
        
});
