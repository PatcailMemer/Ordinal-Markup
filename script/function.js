"use strict";

function calcDynamic() {
  return (
    (game.dynamic * getManifoldEffect()) **
    (game.upgrades.includes(13) && (inChal(1)||inChal(3)||inChal(5)||inChal(7)||inChal(9)) ? 2 : 1)
  );
}

function getChalFact() {
  if ((!(inChal(6)||inChal(7)||inChal(8))) && (game.boostUnlock==1||game.factorShifts==7)) {
    return 4
  } // render func time and html time oh sniped
  return 1
} // where's the goddamn calcopps
// calcOPPS go use the search menu. found it

function getAlephOmega() {
  if (
    game.assCard[0].points.gte(1) &&
    game.assCard[1].points.gte(1) &&
    game.assCard[2].points.gte(1)
  ) {
    game.assCard[0].points = game.assCard[0].points.minus(1);
    game.assCard[1].points = game.assCard[1].points.minus(1);
    game.assCard[2].points = game.assCard[2].points.minus(1);
    game.alephOmega = game.alephOmega.add(1);
  }
}

function getHalfAlephOmega() {
  const bulk = game.assCard[0].points
    .min(game.assCard[1].points)
    .min(game.assCard[2].points)
    .divide(2)
    .floor();
  game.assCard[0].points = game.assCard[0].points.minus(bulk);
  game.assCard[1].points = game.assCard[1].points.minus(bulk);
  game.assCard[2].points = game.assCard[2].points.minus(bulk);
  game.alephOmega = game.alephOmega.add(bulk);
}

function calcCard() {
  game.maxCard = EN(
    Math.max(game.factorBoosts - 24, 1) ** calcCardExponent(game.collapseTime)
  )
    .floor()
    .max(game.maxCard);
  return game.maxCard;
}

function calcCardExponent(s) {
  return 0.5 + 0.8 * (5 - Math.min(Math.log10(Math.max(1000, s)), 5)) ** 1.5;
}

function getManifoldEffect() {
  return (
    Math.max(1, game.manifolds + 1 - game.sing.m) **
      (game.sfBought.includes(62) ? 2 : 0.5) *
    (game.iups[4 - 1] === 1 ? 3 : 1) *
    (game.iups[4] === 1 ? 1.26 : 1)
  );
}

function getDynamicFactorCap() {
  return (
    (10 *
      getManifoldEffect() *
      getDarkManifoldEffect() *
      (game.aups.includes(6) ? game.assCard[1].mult.toNumber() : 1)) **
    (game.upgrades.includes(13) && (inChal(1)||inChal(3)||inChal(5)||inChal(7)||inChal(9)) ? 2 : 1)
  );
}

function getDarkManifoldEffect() {
  return (
    Math.max(1, game.darkManifolds + 1 - getDMSacrafice()) ** 0.1 *
    (game.sfBought.includes(31) ? 3.78 : 1)
  );
}

function getFactorBoostGain() {
  let fbgg = game.factorBoosts;
  let fbg = 0;
  for (let j = 0; j < getFactorBulk(); j++) {
    fbgg += 1;
    fbg += fbgg;
  }
  return fbg;
}

function getFactorBulk() {
  if (game.OP >= V(game.factorBoosts + 3, 1)) {
    let i = 1;
    while (
      game.OP >= V(game.factorBoosts + 3 + i, 1) &&
      game.factorBoosts + 3 + i <= 27
    ) {
      i++;
    }
    return game.bulkBoost === 1 ? i : 1;
  }
  return 0;
}

function calcRefund() {
  let refundBoost = 0;
  for (let i = 0; i < bupUpgradeCosts.length; i++) {
    refundBoost +=
      game.upgrades.includes(i + 1) && i % 4 !== 3 ? Math.round(bupUpgradeCosts[i]**((i+1)%4==1?0.5**getOCComp(3):1)) : 0;
  }
  return refundBoost;
}

