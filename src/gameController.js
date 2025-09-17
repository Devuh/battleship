import Player from "./player.js";

export default class GameController {
  static player1 = new Player();
  static player2 = new Player("computer");

  static #computerPossibleMoves = [];

  static players = [this.player1, this.player2];

  static #listPossibleMoves() {
    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        this.#computerPossibleMoves.push([i,j]);
      }
    }
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
