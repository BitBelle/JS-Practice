// constructor for person
function Person(name) {
  this.name = name;
}

// adding greet method to Person's prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// constructor for employee
function Employee(name, jobTitle) {
  // calling the person constructor
  Person.call(this, name);
  this.jobTitle = jobTitle;
}

// creating a new object for Manager.prototype that inherits from Employee.prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

//constructor function for manager
function Manager(name, jobTitle, teamSize) {
    // Call the Employee constructor
    Employee.call(this, name, jobTitle);
    this.teamSize = teamSize;
}

// Set the prototype of Manager to be an instance of Employee
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// Add a method to Manager prototype
Manager.prototype.describeTeam = function() {
    console.log(`I manage a team of ${this.teamSize} people.`);
};

// Creating an instance of Manager
let manager = new Manager("Alice", "Software Manager", 5);

// Accessing methods from the Manager instance
manager.greet();          // Inherited from Person
manager.describeJob();    // Inherited from Employee
manager.describeTeam();   // Own method in Manager
