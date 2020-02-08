/******* CACHED RESOURCES ********** */
const squareEls = document.getElementsByClassName('piece');
const start = document.getElementById('start');
const round = document.getElementById('round');
const message = document.getElementById('message');

/******* EVENT LISTENERS *******/
document.getElementById('playArea').addEventListener('click', handleButtonClick);
document.getElementById('start').addEventListener('click', init);

/******* FUNCTIONS *******/
function init() {
 handleStartGame(); 
}

function handleButtonClick() {
}

function handleStartGame () {
  handleFlash();
}
function handleFlash() {
  var f = document.getElementById('playArea');
  setTimeout(function(){
    f.style.filter = "brightness(50%)"; 
  },200);
  setInterval(function() {
    f.style.filter = "brightness(100%)";
  },500);
}