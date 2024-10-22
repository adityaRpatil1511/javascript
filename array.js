// // array is an data structure in javascript that allows you to store multiple values such as 
// symbols,characters,numbers,booleans in a single variable.

let array1 = [0,1,2,3,4,5,6,7,8,9];
console.log(array1);


// methods of an array
// push : add new elements at last position
array1.push(10);
console.log(array1);

// //pop : used for removing the last number or last position value
array1.pop();
console.log(array1);

// // Splice : remove the random value from array and add new value at their position
// // (indexnumber,count of values,additional inforamation )
array1.splice(0,1,"numbers");
console.log(array1);

// example of splice
array1.splice(3,3,"aditya","rakhi","rohini");
console.log(array1);

// shift : removes the first value of an array 
array1.shift();
console.log(array1);

// unshift: add the new value at first value of an array.
array1.unshift("jyoti");
console.log(array1);

// reverse method : It will prints the reverse (right to left) values of an array.
array1.reverse();
console.log(array1);

// join 
console.log(array1.join('|'));






