const Intern = require('..lib/Intern');

test('Creates an intern object', () => {
    const intern = new Intern('Yoshi', 18, 'yoshi.pa@gmail.com', 'Tecnologico de Monterrey');
    expect(intern.school).toEqual(expect.any(String));
});

test('get intern school name', () => {
    const intern = new Intern('Yoshi', 18, 'yoshi.pa@gmail.com', 'Tecnologico de Monterrey');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('get role of employee', () => {
    const intern = new Intern('Yoshi', 18, 'yoshi.pa@gmail.com', 'Tecnologico de Monterrey');
    expect(intern.getRole()).toEqual("Intern");
});