"use strict";
let ordMarks;
function setMarks() {
  ordMarks = [
    [
      "ψ(x)",
      "ψ(Ωx)",
      "ψ(Ω<sup>x</sup>)",
      "ψ(Ω<sup>Ω</sup>x)",
      "ψ(Ω<sup>Ω+1</sup>x)",
      "ψ(Ω<sup>Ω+2</sup>x)",
      "ψ(Ω<sup>Ω+x</sup>)",
      "ψ(Ω<sup>Ω2</sup>x)",
      "ψ(Ω<sup>Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω2+x</sup>)",
      "ψ(Ω<sup>Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup></sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>x</sup>)",
      "ψ(Ω<sup>Ω<sup>x</sup></sup>)",
      "ψ(ε<sub>Ω+x</sub>)",
    ],
    [
      "ψ(Ωx)",
      "ψ(Ω<sup>2</sup>x)",
      "ψ(Ω<sup>x</sup>)",
      "ψ(Ω<sup>Ω</sup>x)",
      "ψ(Ω<sup>Ω+1</sup>x)",
      "ψ(Ω<sup>Ω+2</sup>x)",
      "ψ(Ω<sup>Ω+x</sup>)",
      "ψ(Ω<sup>Ω2</sup>x)",
      "ψ(Ω<sup>Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω2+x</sup>)",
      "ψ(Ω<sup>Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup></sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ω2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>+Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+1</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+2</sup>x)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ω2+x</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>2+Ωx</sup>)",
      "ψ(Ω<sup>Ω<sup>2</sup>x</sup>)",
      "ψ(Ω<sup>Ω<sup>x</sup></sup>)",
      "ψ(ε<sub>Ω+x</sub>)",
    ],
    [
      "ψ(Ω×x)",
      "ψ(Ω^2×x)",
      "ψ(Ω^x)",
      "ψ(Ω^(Ω)×x)",
      "ψ(Ω^(Ω+1)×x)",
      "ψ(Ω^(Ω+2)×x)",
      "ψ(Ω^(Ω+x))",
      "ψ(Ω^(Ω2)×x)",
      "ψ(Ω^(Ω2+1)×x)",
      "ψ(Ω^(Ω2+2)×x)",
      "ψ(Ω^(Ω2+x))",
      "ψ(Ω^(Ωx))",
      "ψ(Ω^(Ω^2)×x)",
      "ψ(Ω^(Ω^2+1)×x)",
      "ψ(Ω^(Ω^2+2)×x)",
      "ψ(Ω^(Ω^2+x))",
      "ψ(Ω^(Ω^2+Ω)×x)",
      "ψ(Ω^(Ω^2+Ω+1)×x)",
      "ψ(Ω^(Ω^2+Ω+2)×x)",
      "ψ(Ω^(Ω^2+Ω+x))",
      "ψ(Ω^(Ω^2+Ω2)×x)",
      "ψ(Ω^(Ω^2+Ω2+1)×x)",
      "ψ(Ω^(Ω^2+Ω2+2)×x)",
      "ψ(Ω^(Ω^2+Ω2+x))",
      "ψ(Ω^(Ω^2+Ωx))",
      "ψ(Ω^(Ω^2×2)×x)",
      "ψ(Ω^(Ω^2×2+1)×x)",
      "ψ(Ω^(Ω^2×2+2)×x)",
      "ψ(Ω^(Ω^2×2+x))",
      "ψ(Ω^(Ω^2×2+Ω)×x)",
      "ψ(Ω^(Ω^2×2+Ω+1)×x)",
      "ψ(Ω^(Ω^2×2+Ω+2)×x)",
      "ψ(Ω^(Ω^2×2+Ω+x))",
      "ψ(Ω^(Ω^2×2+Ω2)×x)",
      "ψ(Ω^(Ω^2×2+Ω2+1)×x)",
      "ψ(Ω^(Ω^2×2+Ω2+2)×x)",
      "ψ(Ω^(Ω^2×2+Ω2+x))",
      "ψ(Ω^(Ω^2×2+Ωx))",
      "ψ(Ω^(Ω^2×x))",
      "ψ(Ω^(Ω^x))",
      "ψ(ε(Ω+x))",
    ]
  ];
  let bruh = ordMarks[1]
  let bruh2 = ordMarks[2]
  let tempList = [];
  tempList.push("ψ(ε<sub>Ω2</sub>x)");
  ordMarks[0].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub>"));
  });
  tempList.push("ψ(ε<sub>Ω2</sub><sup>2</sup>x)");
  ordMarks[0].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub><sup>2</sup>"));
  });
  ordMarks[0] = ordMarks[0].concat(tempList);
  tempList = [];
  tempList.push("ψ(ε<sub>Ω2</sub><sup>x</sup>)");
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ω</sup>x)");
  ordMarks[0].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub><sup>Ω</sup>"));
  });
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ω+x</sup>)");
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ω2</sup>x)");
  ordMarks[0].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub><sup>Ω2</sup>"));
  });
  ordMarks[0] = ordMarks[0].concat(tempList);
  tempList = [];
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ω2+x</sup>)");
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ωx</sup>)");
  tempList.push("ψ(ε<sub>Ω2</sub><sup>Ω<sup>2</sup></sup>x)");
  ordMarks[0].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub><sup>Ω<sup>2</sup></sup>"));
  });
  ordMarks[0] = ordMarks[0].concat(tempList);
  
  tempList = [];
  
  //ordMarks[1].forEach(item => {
  //  ordMarks[0].push(item);
  //});
  
  ordMarks[0][0] = "ψ(x)";
  ordMarks[0][1] = "ψ(Ωx)";
  
  ordMarks[1].splice(41,600)
  tempList = [];
  
  ordMarks[1][40]="ψ(ψ<sub>1</sub>(Ω<sub>2</sub>)x)"
  ordMarks[2][40]="ψ(ψ<sub>1</sub>(Ω<sub>2</sub>)×x)"
  
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω)×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω)×"));
  });
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω))×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω))×"));
  });
  ordMarks[2] = ordMarks[2].concat(tempList);
  tempList = [];
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω)×x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω))×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω))×"));
  });
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω)+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω)×x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω)×2)×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω)×2)×"));
  });
  ordMarks[2] = ordMarks[2].concat(tempList);
  tempList = [];
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω)×2+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω)×x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω)×x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω2))×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+ψ<sub>1</sub>(Ω<sub>2</sub>×Ω+Ω2))×"));
  });
  ordMarks[2] = ordMarks[2].concat(tempList);
  tempList = [];
  ordMarks[2] = ordMarks[2].map((item,indx) => {return item.replace("ψ(",`ψ(${(indx>=41?"Ω<sub>2</sub>×Ω+":"")}`)})
  
  //yeet
  
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω)x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω)"));
  });
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω))x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω))"));
  });
  ordMarks[1] = ordMarks[1].concat(tempList);
  tempList = [];
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω)x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω))x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω))"));
  });
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω)+ψ<sub>1</sub>(Ω<sub>2</sub>Ω)x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω)2)x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω)2)"));
  });
  ordMarks[1] = ordMarks[1].concat(tempList);
  tempList = [];
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω)2+ψ<sub>1</sub>(Ω<sub>2</sub>Ω)x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω)x))");
  tempList.push("ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω2))x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ψ<sub>1</sub>(Ω<sub>2</sub>Ω+ψ<sub>1</sub>(Ω<sub>2</sub>Ω+Ω2))"));
  });
  ordMarks[1] = ordMarks[1].concat(tempList);
  tempList = [];
  ordMarks[1] = ordMarks[1].map((item,indx) => {return item.replace("ψ(",`ψ(${(indx>=41?"Ω<sub>2</sub>Ω+":"")}`)})
  
  ordMarks[1][40]="ψ(Ω<sub>2</sub>x)"
  ordMarks[2][40]="ψ(Ω<sub>2</sub>×x)"
  
  ordMarks[0].push("Hacker Alert x")
  ordMarks[1].push("Hacker Alert x")
  ordMarks[2].push("Hacker Alert x")
}




function displayBigBrainOrdinal(ord,trim) {
  
}