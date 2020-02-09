/******* CACHED RESOURCES ********** */
const squareEls = document.getElementsByClassName('piece');
const start = document.getElementById('start');
const round = document.getElementById('round');
const message = document.getElementById('message');
// const blue = document.getElementById('#blue');
// const yellow = document.getElementById('#yellow');
// const aqua = document.getElementById('#aqua');
// const red = document.getElementById('red');
// const green = document.getElementById('green');
const square = ['#blue', '#yellow', '#aqua', '#red', '#green']

/******* EVENT LISTENERS *******/
document.getElementById('playArea').addEventListener('click', event);
document.getElementById('start').addEventListener('click', init);

/******* FUNCTIONS *******/
function init() {
  game: {
    level: 1,
    order = [],
    playerOrder = [],
    cpuOrder = []
  }
  cpuTurn();
}

function cpuTurn() {
  // cpu will grab a random color
  handleFlash();
  // flash random color
  //  
}

function playerTurn() {
  // player's response must match CPU
  // Check if player matched CPU
  // IF not call game over and restart 
}

  
function handleFlash() {
  let randPiece = Math.floor(Math.random() * square.length); 
  var s = document.getElementById('playArea');
  setTimeout(function(){
    s.style.filter = "brightness(50%)"; 
  },200);
  setInterval(function() {
    s.style.filter = "brightness(100%)";
  },500);
  
}
