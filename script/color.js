"use strict";

// Convert every character in a string to an element in an array
const hexArray = ("0123456789ABCDEF".split(""));

function preConvertHex(n) {
  if (n === 0) return "";
  return preConvertHex(Math.floor(n / 16 + 0.001)) + hexArray[n % 16];
}

function convertHex(r, g, b) {
  let x = preConvertHex((r * 65536) + (g * 256) + b);
  while (x.length < 6) {
    x = `0${x}`;
  }
  return `#${x}`;
}

function HSL(hue) {
  if (hue > 360) return HSL(hue % 360);
  let X = (1 - Math.abs((hue / 60) % 2 - 1));
  X = Math.round(X * 255);
  let R = 0, G = 0, B = 0;
  if (hue < 60) {
    R = 255;
    G = X;
  } else if (hue < 120) {
    R = X;
    G = 255;
  } else if (hue < 180) {
    G = 255;
    B = X;
  } else if (hue < 240) {
    G = X;
    B = 255;
  } else if (hue < 300) {
    B = 255;
    R = X;
  } else {
    B = X;
    R = 255;
  }
  return convertHex(R, G, B);  
}

function colorWrap(string, coloring) {
  return (coloring === "no" || game.colors === 0 ? string : `<span style='color:${coloring}'>${string}</span>`);
}

function color(string, searches, col) {
  let target = string;
  // You can remove the target=target from second and later lines because it computers x.y()<newline>.z() as  x.y().z()
  target = target.split("0").join("$")
    .split("1").join("!")
    .split("2").join("@");
  for (let i = 0; i < searches.length; i++) {
    target = target.split(searches[i]).join(`J${col}'>${searches[i]}K`);
  }
  target = target.split("J").join("<span style='color:")
    .split("K").join("</span>")
    .split("$").join("0")
    .split("!").join("1")
    .split("@").join("2");
  return target;
}
