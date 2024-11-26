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

const app = async () => {
  const data = {
    userId: "MaryJane",
    password: "123",
  };

  try {
    console.log("Initializing...");
    const result = await validateUser(data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

app();