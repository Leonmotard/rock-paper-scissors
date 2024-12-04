let humanScore = 0;
let computerScore = 0;


let getComputerChoice = ()=>{
    let randomNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    let computerChoice = "";
    switch (randomNumber) {
            case 1 :
                computerChoice = "rock";
                break;
            case 2:
                computerChoice = "paper";
                break;
            case 3:
                computerChoice = "scissors";
                break; 
            default:
                alert("An error has ocurred: out of range random number generated");
    }
    console.log(computerChoice);
    return computerChoice;  
}

function getHumanChoice(){
    let humanChoice="";
    
    while(humanChoice===""){
            humanChoice = prompt("Enter your choice: rock, paper or scissors.").toLowerCase();
            if(humanChoice!=="rock" && humanChoice!=="paper" && humanChoice!=="scissors"){
                alert("please choose one of the given options");
                humanChoice = "";
            }
    }    
    
    return humanChoice;
}


function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
     console.log(`Draw!`);
    }else if(humanChoice==="rock" && computerChoice=="paper"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else if(humanChoice==="paper" && computerChoice=="scissors"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else if(humanChoice==="scissors" && computerChoice=="rock"){
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        }
}


function playGame(){
   
    for(let i = 0; i<=4; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`   Computer score: ${computerScore} 
            Your score: ${humanScore}`);
    }
    if(humanScore>computerScore){
        console.log(`Congratulations you won: ${humanScore} rounds! You win the game`);
    } else if(computerScore>humanScore){
        console.log(`Sorry you lost: ${computerScore} rounds! You lost the game`);
    } else{
        console.log(`Draw`);
    }

}

playGame();