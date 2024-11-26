function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Input must be an array"));
      }
  
      const results = []; // To store resolved values
      let completed = 0; // Counter for resolved promises
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise) // Ensure non-promise values are treated as promises
          .then((value) => {
            results[index] = value; // Store the resolved value
            completed++; // Increment the counter
  
            // If all promises are resolved, resolve the main promise
            if (completed === promises.length) {
              resolve(results);
            }
          })
          .catch((error) => {
            reject(error); // Reject the main promise if any promise rejects
          });
      });
  
      // Handle empty arrays
      if (promises.length === 0) {
        resolve([]); // Resolve immediately with an empty array
      }
    });
  }
  

// testing the function
const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3),
  ];
  
  myPromiseAll(promises)
    .then((results) => {
      console.log(results); // [1, 2, 3]
    })
    .catch((error) => {
      console.error(error);
    });
  