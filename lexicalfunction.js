//  lexical scoping : an inner function has accsses the variables of outer function
function outerfun(){
    let a=10;
    let b= 20;
    function innerfun(){
        let c=a+b;
        console.log(c);
    }
    innerfun();
}
outerfun();

// division

function a(){
    let x=30;
    let y =2;

    function b(){

        let z=x/y;
        console.log(z);
    }
    b();
}
a();

// substrsction
function substraction(){
    let g=100;
    function diff(){
        let h=10;
        let j=g-h;
        console.log(j);
    }
    diff();
}
substraction();

// multiplication
function mul(){
    function mulvalue(){
        let d=2;
        let e=4;
        let m=d*e;
        console.log(m);
    }
    mulvalue();

}
mul();

// greetings 
function greetings(){
    let r="good morning";
    function greet(){
        let s ="good afternoon";
        console.log(r);
        console.log(s);
        function night(){
            let t="good evening";
            console.log(t);
        }
        night();
    }
    greet();
}
greetings();
// uppercase

function uppercase(){
    let u="hello world";
    let i=u.toUpperCase();
    function lowercase(){
        let l="MYSELF ADITYA PATIL";
        let k=l.toLowerCase();
        console.log(i);
        console.log(k);
    }
    lowercase();
}
uppercase();













