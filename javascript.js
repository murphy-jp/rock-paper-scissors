const choices = ['Rock', 'Paper', 'Scissors'];
const numList = [1,2,3,4,5,6,7,8,9,10,11];
let randomChoice;
let userChoice;
let userScore = 0;
let computerScore = 0;

// picking a random choice from the choices array for the computer choice
function getComputerChoice() {
    randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return(randomChoice);
}

// using prompt input to get the user choide
function getUserChoice() {
    userChoice = prompt('Choose Rock, Paper or Scissors');
    return(userChoice);
}

// function to play 1 round of the game
function playRound() {

    // calling the functions to get both a computer and user choice
    getComputerChoice();
    getUserChoice();

    // converting it to lowercase of it's case insenstive 
    randomChoice = randomChoice.toLowerCase();
    userChoice = userChoice.toLowerCase();

    console.log(randomChoice);
    console.log(userChoice);
    
    // looping through the possible scenarios
    if (userChoice === 'rock' && randomChoice === 'paper'){
        console.log('Paper beats rock. Computer wins');
        computerScore++;
    }
    else if (userChoice === 'rock' && randomChoice === 'scissors'){
        console.log('Rock beats Scissors. User wins');
        userScore ++;
    } 
    else if (userChoice === 'rock' && randomChoice === 'rock'){
        console.log('Rock collides with Rock. Draw');
    } 
    else if (userChoice === 'paper' && randomChoice === 'scissors'){
        console.log('Scissors beats Paper. Computer wins');
        computerScore++;
    } 
    else if (userChoice === 'paper' && randomChoice === 'rock'){
        console.log('Paper beats Rock. User wins');
        userScore ++;
    } 
    else if (userChoice === 'paper' && randomChoice === 'paper'){
        console.log('Paper  collides with Paper. Draw');
    } 
    else if (userChoice === 'scissors' && randomChoice === 'scissors'){
        console.log('Scissors  collides with Scissors. Draw');
    } 
    else if (userChoice === 'scissors' && randomChoice === 'Paper'){
        console.log('Scissors beats Paper. User wins');
        userScore ++;
    } 
    else if (userChoice === 'scissors' && randomChoice === 'rock'){
        console.log('Rock beats Scissors. Computer wins');
        computerScore++;
    } 
    else console.log('WRONG INPUT. Choose Rock, Paper, Scissors');
}

// setting the number of plays for a game
function playGame(){
    for (let i = 0; i < 20; i++)
    {
            playRound();
            console.log('userScore is: ' + userScore);
            console.log('computerScore is: ' + computerScore);

                    // displaying the output if someone gets to 3
        if (userScore == 3) {
            console.log('User wins!!');
            break;
        }
        else if (computerScore == 3) {
            console.log('Computer wins!!');
            break;
        }

    }
}