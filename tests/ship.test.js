import Ship from "../src/ship.js";

describe("Ship", () => {
  it("Hit 3 times with length 3 and sunk", () => {
    const ship = new Ship(3);

    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(0);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(2);
    ship.hit();
    expect(ship.hits).toBe(3);

    expect(ship.isSunk()).toBeTruthy();
  });

  it("Hit 3 times with length 4 and not sunk", () => {
    const ship = new Ship(4);

    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(0);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(2);
    ship.hit();
    expect(ship.isSunk()).toBeFalsy();
    expect(ship.hits).toBe(3);

    expect(ship.isSunk()).toBeFalsy();
  });
});
