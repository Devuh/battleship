import "./styles.css";
import GameController from "./gameController.js";
import Ship from "./ship.js";
import Gameboard from "./gameboard.js";

class DOM {
  static domGrids = document.querySelectorAll('.grid');

  static placeShip(x,y,direction,ship,player) {
    player.board.createShip(x,y,direction,ship);
    for (let i = 0; i < ship.length; i++) {
      let square = document.getElementById(`${x}-${y}-${GameController.players.indexOf(player)+1}`);
      square.classList.add('ship');
      direction === "right" ? x++ : y++;
    }
  }

  static drawGrids() {
    this.domGrids.forEach((grid, player) => {
      player++;
      for (let i = 0; i < 10; i++) {
        const column = document.createElement('div');
        column.setAttribute('class','column');
        grid.appendChild(column);
        for(let j = 0; j < 10; j++) {
          const square = document.createElement('div');
          square.setAttribute('class','square');
          square.id = `${i}-${j}-${player}`;
          column.appendChild(square);
        }
      }
    });
  }
}

DOM.drawGrids();

// Populate grid with random coordinates

let player2 = GameController.player2;
let player1 = GameController.player1;

let player1Ship1 = new Ship(3);
let player1Ship2 = new Ship(4);
let player1Ship3 = new Ship(2);

let player2Ship1 = new Ship(3);
let player2Ship2 = new Ship(4);
let player2Ship3 = new Ship(2);

DOM.placeShip(0,0,'right',player1Ship1,player1);
DOM.placeShip(4,3,'down',player1Ship2,player1);
DOM.placeShip(9,6,'down',player1Ship3,player1);

DOM.placeShip(0,0,'down',player2Ship1,player2);
DOM.placeShip(3,4,'right',player2Ship2,player2);
DOM.placeShip(6,9,'right',player2Ship3,player2);

console.log(player1.board);
console.log(player2.board);