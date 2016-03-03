var player1 = 81;
var player2 = 80;
var score1 = 0;
var score2 = 0;
var trackLength = 10;

var racerTable1 = document.getElementsByClassName('racer_table1')[0];
var racerTable2 = document.getElementsByClassName('racer_table2')[0];

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case player1:
      var cells = racerTable1.getElementsByTagName('td');
      var snack = Math.floor(Math.random()* 8+1);
      if (score1 < trackLength) {
            score1 ++;
            console.log(score1)}
      if (score1 <= 1) {
        if (snack < 10) {
            cells[snack].className = 'sauce1';
            console.log(snack); }
      }
      for (var i=0; i < cells.length; i++) {
          if (cells[i].className.indexOf('active') !== -1) {
            if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            if (score1 === trackLength) {
            alert("sushi wins!!!");
            location.reload()
            }
            break;
          
          }
        }
      }
      break;
    
    case player2:
      var cells = racerTable2.getElementsByTagName('td');
      var snack = Math.floor(Math.random()* 8+1)
      if (score2 < trackLength) {
            score2 ++;
            console.log(score2) }
      if (score2 <= 1) {
        if (snack < 10) {
            cells[snack].className = 'sauce2';
            console.log(snack); }
      }
      for (var i=0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            

            if (score2 === trackLength) {
            alert("taco wins!!!");
            location.reload()
            }
            break;
          }
        }
      }
      break;
      }
  }

//the first click of either Q or P will also trigger
//the new var 'snack' to equal a random number between 1 and 10.
//this number will correspond to a cell on the track and append a 
//new class to it e.g "snack" and make it active.


//var snack = Math.floor(Math.random()* 8+1);
//cells[snack].addClass("sauce")