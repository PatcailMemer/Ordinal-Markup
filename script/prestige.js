"use strict";

function infinity(manmade = 0) {
  if (game.canInf && !game.incrementyverse) {
    if (calcOrdPoints(game.ord, game.base, game.over) >= 1e265) {
      game.OP = Math.max(game.OP, calcOrdPoints(game.ord, game.base, game.over));
    } else {
      if (inChal(8) || inChal(6)) game.OP = 0;
      game.OP += calcTotalOPGain();
    }
    game.ord = 0;
    game.over = 0;
    document.getElementById("infinityTabButton").style.display = "inline-block";
    game.infUnlock = 1;
    game.dynamic = 1;
    game.decrementy = 0;
    game.autoLoop.succ = 0;
    game.autoLoop.lim = 0;
    game.manualClicksLeft = 1000;
  }
  loop(0);
  //if (manmade === 1) render();
}

// There was "manmade = 0" as the args, but manmade was never used, so I removed it.
function factorShift() {
  if (game.OP >= getFSCost(game.factorShifts) && !(inChal(5) && game.factorShifts >= 2)) {
    if (game.factorShifts < 6.5) {
      game.ord = 0;
      game.over = 0;
      game.canInf = false;
      game.OP = 0;
      game.succAuto = 0;
      game.limAuto = 0;
      game.autoLoop = { succ: 0, lim: 0 };
      game.factorShifts += 1;
      game.manualClicksLeft = 1000;
      game.base -= 1;
      game.factors = [];
      game.dynamic = 1;
      game.decrementy = 0;
      game.autoLoop.succ = 0;
      game.autoLoop.lim = 0;
      for (let i = 0; i < game.factorShifts; i++) {
        game.factors.push(0);
      }
    } else if (game.boostUnlock === 0) {
      game.dynamic = 1;
      game.ord = 0;
      game.over = 0;
      game.canInf = false;
      game.OP = 0;
      game.succAuto = 0;
      game.limAuto = 0;
      game.autoLoop = { succ: 0, lim: 0 };
      game.factorShifts = 0;
      game.base = 10;
      game.factors = [];
      game.boostUnlock = 1;
      game.boosters += 1;
      game.manualClicksLeft = 1000;
      game.factorBoosts += 1;
      game.challenge = 0;
      game.incrementy = EN(0);
      game.chal8 = 0;
      game.decrementy = 0;
      game.autoLoop.succ = 0;
      game.autoLoop.lim = 0;
    }
  }
}

function factorBoost(manmade = 0) {
  if (game.OP >= V(game.factorBoosts + 3, 1) && !(inAnyChal())) {
    if (manmade === 1 && game.fbConfirm === 1) {
      if (!confirm(`Are you sure you want to do a Factor Boost?${
        (game.upgrades.includes(8)
		? " Don't forget to check Incrementy!"
		: "")}`)) return;
    }
    game.boosters += getFactorBoostGain();
    game.factorBoosts += getFactorBulk() * getFBmult();
    resetEverythingBoostDoes();
  }
}

function refund() {
  const conf = (game.bConf.ref === 1 ? confirm("Are you sure you want to refund your booster? You'll reset this Factor Boost!") : true);
  if (conf) {
  if (game.bConf.refFB === 1) factorBoost();
  game.boosters += calcRefund();
  refundAction();
  for (let i = 0; i < bupUpgradeCosts.length; i++) {
    document.getElementById(`bup${i + 1}`).classList.remove("canbuy");
    document.getElementById(`bup${i + 1}`).classList.remove("bought");
    document.getElementById(`bup${i + 1}`).classList.add("locked");
  }
  resetEverythingBoostDoes();
  }
}

