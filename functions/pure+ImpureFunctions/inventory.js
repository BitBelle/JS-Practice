// items in the inventory
let itemss = [
  {
    name: "Books",
    pages: 500,
    quantity: 10,
  }
];

// items to be updated
let updatedItem = [
  {
    name: "Books",
    quantity: 5, //i want to add 5 more books
  },
];

function updateInventory(items, updatedItem) {
  // accessing properties of updateItem
  const itemToUpdate = updatedItem[0];

  return items.map((currentItem) => {
    if (currentItem.name === itemToUpdate.name) {
      return {
        ...currentItem, //return the rest of the current items
        quantity: currentItem.quantity + itemToUpdate.quantity,
      };
    } else {
      return currentItem; //return the unchanged items if name doesnt match
    }
  });
}

console.log(updateInventory(items, updatedItem));
