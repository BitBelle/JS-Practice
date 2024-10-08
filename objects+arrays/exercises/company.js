let company = {
    name: "Tech Corp",
    location: "Nairobi",
    employees: [{
        id: 1,
        name: "John Doe",
        position: "Trainer"
    },
    {
        id: 2,
        name: "Peter Doe",
        position: "Cloud Engineer"
    }]
}

// accessing the name of 2nd employee
console.log(company.employees[1].name)

company.employees.push(
    {
        id: 3,
        name: "Mary Doe",
        position: "Snr Dev"
    },
    {
        id: 4,
        name: "Toby Doe",
        position: "Backend Dev"
    })

console.log(company)