let sales = [100, 250, 75, 200, 150];

function reduce(array, combine, start){
    // initial value
    let current = start;

    //iterating through the sales
    for (let element of array){
        // combining values
        current = combine(current, element)
    }

    return current

}

let totalSales = reduce(sales, (previous, current) => previous + current, 0);
console.log(totalSales);