//1.. Difference(s) between == and ===
console.log("The difference between == and === is type comparison");
console.log(5 == "5"); // In the case of == => true, because it converts the data type before comparing
console.log(5 === "5"); // In the case of === => false, because it does NOT convert the data type before comparing

const height = 1.78;
const weight = 80;
const bmi = weight / (height * height);
console.log("BMI: " + bmi);

const principal = 10000;
const rate = 0.05;
const time = 2;
const interest = principal * rate * time;
console.log("Interest = " + interest);

const exchangeRate = 255000;
const amountInUSD = 100;
const amountInVND = amountInUSD * exchangeRate;
console.log(`${amountInUSD} USD = ${amountInVND} VND`);

let totalSeconds = 500;
let hours = Math.floor(totalSeconds / 3600);
let minutes = Math.floor((totalSeconds % 3600) / 60);
let seconds = totalSeconds % 60;
console.log(`Time: ${hours}h ${minutes}m ${seconds}s`);
