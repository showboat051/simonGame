/******* Constants and State Variable ********** */
let game;


/******* CACHED RESOURCES ********** */
const squareEls = document.getElementsByClassName('piece');
const start = document.getElementById('start');
const round = document.getElementById('round');
const message = document.getElementById('message');
const square = ['#blue', '#yellow', '#aqua', '#red', '#green']

/******* EVENT LISTENERS *******/
document.getElementById('playArea').addEventListener('click', handleClick);
document.getElementById('start').addEventListener('click', init);

/******* FUNCTIONS *******/
function init() {
  game = {
    level: 1,
    order: [],
    playerOrder: [],
    cpuOrder: []
  }
  cpuTurn();
}

function cpuTurn() {
  // cpu will grab a random color
  handleFlash();
  // flash random color
  //  
}

function handleClick() {
  // allow user to make selection
}


function randPiece() {
  const randIdx = square[Math.floor(Math.random() * square.length)];
  game.order.push(randIdx)
  return document.querySelector(randIdx);
 }

function handleFlash() { 
  let piece = randPiece()
       setTimeout(function(){
         piece.style.filter = "brightness(50%)"; 
       },200);
       setInterval(function(){
         piece.style.filter = "brightness(100%)"; 
       },500);

// function playerTurn() {
//   // player's response must match CPU
//   // Check if player matched CPU
//   // IF not call game over and restart 
// }

}


    
  







  