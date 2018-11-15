class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

const user = new Student('Some', 'Q.', 'Student');

document.body.innerHTML = greeter(user);

// tslint:disable:no-console
console.log(`decimal=${6}`);
console.log(`hex=${0xdeadbeef}`);
console.log(`binary=${0b10011001}`);
console.log(`octal=${0x777}`);
// tslint:enable:no-console
