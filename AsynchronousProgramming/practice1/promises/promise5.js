/**
 * Implement a function fetchData(url) that fetches data from 
 * a URL using fetch and returns a Promise.
 */

function fetchData(url){
    return new Promise((resolve, reject) => {
        fetch(url) //http request
        .then(response => {
            //if response is valid(status 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            } else {
                return response.json()
            }
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error(error))
    })
}

