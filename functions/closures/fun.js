
let bal = 500;

function deposit(amount){
    if (bal >= 500){
        bal += amount;
    }

    function withdraw(amount){
        if (bal >= 500){
            bal -= amount
        }
    }

    return withdraw
}

let depositedAmount = deposit()

console.log(depositedAmount(500))