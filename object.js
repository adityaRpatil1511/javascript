// a={
//     name:"aditya"
    
// }
// console.log(a.name);

// a={
//     name:{num:"jio"}
    
// }
// console.log(a.name.num);

a=[{x:{name:{b:3}}},{x:{name:{b:4}}}]
let newarr=a.map((ele)=>{
return ele.x.name.b
})
console.log(newarr);
