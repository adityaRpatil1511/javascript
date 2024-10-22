let myarry=[1,2,3,4,56,78,90,100]
// let filterarr=myarry.filter((ele,index,arr)=>{
//     return ele>10

// });
// console.log(filterarr);
let filterarr=myarry.map((ele,i)=>{
    return ele*5

}).filter((ele,i)=>{
    
    return ele>10
});
console.log(filterarr);









