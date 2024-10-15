let products = [
  { name: "Waterbottle", price: 1500, discountPercentage: 10 / 100 },
  { name: "Laptop", price: 50000, discountPercentage: 20 / 100 },
  { name: "Monitor", price: 20000, discountPercentage: 10 / 100 },
  { name: "Headphones", price: 4000, discountPercentage: 10 / 100 },
  { name: "Mouse", price: 2000, discountPercentage: 5 / 100 }
];

// filtering out products that are less than 10%
const discountedProducts = products.filter(product => product.discountPercentage >= 10/100);
console.log(discountedProducts);

// Map to calculate new prices after applying the discount
const discountedPrices = products.map(product => product.price * (1 - product.discountPercentage));
console.log(discountedPrices);

// Reduce to find the total cost of all discounted products
const totalDiscountedProducts = discountedPrices.reduce((total, price) => total + price, 0);
console.log(totalDiscountedProducts);