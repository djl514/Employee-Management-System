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
        //adds employee to the empty array
    }
    getDepartmentSalary(){
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.salary;
            //uses a loop to add up each individual salary of every employee
        });
        console.log(`Total Salary for the ${this.name} department: $${totalSalary}`);
    }
    
    //4. Handle Bonuses for Managers
    calculateTotalSalaryWithBonus(){
        let totalSalary = 0;
        this.employees.forEach(employee => {
            totalSalary += employee.salary;
            if(employee instanceof Manager){
                totalSalary += employee.bonus;
                //similar to getDepartmentSalary, however uses an if statement with instanceof to add the bonus if there is a manager in the array
            }
        });
        console.log(`Total Salary for the ${this.name} department including Manager Bonus: $${totalSalary}`);
    }
}

//3. Create a Manager Class that inherits from Employee

class Manager extends Employee{
    constructor(name, salary, department, bonus){
        super(name, salary, "Manager", department);
        this.bonus = bonus;
        //uses inheritance on the employee class to add a manager to the employees array
    }
    getDetails(){
        console.log(`Employee Information ->
Name: ${this.name}
Salary: $${this.salary}
Position: ${this.position}
Department: ${this.department}
Bonus: $${this.bonus}`);
//similar getDetails function to employees but overrides it by reestablishing the function
    }


}


//5. Create and Manage Departments and Employees // Output

const stilgar = new Employee("Stilgar", 2000, "Naib", "Freman");
const duncan = new Employee("Duncan", 3000, "Fedaykin", "Freman");
const jessica = new Employee("Jessica", 2000, "Priestess", "Freman");
//Creating multiple instances

stilgar.getDetails();
//Applying the method in the Employee Class to show details

const caladan = new Department("Atreides");
//Creates an instance of a department


caladan.addEmployee(duncan);
caladan.addEmployee(stilgar);
caladan.addEmployee(jessica);
caladan.getDepartmentSalary();
//Uses previous employees instated and adds them to the Atreides department

console.log(caladan);
//Return the department object

const paul = new Manager("Paul", 5000, "Atreides", 1500);
paul.getDetails();
caladan.addEmployee(paul);


caladan.calculateTotalSalaryWithBonus();