function getSumOfChallenges() {
  let r = 0;
  for (let i = 0; i < game.challengeCompletion.length; i++)
    r += game.challengeCompletion[i];
  return r + game.chal8Comp;
}

function calcTotalOPGain() {
  if (
    calcOrdPoints(game.ord, game.base, game.over) >= 9e257 &&
    calcOrdPoints(game.ord, game.base, game.over) <= 1.1e258
  )
    return 1e258;
  return (
    calcOrdPoints(game.ord, game.base, game.over) *
    (calcOrdPoints(game.ord, game.base, game.over) >= 10 ** 265
      ? 1
      : calcOPonInfMult())
  );
}

function calcOPonInfMult() {
  return (game.upgrades.includes(5) ? 5 : 1) *
        (game.upgrades.includes(15) && game.base < 6 ? 666666 : 1) *
        (inChal(7) ? Math.max(game.challengeCompletion[5], 1) : 1) *
        (inChal(8) ? Math.max(game.challengeCompletion[6], 1) : 1) *
        game.assCard[2].mult * // time for the final boss of OC1 
        (game.iups[8] === 1 && game.omegaChallenge !== 2 ? double() ** (1 + game.sfBought.includes(32)) : 1) *
        (game.sfBought.includes(42) ? 4 : 1) *
        Math.max(getSumOC(),1)
}

// ahh that's better
function timeSince(x) {
  return (Date.now() - x) / 1000;
}

function calcSlugMile() {
  let k = 0;
  while (game.leastBoost <= slugMile[k]) {
    k++;
  }
  return k;
}

function getDecrementyRate(x) {
  return (
    ((0.000666 * x) / 50) *
    (calcOrdPoints(game.ord, game.base, game.over) + 0) ** 0.2 *
    ((game.omegaChallenge == 2?1:double()) ** game.dups[1]) **
      (calcOrdPoints(game.ord, game.base, game.over) < 1e30 ? -1 : 1) *
    (game.sfBought.includes(22) ? getManifoldEffect() : 1) *
    (game.sfBought.includes(32) ? getDynamicFactorCap() : 1) *
    (game.sfBought.includes(42) ? 4 : 1)
  );
}

function getIncrementyRate(x) {
  if (game.ord < 1e270&&game.incrementyverse==0) {return EN(0);}
  if (game.incrementyverse==1) {
    return game.bigBrainOrd.times(
      EN(2).times(game.sfBought.includes(101)?EN(getSingLevel()).minus(game.spentENFunctions).max(3).div(3).floor():EN(1))
      .pow(game.iups[1]))
      .times(game.ivups.includes(1)?EN(1e120).pow(game.ivups.length):1).times(x/1000)//.times(1e240)//.times(1e220)
  }
  //(getSingLevel().toNumber()-2500)*0.65+2
  let ordRate = game.ord / 1e270;
  if (game.ord > BHO) ordRate = (BHO / 1e270) * 3 ** (game.ord / BHO - 1);
  return EN(
    ((ordRate * (x/1000)))
  ) .pow(Math.max(1,Math.min(getOCComp(6),1.1)**0.5))
    .times((game.omegaChallenge == 2?1:double()) ** (game.iups[1].toNumber()) *
      (game.iups[7] === 1 ? getDynamicFactorCap() : 1))
    .times(game.aups.includes(5) ? game.assCard[2].mult : 1)
    .times(
      game.leastBoost <= 1.5
        ? getDynamicFactorCap() ** getChalIncrementyCurve(game.chal8Comp)
        : 1
    );
}

function changeOfflineProg() {
  game.offlineProg = 1 - game.offlineProg;
  save();
}

function calcTotalMultWOFactor() {
  return (
    ((getBoostFromBoosters() * bfactorMult * calcDynamic()) /
      (inChal(8) ? 10 ** (game.decrementy * 0.95 ** game.dups[0]) : 1)) *
    game.assCard[0].mult.toNumber() *
    1.2 ** game.dups[2] *
    (game.aups.includes(4) ? Math.log10(Math.log10(1e10 + game.OP)) : 1) *
    getChalFact()
  );
}

