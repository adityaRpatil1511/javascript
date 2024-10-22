// function isArmstrongNumber(num) {
//     // Convert the number to a string to easily iterate through its digits
//     let numStr = num.toString();
//     let numDigits = numStr.length;

//     // Calculate the sum of digits raised to the power of numDigits
//     let sum = 0;
//     for (let digit of numStr) {
//         sum += Math.pow(parseInt(digit), numDigits);
//     }

//     // Check if the sum equals the original number
//     return sum === num;
// }

// // Test the function with an example
// let number = 153;
// if (isArmstrongNumber(number)) {
//     console.log(`${number} is an Armstrong number.`);
// } else {
//     console.log(`${number} is not an Armstrong number.`);
// }

// let numbers = 13;
// let num = numbers.toString().split("");
// let a = 1;
// let b = 3;

// let num1 = Math.pow(a, num.length);
// let num2 = Math.pow(b, num.length);
// // let num3 = Math.pow(c, num.length);


//   add = num1 + num2 ;


// if (add == numbers) {
//   console.log(add 
//     + "is a armstrong number");
// } else {
//   console.log(add + "is not armstrong number");
// }


// let arr="13";
// let arr2=arr.split('').map(Number);
// console.log(arr2);
// for ( let i=1;i<arr2.length;i++){
//     let sum1=sum+arr2[0]**arr2.length;
//     let sum=sum1+arr2[1]**arr2.length;
   
// }
// if(sum==arr){
//     console.log(sum+"is armstrong number");
// }
// else{
//     console.log(sum+"is not armstrong number");
// }

let numbers = (prompt("enter a number"))
let len=numbers.length;
let sum=0;
for (let i =0; i<len; i++) {
   parseInt(numbers);
   

//   let digit=numbers[i]-"0";
//   sum=(sum+Math.pow(digit,l));
     sum=(sum+numbers[i]**len);
}
if(sum==numbers){
    console.log(numbers+"is armstrong number");
}
else{
    console.log(numbers+"is not armstrong number")
}
console.log(sum)