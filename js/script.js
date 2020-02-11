  /******* Constants and State Variable ********** */
let game, winner, level, clickCounter;


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
    playerOrder: [],
    cpuOrder: [],
    count: []
  }
  winner = false;
  level = 3;
  clickCounter = 0;
  cpuTurn();
}
function cpuTurn() {
  let counter = level;
  let timer = setInterval(function(){
      if(counter === 0) return clearInterval(timer)
      handleFlash()
      counter--
    },500)
  };
  
// Handles user on the playarea and start button clicks
 function handleClick(e) {
  let playerChoice = e.target.id;
  game.playerOrder.push(playerChoice);
  clickCounter++
  if(clickCounter === level) {
    winner = handleCheckWinner();
  }
}
// Picks a random piece
function randPiece() {
  const randIdx = square[Math.floor(Math.random() * square.length)];
  game.cpuOrder.push(randIdx.replace('#', ''))
  return document.querySelector(randIdx);
 }
// Flashes the random piece
function handleFlash() { 
  let piece = randPiece()
       setTimeout(function(){
         piece.style.filter = "brightness(50%)"; 
       },200);
       setInterval(function(){
         piece.style.filter = "brightness(100%)"; 
       },500);
}
// Runs after a win
function handleCheckWinner() {
  // document.getElementById('message') = "You Win!"
  if(game.cpuOrder.join("") === game.playerOrder.join("")) {
    console.log('winner')
    return true
  } else {
    console.log('that was not a match')
    return false;
  }
}

 function checkResults () {
  if (playerChoice === cpuOrder) {
    winner(); 
  } else if (playerChoice !== cpuOrder) {
    document.getElementById('message') = "You LOSE!!"; init();
  } else {
    return winner = null
  }
}


    
  









  