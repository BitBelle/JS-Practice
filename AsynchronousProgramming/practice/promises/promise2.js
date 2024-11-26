// chaining promises

function fetchData(){

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user data")
        }, 1000)
    })
}

function fetchUserDetails(){

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("user details")
        }, 1000)
    })
}

fetchData()
    .then(userData => {
        console.log(userData);
        return fetchUserDetails();
    })
    .then(userDetails => {
        console.log(userDetails)
    })