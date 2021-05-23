const Engineer = require('..lib/Engineer');

test('Creates an engineer object', () => {
    const engineer = new Engineer('Yoshi', 18, 'yoshi.pa@gmail.com', 'yoshi6');
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineer github value', () => {
    const engineer = new Engineer('Yoshi', 18, 'yoshi.pa@gmail.com', 'yoshi6');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Yoshi', 18, 'yoshi.pa@gmail.com', 'yoshi6');
    expect(engineer.getRole()).toEqual("Engineer");
});