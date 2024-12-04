console.log("Hello World");

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
   let humanChoice = prompt("Enter your choice: rock, paper or scissors.").toLowerCase();
    if(humanChoice!=="rock" && humanChoice!=="paper" && humanChoice!=="scissors"){
        console.error("please choose one of the given options");
    }
    return humanChoice;
}

getComputerChoice();
console.log(getHumanChoice());