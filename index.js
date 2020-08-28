const seedrandom = require('seedrandom');

const desserts = [
    'angel-delight',
    'angel-cake',
    'amandine',
    'bakewell',
    'brownie',
    'battenberg',
    'cake',
    'cupcake',
    'cookie',
    'doughnut',
    'eaton-mess',
    'eccles-cake',
    'fudge',
    'financier',
    'gingerbread',
    'fruitcake',
    'ice-cream',
    'gateau',
    'genoise',
    'hummingbird-cake',
    'jaffa-cake',
    'kuchen',
    'ladyfinger',
    'lamington',
    'malt-loaf',
    'opera',
    'panforte',
    'panettone',
    'rock-cake',
    'rum-baba',
    'stollen',
    'swiss-roll',
    'teacake',
    'torte',
    'tiramisu',
    'upside-down-cake',
    'yule-log',
    'zuger-kirschtorte'
];

module.exports.desserts = desserts;

module.exports.getRandomDessertsName = () => {
    const rng = seedrandom();
    const index = Math.ceil(rng() * desserts.length - 1);
    return desserts[index];
};