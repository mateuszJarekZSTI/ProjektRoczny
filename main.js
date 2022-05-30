let mainContainer = document.getElementsByClassName('mainContainer__content')[0];
let gamesContainer = document.getElementsByClassName('gamesContainer')[0];
let game2048 = document.getElementsByClassName('game2048__container')[0];
let snakeContainer = document.getElementsByClassName('snake__container')[0];
let ball = document.getElementsByClassName('ball__container')[0];
let trexContainer = document.getElementsByClassName('trex__container')[0];
function rotation(e) {
    if(e =='2048') {
        game2048.classList.remove('hidden');
        window.addEventListener("keydown", bindig2048);
        window.removeEventListener("keydown", bindigBall);
        window.removeEventListener("keydown", bindigSnake);

    } else if (e =='ball') {
        window.removeEventListener("keydown", bindig2048);
        window.removeEventListener("keydown", bindigSnake);
        window.addEventListener("keydown", bindigBall);
        ball.classList.remove('hidden');
    } else if (e =='snake') {
        window.removeEventListener("keydown", bindig2048);
        window.removeEventListener("keydown", bindigBall);
        window.addEventListener("keydown", bindigSnake);
        snakeContainer.classList.remove('hidden');
    } else if (e =='trex') {
        window.removeEventListener("keydown", bindig2048);
        window.removeEventListener("keydown", bindigBall);
        window.removeEventListener("keydown", bindigSnake);
        trexContainer.classList.remove('hidden');
    } else if(e == 'main') {
        setTimeout(function() {game2048.classList.add('hidden')},1000);
        setTimeout(function() {ball.classList.add('hidden')},1000);
        setTimeout(function() {snakeContainer.classList.add('hidden')},1000);
        setTimeout(function() {trexContainer.classList.add('hidden')},1000);

        mainContainer.style.transform= 'unset';
        return;
    }
    mainContainer.style.transform= 'rotateY(-.5turn)';
}