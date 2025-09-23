import "./styles.css";
import GameController from "./gameController.js";
import Ship from "./ship.js";

/*
5 ships total
Length: | Quantity:
5       | 1
4       | 2
3       | 1
2       | 1
*/

class DOM {
  static domGrids = document.querySelectorAll(".grid");
  static playerTurn = true;
  static minShipQty = 5;

  static #getSquare(x, y, player) {
    return document.getElementById(
      `${x}-${y}-${GameController.players.indexOf(player) + 1}`,
    );
  }

  static #runComputerTurn() {
    this.playerTurn = false;
    let position = GameController.getComputerTurn();
    setTimeout(() => {
      this.placeHit(position[0],position[1],GameController.player1);
      let square = this.#getSquare(position[0],position[1],GameController.player1);
      if(square.classList.contains("hit")) {
        this.#runComputerTurn();
      } else {
        this.playerTurn = true;
      }
    },1000);
  }

  static #endGame() {
    const dialog = document.querySelector("dialog");
    let gameOverText = document.querySelector("#game-over");
    if(GameController.player2.board.isAllShipsSunk()) {
      gameOverText.textContent = "You win!";
    } else {
      gameOverText.textContent = "You lose.";
    }
    dialog.showModal();
  }

  static resetGame() {
    const dialog = document.querySelector("dialog");
    GameController.resetPlayers();
    dialog.close();
    this.drawGrids();
    DOM.placeShip(2,3,"right",new Ship(3),GameController.player1);
    DOM.placeShip(2,3,"right",new Ship(3),GameController.player2);
  }

  static placeHit(x, y, player) {
    if (player.board.ships.length < this.minShipQty) throw new Error("Player must have a complete board");

    let square = this.#getSquare(x, y, player);
    player.board.receiveAttack(x, y);
    if (player.board.board[y][x] === "o") {
      square.classList.add("miss");
    } else {
      square.classList.add("hit");
    }

    if(player.board.isAllShipsSunk()) {
      this.#endGame();
    } else if(player.type === "computer" && !square.classList.contains("hit")) {
      this.#runComputerTurn();
    }
  }

  static placeShip(x, y, direction, ship, player) {
    player.board.createShip(x, y, direction, ship);
    for (let i = 0; i < ship.length; i++) {
      let square = this.#getSquare(x, y, player);
      if (player.type === "human") square.classList.add("ship");
      direction === "right" ? x++ : y++;
    }
  }

  static drawGrids() {
    this.domGrids.forEach((grid, player) => {
      grid.innerHTML = "";

      player++;
      for (let i = 0; i < 10; i++) {
        const column = document.createElement("div");
        column.setAttribute("class", "column");
        grid.appendChild(column);
        for (let j = 0; j < 10; j++) {
          const square = document.createElement("div");
          square.setAttribute("class", "square");
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

DOM.placeShip(4, 0, "right", player1Ship1, player1);
DOM.placeShip(6, 3, "down", player1Ship2, player1);
DOM.placeShip(2, 6, "down", player1Ship3, player1);

DOM.placeShip(0, 0, "down", player2Ship1, player2);
DOM.placeShip(3, 4, "right", player2Ship2, player2);
DOM.placeShip(6, 9, "right", player2Ship3, player2);

let game = document.querySelector("#game");

const dialog = document.querySelector("dialog");
const newGame = dialog.querySelector("button");

game.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("square") &&
    event.target.id.slice(-1) === "2" &&
    DOM.playerTurn === true
  ) {
    let id = event.target.id;
    let x = id.slice(0, 1);
    let y = id.slice(2, 3);
    let player = id.slice(4);
    DOM.placeHit(x, y, GameController.players[player - 1]);
  }
});

newGame.addEventListener("click", () => DOM.resetGame());
