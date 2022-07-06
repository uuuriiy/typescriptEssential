// Classes
abstract class Department {
    private employees: string[] = [];

    constructor(protected readonly id: string, private name: string) {
        this.id = id;
        this.name = name;
    }

    abstract describe(): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);    
    }
}

class ITDepartment extends Department {
    
    constructor(id: string, public admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe() {
        console.log(`Department(${this.id}): IT`);
    }
}

class AccountingDepartment extends Department {
    private static instance: AccountingDepartment;
    private constructor(id: string) {
        super(id, "Accounting")
    }

    describe(): void {
        console.log(`Department(${this.id}): Accounting`);
    }

    static getInstance() {
        if (AccountingDepartment.instance) {
            return this.instance;
        }

        this.instance = new AccountingDepartment("d2");
        return this.instance;
    }
}

// const accounting = new Department("v1", "Accounting");

// accounting.addEmployee('Max');
// accounting.addEmployee('Lax');

// accounting.printEmployeeInformation();

// accounting.describe();

const it = new ITDepartment("v1", ["Yrii", "Pedro"]);

it.addEmployee('Max');
it.addEmployee('Lax');

it.printEmployeeInformation();

it.describe();

const accountingDepartment = AccountingDepartment.getInstance();
const accountingDepartment2 = AccountingDepartment.getInstance();

console.log(accountingDepartment, accountingDepartment2);


// Interfaces

interface Person {
    name: string,
    age: number
}

let user1: Person;

user1 = {
    name: 'Max',
    age: 21
}

console.log(user1);

interface addFn {
    (a: number, b: number): number;
}

const add: addFn = (n1, n2) => n1 + n2;

console.log(add(1, 2));
