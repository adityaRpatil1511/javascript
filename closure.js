function inn(){
    console.log("hello inn");
}
console.log(inn);
inn();

function inn(){
    function subinn(){
        let a=10;
        return a;
    }
    return(subinn);
}
let result=inn();
console.log(result());



