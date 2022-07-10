export{}
let message = 'Hello ';
console.log(message);

let multiType: number|boolean;
multiType = 53;
multiType = false;
multiType = 76;

function add(num1: number, num2: number) {
    return num1+num2;
}
add(4,5);
interface Person{
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);

class Employee{
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }
    
    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}
let emp1 = new Employee('Tolu')
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee{
    constructor(managerName: string){
        super(managerName);
    }
    delegateWork(){
        console.log('Manager delegate task');
    }
}

let m2 = new Manager('sneh');
m2.delegateWork();
m2.greet();
console.log(m2.employeeName);

let area;
area = 50;
area = 'test'
let ara = 432
console.log(area, ara);
