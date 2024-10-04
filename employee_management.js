//1. Create an Employee Class

class Employee {
    constructor(name, salary, position, department){

        //specifies that each constructor paramter is set when creating an instance
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;

    }
    getDetails() {
        //method logs all employee information in a string
        console.log(`Employee Information ->
Name: ${this.name}
Salary: $${this.salary}
Position: ${this.position}
Department: ${this.department}`);
    }
}

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
    
    //4. Handle Bonuses for Managers
    calculateTotalSalaryWithBonus(){

    }
}

//3. Create a Manager Class that inherits from Employee

class Manager extends Employee{
    constructor(name, salary, position, department, bonus){
        super(name, salary, position, department);
        this.bonus = bonus;
        this.position = "Manager"; //No matter what position is inputted, position is always set to manager
    }
    getDetails(){
        console.log(`Employee Information ->
Name: ${this.name}
Salary: $${this.salary}
Position: ${this.position}
Department: ${this.department}
Bonus: $${this.bonus}`);
    }


}


//5. Create and Manage Departments and Employees // Output

const stilgar = new Employee("Stilgar", 2000, "Naib", "Freman");
const chani = new Employee("Chani", 3000, "Priestess", "Freman");
const jessica = new Employee("Jessica", 2000, "Priestess", "Freman");
//Creating multiple instances

stilgar.getDetails();
//Applying the method in the Employee Class to show details

const caladan = new Department("Atreides");
caladan.addEmployee(chani);
caladan.addEmployee(stilgar);
caladan.addEmployee(jessica);
caladan.getDepartmentSalary();
console.log(caladan);

const paul = new Manager("Paul", 5000, "Fedaykin", "Atreides", 1500);
paul.getDetails();
caladan.addEmployee(paul);



