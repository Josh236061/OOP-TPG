
const Employee = require("../lib/Employee");

jest.mock('../lib/Employee.js');

test('creates Employee', () => {
    const employee = new Employee('josh');

    ('Employee', () => {

    it('new employee', () => {
        const obj = new Employee();

        expect(typeof(obj)).toBe('object');
    });
    it("name, id, email", () => {
        const name = 'Josh';
        const id = 3;
        const email = 'josh123@gmail.com';
        const employee = new Employee(name, id, email);

        expect(employee.name).toBe(name)
        expect(employee.id).toBe(id);
        expect(employee.email).toBe(email);
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
    });
});
