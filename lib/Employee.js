
class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

getName() {
    return this.name;
}

getId() {
    return this.id;
}

getEmail() {
    if(validator.validate(this.email)) {
        console.log('Valid Email');
    } else {
        console.log('Invalid Email');
    };
    return this.email;
}

getRole() {
    return 'Employee';
    }
}

module.exports = Employee;