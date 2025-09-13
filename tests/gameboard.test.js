import Gameboard from "../src/gameboard.js";
import Ship from "../src/ship.js";

describe("Gameboard", () => {
  describe("Place Ship", () => {
    it("Place ship of length 3, direction right at (3,6)", () => {
      let grid = new Gameboard();
      let ship = new Ship(3);
      grid.placeShip(3, 6, "right", ship);

      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", ship, ship, ship, " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Place ship of length 2, direction down at (0,4)", () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      grid.placeShip(0, 4, "down", ship);

      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [ship, " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [ship, " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Place ship of length 2, direction down at (10,4)", () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      expect(() => grid.placeShip(10, 4, "down", ship)).toThrow(Error);
    });

    it("Place ship of length 2, direction down at (-1,4)", () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      expect(() => grid.placeShip(-1, 4, "down", ship)).toThrow(Error);
    });

    it("Place ship of length 4, direction right at (9,4)", () => {
      let grid = new Gameboard();
      let ship = new Ship(4);
      expect(() => grid.placeShip(9, 4, "right", ship)).toThrow(Error);
    });

    it("Place ship of length 2, direction down at (9,4)", () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      grid.placeShip(9, 4, "down", ship);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", ship],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", ship],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Place ship of length 4, direction down at (9,9)", () => {
      let grid = new Gameboard();
      let ship = new Ship(4);
      expect(() => grid.placeShip(9, 9, "down", ship)).toThrow(Error);
    });

    it("Place ship of length 2, direction right at (8,8)", () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      grid.placeShip(8, 8, "right", ship);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", ship, ship],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Place ship of length 3, direction right at (4,5) while (5,5) is occupied", () => {
      let grid = new Gameboard();
      let ship1 = new Ship(3);
      let ship2 = new Ship(3);
      grid.placeShip(5, 4, "down", ship1);
      expect(() => grid.placeShip(4, 5, "right", ship2)).toThrow(Error);
    });
  });

  describe("Receive Attack", () => {
    it("Receive attack on empty grid at (3,5)", () => {
      let grid = new Gameboard();
      grid.receiveAttack(3, 5);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "o", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Receive attack on empty grid at (3,5) twice", () => {
      let grid = new Gameboard();
      grid.receiveAttack(3, 5);
      expect(() => grid.receiveAttack(3, 5)).toThrow(Error);
    });

    it("Receive attack on ocuppied space (3,5)", () => {
      let grid = new Gameboard();
      let ship = new Ship(3);
      grid.placeShip(3, 5, "right", ship);
      grid.receiveAttack(3, 5);
      expect(ship.hits).toBe(1);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "x", ship, ship, " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
    });

    it("Receive attack on ocuppied space (3,5) twice", () => {
      let grid = new Gameboard();
      let ship = new Ship(3);
      grid.placeShip(3, 5, "right", ship);
      grid.receiveAttack(3, 5);
      expect(ship.hits).toBe(1);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "x", ship, ship, " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
      expect(() => grid.receiveAttack(3, 5)).toThrow(Error);
    });

    it("Receive 3 attacks on ship of length 3", () => {
      let grid = new Gameboard();
      let ship = new Ship(3);
      grid.placeShip(3, 5, "right", ship);
      expect(grid.isAllShipsSunk()).toBeFalsy();
      grid.receiveAttack(3, 5);
      grid.receiveAttack(4, 5);
      grid.receiveAttack(5, 5);
      expect(ship.hits).toBe(3);
      expect(grid.board).toStrictEqual([
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "x", "x", "x", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
      expect(() => grid.receiveAttack(3, 5)).toThrow(Error);
      expect(grid.isAllShipsSunk()).toBeTruthy();
    });

    it("Receive 2 attacks on empty spaces then 2 on occupied spaces", () => {
      let grid = new Gameboard();
      let ship = new Ship(3);
      grid.placeShip(3, 5, "right", ship);
      grid.receiveAttack(0, 0);
      grid.receiveAttack(4, 3);
      grid.receiveAttack(3, 5);
      grid.receiveAttack(5, 5);
      expect(ship.hits).toBe(2);
      expect(grid.board).toStrictEqual([
        ["o", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", "o", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", "x", ship, "x", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
      ]);
      expect(() => grid.receiveAttack(3, 5)).toThrow(Error);
      expect(grid.isAllShipsSunk()).toBeFalsy();
    });
  });
});