function calcBupTotalMultWOFactor() {
  return (
    2 *
    getBoostFromBoosters() *
    game.assCard[1].mult.toNumber() *
    (game.aups.includes(1) ? Math.max(getManifoldEffect(), 1) : 1) *
    1.2 ** game.dups[2]
  );
}

function getBoostFromBoosters(check = 0) {
  return game.upgrades.includes(6) || check === 1
    ? Math.max(
        game.leastBoost <= 12 ? 10 + 9 * Math.max(game.boosters, 0) ** 0.5 : 0,
        10 + Math.max(game.boosters, 0) ** 0.9
      )
    : 1;
}
function calcFactorShiftTime(n) {
  return Math.max(
    1 / game.shiftAuto.toNumber(),Math.min(
    (100 / calcOPPS(n - 1)) * (game.leastBoost <= 1.5 ? 1 : 1) +
      (calcBase(n-1)==3?3**27:OPtoOrd(getFSCost(n-1),calcBase(n-1))) /
        (calcTotalMultWOFactor() *
          ((game.upgrades.includes(1) && game.omegaChallenge != 2 ? double() : 1) *
            (1 + (game.upgrades.includes(11) ? 3 : 0))) **
            (n - 1)),getFSCost(n-1)/calcOPPS(n - 1))
  );
}

function getFSCost(fs = game.factorShifts) {
  let base = factorShiftCosts[fs]
  if (game.omegaChallenge == 4) base = [5e106, 5e146, 1e250, 1e136, 1e135, 1e+234, 1e+250, 1.095e+272, Infinity][fs]
  base = base**(1/(1+getOCComp(4)))
  if ((fs==3) && game.sfBought.includes(73)) base=base**0.5
  return Math.round(base)
}

function calcOPPS(fs = game.factorShifts) {
  return (
    (game.upgrades.includes(5)
      ? 5 ** (inChal(1) ? 4 : 1)
      : 1) *
    game.assCard[2].mult.toNumber() *
    ((game.upgrades.includes(7) ? 20 : 0) + (game.leastBoost <= 15 ? 15 : 0)) *
    (game.upgrades.includes(19) && calcBase(fs) <= 5.5 ? 666666 : 1) *
    (game.sfBought.includes(42) ? 4 : 1) *
    Math.max(getSumOC(),1)
  );
}

function calcIncrementyMult(i = game.incrementy) {
  let k=ExpantaNum(i)
    .add(10)
    .log10()
    .pow(ExpantaNum(1.05).pow(game.iups[0]))
    .times(ExpantaNum(EN(1.2).times(game.sfBought.includes(102)?calcSF102Effect():1)).pow(game.iups[2]))
    .times(1.2);
  if (game.incrementyverse == 0) {
    k=k.min(1e120).toNumber();
  }
  return k
}

function calcFactorBoostTime() {
  let fbt = 0;
  let bfact = 1;
  for (let i = 1; i < 9; i++) {
    fbt += calcFactorShiftTime(i);
    if (i !== 8)
      bfact *=
        (([9, 8, 7, 4, 4, 3, 2][i - 1] +
          1 +
          (game.upgrades.includes(11) ? 3 : 0)) *
          (game.upgrades.includes(1) && game.omegaChallenge != 2 ? double() : 1)) **
        [0, 0.5, 0.75, 1][game.challengeCompletion[i - 1]];
    if (i === 8)
      bfact *= getDynamicFactorCap() ** getChalCurve([game.chal8Comp]);
  }
  // Note: "1.4589198550868316e+290" is V(27) * 3. It's probably better to have it already calculated.
  let speed =
    calcBupTotalMultWOFactor() *
    bfact *
    calcIncrementyMult(game.maxIncrementyRate.pow(0.9)) *
    (game.aups.includes(4) ? Math.log10(Math.log10(1e280)) : 1);
  return (
    Math.max(
      1 / game.boostAuto.toNumber(),
      fbt + (BHO / 1e270 / speed) * 3 ** (getSingLevel() - 1)
    ) / getFBmult()
  );
}

