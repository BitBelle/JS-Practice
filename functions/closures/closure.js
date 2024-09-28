function outer(){
    let a = 10

    function inner(){
        let b = 20
        console.log(a + b)
    }

    return inner
}

let result = outer();
// console.dir(result)
// console.log(typeof(result))

// result()

console.log(result)