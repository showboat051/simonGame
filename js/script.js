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
    cpuOrder: [],
    count: []
  }
  cpuTurn();

  console.log(game)
}
 function cpuTurn() {
  handleFlash()
    game.cpuOrder.push() 
  };
  

function handleClick(e) {
  let playerChoice = e.target.id;
  game.playerOrder.push(playerChoice);
  // return document.querySelector(playerChoice);
  console.log(playerChoice)
}


function randPiece() {
  const randIdx = square[Math.floor(Math.random() * square.length)];
  game.order.push(randIdx)
  return document.querySelector(randIdx);
  console.log(randPiece)
 }

function handleFlash() { 
  let piece = randPiece()
       setTimeout(function(){
         piece.style.filter = "brightness(50%)"; 
       },200);
       setInterval(function(){
         piece.style.filter = "brightness(100%)"; 
       },500);


}


    
  







  