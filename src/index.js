import "./styles.css";
import GameController from "./gameController.js";
import Ship from "./ship.js";

class DOM {
  static domGrids = document.querySelectorAll('.grid');

  // #setSquare(x,y,player) {
  //   if(typeof player.board[x,y] === 'object') {

  //   }
  // }

  static drawGrids() {
    this.domGrids.forEach((grid) => {
      for (let i = 0; i < 10; i++) {
        const column = document.createElement('div');
        column.setAttribute('class','column');
        grid.appendChild(column);
        for(let j = 0; j < 10; j++) {
          const square = document.createElement('div');
          square.setAttribute('class','square');
          square.id = `${i},${j}`;
          column.appendChild(square);
        }
      }
    });
  }

  // static updateGrids() {
  //   let playerNum = 0;
  //   this.domGrids.forEach((grid) => {
  //     player = GameController.players[playerNum];
  //     playerNum++;

  //     for (let i = 0; i < 10; i++) {
  //       for(let j = 0; j < 10; j++) {
  //         this.#setSquare(i,j,player);
  //       }
  //     }
  //   });
  // }
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

player1.board.placeShip(0,0,'right',player1Ship1);
player1.board.placeShip(4,3,'down',player1Ship2);
player1.board.placeShip(9,6,'down',player1Ship3);

player2.board.placeShip(0,0,'down',player2Ship1);
player2.board.placeShip(3,4,'right',player2Ship2);
player2.board.placeShip(6,9,'right',player2Ship3);

console.log(player1.board);
console.log(player2.board);