import Player from './player.js';

export default class GameController {
  static player1 = new Player();
  static player2 = new Player('computer');

  static players = [this.player1, this.player2];
}