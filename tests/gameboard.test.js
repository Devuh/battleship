import Gameboard from '../src/gameboard.js';
import Ship from '../src/ship.js';

describe('Gameboard', () => {
  describe('Place Ship', () => {
    it('Place ship of length 3, direction right at (3,6)', () => {
      let grid = new Gameboard();
      let ship = new Ship(3)
      grid.placeShip(3,6,'right',ship);

      expect(grid.board).toStrictEqual([[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',ship,ship,ship,' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ]
      ])
    });

    it('Place ship of length 2, direction down at (0,4)', () => {
      let grid = new Gameboard();
      let ship = new Ship(2)
      grid.placeShip(0,4,'down',ship);

      expect(grid.board).toStrictEqual([[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ship,' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ship,' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ]
      ])
    });

    it('Place ship of length 2, direction down at (10,4)', () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      expect(() => grid.placeShip(10,4,'down',ship)).toThrow(Error);
    });

    it('Place ship of length 2, direction down at (-1,4)', () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      expect(() => grid.placeShip(-1,4,'down',ship)).toThrow(Error);
    });

    it('Place ship of length 4, direction right at (9,4)', () => {
      let grid = new Gameboard();
      let ship = new Ship(4);
      expect(() => grid.placeShip(9,4,'right',ship)).toThrow(Error);
    });

    it('Place ship of length 2, direction down at (9,4)', () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      grid.placeShip(9,4,'down',ship);
      expect(grid.board).toStrictEqual([[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',ship,
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',ship,
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ]
      ])
    });

    it('Place ship of length 4, direction down at (9,9)', () => {
      let grid = new Gameboard();
      let ship = new Ship(4);
      expect(() => grid.placeShip(9,9,'down',ship)).toThrow(Error);
    });

    it('Place ship of length 2, direction right at (8,8)', () => {
      let grid = new Gameboard();
      let ship = new Ship(2);
      grid.placeShip(8,8,'right',ship);
      expect(grid.board).toStrictEqual([[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',ship,ship,
      ],[
        ' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',
      ]
      ]);
    });

    it('Place ship of length 3, direction right at (4,5) while (5,5) is occupied', () => {
      let grid = new Gameboard();
      let ship1 = new Ship(3);
      let ship2 = new Ship(3);
      grid.placeShip(5,4,'down',ship1);
      expect(() => grid.placeShip(4,5,'right',ship2)).toThrow(Error);
    });
  });
});