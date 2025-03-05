//1.. Difference(s) between == and ===
console.log("Sự khác nhau giữa == và === là so sánh kiểu dữ liệu");
console.log(5 == "5"); // truong hop == => true, tại nó chuyển kiểu dữ liệu trước khi so sánh
console.log(5 === "5"); //truong hop === => false, tại nó KHÔNG chuyển kiểu dữ liệu trước khi so sánhsánh
/*2.. Use variables and operators to:
Calculate BMI (Body Mass Index)
Calculate Simple Interest (principal * rate * time)
Convert Currency (USD to local currency)
Calculate Time (hours:minutes:seconds) */
const height = 1.78;
const weight = 80;
const bmi = weight / (height * height);
console.log("BMI: " + bmi)

const principal = 10000;
const rate = 0.05;
const time = 2;
const interest = principal * rate * time;
console.log("Interest = " + interest);

const exchangeRate = 255000; 
const amountInUSD = 100; 
const amountInVND = amountInUSD * exchangeRate;
console.log(`${amountInUSD} USD = ${amountInVND} VND`);

const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds =  now.getSeconds().toString().padStart(2, '0');
const time1 = `${hours}:${minutes}:${seconds}`;
console.log("Time1: ", now);
/*
#Additional challenges:
Add more variables to make calculations more complex
Try using different mathematical operators
Print results in different formats
Think about edge cases (negative numbers, zero, etc.)
Compare let, const, var
 */