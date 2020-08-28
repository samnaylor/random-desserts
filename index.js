const seedrandom = require('seedrandom');

const desserts = [
    'cake',
    'ice-cream',
    'gateau'
];

module.exports.getRandomDessertsName = () => {
    const rng = seedrandom();
    const index = Math.floor(rng) * desserts.length();
    return desserts[index];
}