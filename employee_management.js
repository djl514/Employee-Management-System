//1. Create an Employee Class

class Employee {
    constructor(name, salary, position, department){

        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;

    }
    getDetails() {
        console.log(`Employee Information ->
Name: ${this.name},
Salary: $${this.salary},
Position: ${this.position},
Department: ${this.department}`);
    }
}

const stilgar = new Employee("Stilgar", 2000, "Naib", "Freeman");
stilgar.getDetails();


//2. 
// const seitch = new Department("Freeman");
// const arrakeen = new Department("Sardukar");