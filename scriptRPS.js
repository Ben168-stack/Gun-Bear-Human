let userScore = 0
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p")
//This means it will select the div with class result and all p
//elements within it.


const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// We are storing all these things in variables to use them later
function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = (Math.floor(Math.random()*3))
    return choices[randomNumber]
}
function convertToWord(letter){
    if(letter === 'r'){
        return 'Rock'
    }
    if(letter === 'p'){
        return 'Paper';
    }
    if(letter==='s'){
        return 'Scissors'
    }
}

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML= ` ${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}  You win!`
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML= ` ${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}  You lost!`
}
function draw(userChoice,computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML= ` ${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}  It is a Draw!`
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case 'rp':
        case "ps":
        case "sr":
            lose(userChoice,computerChoice)
            break
        case 'pp':
        case "ss":
        case "rr":
            draw(userChoice,computerChoice)
            break
    }
    
}


function main(){
    rock_div.addEventListener('click',function(){
        game('r')
    })
    paper_div.addEventListener('click',function(){
        game('p')
    })
    scissors_div.addEventListener('click',function(){
        game('s')
    })

}
main();


