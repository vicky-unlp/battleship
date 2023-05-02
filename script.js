// Ship factory function:

const Ship = function (length = 1, hits = 0, symbol) {
    this.length = length;
    this.hits = hits;
    this.symbol = symbol;
    this.direction = 'H';

    const hit = function() {
        this.hits++;
    }

    const isSunk = function() {
        if (this.hits === this.length) {
            return true;
        }
        else {
            return false;
        }
    }

    return {
        length: length,
        hits: hits,
        symbol: symbol,
        hit: hit,
        isSunk: isSunk
    }
}

module.exports = {Ship};

