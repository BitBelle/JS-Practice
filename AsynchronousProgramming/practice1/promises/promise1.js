let myPromise = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
    if (success) {
        resolve("The operation is successful")
    } else {
        reject("There was an error")
    }
}, 1000)

});

//consuming the promise
myPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })