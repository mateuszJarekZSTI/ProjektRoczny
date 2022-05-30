let blocks=[...document.getElementsByClassName('game2048__game-block')];
let colors=Array('#a0d7fa','#5998c0','#2751a0','#471ba2', '#5e0bca','#8317e5','#a817e6','#761468','#510634','#77011c','#8b0a0a');
let score;
const bindig2048 = (e) => {
    if(e.key=="ArrowUp")
        ArrowUp();
    else if(e.key=="ArrowDown")
        ArrowDown();
    else if(e.key=="ArrowLeft")
        ArrowLeft();   
    else if(e.key=="ArrowRight")
        ArrowRight();
}

window.addEventListener("keydown",bindig2048);


function isLost() {
    let is = true;
    blocks.forEach(e => {
        if(e.innerHTML === '0')
        is = false;
    });
    return is;
}
function colorBoard() {
    blocks.forEach(e => {
        if(e.innerHTML=='0') {
            e.style.backgroundColor="#f7f7f7";
        } else
            e.style.backgroundColor=colors[Math.log2(parseInt(e.innerHTML))-1];
    });
}
function spawnBlock() {
    if(!isLost())
    {
        let newBlock=Math.floor(Math.random()*16);
        while(blocks[newBlock].innerHTML!='0') {
            newBlock=Math.floor(Math.random()*16);
        }
        blocks[newBlock].innerHTML='2';
        score+=2;
        updateScore();
    }
    else {
        alert("No i koniec challengu");
    }
}

function updateScore() {
    document.getElementsByClassName('game2048__game-score')[0].innerHTML='Twój wynik to: </br>'+score;
}

function moveUp(i) {
    while(blocks[i].innerHTML==blocks[i-4].innerHTML || blocks[i-4].innerHTML=='0')
    {
        blocks[i-4].innerHTML=parseInt(blocks[i-4].innerHTML)+parseInt(blocks[i].innerHTML);
        blocks[i].innerHTML="0";
        if(i>7)
            i-=4;
        else
            break;
    }
}

function moveDown(i) {
    while(blocks[i].innerHTML==blocks[i+4].innerHTML || blocks[i+4].innerHTML=='0')
    {
        blocks[i+4].innerHTML=parseInt(blocks[i+4].innerHTML)+parseInt(blocks[i].innerHTML);
        blocks[i].innerHTML="0";
        if(i<8)
            i+=4;
        else
            break;
    }
}
function moveLeft(i) {
    while(blocks[i].innerHTML==blocks[i-1].innerHTML || blocks[i-1].innerHTML=='0')
    {
        blocks[i-1].innerHTML=parseInt(blocks[i-1].innerHTML)+parseInt(blocks[i].innerHTML);
        blocks[i].innerHTML="0";
        if(i%4>1)
            i-=1;
        else
            break;
    }
}
function moveRight(i) {
    while(blocks[i].innerHTML==blocks[i+1].innerHTML || blocks[i+1].innerHTML=='0')
    {
        blocks[i+1].innerHTML=parseInt(blocks[i+1].innerHTML)+parseInt(blocks[i].innerHTML);
        blocks[i].innerHTML="0";
        if(i%4<2)
            i+=1;
        else
            break;
    }
}


function ArrowUp()
{
    for(let i=4;i<=15;i++) {
        moveUp(i);
    }
    spawnBlock();
    colorBoard();
}
function ArrowDown()
{
    for(let i=11;i>=0;i--) {
        moveDown(i);
    }
    spawnBlock();
    colorBoard();
}
function ArrowLeft()
{
    for(let i=1;i<=3;i++) {
        for(let j=0;j<=3;j++) {
            moveLeft(i+4*j);
        }
    }
    spawnBlock();
    colorBoard();
}
function ArrowRight()
{
    for(let i=2;i>=0;i--) {
        for(let j=0;j<=3;j++) {
            moveRight(i+4*j);
        }
    }
    spawnBlock();
    colorBoard();
}
function startGame()
{
    score=4;
    let a=Math.floor(Math.random()*16);
    let b=Math.floor(Math.random()*16);
    while(a==b)
    {
        b=Math.floor(Math.random()*16);
    }
    for( let i=0;i<16;i++) {
        if (i == a || i == b)
            blocks[i].innerHTML="2";
        else
            blocks[i].innerHTML="0";
    }
    colorBoard();
    updateScore();
}
function endGame()
{
    for( let i=0;i<16;i++) {
            blocks[i].innerHTML="0";
    }
    colorBoard();
    score=0;
    updateScore();
}
score=0;
updateScore();
colorBoard();
