import "./styles.css";
import GameController from "./gameController.js";
import Ship from "./ship.js";

class DOM {
  static domGrids = document.querySelectorAll('.grid');

  static #getSquare(x,y,player) {
    return document.getElementById(`${x}-${y}-${GameController.players.indexOf(player)+1}`);
  }

  static placeHit(x,y,player) {
    let square = this.#getSquare(x,y,player);
    player.board.receiveAttack(x,y);
    if(player.board.board[y][x] === 'o') {
      square.classList.add('miss');
    } else {
      square.classList.add('hit');
    }
  }

  static placeShip(x,y,direction,ship,player) {
    player.board.createShip(x,y,direction,ship);
    for (let i = 0; i < ship.length; i++) {
      let square = this.#getSquare(x,y,player);
      if(player.type === 'human') square.classList.add('ship');
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

let player1 = GameController.player1;
let player2 = GameController.player2;

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

// DOM.placeHit(4,4,player2);
// DOM.placeHit(2,4,player2);

// console.log(player1.board);
// console.log(player2.board);

// Event listeners

// let player1 = GameController.player1;
// let player2 = GameController.player2;

let game = document.querySelector('#game');

game.addEventListener('click', (event) => {
  if(event.target.classList.contains('square') && event.target.id.slice(-1) === "2") {
    let id = event.target.id;
    let x = id.slice(0,1);
    let y = id.slice(2,3);
    let player = id.slice(4);
    DOM.placeHit(x,y,GameController.players[player-1]);
  }
});