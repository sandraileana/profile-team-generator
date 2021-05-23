const Manager = require('..lib/Manager');

test('Creates a manager object', () => {
    const manager = new Manager('Yoshi', 18, 'yoshi.pa@gmail.com', 525555554444);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get role of employee', () => {
    const manager = new Manager('Yoshi', 18, 'yoshi.pa@gmail.com', 525555554444);
    expect(manager.getRole()).toEqual("manager");
});