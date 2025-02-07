// 1. Discount Calculator
let totalValue = 2000;
let discountPercentage = 20;

let discountedValue = totalValue - (totalValue * (discountPercentage / 100));
console.log(`The final price after discount is: Rs.${discountedValue}`);

// 2. Login System
let username = "admin";
let password = "12345";

if (username === "admin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

// 3. Currency Conversion
let amountInINR = 850;
let exchangeRate = 82;

let amountInUSD = amountInINR / exchangeRate;
console.log(`${amountInINR} INR is ${amountInUSD} USD`);

// 4. Cinema Ticket Price Calculator
let numberOfChilds = 2;
let numberOfAdults = 1;
let numberOfSeniors = 1;

let childTicketPrice = 100;
let adultTicketPrice = 150;
let seniorTicketPrice = 120;

let totalPrice = (numberOfChilds * childTicketPrice) + 
                 (numberOfAdults * adultTicketPrice) + 
                 (numberOfSeniors * seniorTicketPrice);

console.log(`The total ticket price is ${totalPrice}`);

// 5. Shipping Application
let packageType = "express"; // Can be "standard", "express", or "overnight"

switch (packageType) {
    case "standard":
        console.log("Estimated delivery time: 3–5 days");
        break;
    case "express":
        console.log("Estimated delivery time: 1–2 days");
        break;
    case "overnight":
        console.log("Estimated delivery time: Next day");
        break;
    default:
        console.log("Invalid package type");
}

// 6. Form Validation
let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof name !== "string") {
    console.log("Name should be a string");
}
if (typeof email !== "string") {
    console.log("Email should be a string");
}
if (typeof age !== "number") {
    console.log("Age should be a number");
}

// 7. Shopping List
let shoppingList = ["Apples", "Milk", "Bread", "Eggs"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(shoppingList[i]);
}

// 8. Countdown App
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

// 9. Find the First String in an Array
let mixedArray = [1, 2, "Hello", 3, "World"];

for (let i = 0; i < mixedArray.length; i++) {
    if (typeof mixedArray[i] === "string") {
        console.log(`Found the First String: ${mixedArray[i]}`);
        break;
    }
}