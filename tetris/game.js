document.addEventListener('DOMContentLoaded', ()=>{
const grid = document.querySelector('.grid');
let squares = Array.from(document.querySelectorAll('.grid div'));
const displayScore = document.querySelector('#score');
const button = document.querySelector('#start_btn');
const width = 10;
let nextRandom = 0;
let timerId;
let score = 0;

const ltetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
]

const ztetromino = [
    [0, width, width+1, width+2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
]

const ttetromino = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
]

const otetromino = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
]

const itetromino = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
]


const theTetraminos = [ltetromino, ztetromino, ttetromino, otetromino, itetromino];
let currentPosition = 4;
let currentRotation = 0;

let random = Math.floor(Math.random()* (theTetraminos.length));
let current = theTetraminos[random][currentRotation];

function draw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.add('tetramino');
    })
}

function undraw() {
    current.forEach(index => {
        squares[currentPosition + index].classList.remove('tetramino');
    })
}

function control(e) {
    if (e.keyCode === 65) {
        moveLeft()
    } else if (e.keyCode === 68) {
        moveRight()
    } else if (e.keyCode === 87) {
        Rotate()
    } else if (e.keyCode === 83) {
        moveDown()
    }
}
document.addEventListener('keydown', control)

function moveDown(){
    undraw();
    currentPosition += width;
    draw();
    freeze()
}

function freeze() {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
        current.forEach(index => squares[currentPosition + index].classList.add('taken'));
        random = nextRandom
        nextRandom =  Math.floor(Math.random() * (theTetraminos.length));
        current = theTetraminos[random][currentRotation]
        currentPosition = 4;
        draw()
        displayShape()
        addScore()
        gameOver()
    }
}

function moveLeft() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0);

    if (!isAtLeftEdge) currentPosition -=1

    if (current.some( index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition += 1;
    }
    draw()
}

function moveRight() {
    undraw();
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === width - 1);

    if (!isAtLeftEdge) currentPosition +=1

    if (current.some( index => squares[currentPosition + index].classList.contains('taken'))) {
        currentPosition -= 1;
    }
    draw()
}

function Rotate(){
    undraw();
    currentRotation++;
    if (currentRotation === current.length) {
        currentRotation = 0
    }
    current = theTetraminos[nextRandom][currentRotation];
    draw()
}

const displaySquares = document.querySelectorAll('.mini_grid div');
const displayWidth = 4;
let displayIndex = 0;


const upNextTetraminoes = [
    [1, displayWidth+1, displayWidth*2+1, 2],
    [0, displayWidth, displayWidth+1, displayWidth*2+1],
    [1, displayWidth, displayWidth+1, displayWidth+2],
    [0, 1, displayWidth+1, displayWidth],
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]
]

function displayShape() {
    displaySquares.forEach(square => {
        square.classList.remove('tetramino')
    })
    upNextTetraminoes[nextRandom].forEach( index =>{
        displaySquares[displayIndex + index].classList.add('tetramino')
    })
}

button.addEventListener('click', ()=>{
    if (timerId) {
        clearInterval(timerId)
        timerId = null
    }else{
        draw();
        timerId = setInterval(moveDown, 1000);
        random =  Math.floor(Math.random() * (theTetraminos.length));
        displayShape()
    }
})

function addScore() {
    for (let i = 0; i < 199; i +=width) {
        const row = [i, i+1, i+2, i+3, i+4,i+5, i+6, i+7, i+8, 1+9];
        
        if (row.every(index => squares[index].classList.contains('taken'))) {
            score +=10;
            displayScore.innerHTML = score;
            row.forEach(index => {
                squares[index].classList.remove('taken');
                squares[index].classList.remove('tetramino')
            }) 
            const squaresRemoved = squares.splice(i, width);
            squares = squaresRemoved.concat(squares);
            squares.forEach(cell => grid.appendChild(cell));       
        }
    }
}

function gameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
        displayScore.innerHTML = 'end'
        clearInterval(timerId)
    }
}

})