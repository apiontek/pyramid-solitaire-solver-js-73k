const assert = require('assert');
const solver = require('./solver');

const solvable_games = [
    "4C 8C 6S 7H 4D 6C 8S JH 2S 8H 4H KC AS 6H KD 7D JS TH AH 8D 9D AD 9S QS 7S TC 2D 5C 2C 9C TD 5S QC AC KH 9H 3C 7C 3S 3H 2H JD 5H 4S 6D QD 3D KS QH JC TS 5D"
];

it('should solve known games', () => {
    assert.equal(true, true);
    solvable_games.forEach(function (i) {
        const array = i.split(' ');
        const result = solver.solve(array.slice(0, 28), array.slice(28, 52), 0, 3, []);
        assert.equal(result[0], true);
    });
});
