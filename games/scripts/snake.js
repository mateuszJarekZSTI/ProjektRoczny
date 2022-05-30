class Snake {

    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }
    push(element) {
      this.elements[this.head] = element;
      this.head++;
    }
    pop() {
      const item = this.elements[this.tail];
      delete this.elements[this.tail];
      this.tail++;
      return item;
    }
    top() {
      return this.elements[this.head-1];
    }
    get length() {
      return this.head - this.tail;
    }
    get isEmpty() {
      return this.length === 0;
    }
}
snakeScore=3;
const grid = document.getElementsByClassName('snake__game-grid')[0];
let newElem;
function updateSnakeScore() {
  document.getElementsByClassName('snake__game-score')[0].innerHTML='Twój wynik to: </br>'+snakeScore;
}
for(let i=0;i<900;i++) {
  newElem=document.createElement("div");
  newElem.classList+='snake__game-cell';
  grid.appendChild(newElem);
}

const cells = document.getElementsByClassName('snake__game-cell');


let snake;
let snakeInterval;
let currDir;
let currFruit;

function eat(a) {
  if(a!=currFruit) {
    cells[snake.pop()].classList.remove('snake__game-body');
  } else {
    cells[a].classList.remove('snake__game-fruit')
    snakeScore++;
    updateSnakeScore();
    newFruit();
  }
}
function clearBoard() {
  if(!snake) return;
  while(snake.length !=0) {
    cells[snake.pop()].classList.remove('snake__game-body');
  }
  cells[currFruit].classList.remove('snake__game-fruit');
}
function gameOver() {
  alert("Przegrałeś");
  clearInterval(snakeInterval);
  clearBoard();
}
function isOver(a) {
  if(cells[a].classList.contains('snake__game-body')) {
    gameOver();
  }
}
function goLeft() {
  if(snake.top() % 30 == 0) {
    isOver(snake.top()+29);
    cells[snake.top()+29].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()+29);
  }
  else {
    isOver(snake.top()-1);
    cells[snake.top()-1].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()-1);
  }
  
}

function goRigth() {
    if(snake.top() % 30 == 29) {
      isOver(snake.top()-29);
      cells[snake.top()-29].classList.add('snake__game-body');
      eat(snake.top());
      snake.push(snake.top()-29);
    }
    else {
      isOver(snake.top()+1);
      cells[snake.top()+1].classList.add('snake__game-body');
      eat(snake.top());
      snake.push(snake.top()+1);
    }

    
}

function goUp() {
  if(snake.top() <30) {
    isOver(snake.top()+870);
    cells[snake.top()+870].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()+870);
  }
  else {
    isOver(snake.top()-30);
    cells[snake.top()-30].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()-30);
  }
  
  
}

function goDown() {
  if(snake.top() >=870) {
    isOver(snake.top()-870);
    cells[snake.top()-870].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()-870);
  }
  else {
    isOver(snake.top()+30);
    cells[snake.top()+30].classList.add('snake__game-body');
    eat(snake.top());
    snake.push(snake.top()+30);
  }

  
}

function newFruit() {
  let a=Math.floor(Math.random()*901)
  cells[a].classList.add('snake__game-fruit');
  currFruit=a;
}

const bindigSnake = (e) => {
  if(e.key=="ArrowLeft") {
      if(currDir=='R') {
        currDir="U";
        clearInterval(snakeInterval);
        snakeInterval = setInterval(goUp, 100);
      } else if (currDir=='L') {
        currDir="D";
        clearInterval(snakeInterval);
        snakeInterval = setInterval(goDown, 100);
      } else if (currDir=='D') {
        currDir="R";
        clearInterval(snakeInterval);
        snakeInterval = setInterval(goRigth, 100);
      } else if (currDir=='U') {
        currDir="L";
        clearInterval(snakeInterval);
        snakeInterval = setInterval(goLeft, 100);
      }
  } else if(e.key=="ArrowRight") {
    if(currDir=='R') {
      currDir="D";
      clearInterval(snakeInterval);
      snakeInterval = setInterval(goDown, 100);
    } else if (currDir=='L') {
      currDir="U";
      clearInterval(snakeInterval);
      snakeInterval = setInterval(goUp, 100);
    } else if (currDir=='D') {
      currDir="L";
      clearInterval(snakeInterval);
      snakeInterval = setInterval(goLeft, 100);
    } else if (currDir=='U') {
      currDir="R";
      clearInterval(snakeInterval);
      snakeInterval = setInterval(goRigth, 100);
    }
  }
}
window.addEventListener("keydown", bindigSnake);

function startSnakeGame() {
  clearInterval(snakeInterval);
  clearBoard();
  snake = new Snake();
  snake.push(575);
  snake.push(576);
  snake.push(577);
  cells[577].classList.add('snake__game-body');
  cells[576].classList.add('snake__game-body');
  cells[575].classList.add('snake__game-body');
  snakeInterval = setInterval(goRigth, 80);
  newFruit();
  snakeScore=3;
  updateSnakeScore();
  currDir ='R';
}
function endSnakeGame() {
  clearInterval(snakeInterval);
}