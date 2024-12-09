/**
 * simulate a server call that may fail randomly. 
 * .catch to handle the error and retry the request up to 3 times.
 */

function simulateServerCall(){
    return new Promise((resolve, reject) => {
        //simulate success or failure randomly
        const success = Math.random() > 0.5
        setTimeout(() => {
            if (success) {
                resolve("Server call succeess")
            } else {
                reject("Server call failed")
            }
        }, 1000) 
    })
}

function retryServerCall(attemptsLeft){
    return simulateServerCall()
        .then(result => console.log(result))
        .catch(error => {
            if (attemptsLeft > 1) {
                console.warn(`${error} Retrying... (${attemptsLeft - 1} attempts left)`)
                return retryServerCall(attemptsLeft - 1)
            }
        })
}