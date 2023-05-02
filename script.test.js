// Ship factory function

const {Ship, gameBoard} = require('./script');

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

// Gameboard function factory

test('Boards have the correct length and width', () => {
    let board = new gameBoard();
    expect(board.playerBoard.length).toBe(10);
    expect(board.playerBoard[0].length).toBe(10);
    expect(board.enemyBoard.length).toBe(10);
    expect(board.enemyBoard[0].length).toBe(10);
})

test('Ships get right position', () => {
    let board = new gameBoard();
    expect(board.playerBoard[1][1]).toBe('C');
    expect(board.playerBoard[3][3]).toBe('B');
    expect(board.playerBoard[3][1]).toBe('B');
    expect(board.playerBoard[5][3]).toBe('D');
    expect(board.playerBoard[5][1]).toBe('D');
    expect(board.playerBoard[5][4]).toBe('');
    expect(board.playerBoard[7][2]).toBe('P');
    expect(board.playerBoard[7][5]).toBe('S');
    expect(board.playerBoard[7][8]).toBe('');
    expect(board.playerBoard[0][0]).toBe('');
    expect(board.playerBoard[9][9]).toBe('');
})

test.skip('Ships can be deleted and repositionated', () => {

})

test.skip('Game recognizes attack', () => {
    let board = new gameBoard();
    board.carrier.hit();
    board.battleship.hit();
    board.battleship.hit();
    board.battleship.hit();
    expect(board.carrier.hits).toBe(1);
    expect(board.battleship.hits).toBe(3);
})

test.skip('Game recognizes missed shots', () => {
    let board = new gameBoard();
    board.hit();
    expect(board.missedHits).toBe(1);
})

test.skip('Alert when all ships have been sunk', () => {
    let board = new gameBoard();
    expect(board.allSunk()).toBe(true);
})