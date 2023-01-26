
const Engineer = require("../lib/Engineer");

jest.mock('../lib/Engineer.js');

test('creates Engineer', () => {
    const employee = new Employee('josh');

    ('Engineer', () => {

    it('new engineer', () => {
        const obj = new Engineer();

        expect(typeof(obj)).toBe('object');
    });
    it("name, id, email", () => {
        const name = 'Mckenna';
        const id = 5;
        const email = 'mckenna123@gmail.com';
        const github = 'mckenna1987'
        const engineer = new Engineer(name, id, email, github);

        expect(engineer.name).toBe(name)
        expect(engineer.id).toBe(id);
        expect(engineer.email).toBe(email);
        expect(engineer.github).toBe(github);
    });
    it("", () => {
        const name = 'thomas';
        const id = 4;
        const email = 'thomas123@gmail.com';
        const role = 'Employee'
        const employee = new Employee(name, id, email);

        expect(employee.getName()).toBe(name);
        expect(employee.getId()).toBe(id);
        expect(employee.getEmail()).toBe(email);
        expect(employee.getRole()).toBe(role);
    });
        it('github, method roles', () => {
            const github = 'mckenna1987';
            const role = 'Engineer'
            const engineer = new Engineer('stacy', 26, 'stacy123@gmail.com', github);

            expect(engineer.getGithub()).toBe(github);
            expect(engineer.getRole()).toBe(role);
        });
    });
});

