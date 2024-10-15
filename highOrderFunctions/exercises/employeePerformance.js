let employeeDetails = [
    {name: "Mary Doe", tasksCompleted: 10, hoursWorked: 6},
    {name: "John Doe", tasksCompleted: 12, hoursWorked: 7},
    {name: "Peter Doe", tasksCompleted: 5, hoursWorked: 5},
    {name: "Joy Doe", tasksCompleted: 5, hoursWorked: 10},
    {name: "Martha Doe", tasksCompleted: 13, hoursWorked: 9},
    {name: "James Doe", tasksCompleted: 10, hoursWorked: 10},
];

// filtering out employees with fewer than 5 tasks
const completedTasks = employeeDetails.filter(employee => employee.tasksCompleted >= 5);
console.log(completedTasks);


// calculating task efficiency of the remaining employees
const taskEfficiency = completedTasks.map(employee => {
    return {
        name: employee.name,
        efficiency: employee.tasksCompleted / employee.hoursWorked
    };
});
console.log(taskEfficiency);


// finding employee with the highest task efficiency
const highestTaskEfficiency = taskEfficiency.reduce((previousValue, currentValue) => (previousValue > currentValue) ? previousValue : currentValue);
console.log(highestTaskEfficiency);


