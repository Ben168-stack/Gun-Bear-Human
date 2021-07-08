let userScore = 0
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result p")
//This means it will select the div with class result and all p
//elements within it.


const rock_div = document.getElementById("g");
const paper_div = document.getElementById("b");
const scissors_div = document.getElementById("h");

// We are storing all these things in variables to use them later
function getComputerChoice(){
    const choices = ['g','b','h'];
    const randomNumber = (Math.floor(Math.random()*3))
    return choices[randomNumber]
}

function win(userChoice, computerChoice){
    userScore++
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
function lose(userChoice,computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}
function draw(userChoice,computerChoice){
    const smallUserWord = 'user'.fontsize(3).sup();
    const smallCompWord = 'comp'.fontsize(3).sup();
    result_p.innerHTML= ` ${convertToWord(userChoice)}${smallUserWord} equals to ${convertToWord(computerChoice)}${smallCompWord}  It is a Draw!`
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "gb":
            win(userChoice,computerChoice)
            result_p.innerHTML=`You have Shot a bear You Win!`
            break;
        case "bh":
            win(userChoice,computerChoice)
            result_p.innerHTML="You have mauled a human. You Win!"
            break;
        case "hg":
            win(userChoice,computerChoice)
            result_p.innerHTML="You have disarmed a gun, You Win!"
            break;
            
            
        case 'bg':
            lose(userChoice,computerChoice)
            result_p.innerHTML="You Have been Shot by a Gun. You Lose!"
            break
        case "hb":
            lose(userChoice,computerChoice)
            result_p.innerHTML="You have been mauled by a Bear. You Lose!"
            break
        case "gh":
            lose(userChoice,computerChoice)
            result_p.innerHTML="You have been disarmed.You Lose!"
            break
        case 'gg':
        case "bb":
        case "hh":
            result_p.innerHTML="Its a Draw!"
            break
    }
    
}


function main(){
    rock_div.addEventListener('click',function(){
        game('g')
    })
    paper_div.addEventListener('click',function(){
        game('b')
    })
    scissors_div.addEventListener('click',function(){
        game('h')
    })

}
main();


