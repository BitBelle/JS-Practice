/**promise chainig to implement;
 *
 * function that:
 * Fetches a list of users (mock data).
 * Filters the users based on a specific criterion.
 * Logs the filtered results.
 */

function fetchListofUsers() {
  return new Promise((resolve, reject) => {
    let users = [
      { name: "Clarke Anderson", age: 10 },
      { name: "Octavia Blake", age: 27 },
      { name: "Bellamy Blake", age: 28 },
      { name: "Ricky Whittle", age: 40 },
    ];

    if (users.length > 0){
        resolve(users)
    } else {
        reject("Failed to retrieve users")
    }
  });
}


function filterUsers(users){
    return new Promise((resolve) => {
        //age>20
        const filteredUsers = users.filter(user => user.age > 20);
        resolve(filteredUsers)
    })
}

fetchListofUsers()
    .then(userList => {
        console.log("Users fetched: ", userList)
        return filterUsers(users)
    })
    .then(result => console.log("Filtered Users:", result))
    .catch(error => console.error(error))
    