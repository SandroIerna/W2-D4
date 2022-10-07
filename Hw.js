/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

const arrayPositiveNumbers = [1, 2, 3, 4, 5];
console.log("\n---------------ex1---------------");
console.log(arrayPositiveNumbers);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

const obj = {
  name: "name",
  surname: "surname",
  email: "namesurname@gmail.com",
  address: "somewhere",
  age: 30,
};
console.log("\n---------------ex2---------------");
console.log(obj);

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

obj.drivingLicense = true;

console.log("\n---------------ex3---------------");
console.log(obj);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete obj.age;

console.log("\n---------------ex4---------------");
console.log(obj);

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

const obj2 = Object.assign({}, obj);
obj2.email = "differentemail@gmail.com";

console.log("\n---------------ex5---------------");
console.log(obj);
console.log(obj2);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n---------------ex6---------------");
const orders = [5, 15, 45, 89];
console.log(orders[1]);
let sum = 0;
for (let i = 0; i <= orders.length - 1; i++) {
  sum += orders[i];
}
// const totalShoppingCart = orders.reduce((accumulator, value) => {
//   return accumulator + value;
// }, 0);
if (sum > 50) {
  console.log("Total price:", sum);
} else {
  console.log("Total price:", sum + 10);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n---------------ex7---------------");

const discount = (sum / 100) * 20;
console.log("Total price:", discount);
if (discount > 50) {
  console.log("Total price:", discount);
} else {
  console.log("Total price:", discount + 10);
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

const car = { brand: "brand", model: "model", licensePlate: 00000 };
const car1 = Object.assign({}, car);
car1.licensePlate = 11111;
const car2 = Object.assign({}, car);
car2.licensePlate = 22222;
const car3 = Object.assign({}, car);
car3.licensePlate = 33333;
const car4 = Object.assign({}, car);
car4.licensePlate = 44444;
const car5 = Object.assign({}, car);
car5.licensePlate = 55555;

console.log("\n---------------ex8---------------");
console.log(car);
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car, car1, car2, car3, car4, car5];
console.log("\n---------------ex9---------------");
console.log(carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

const removedCars = [carsForRent.pop(), carsForRent.shift()];
console.log("\n---------------ex10---------------");
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/
console.log("\n---------------ex11---------------");
console.log(carsForRent);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

const carsForSale = [];
const car6 = Object.assign({}, car);
car6.licensePlate = 66666;
const car7 = Object.assign({}, car);
car7.licensePlate = 77777;
const car8 = Object.assign({}, car);
car8.licensePlate = 88888;
carsForSale.push(car6, car7, car8);
const totalCars = carsForRent.concat(carsForSale);
console.log("\n---------------ex12---------------");
console.log(totalCars);

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n---------------ex13---------------");
for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
