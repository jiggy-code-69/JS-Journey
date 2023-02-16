

function generateChessboard(width, height) {
    let board = "";
    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        if ((row + col) % 2 === 0) {
          board += " ";
        } else {
          board += "#";
        }
      }
      board += "<br>";
    }
    document.write("<pre>" + board + "</pre>");
  }
  
  generateChessboard(8, 8);
  
  
  