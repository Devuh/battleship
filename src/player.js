import Gameboard from "./gameboard.js";

export default class Player {
  constructor(type = "human") {
    type = type.toLowerCase();
    if (type !== "human" && type !== "computer")
      throw new Error("Invalid player type");
    this.type = type;
    this.board = new Gameboard();
  }
}
