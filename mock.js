let array = [2, 5, 8, 3, 7, 4, 10]; 
let newArray = [];

for (let i = 0; i < array.length; i++) {
  let multiplication = array[i] *2;
  
  if (multiplication >= 10) {
    newArray.push(multiplication);
  }
}

console.log(newArray);
