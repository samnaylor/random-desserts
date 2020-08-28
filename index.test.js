const rd = require('./index');

it('gets a random desert', () => {
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
    expect(rd.desserts).toContain(rd.getRandomDessertsName());
});