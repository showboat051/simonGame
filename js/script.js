/******* CACHED RESOURCES ********** */
const squareEls = document.getElementsByClassName('piece');
const start = document.getElementById('start');
const round = document.getElementById('round');
const message = document.getElementById('message');
const square = ['#blue', '#yellow', '#aqua', '#red', '#green']

/******* EVENT LISTENERS *******/
document.getElementById('playArea').addEventListener('click', handleFlash);
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
  // handleFlash();
  // flash random color
  //  
}
    function randPiece(square) {
     return square[Math.floor(Math.random() * square.length)];
     }
     console.log(randPiece(square));
     
      function handleFlash() { 
       setTimeout(function(){
         randPiece.style.filter = "brightness(50%)"; 
       },200);
       setInterval(function(){
         randPiece.style.filter = "brightness(100%)"; 
       },500);

// function playerTurn() {
//   // player's response must match CPU
//   // Check if player matched CPU
//   // IF not call game over and restart 
// }

      
    }


    
  







  