const seedrandom = require('seedrandom');

const desserts = [
    'cake',
    'ice-cream',
    'gateau'
];

module.exports.desserts = desserts;

module.exports.getRandomDessertsName = () => {
    const rng = seedrandom();
    const index = Math.floor(rng() * (desserts.length - 1));
    return desserts[index];
};