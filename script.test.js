// Ship factory function

const {Ship} = require('./script');

test('Includes number of hits', () => {
    let ship = new Ship(3, 0);
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(2);
})

test('Indicates if sunk', () => {
    let ship = new Ship(5);
    let secondShip = new Ship(3);
    ship.hit();
    ship.hit();
    ship.hit();
    secondShip.hit();
    secondShip.hit();
    secondShip.hit();
    expect(ship.isSunk()).toBe(false);
    expect(secondShip.isSunk()).toBe(true);
})