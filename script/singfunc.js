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
    if(game.sfBought.includes(this.id)) return
    if(this.canBuy()) {
      this.bought = true
      if (!game.sfEver.includes(this.id)) game.sfEver.push(this.id)
      if (!(this.id<=25&&getBaseless()>=3)) {
        if (game.incrementyverse == 1) {
          game.spentENFunctions = game.spentENFunctions.add(this.price)
        } else {
          game.spentFunctions += this.price
        }
      }
      game.sfBought.push(this.id)
      document.getElementById("SF"+this.id).classList.remove("unbought")
      document.getElementById("SF"+this.id).classList.add("boughtthing")
    }
    singfunctions.forEach(func => func.update())
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
    if (this.id==41&&game.achievement.length<=89.5) return false
    if (this.id==51&&getSumOfChallenges()<=33.5) return false
    if (this.id==71&&getSumOfChallenges()<=35.5) return false
    if (this.id==73&&game.bestFBps<500000000) return false
    if (this.id==92&&EN(getSingLevel()).minus(game.spentENFunctions).lt(3250)) return false
    if (this.id==101&&EN(getSingLevel()).minus(game.spentENFunctions).lt(20)) return false
    if (this.id==111&&EN(getSingLevel()).minus(game.spentENFunctions).lt(600)) return false
    if (this.id==121&&!game.ivups.includes(4)) return false
    if (this.id==141&&game.fractalShift<=4.5) return false
    if (game.sfBought.includes(121) && game.sfBought.some(a => {return Math.floor(a/10)==Math.floor(this.id/10)})) return false
    return true
  }
  canBuy() {
    return (this.id==11||(this.id<=25&&getBaseless()>=3)
            ||(EN(getSingLevel()).add(game.incrementyverse==0?game.manifolds-game.sing.m:0).minus(game.incrementyverse==1?game.spentENFunctions:game.spentFunctions).gte(this.price))
            && !(game.sfBought.indexOf(this.id) > -1)
            && (this.prereq.some(id => {return game.sfBought.includes(id)}) || this.id==81)
            && game.omegaChallenge!=6
            && game.sfBought.indexOf(this.splitpath[0]) == -1
            && game.sfBought.indexOf(this.splitpath[1]) == -1
            && this.specialReq()
            && (this.id>77||game.incrementyverse==0)
           );
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
  SF(0, [31], 41, [0,0]),
  SF(2, [31,32], 42, [0,0]),
  SF(0, [42], 51, [0,0]),
  SF(12, [42], 52, [0,0]), //uhh, sniped... lol we both got sniped by each other
  SF(17, [51], 61, [0,0]),
  SF(15, [51], 62, [0,0]),
  SF(42, [51], 63, [0,0]),
  SF(0, [61], 71, [0,0]),
  SF(16, [62], 72, [0,0]),
  SF(0, [63], 73, [0,0]),
  SF(EN(1000), [71,72,73], 81, [0,0]),
  SF(EN(1500), [81], 91, [0,0]),
  SF(EN(2500), [81], 92, [0,0]),
  SF(EN(1e6), [81], 93, [0,0]),
  SF(EN(0), [91], 101, [0,0]),
  SF(EN(5000), [92], 102, [0,0]),
  SF(EN("ee6"), [93], 103, [0,0]),
  SF(EN(0), [101], 111, [0,0]),
  SF(EN(40000), [102], 112, [0,0]),
  SF(EN(125), [101,103], 113, [0,0]),
  SF(EN(2e5), [102], 114, [0,0]),
  SF(EN("ee8"), [103], 115, [0,0]),
  SF(EN(0), [115], 121, [0,0]),
  SF(EN("10^^100"), [121], 131, [0,0]),
  SF(EN("10^^^^100"), [121], 132, [0,0]),
  SF(EN(0), [131], 141, [0,0]),
];

function buyMaxFunction() {
  singfunctions.forEach(a => {
    a.buy()
  })
}