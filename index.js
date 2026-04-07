// Write your solution in this file!

// Global scope variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function to add a burger
function addBurger() {
  // Function-scoped variable
  const newBurger = 'Flatburger';
  
  // Add to burgers array
  burgers.push(newBurger);
}

// Block that always runs
if (true) {
  // Block-scoped variable
  const anotherNewBurger = 'Maple Bacon Burger';
  
  // Add to burgers array
  burgers.push(anotherNewBurger);
}

// Function to change featured drink
function changeFeaturedDrink() {
  featuredDrink = 'The JavaShake';
}

console.log(burgers);

addBurger();
console.log(burgers);

console.log(featuredDrink);

changeFeaturedDrink();
console.log(featuredDrink);
