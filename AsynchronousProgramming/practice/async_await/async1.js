function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let walkDog = true;
      if (walkDog) {
        resolve("Dog was taken for a walk");
      } else {
        reject("Dog didnt go for the walk");
      }
    }, 1000);
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
    }, 1000);
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
    }, 1000);
  });
}

async function doChores() {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult = await takeOutTrash();
  console.log(takeOutTrashResult);
}

doChores();
