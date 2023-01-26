
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // connects employee.js to THIS file
        super(name, id, email, 'Engineer');

        this.github = github;
        }


   /* getName() {

    }
    
    getId() {}

    */
    
    // code for github RETURN 
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;