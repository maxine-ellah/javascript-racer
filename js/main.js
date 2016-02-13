var player1 = 81;
var player2 = 80;
var score1 = 0;
var score2 = 0;
var trackLength = 9;

var racerTable1 = document.getElementsByClassName('racer_table1')[0];
var racerTable2 = document.getElementsByClassName('racer_table2')[0];

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case player1:
      var cells = racerTable1.getElementsByTagName('td');
      if (score1 === trackLength) {
      alert("Player one wins!!!");
      location.reload()
      }
      for (var i=0; i < cells.length; i++) {
          if (cells[i].className.indexOf('active') !== -1) {
            if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            if (score1 < trackLength) {
            score1 ++;
            console.log(score1) }
            break;
          
          }
        }
      }
      break;
    
    case player2:
      var cells = racerTable2.getElementsByTagName('td');
      if (score2 === trackLength) {
      alert("Player two wins!!!");
      location.reload()
      }
      for (var i=0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            if (score2 < trackLength) {
            score2 ++;
            console.log(score2) }
            break;
          }
        }
      }
      break;
      }
  }
