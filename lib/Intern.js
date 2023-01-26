const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        // connects Employee.js file to THIS File
        super(name, id, email, 'Intern');

        this.school = school;
       /* 
        this.name = name;
        this.id = id;
        this.email = email;
        */
    }
 /*
    getName() {

    }
    
    getId() {
    
    }
    
    getEmail() {
    
    }
    
    getRole() {
    
    }

    school() {

    }
*/
    getSchool() {
        return this.school;

    }

    getRole() {
        return 'Intern';  
    }
}

module.exports = Intern;