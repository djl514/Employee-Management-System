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

const stilgar = new Employee("Stilgar", 25000, "Naib", "Freman");
const duncan = new Employee("Duncan", 10000, "Fedaykin", "Freman");
const jessica = new Employee("Jessica", 20000, "Priestess", "Freman");
const baron = new Employee("Vladmir", 31000, "Baron", "Harkonnen");
const rautha = new Employee("Feyd-Rautha", 40000, "Warrior", "Harkonnen");
const irulan = new Employee("Irulan", 12000, "Priestess", "Harkonnen");
//Creating multiple instances of employees

baron.getDetails();
//Applying the method in the Employee Class to show details

const caladan = new Department("Atreides");
const geidiPrime = new Department("Empire");
//Creates an instance of a department

caladan.addEmployee(duncan);
caladan.addEmployee(stilgar);
caladan.addEmployee(jessica);
geidiPrime.addEmployee(baron);
geidiPrime.addEmployee(rautha);
geidiPrime.addEmployee(irulan);
//Adds employees to both departments

const shaddam = new Manager("Shaddam", 20000, "Empire", 2000);
const paul = new Manager("Paul", 60000, "Atreides", 10000);
paul.getDetails();
caladan.addEmployee(paul);
geidiPrime.addEmployee(shaddam);
//adding Managers

caladan.getDepartmentSalary();
geidiPrime.getDepartmentSalary();
//returns the departmentsalary for both departments

caladan.calculateTotalSalaryWithBonus();
geidiPrime.calculateTotalSalaryWithBonus();
//total salary including the managers bonuses 