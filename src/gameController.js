import Player from './player.js';

class GameController {
  constructor(playerType = 'computer') {
    this.player1 = new Player();
    this.player2 = new Player(playerType);
  }
}