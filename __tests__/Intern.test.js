
const Intern = require("../lib/Intern");

jest.mock('../lib/Intern.js');

test('creates Intern', () => {
    const intern = new Intern('jmt');

    ('Intern', () => {

        it('new Intern', () => {
            const intern = new Intern();

            expect(typeof(intern)).toBe('object');
        });
        it('name, id, email, school', () => {
            const name = 'Albert';
            const id = 24;
            const email = 'albert123@yahoo.com';
            const school = 'Sam Houston State'
            const intern = new Intern(name, id, email, school);

            expect(intern.name).toBe(name);
            expect(intern.id).toBe(id);
            expect(intern.email).toBe(email);
            expect(intern.school).toBe(school);
        });
        it('school, roles', () => {
            const school = 'Ohio State University';
            const role = 'Intern'
            const intern = new Intern('Paris', 19, 'paris456@icloud', school);

            expect(intern.getSchool()).toBe(school);
            expect(intern.getRole()).toBe(role);
            });
        });
    });
