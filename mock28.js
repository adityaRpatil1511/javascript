let education = String(prompt("enter your qualifications"));
switch (education) {
  case "undergraduate":
    console.log("welcome to UG");

    let degree = String(prompt("enter your degree"));
    switch (degree) {
      case "engineering":
        console.log("welcome to engineering");

        let branch = String(prompt("enter your branch"));
        switch (branch) {
          case "ENTC":
            console.log("welcome to ENTC");
            let marks = Number(prompt("enter your marks"));
            if (marks < 28) {
              console.log("failed");
            } else console.log("pass");
            break;
          case "HSC":
            console.log("welcome to HSC");
            break;
          case "IT":
            console.log("welcome to IT");
            let marks2 = Number(prompt("enter your marks"));
            if (marks2 < 35) {
              console.log("failed");
            } else console.log("pass");
            break;

          case "CS":
            console.log("welcome to CS");
            break;
          case "diploma":
            console.log("wlcome to diploma");
            let diploma = Number(prompt("enter your marks"));
            if (diploma < 35) {
              console.log("your are failed");
            } else console.log("your pass");

          case "computer":
            console.log("welcome to computer");
            break;
          case "Mech":
            console.log("welcome to Mech");
            break;
          case "Instrumentation":
            console.log("welcome to Instrumentation");
            break;
        }
        break;
      case "medical":
        console.log("welcome to medical");
        let medical = String(prompt("enter your branch"));
        switch (medical) {
            
          case "MBBS":
            console.log("MBBS");
            let neetmbbs = Number(prompt("enter your NEET marks for MBS"));
            console.log(neetmbbs);
            break;
          case "hsc marks":
            console.log("hscc marks");
            let hsc = Number(prompt("enter your hsc marks"));
            switch (hsc) {
              case "ssc":
                console.log("ssc");
                let sscmarks = Number(prompt("enter your ssc marks"));
                console.log(sscmarks);
                break;
              case "cbsc":
                console.log("cbsc");
                let cbscmarks = Number(prompt("enter your cbsc marks"));
                console.log(cbscmarks);
                break;
              case "icse":
                console.log("icse");
                let icsemarks = Number(prompt("enetr your icse marks"));
                console.log(icsemarks);
                break;
            }
          case "BDS":
            console.log("BDS");
            let neetbds = Number(promptt("enter your neet marks for BDS"));
            console.log(neetbds);
            break;

          case "hscbds":
            console.log("hscbds");
            let hscbds = Number(prompt("enter your hsc marks for bds"));
            console.log(hscbds);
        }
    }
    break;
    case "postgraduate":
        console.log("welcome to PG ");
        let pg=String(prompt("enter your PG"));
        switch (pg){
            case "MBA":
                console.log("MBA");
                let mbamarks=Number(prompt("enetr your MBA marks"));
                console.log(mbamarks);
                break;
                case "master's":
                    console.log("masters");
                    let mastermarks=Number(prompt("enter your masters marks"));
                    console.log(mastermarks);
                    break;
        }
}
