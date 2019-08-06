const assert = require('assert');
const solver = require('./solver');

const solvable_games = [
    "4C 8C 6S 7H 4D 6C 8S JH 2S 8H 4H KC AS 6H KD 7D JS TH AH 8D 9D AD 9S QS 7S TC 2D 5C 2C 9C TD 5S QC AC KH 9H 3C 7C 3S 3H 2H JD 5H 4S 6D QD 3D KS QH JC TS 5D",
    "KD 8S 9D QC JC 4H 5C 5D 4C 3H 2D 7C 6S TH KH 8C 8D AS TS AD 2S 4S TC 3C JH 3S KS 6D 6C QD 2H JS 8H QS 5H 7S AC 9S KC TD 3D 9H 7D 5S 4D 2C JD 6H QH 9C 7H AH",
    "2S 5D 7S 5H 4D AS TH KS AC AD QC 7H 3H 2H KC 4S JD KD 9C 9H 5C 6S 8C QS KH 3C 8H 6C AH QD 3D 5S JC JH 9D 7C 6D JS 9S TD 2D 4C 8D 2C TS TC 8S 4H 7D QH 6H 3S"
];

it('should solve known games', () => {
    assert.equal(true, true);
    solvable_games.forEach(function (i) {
        const array = i.split(' ');
        const result = solver.solve(array.slice(0, 28), array.slice(28, 52), 0, 3, []);
        assert.equal(result[0], true);
    });
});
