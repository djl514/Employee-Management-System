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
const paul = new Employee("Paul", 3000, "Fedaykin", "Freeman")
const jessica = new Employee("Jessica", 2000, "Reverend Mother", "Freeman");
stilgar.getDetails();


//2. Create a Department Class

class Department {
    constructor(name){
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee){
        this.employees.push(employee);
    }
    getDepartmentSalary(){
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.salary;
        });
        console.log(`Total Salary for the ${this.name} department: $${totalSalary}`);
    }
}

const caladan = new Department("Atreides");
caladan.addEmployee(paul);
caladan.addEmployee(stilgar);
caladan.addEmployee(jessica);
caladan.getDepartmentSalary();

//3. Create a Manager Class that inherits from Employee

