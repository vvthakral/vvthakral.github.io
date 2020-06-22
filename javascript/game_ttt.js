alert("Player 1 will start game with X");
var p1Name = prompt("Enter player 1 name","Player 1");
var p2Name = prompt("Enter player 2 name","Player 2");
var p1Disp = document.querySelector("#p1Disp");
var p2Disp = document.querySelector("#p2Disp");
var p1ScoreDisp = document.querySelector("#p1Score");
var p2ScoreDisp = document.querySelector("#p2Score");
var reRound = document.querySelector("#reRound");
var reGame = document.querySelector("#reGame");
var tds = document.querySelectorAll("td");
var r1 = document.querySelectorAll(".r1");
var r2 = document.querySelectorAll(".r2");
var r3 = document.querySelectorAll(".r3");
var c1 = document.querySelectorAll(".c1");
var c2 = document.querySelectorAll(".c2");
var c3 = document.querySelectorAll(".c3");
var d1 = document.querySelectorAll(".d1");
var d2 = document.querySelectorAll(".d2");
var maxCount = document.querySelector("#maxCount");
var customCount = document.querySelector("#customCount");
var max_games = 5;

p1Name = p1Name?p1Name:"Player 1";
p2Name = p2Name?p2Name:"Player 2";
var pos = [r1,r2,r3,c1,c2,c3,d1,d2];
var turn = false;
var break_flag = false;
var p1Score = 0;
var p2Score = 0;

p1Disp.textContent = p1Name + "(x)";
p2Disp.textContent = p2Name + "(o)";

init();

reRound.addEventListener("click",resetRound);

reGame.addEventListener("click",resetGame);

customCount.addEventListener("change",function(){
    if (Number(this.value)>max_games){
        maxCount.textContent = this.value;
        max_games = Number(this.value);    
    }
    else{
        maxCount.textContent = this.value;
        max_games = Number(this.value);       
        resetGame();
    }
});

function init(){
    var count = 0;
// Initialize Listener
    for(var i = 0;i<tds.length;i++){
        tds[i].addEventListener("click",function(){
            if (turn===false){
                this.textContent = "X";
            }
            else if (turn===true){
                this.textContent = "O";
            }
            turn = !turn;
            count++;
            var result = check_winner();
            if (result==="X" || result==="Y" || (result===0 && count===9)){
                resetRound();
            }
        },{ once: true });
    }
}

// find winner
function check_winner(){
    for (var j=0;j<pos.length;j++){
        if (pos[j]){
            for (var i = 1;i<pos[j].length;i++){
                if (pos[j][i] && pos[j][0]){
                    if (pos[j][i].textContent !== pos[j][0].textContent){
                        break_flag = true;
                        break;
                    }
                }
            };
            if (break_flag===true){
                break_flag = false;
                continue;
            }
            else if(pos[j][0].textContent==="X"){
                p1Score++;
                p1ScoreDisp.textContent = p1Score;
                // p1Disp.classList.add("winner");
                // p1ScoreDisp.classList.add("winner");
                // p2Disp.classList.remove("winner");
                // p2ScoreDisp.classList.remove("winner");
                return "X";
            }
            else if(pos[j][0].textContent==="O"){
                p2Score++;
                p2ScoreDisp.textContent = p2Score;
                // p2Disp.classList.add("winner");
                // p2ScoreDisp.classList.add("winner");
                // p1Disp.classList.remove("winner");
                // p1ScoreDisp.classList.remove("winner");
                return "Y";
            }
            if (p1Score>=max_games){
                alert("Winner: "+ p1Name);
                resetGame();
            }
            else if(p2Score>=max_games){
                alert("Winner: "+ p2Name);
                resetGame();   
            }
        }
    } 
    return 0;   
}

// 

function resetGame(){
    resetRound();
    p1Score = 0;
    p2Score = 0;
    p1ScoreDisp.textContent = p1Score;
    p2ScoreDisp.textContent = p2Score;
}

function resetRound(){
    turn = false;
    break_flag = false;
    for(var i=0;i<tds.length;i++){
        tds[i].textContent="";
    }
    init();
    alert("Round Reset!");
};