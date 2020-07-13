var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
var colorDisplay = document.getElementById("colorDisplay");

init();

function init(){
    //mode buttons event listener
    setupModeButtons();
    setupSquares();
    reset();
};

function setupModeButtons(){
    for (var i = 0; i < modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            //find squares to show
            //pick new colors
            //pick new pickedcolor
            //update page to reflect changes
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        });
    };
};

function setupSquares(){
    for (var i=0;i<squares.length;i++){
        //Add initial colors to squares

        // Add eventListeners to squares
        squares[i].addEventListener("click",function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?";
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
            messageDisplay.style.color = clickedColor;
        });
    };
}
function reset(){
    colors = generateRandomColors(numSquares);
    //pick new random colors
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "new colors";
    messageDisplay.textContent = "";
    for (var i = 0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];    
        }
        else{
            squares[i].style.display = "none";
        }
    }
}

for (var i=0;i<squares.length;i++){
    //Add initial colors to squares

    // Add eventListeners to squares
    squares[i].addEventListener("click",function(){
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
    }
    else{
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again"
    }
    });
}

function changeColors(color){
    for (var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random]
}

function generateRandomColors(num){
    //Make array
    var arr = [];
    for (var i=0;i<num;i++){
        //get random color into array
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}

resetButton.addEventListener("click",function(){
    reset();
});