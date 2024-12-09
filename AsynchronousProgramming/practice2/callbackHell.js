//simulating callback hell using a simple login
/**
 * check if user exists
 * verify the password
 * fetch user details
 */

function checkifUserExists(username, callback) {
  setTimeout(() => {
    if (username === "mercy") {
      callback(null, true);
    } else {
      callback("User not found", null);
    }
  }, 1000);
}

function verifyPassword(username, password, callback) {
  setTimeout(() => {
    if (password === "mercy123") {
      callback(null, true);
    } else {
      callback("Wrong password", null);
    }
  }, 1000);
}

function fetchUserDetails(username, callback) {
  setTimeout(() => {
    const userDetails = {
      username: "mercy",
      password: "mercy123",
      role: "admin",
    };
    callback(null, userDetails);
  }, 1000);
}

//login
function login(username, password) {
  checkifUserExists(username, (error, userExits) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("User exists");

    verifyPassword(username, password, (error, verified) => {
      if (error) {
        console.error(error);
        return;
      }
      console.log("Password verified");

      fetchUserDetails(username, (error, userDetails) => {
        if (error) {
          console.error(error);
          return;
        }
        console.log("User details fetched:", userDetails);
      });
    });
  });
}

login("mercy", "mercy123")