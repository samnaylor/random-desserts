const rd = require('./index');

it('gets a random desert', () => {

    const test = () => {
        const des = rd.getRandomDessertsName();
        console.log(des);
        expect(rd.desserts).toContain(des);
    };

    for (let index = 0; index < 100; index++) {
        test();
    }
});