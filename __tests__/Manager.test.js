
const Manager = require("../lib/Manager");

jest.mock('../lib/Manager.js');

test('creates Manager', () => {
    const employee = new Manager('Milton')

    ('Manager', () => {

        it ('new Manager', () => {

            const obj = new Manager();

            expect(typeof(manager)).toBe('object');
    });
    it('name, id, email, officeNumber', () => {
        const name = 'Arthur';
        const id = 7;
        const email = 'arthur789@outlook.com';
        const officeNumber = '1072'
        const manager = new Manager(name, id, email, officeNumber);

        expect(manager.name).toBe(name);
        expect(manager.id).toBe(id);
        expect(manager.email).toBe(email);
        expect(manager.officeManager).toBe(officeNumber);
    });
    it('officeNumber, roles', () => {
        const officeNumber = '1101';
        const role = 'Manager'
        const manager = new Manager('Arthur', 36, 'arthur234@gmail.com', officeNumber);

        expect(manager.getOfficeNumber()).toBe(officeNumber);
        expect(manager.getRole()).toBe(role);
        });
    });
});