function getChal8Goal(x) {
  return x >= 3 && game.leastBoost >= 1.5
    ? Infinity
    :2 ** ((x * (x + 1)) / 2) * 3e10 / (game.sfBought.includes(63)?game.assCard[0].mult.toNumber():1);
}

function getChalCurve(n) {
  if (n >= 3) return 1;
  return [0, 0.5, 0.75, 1][n];
}

function getChalIncrementyCurve(n) {
  if (n <= 3||inChal(8)) return 0;
  // Old args:
  // 0.5 * n, 0.25 + 0.25 * n, 0.625 + 0.125 * n, 1.0625 + 0.0625 * n, 1.53125 + 0.03125 * n
  return (
    Math.min(
      0.5 * n,
      0.25 + 0.25 * n,
      0.625 + 0.125 * n,
      1.0625 + 0.0625 * n,
      1.53125 + 0.03125 * n
    ) - 1
  );
}

function calcBase(n = game.factorShifts) {
  let b =
    10 -
    n +
    (inChal(3) ? 5 : 0) +
    (inChal(4) ? n : 0);
  if (b >= 8 && game.upgrades.includes(9)) b -= 4;
  if (game.upgrades.includes(10) && game.OP <= 1e270) b = 5;
  if (game.upgrades.includes(23) && b == 6) b = 5;
  return b;
}

function getFBps() {
  if (
    (!inAnyChal()) &&
    !game.upgrades.includes(10) &&
    game.cAutoOn.shift === 1 &&
    game.cAutoOn.boost === 1 &&
    game.autoOn.max ===1 &&
    game.leastBoost <= 12
  ) {
    return 1 / calcFactorBoostTime();
  }
  return 0;
}

function increaseOrdTier2(x) {
  const bupCom =
    x < BHO / 1e270
      ? x * 1e270
      : (Math.log10(x / (BHO / 1e270)) / Math.log10(3) + 1) * BHO;
  if (
    game.ord + game.OP > 1e265 &&
    !(inChal(1))
  ) {
    if (game.ord < BHO && bupCom < BHO) {
      game.ord += bupCom;
      if (game.ord > BHO)
        game.ord = (Math.log10(game.ord / BHO) / Math.log10(3) + 1) * BHO;
    } else if (game.ord >= BHO && bupCom < BHO) {
      const amt = 3 ** (game.ord / BHO - 1) + bupCom / BHO;
      game.ord = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    } else if (game.ord < BHO && bupCom >= BHO) {
      const amt = 3 ** (bupCom / BHO - 1) + game.ord / BHO;
      game.ord = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    } else {
      const amt = 3 ** (game.ord / BHO - 1) + 3 ** (bupCom / BHO - 1);
      game.ord = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    }
    if (game.OP < BHO && bupCom < BHO) {
      game.OP += bupCom;
      if (game.OP > BHO)
        game.OP =
          (Math.log10(Math.min(game.OP, 1e308) / BHO) / Math.log10(3) + 1) *
          BHO;
    } else if (game.OP >= BHO && bupCom < BHO) {
      const amt = 3 ** (game.OP / BHO - 1) + bupCom / BHO;
      game.OP = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    } else if (game.OP < BHO && bupCom >= BHO) {
      const amt = 3 ** (bupCom / BHO - 1) + game.OP / BHO;
      game.OP = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    } else {
      const amt = 3 ** (game.OP / BHO - 1) + 3 ** (bupCom / BHO - 1);
      game.OP = (Math.log10(amt) / Math.log10(3) + 1) * BHO;
    }
  }
}

