var player1 = 81;
var player2 = 80;

var racerTable1 = document.getElementsByClassName('racer_table1')[0];
var racerTable2 = document.getElementsByClassName('racer_table2')[0];

document.onkeyup = function(e) {
  switch (e.keyCode) {
    case player1:
      var cells = racerTable1.getElementsByTagName('td');
      for (var i=0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            break;
          }
        }
      }
      break;
    
    case player2:
      var cells = racerTable2.getElementsByTagName('td');
      for (var i=0; i < cells.length; i++) {
        if (cells[i].className.indexOf('active') !== -1) {
          if (i === (cells.length - 1)) {
            // do nothing, all the way left
          } else {
            cells[i].className = '';
            cells[i+1].className = 'active';
            break;
          }
        }
      }
      break;
  }
}