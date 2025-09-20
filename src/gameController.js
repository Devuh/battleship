import Player from "./player.js";

export default class GameController {
  static player1 = new Player();
  static player2 = new Player("computer");

  static #computerPossibleMoves = [];

  static players = [this.player1, this.player2];

  static #listPossibleMoves() {
    this.#computerPossibleMoves = [];
    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        this.#computerPossibleMoves.push([i,j]);
      }
    }
  }

  static resetPlayers() {
    this.player1 = new Player();
    this.player2 = new Player("computer");
    this.#listPossibleMoves();
    this.players = [this.player1, this.player2];
  }

  static getComputerTurn() {
    let index = Math.floor(Math.random() * this.#computerPossibleMoves.length);
    let position = this.#computerPossibleMoves[index];
    this.#computerPossibleMoves = this.#computerPossibleMoves.filter((item) => {
      return item !== position;
    });
    return position;
  }

  static {
    this.#listPossibleMoves();
  }
}
