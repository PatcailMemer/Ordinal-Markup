function isSuperset(set, subset) {
    for (let elem of subset) {
        if (!set.has(elem)) {
            return false
        }
    }
    return true
}

class SingularityFunction {
  constructor(price, prerequisites, id, splitpath) {
    this.price = price;
    this.prereq = prerequisites
    this.bought = false
    this.id = id
    this.splitpath = splitpath
  }
  buy() {
    if(this.canBuy()) {
      this.bought = true
      if (!game.sfEver.includes(this.id)) game.sfEver.push(this.id)
      game.spentFunctions += this.price
      game.sfBought.push(this.id)
      document.getElementById("SF"+this.id).classList.remove("unbought")
      document.getElementById("SF"+this.id).classList.add("boughtthing")
    }
  }
  update() {
    if (this.prereq.some(pre => game.sfEver.includes(pre))||this.id==11) {
      document.getElementById("SF"+this.id).style.opacity="100"
      document.getElementById("SF"+this.id).style.cursor="pointer"
    } else {
      document.getElementById("SF"+this.id).style.opacity="0"
      document.getElementById("SF"+this.id).style.cursor="default"
    }
    if(game.sfBought.indexOf(this.id) > -1) {
      document.getElementById("SF"+this.id).classList.add("boughtthing")
      document.getElementById("SF"+this.id).classList.remove("unboughtthing")
      //document.getElementById("SF"+this.id).classList.remove("canbought")
    } else if (this.canBuy()) {
      document.getElementById("SF"+this.id).classList.remove("boughtthing")
      document.getElementById("SF"+this.id).classList.remove("unboughtthing")
      //document.getElementById("SF"+this.id).classList.add("canbought")
    } else {
      document.getElementById("SF"+this.id).classList.remove("boughtthing")
      document.getElementById("SF"+this.id).classList.add("unboughtthing")
      //document.getElementById("SF"+this.id).classList.remove("canbought")
    }
  }
  specialReq() {
    if (this.id==51&&getSumOfChallenges()<=33.5) return false
    if (this.id==71&&getSumOfChallenges()<=35.5) return false
    return true
  }
  canBuy() {
    return (this.id==11||getSingLevel()+game.manifolds-game.sing.m-game.spentFunctions >= this.price && !(game.sfBought.indexOf(this.id) > -1) && this.prereq.some(id => {return game.sfBought.includes(id)}) && game.sfBought.indexOf(this.splitpath[0]) == -1 && game.sfBought.indexOf(this.splitpath[1]) == -1 && this.specialReq())
  }
}
let SF = (a,b,c,d) => new SingularityFunction(a,b,c,d)
let singfunctions = [
  SF(0, [], 11, [0,0]),
  SF(24, [11], 21, [0,0]),
  SF(15, [11], 22, [0,0]),
  SF(20, [11], 23, [0,0]),
  SF(6, [22], 31, [0,0]),
  SF(10, [22], 32, [0,0]),
  SF(Infinity, [31], 41, [0,0]),
  SF(2, [31,32], 42, [0,0]),
  SF(0, [42], 51, [0,0]),
  SF(12, [42], 52, [0,0]), //uhh, sniped... lol we both got sniped by each other
  SF(17, [51], 61, [0,0]),
  SF(15, [51], 62, [0,0]),
  SF(42, [51], 63, [0,0]),
  SF(0, [61], 71, [0,0]),
  SF(16, [62], 72, [0,0]),
  SF(Infinity, [63], 73, [0,0]),
  SF(Infinity, [71,72,73], 81, [0,0]),
  
];
