var playerOne = 81;
var playerTwo = 80;

function newGame () {

var move = document.getElementById("player1_strip").getElementsByTagName("td");
for(var i=0; i<move.length; i++) {
  move[i].addEventListener('keyup', function(){
    var move = document.getElementByClassName("active");
    for(var i=0; i<move.length; i++){
      move[i].className = "";
    }
    this.className = "active";
  }
}

