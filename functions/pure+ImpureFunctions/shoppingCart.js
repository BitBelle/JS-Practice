// pure function - since we the output is the same as the input
const products = [
    {
        name: "Pen",
        price: 50,
        quantity: 5
    },
    {
        name: "Notebook",
        price: 500,
        quantity: 2
    },
    {
        name: "Headphones",
        price: 2000,
        quantity: 2
    }
]

function calculateTotal(products) {
    let totalPrice = 0;

    // iterating through the array of products
    for (let product of products) {
        totalPrice += product.price * product.quantity
    }

    return totalPrice
}

console.log(calculateTotal(products))


// impure function - since we are accessing an external variable instead of passing it as an argument to the function.
//meaning the function can produce different results if the external state changes

const products2 = [
    {
        name: "Bible",
        price: 3000,
        quantity: 2
    },
    {
        name: "Notebook",
        price: 500,
        quantity: 2
    },
    {
        name: "Headphones",
        price: 2000,
        quantity: 2
    }
]

function calculateTotal2(){
    let totalCost = 0;
    // looping through the products
    for (product of products2){ // accessing an exeternal array product2
        totalCost += product.price * product.quantity
    }

    console.log(totalCost);
}

calculateTotal2()