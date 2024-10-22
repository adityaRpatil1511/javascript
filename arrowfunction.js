// let a=20;
// let b=30;
// let adition=(a,b)=>{
//     let c=a+b
//     return c
// }
// console.log(adition(a,b));


let user=()=>{
    let x = String(prompt("Enter qualifications"));
    switch (x) {
      case "undergraduation":
        console.log("welcome to UG");
        let y=String(prompt("enter the stream"));
        switch (y) {
            case"ssc board":
            console.log("welcome to ssc");
    
            let z=Number(prompt("enter your ssc marks"));
            
                if (z<35){
                    console.log("failed")
                }
                else if (z>=35){
                    console.log("pass")
                }
            
                break;
            
            case "HSC board":
                console.log("welcome to HDC Board");
                break;
            case "Diploma":
                console.log("welcome to Diploma");
                break;
                case " Engineering":
                    console.log("welcome to Engineering");
                    break;
    
            }
        break;
      case "postgraduation":
        console.log("welcome to PG");
        break;
      default:
        
        console.log("not eligible");
        break;
    }
}
user
();