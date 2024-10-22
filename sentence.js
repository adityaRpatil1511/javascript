let myname=prompt("enter a sentence");
let newname=myname.split(" ");
console.log(newname);

newname.map(()=>{
    newname = newname.map((ele) => {
      return ele.charAt(0).toUpperCase() + ele.slice(1);
    });    
})
console.log(newname);

let d = newname.join(" ");
console.log(d);



 

