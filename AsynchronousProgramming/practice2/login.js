//refractoring using promises

function checkifUserExists(username) {
  return new Promise((resolve, reject) => {
    if (username === "mercy") {
      resolve("User exists");
    } else {
      reject("User not found");
    }
  });
}

function verifyPassword(password) {
  return new Promise((resolve, reject) => {
    if (password === "mercy123") {
      resolve("Correct password!");
    } else {
      reject("Wrong password");
    }
  });
}

function fetchUserDetails(username) {
  return new Promise((resolve, reject) => {
    const userDetails = {
      username: "mercy",
      password: "mercy123",
      role: "admin",
    };

    if (userDetails) {
      resolve(userDetails);
    } else {
      reject("Details not found");
    }
  });
}

function login(username, password) {
  checkifUserExists(username)
    .then((userExists) => {
      console.log(userExists)
      return verifyPassword(password)
    })
    .then(verified => {
      console.log(verified)
      return fetchUserDetails(username)
    })
    .then(details => {
      console.log(details)
    })
    .catch(error => console.error(error))

}

login("mercy", "mercy123")
