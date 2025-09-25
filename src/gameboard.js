export default class Gameboard {
  constructor() {
    this.board = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.board[i] = new Array(10).fill(" ");
    }
    this.ships = [];
  }

  #isOutOfBounds(x, y, direction, ship) {
    let longestCoord;

    // Check that the last ship coord will not go out of bounds
    if (direction === "right") {
      longestCoord = x + ship.length - 1;
    } else {
      longestCoord = y + ship.length - 1;
    }

    if (longestCoord > 9) throw new Error("Out of bounds");

    if (x > 9 || x < 0 || y > 9 || y < 0) throw new Error("Out of bounds");
  }

  #isOccupied(x, y, direction, ship) {
    for (let i = 0; i < ship.length; i++) {
      if (
        typeof this.board[y][x] === "object"
      ) {
        throw new Error("Space occupied");
      }
      direction === "right" ? x++ : y++;
    }
  }

  createShip(x, y, direction, ship) {
    this.#isOutOfBounds(x, y, direction, ship);
    this.#isOccupied(x, y, direction, ship);

    // x and y are inverse in a matrix
    for (let i = 0; i < ship.length; i++) {
      this.board[y][x] = ship;
      direction === "right" ? x++ : y++;
    }

    this.ships.push(ship);
  }

  getRandomShipCoord(ship) {
    let possiblePlaces = [];
    let direction = Math.floor(Math.random() * 2) === 0 ? "right" : "down";

    for(let x = 0; x <= 9; x++) {
      for(let y = 0; y <= 9; y++) {
        try {
          this.#isOutOfBounds(x,y,direction,ship);
          this.#isOccupied(x,y,direction,ship);
          possiblePlaces.push([x,y]);
        } catch {
          continue;
        }
      }
    }

    let randomCoord = possiblePlaces[Math.floor(Math.random() * possiblePlaces.length)];
    return [...randomCoord, direction];
  }

  receiveAttack(x, y) {
    // x and y are inverse in a matrix
    if (this.board[y][x] === " ") {
      this.board[y][x] = "o";
    } else if (this.board[y][x] === "o" || this.board[y][x] === "x") {
      throw new Error("Already guessed");
    } else {
      this.board[y][x].hit();
      this.board[y][x] = "x";
    }
  }

  isAllShipsSunk() {
    let allSunk = true;

    for (let i = 0; i < this.ships.length; i++) {
      if (this.ships[i].length !== this.ships[i].hits) allSunk = false;
    }

    return allSunk;
  }
}
