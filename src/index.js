import "./styles.css";

class DOM {
  static drawGrid(grid) {
    for (let i = 0; i < 10; i++) {
      const column = document.createElement('div');
      column.setAttribute('class','column');
      grid.appendChild(column);
      for(let i = 0; i < 10; i++) {
        const square = document.createElement('div');
        square.setAttribute('class','square');
        column.appendChild(square);
      }
    }
  }
}

let grids = document.querySelectorAll('.grid');

DOM.drawGrid(grids[0]);
DOM.drawGrid(grids[1]);