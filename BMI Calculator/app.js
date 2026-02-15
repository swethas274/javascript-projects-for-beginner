const gameArea=document.getElementById('gameArea');
const scoreDisplay=document.getElementById('score');
const button=document.getElementById('startButton');
const targetText = document.getElementById("targetText");

let score=0;
let gameInterval;
let targetColor;

const colors=['red','orange','green','yellow','purple'];

button.addEventListener('click', startGame);

function startGame() {

    score = 0;
    scoreDisplay.textContent = score;

    // choose ONE target color
    targetColor =
        colors[Math.floor(Math.random() * colors.length)];
    alert(`Target Color: ${targetColor.toUpperCase()}`);

    // display on screen
    targetText.innerHTML =
            `Target: <span style="
            color:${targetColor};
            font-weight:bold;
            font-size:22px">
            ${targetColor.toUpperCase()}
        </span>`;

    clearInterval(gameInterval);
    gameInterval = setInterval(createBalloon, 1000);
}


function createBalloon(){
    const balloon=document.createElement('div');
    balloon.classList.add('balloon');
    
    const balloonColor = colors[Math.floor(Math.random()*colors.length)];

    balloon.style.backgroundColor = balloonColor;


    balloon.style.left=Math.random()*(85)+"%";

    let position = -80;

    const move = setInterval(()=>{
        position+=3;
        balloon.style.bottom=position+"px";

        if(position>gameArea.clientHeight){
            clearInterval(move);
            balloon.remove();
        }
    },50);

    button.addEventListener('click',()=>{
    score=0;
    scoreDisplay.textContent=score;
    clearInterval(gameInterval);
    gameInterval=setInterval(createBalloon,1000);
    });
    balloon.addEventListener("mouseenter", () => {

    if (balloonColor === targetColor) {
        score++;
        scoreDisplay.textContent = score;
        balloon.remove();
        clearInterval(move);
    } else {
        gameOver();
    }
});


    gameArea.appendChild(balloon);
}

button.addEventListener('click',()=>{
    score=0;
    scoreDisplay.textContent=score;
    clearInterval(gameInterval);
    gameInterval=setInterval(createBalloon,1000);
});

function gameOver() {
    alert("Game Over! Your score: " + score);
    clearInterval(gameInterval);
    clearBalloons();
}

function clearBalloons() {
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => balloon.remove());
}
