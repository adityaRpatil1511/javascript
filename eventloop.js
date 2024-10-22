// // console.log("first");
// // setTimeout(()=>{
// //     console.log("second");
// // },3000);
// // console.log("third");



// setTimeout(()=>{
//     console.log("1");
// },1000);
// setTimeout(()=>{
//     console.log("2");
// },5000);
// setTimeout(()=>{
//     console.log("3");
// },6000);
// setTimeout(()=>{
//     console.log("4");
// },7000);
// setTimeout(()=>{
//     console.log("5");
// },8000);


// let a="shraddha";
// setTimeout(()=>{
//     console.log(a);
// },2000);



// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let array2 = array.join();

// setTimeout(() => {
//     console.log(`${array}`);
// }, 5000)

// let n=7;

// for(let i=1;i<=n;i++){
//     setTimeout(() => {
//     let str="*";
// let str2=' ';

// console.log(str2.repeat(n-i)+str.repeat(i*2-1));
//     },2000*i);
// }



// for(let i=1;i<=10;i++){
//     setTimeout(() => {

// console.log(i);
//     },2000*i);
// }

function greet(name) {
    console.log(`Hello, ${name}`);
}

setTimeout(greet, 4000, 'Alice');


