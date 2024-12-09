/**
 * fetch user details from an api
 * return a list of their names and email in one string
 */

async function userDetails() {
  //fetch user details from API
  let response = await fetch("https://jsonplaceholder.typicode.com/users");

  //check if response is successful
  if (!response.ok) {
    throw new Error("Error occured while fetching user data");
  }

  //convert response to json
  let userData = await response.json();

  //list of names and email
  let list = userData.map((user) => {
    return `${user.name}, ${user.email}`;
  });

  //combining the strings to a single output
  return list.join("\n")
}

userDetails()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
