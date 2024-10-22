// let x=2;
// switch (x){
//     case 2:
//         console.log("hello 2");
//         break;
//         case 3:
//             console.log("hello 3");
//             break;
//             default:
//                 console.log("not value")
//                 break;
// }

// user input using prompt
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
