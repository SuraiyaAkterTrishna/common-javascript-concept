/* const isNumber = x => {
   return !(isNaN(x));
};
console.log(isNumber(44));
console.log(isNumber("Hello")); */

/* let storeFalsyValue = true;
if(!storeFalsyValue) {
console.log(`Nothing to show!`);
}
else {
console.log(`You are amazing!`);
} */

const calculate = (num1, num2, result) => {
    if(result === "add"){
        return num1 + num2;
    }
    else if(result === "subtract"){
        return num1 - num2;
    }
    else if(result === "multiply"){
        return num1 * num2;
    }
    else if(result === "divide"){
        return num1 / num2;
    }
    else if(result === "modulus"){
        return num1 % num2;
    }
    else {
        return "Invalid operation";
    }
}
const output = calculate(10, 20);
console.log(output);