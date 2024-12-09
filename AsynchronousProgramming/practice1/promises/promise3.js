function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let walkDog = true;
      if (walkDog) {
        resolve("Dog was taken for a walk");
      } else {
        reject("Dog didnt go for the walk");
      }
    }, 100);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cleanDishes = true;
      if (cleanDishes) {
        resolve("Dishes cleaned");
      } else {
        reject("Dishes not cleaned");
      }
    }, 100);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let takeOutTrash = true;
      if (takeOutTrash) {
        resolve("Trash out!");
      } else {
        reject("Trash still in!");
      }
    });
  });
}

walkDog
  .then((dogDuty) => {
    console.log(dogDuty);
    return cleanKitchen();
  })
  .then((kitchenChore) => {
    console.log(kitchenChore);
    return takeOutTrash();
  })
  .then((trachChore) => {
    console.log(trachChore);
  })
  .catch((error) => {
    console.log(error);
  });
