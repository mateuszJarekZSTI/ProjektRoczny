addEventListener("keydown", (e) => {
    if(e.key === ' ' || e.keyCode === 32) {
        trexJump();
    }
});
const trexCharacter = document.getElementsByClassName('trex__game-character')[0];
function trexJump() {
    if (trexCharacter.classList.contains('jump')) return;

    trexCharacter.classList.add('jump');
    setTimeout(() => {
        trexCharacter.classList.remove('jump'); 
    }, 300);
}
let trexScore=0;
const trexBlock= document.getElementsByClassName('trex__game-block')[0];
let trexInterval;

function startTrexGame() {
    trexInterval = setInterval(() => {
        let characterPos=parseInt(window.getComputedStyle(trexCharacter).getPropertyValue('bottom'));
        let blockPos=parseInt(window.getComputedStyle(trexBlock).getPropertyValue('right'));
        console.log(blockPos);
        console.log(characterPos);
        if(blockPos<=550 && blockPos>=530 && characterPos<=150) {
            trexBlock.style.animation="none";
            clearInterval(trexInterval);
        }
        else {
            trexScore++;
            document.getElementsByClassName('trex__game-score')[0].innerHTML='Twój wynik to: </br>'+trexScore;
        }
    
    }, 10)
    trexBlock.style.rigth="-20px";
    trexBlock.style.animation="obstacle  infinite 1.5s linear";
    trexScore=0;
}
function endTrexGame() {
    clearInterval(trexInterval);
    trexBlock.style.animation="none";
}