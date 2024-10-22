let email=prompt("enter your email id");
let a=false;
let b=false;
// let email="abc@gmail.com"
let newemail=email.split('');

for (let i=0;i<newemail.length;i++){
if(newemail[i]=="@"){


    a=true;
}
if(newemail[i]=="."){
    b=true;
}
}
console.log(a,b);
if(a==true&&b==true){
    console.log("valid email");
}
else{
    console.log("invalid email")
}

// let input2=prompt("enetr your password");
// let c=false;
// let d= false;
// let e=false;
// let f=false;
// let password="Aditya@123";
// let pass=password.split('');

// for (i=0;i<pass.length;i++){
//     if(pass[i]=="A"){
//     c=true;
//     }
// 

// if(pass[i]=="@"){
//     d=true;
// }
// if(pass[i]=="1"){
//     e=true;
// }
// else if(pass[i]=="2"){
//     f=true;
// }
// }
// if(c==true && d==true && e==true && f==true){
//     console.log("valid password");
// }
// else{
//     console.log("wrong password")
// }


