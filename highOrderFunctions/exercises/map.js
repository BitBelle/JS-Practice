let students = [
  { name: "Alice", email: "alice@gmail.com", grade: 85 },
  { name: "Bob", email: "bob@gmail.com", grade: 92 },
  { name: "Charlie", email: "charlie@gmail.com", grade: 78 },
  { name: "David", email: "david@gmail.com", grade: 90 },
];


function map(array, transform){
    let mapped = [];

    //iterate through each student
    for (let element of array){
        //function to apply to each iteration
        mapped.push(transform(element))
    }

    return mapped
}

const studentDetails = map(students, student => {
    return {
        name: student.name,
        email: student.email
    }
});
console.log(studentDetails);