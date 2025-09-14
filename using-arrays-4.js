let cities = ["Baton Rouge", "Dallas", "Atlanta", "Houston", "Miami"];
cities.forEach(city => console.log(city.toUpperCase()));

// Task 2: map()
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares);

// Task 3: filter()
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);

// Task 4: find() and findIndex()
let favoriteFood = ["Burgers", "Pasta", "Seafood", "Ribs", "Cheesecake"];
let firstLongFood = favoriteFood.find(food => food.length > 4);
let indexOfLongFood = favoriteFood.findIndex(food => food.length > 4);
console.log("First long food:", firstLongFood);
console.log("Index of long food:", indexOfLongFood);