function refundAction() {
  // We can make it const instead of let because we are only changing its properties, not itself as a whole.
  const rightrow = [];
  if (game.upgrades.includes(4)) rightrow.push(4);
  if (game.upgrades.includes(8)) rightrow.push(8);
  if (game.upgrades.includes(12)) rightrow.push(12);
  if (game.upgrades.includes(16)) rightrow.push(16);
  if (game.upgrades.includes(20)) rightrow.push(20);
  if (game.upgrades.includes(24)) rightrow.push(24);
  game.upgrades = rightrow;
}

function collapse(manmade = 0) {
  if (game.reachedBHO === 1 || game.collapseUnlock === 0) {
  if (game.collapseUnlock === 0) {
  let i = 1;
  let anim = 0;
  const id = setInterval(() => {
    collapseAnimation += i;
    anim++;
    if (collapseAnimation === 100 && i === 1) {
      i = 0;
    }
    if (anim === 300) {
      game.collapseUnlock = 1;
      game.upgrades = [4, 8, 12, 16];
      let k = EN(Math.max(game.factorBoosts - 24, 2) ** 0.5).floor()
      if (k.gte(game.mostCardOnce)) game.mostCardOnce = k;
      game.cardinals = game.cardinals.add(k);
      if (game.leastBoost >= game.factorBoosts) game.leastBoost = game.factorBoosts;
      resetEverythingCollapseDoes();
      i--;
    }
    if (i === -1 && collapseAnimation === 0) {
      clearInterval(id);
    }
  }, 50);
  } else {
    let conf = false
    if (manmade == 0) {
      conf = true
    } else {
    conf = (game.collapseConf==0?true:confirm("Are you sure you want to collapse?"))
    }
    if (conf) {
      if (game.sfEver.includes(11)) game.refundPoints++
      if (calcCard().gte(game.mostCardOnce)) game.mostCardOnce = calcCard();
      game.cardinals = game.cardinals.add(calcCard());
      if (game.leastBoost >= game.factorBoosts) game.leastBoost = game.factorBoosts;
      resetEverythingCollapseDoes();
    }
  }
  } else if (manmade === 1) {
    if (confirm("Do you want to restart this current collapse to restart the collapse timer?")) {
      resetEverythingCollapseDoes();
    }
  }
}

function resetEverythingCollapseDoes() {
  game.base = 10;
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 0;
  game.succAuto = 0;
  game.limAuto = 0;
  game.maxAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 0;
  game.factors = [];
  game.boosters = 0;
  game.upgrades = game.upgrades.filter(upg => (upg % 4 === 0));
  game.factorBoosts = (game.aups.includes(9) ? Math.floor(game.factorBoosts / 10) : 0);
  game.dynamic = 1;
  game.maxAuto = 0;
  game.infAuto = 0;
  game.bAutoLoop = { max: 0, inf: 0 };
  game.challenge = 0;
  game.challengeCompletion = [0, 0, 0, 0, 0, 0, 0];
  game.incrementy = EN(0);
  game.chal8 = 0;
  game.chal9 = 0;
  game.chal8Comp = 0;
  if (getOCComp(1)<1) {game.chal9Comp = 0}
  game.decrementy = 0;
  game.manualClicksLeft = 1000;
  game.collapseUnlock = 1;
  game.collapseTime = 0;
  game.reachedBHO = 0;
  if (game.leastBoost >= 1.5) {
  game.manifolds = 0;
  game.iups = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  game.dups = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  game.darkManifolds = 0;
  }
  game.maxCard = EN(0);
}

function resetEverythingBoostDoes() {
  game.base = 10;
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 0;
  game.succAuto = 0;
  game.limAuto = 0;
  game.maxAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 0;
  game.factors = [];
  game.bAutoLoop = { max: 0, inf: 0 };
  game.decrementy = 0;
  game.manualClicksLeft = 1000;
  game.base = 10;
  game.boostUnlock = 1;
  game.dynamic = 1;
  game.incrementy = EN(0);
  game.challenge = 0;
  game.chal8 = 0;
  game.chal9 = 0;
}
