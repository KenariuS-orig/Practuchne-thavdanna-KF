// 1. Функції як значення
function greet(name) {
  return `Welcome ${name}!`;
}
console.log(greet("Mango"));
console.log(greet);

// 2. Колбек-функції
function notify(name) {
  console.log(`Dear ${name}, your room will be ready in 30 minutes`);
}

function registerGuest(name, callback) {
  console.log(`Registering ${name}!`);
  callback(name);
}
registerGuest("Mango", greet);
registerGuest("Mango", notify); 

registerGuest("Poly", function (name) {
  console.log(`Welcome, ${name}!`);
});

// 3. Метод forEach
const numbers = [5, 10, 15, 20, 25];
numbers.forEach((number, index) => {
  console.log(`Index ${index}, value ${number}`);
});

// 4. Стрілочні функції
const arrowAdd = (a, b, c) => a + b + c;
console.log(arrowAdd(1, 2, 3)); // 6

const greetArrow = () => console.log("Hello!");
greetArrow();

// 5. Чисті функції
const pureMultiply = (array, value) => {
  const newArray = array.map(element => element * value);
  return newArray;
};
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = pureMultiply(numbers2, 2);
console.log(numbers2); 
console.log(doubledNumbers); 

// 6. Метод map()
const planets = ["Earth", "Mars", "Venus", "Jupiter"];
const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log(planetsInUpperCase);

// 7. Метод filter()
const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues);

// 8. Метод find()
const findValue = values.find(value => value < 0);
console.log(findValue);

// 9. Приклади використання
const logMessage = (number, index) => {
  console.log(`Index ${index}, value ${number}`);
};
numbers.forEach(logMessage);

const logPlanets = planet => console.log(`Planet: ${planet}`);
planets.forEach(logPlanets);
