
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {

        super(name, id, email, 'Engineer');

        this.github = github;
        }


   /* getName() {

    }
    
    getId() {}

    */
    
    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;