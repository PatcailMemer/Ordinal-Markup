"use strict";

function setMarks() {
  ordMarks = [
    [],
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
  let tempList = [];
  tempList.push("ψ(ε<sub>Ω2</sub>x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub>"));
  });
  tempList.push("ψ(ε<sub>Ω2</sub><sup>2</sup>x)");
  ordMarks[1].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε<sub>Ω2</sub><sup>2</sup>"));
  });
  ordMarks[1] = ordMarks[1].concat(tempList);
  ordMarks[1].forEach(item => {
    ordMarks[0].push(item);
  });
  ordMarks[0][0] = "ψ(x)";
  ordMarks[0][1] = "ψ(Ωx)";
  tempList = [];
  tempList.push("ψ(ε(Ω2)×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε(Ω2)×"));
  });
  tempList.push("ψ(ε(Ω2)^(2)×x)");
  ordMarks[2].forEach(item => {
    tempList.push(item.replace("ψ(", "ψ(ε(Ω2)^(2)×x"));
  });
  ordMarks[2] = ordMarks[2].concat(tempList);
}

