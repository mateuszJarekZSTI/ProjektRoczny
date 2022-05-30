var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;
var counter = 0;
let block;
var addition = 5;
var currentBlocks = [];
function endBall() {
    clearInterval(block);
    addition=counter;
}
function updateBallScore() {
    document.getElementsByClassName('ball__game-score')[0].innerHTML='Twój wynik to: </br>'+(counter - addition);
}
function moveLeftBall(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRightBall(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<570){
        character.style.left = left + 2 + "px";
    }
}
const bindigBall = (e) => {
    if(both==0){
        both++;
        if(e.key==="ArrowLeft"){
            interval = setInterval(moveLeftBall, 1);
        }
        if(e.key==="ArrowRight"){
            interval = setInterval(moveRightBall, 1);
        }
    }
}
document.addEventListener("keydown", bindigBall);
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});
function startBall() {
    block = setInterval(function(){
        var blockLast = document.getElementById("block"+(counter-1));
        var holeLast = document.getElementById("hole"+(counter-1));
        if(counter>0){
            var blockLastTop = parseInt(window.getComputedStyle(blockLast).getPropertyValue("top"));
            var holeLastTop = parseInt(window.getComputedStyle(holeLast).getPropertyValue("top"));
        }
        if(blockLastTop<600||counter==0){
            var block = document.createElement("div");
            var hole = document.createElement("div");
            block.setAttribute("class", "block");
            hole.setAttribute("class", "hole");
            block.setAttribute("id", "block"+counter);
            hole.setAttribute("id", "hole"+counter);
            block.style.top = blockLastTop + 100 + "px";
            hole.style.top = holeLastTop + 100 + "px";
            var random = Math.floor(Math.random() * 550);
            hole.style.left = random + "px";
            game.appendChild(block);
            game.appendChild(hole);
            currentBlocks.push(counter);
            counter++;
            updateBallScore();
        }
        var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        var drop = 0;
        if(characterTop <= 0){
            endBall();
            characterTop+=400;
            addition=counter;
        }
        for(var i = 0; i < currentBlocks.length;i++){
            let current = currentBlocks[i];
            let iblock = document.getElementById("block"+current);
            let ihole = document.getElementById("hole"+current);
            let iblockTop = parseFloat(window.getComputedStyle(iblock).getPropertyValue("top"));
            let iholeLeft = parseFloat(window.getComputedStyle(ihole).getPropertyValue("left"));
            iblock.style.top = iblockTop - 0.5 + "px";
            ihole.style.top = iblockTop - 0.5 + "px";
            if(iblockTop < -20){
                currentBlocks.shift();
                iblock.remove();
                ihole.remove();
            }
            if(iblockTop-20<characterTop && iblockTop>characterTop){
                drop++;
            if(iholeLeft<=characterLeft && iholeLeft+30>=characterLeft){
                    drop = 0;
                }
            }
        }
        if(drop==0){
            if(characterTop < 480){
                character.style.top = characterTop + 2 + "px";
            }
        }else{
            character.style.top = characterTop - 0.5 + "px";
        }
    },1);
}
