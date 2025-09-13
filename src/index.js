import "./styles.css";

function drawGrid(grid) {
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

const grids = document.querySelectorAll('.grid');
drawGrid(grids[0]);
drawGrid(grids[1]);