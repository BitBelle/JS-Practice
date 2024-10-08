/**
 * Basic Object Creation:
 * Create an object called person with properties name, age, and occupation. How do you add, update, and delete properties from the object
 */

let person = {
    name: "John Doe",
    age: 20,
    occupation: "Teacher"
}

// adding a property
person.address = "USA"

// updating a property
person.name = "Mercy Doe"


// deleting a property - delete is used to remove a specific property not the entire object
delete person.age


console.log(person)
