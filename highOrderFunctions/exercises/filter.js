let fruits = [
  { name: "Apple", color: "red" },
  { name: "Banana", color: "yellow" },
  { name: "Cherry", color: "red" },
  { name: "Grapes", color: "purple" },
  { name: "Lemon", color: "yellow" },
];

function filter(array, test){
    let passed = [];

    //iterate through the fruits
    for (let element of array){
        // condition
        if (test(element)){
            passed.push(element)
        }
    }

    return passed
}

const redFruits = fruits.filter(fruit => fruit.color === "red")
console.log(redFruits);