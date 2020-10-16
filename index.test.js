const rd = require('./index');

it('gets a random desert', () => {

    const test = (func) => {
        const dessert = func();
        expect(rd.desserts).toContain(dessert);
    };

    for (let index = 0; index < 100; index++) {
        test(rd.getRandomDessertsName);
        test(rd.getRandomDessert);
        test(rd.roll);
    }
});

it('gets three unique deserts at once', () => {

    const allThree = rd.rollThree();
    const allThreeSet = new Set(allThree);

    expect(allThree.length).toBe(3);
    expect(allThreeSet.size).toBe(3);

    allThree.forEach(dessert => {
        expect(rd.desserts).toContain(dessert);
    });
});

it('gets N unique deserts at once', () => {

    const all = rd.rollN(20);
    const allSet = new Set(all);

    expect(all.length).toBe(20);
    expect(allSet.size).toBe(20);

    all.forEach(dessert => {
        expect(rd.desserts).toContain(dessert);
    });
});

it('pretty prints a dessert', () => {
    const dessert = 'jaffa-cake';
    const pretty  = rd.prettyPrint(dessert);
    
    expect(pretty).toBe('Jaffa Cake');
});

it('should fail', () => {
    const check = () => rd.rollN(rd.desserts.length + 1);
    expect(check).toThrow(RangeError);
});
