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
    'chocolate-orange-fudge-cake',
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

const rollN = (N) => {
    const rng = seedrandom();

    if (N > desserts.length) {
        throw new RangeError(`N must be less than ${desserts.length}`);
    }

    const res = [];
    while(res.length < N) {
        const dessert = desserts[Math.ceil(rng() * desserts.length - 1)];
        if (res.includes(dessert)) {
            continue;
        }
        res.push(dessert);
    }

    if (N === 1) {
        return res[0];
    }
    return res
};

const prettyDessert = (dessert) => {
    return (
        dessert
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' ')
            .trim()
    );
}

module.exports.rollThree = () => {
    return rollN(3);
};

module.exports.desserts = desserts;
module.exports.getRandomDessertsName = () => rollN(1);
module.exports.getRandomDessert = () => rollN(1);
module.exports.roll = () => rollN(1);
module.exports.rollN = rollN;
module.exports.prettyDessert = prettyDessert;
