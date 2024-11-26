const validateUser = ({ userId, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId && password) {
        resolve(`${userId} you have authenticated successfully!`);
      } else {
        reject({ message: "userId or Password could be blank!" });
      }
    }, 2000);
  });
};

validateUser({userId: "JohnDoe", password: "12345"})
    .then(validation => {
        console.log(validation)
    })
    .catch(error => {
        console.error(error)
    })