function getSingLevel() {
  if (game.incrementyverse==1) {
    return game.multifolds.add(game.sing.dm+game.sing.nw+1)
  }
  return 1 + game.sing.dm + game.sing.m + game.sing.nw;
}

function getDMSacrafice() {
  return (5 ** game.sing.dm - 1) * 250000 * (1 - game.sfBought.includes(11));
}

function getFBmult() {
  if (game.omegaChallenge >= 1) return 1
  let x=getSingLevel() * 2 - 1
  if (game.sfBought.includes(72)) x=x**1.4
  x=Math.round(x)
  return x;
}

function OPtoOrd(x, b, trim=0) {
  if (x <= 0.000000000001 || trim >= 12) return 0;
  if (x == 5e270 && b==3) return 3**27
  if (x >= 1e270 && b==3) return x
  let exp = Math.floor(Math.log10(x) + 0.000000000001);
  if (validInBase(exp, b)) {
    let coef = Math.floor(x / 10 ** exp + 0.000000000001);
    if (coef >= b) return b ** (OPtoOrd(exp, b, trim+1) + 1);
    return b ** OPtoOrd(exp, b, trim+1) * coef + OPtoOrd(x - coef * 10 ** exp, b, trim+1);
  } else {
    return b ** OPtoOrd(exp, b, trim+1);
  }
}

function validInBase(x, b) {
  return x
    .toString()
    .split("")
    .every(dig => {
      return Number(dig) < b - 0.5 || dig == "e" || dig == ".";
    });
}

function commafy(n) {
  let nr=Math.round(n);
  let raw=nr.toString();
  if (raw.split("").includes("e")) {
    let dig=Number(raw.split("+")[1])+1;
    raw=raw.split("e")[0].split("").filter(x => x != ".");
    let digNeed=dig-raw.length;
    for (let i=0;i<digNeed;i++) raw.push(0);
  } else {
    raw=raw.split("")
  }
  let out=[]
  while (raw.length>0) {
    out.push(raw[0])
    raw.shift()
    if (raw.length % 3 == 0 && raw.length>0) out.push(",")
  }
  return out.join("")
}

function getBaseless() {
  if (!game.sfEver.includes(51)) return 0
  let i=0
  while (game.mostChal4>baselessMile[i]) {
    i++
  }
  return i
}

function inChal(x) {
  if (game.challenge==x) return true
  if (x==8&&game.chal8==1) return true
  if (x==9&&game.chal9==1) return true
  if (x<6.5) {if (inChal(7)) return true}
  if  (game.challenge2.includes(x)) return true
  return false 
} //Time for some hell lol at least it isn't as bad because both of us are doing it at the same time 

// so i do all of calc.js and all game.chal8 and you do the rest
//Yes, that seems good 3 2 1 go

function inAnyChal() {
  if (game.challenge>0) return true
  if (game.chal8==1) return true
  if (game.chal9==1) return true
  if (game.omegaChallenge==1) return true
  return false
  return false
}

function getOCComp(x) {
  if (game.ocBestIncrementy[x-1].gte(ocGoals[x-1])) {
    return game.ocBestIncrementy[x-1].log10().div(EN(ocGoals[x-1]).log10()).toNumber()
  } else {
    return 0
  }
}

//EN.js DONE
//canvas.js DONE
//color.js DONE
//function.js DONE
//hotkeys.js DONE
//ordLevel.js DONE
//ordMarks.js DONE
//prestige.js DONE
//script.js DONE (you could say we went to hell and back)
//hotkeys.js DONE
//saveload.js DONE 
//singfunc.js DONE
//stats.js UNUSED
// okay this was ez i did this file already

function double() {
  return 2+getOCComp(2)
}
// hi
function getSumOC() {
  return getOCComp(1)+getOCComp(2)+getOCComp(3)+getOCComp(4)+getOCComp(5)+getOCComp(6)+getOCComp(7)+getOCComp(8)+getOCComp(9)+getOCComp(10)+getOCComp(11)+getOCComp(12)

}

