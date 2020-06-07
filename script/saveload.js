"use strict";

function reset() {
  game = {
  base: 10,
  ord: 0,
  over: 0,
  canInf: false,
  OP: 0,
  infUnlock: 0,
  subTab: 1,
  bsubTab: 1,
  csubTab: 1,
  succAuto: 0,
  limAuto: 0,
  autoLoop: { succ: 0, lim: 0 },
  factorShifts: 0,
  factors: [],
  lastTick: Date.now(),
  version: 0.22,
  boostUnlock: 0,
  boosters: 0,
  upgrades: [],
  factorBoosts: 0,
  dynamic: 1,
  dynamicUnlock: 0,
  maxAuto: 0,
  infAuto: 0,
  bAutoLoop: { max: 0, inf: 0 },
  autoOn: { max: 1, inf: 1 },
  challenge: 0,
  challengeCompletion: [0, 0, 0, 0, 0, 0, 0],
  incrementy: EN(0),
  manifolds: 0,
  iups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  buchholz: 1,
  theme: 0,
  msint: 50,
  maxOrdLength: { less: 5, more: 7 },
  colors: 0,
  music: 0,
  chal8: 0,
  chal8Comp: 0,
  decrementy: 0,
  collapsed: 0,
  manualClicksLeft: 1000,
  collapseUnlock: 0,
  cardinals: EN(0),
  collapseTime: 0,
  reachedBHO: 0,
  assCard: [
	{ points: EN(0), power: EN(0), mult: EN(1) },
	{ points: EN(0), power: EN(0), mult: EN(1) },
	{ points: EN(0), power: EN(0), mult: EN(1) }
  ],
  leastBoost: Infinity,
  alephOmega: EN(0),
  aups: [],
  assBefore: 0,
  dups: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  darkManifolds: 0,
  darkManifoldMax: 0,
  cAutoOn: { shift: 1, boost: 1 },
  cAutoLoop: { shift: 0, boost: 0 },
  offlineProg: 1,
  shiftAuto: EN(1),
  boostAuto: EN(1),
  fbConfirm: 0,
  bulkBoost: 1,
  maxIncrementyRate: EN(0),
  mostCardOnce: EN(0),
  flashIncrementy: 1,
  bConf: { ref: 1, refFB: 0, chal: 0, chalFB: 0 },
  qolSM: { abu: 1, ig73: 1, igc8: 1, acc: 1, nc8: 0, c8: 0, ca: 0, st: 0, ttnc: 0 },
  maxCard: EN(0),
  hotkeysOn: 1,
  sing: { dm: 0, m: 0, nw: 0 },
  thicc: 1,
  collapseConf: 1,
  mostSing: 0
  };
  document.getElementById("infinityTabButton").style.display = "none";
  render();
  updateFactors();
}

function load() {
  const loadgame = JSON.parse(localStorage.getItem("ordinalMarkupSave"));
  if (loadgame !== null && AF === 0) {
    loadGame(loadgame);
  }
}

function handleVeryOldSaves(loadgame) {
	if (typeof loadgame.version === "undefined") {
    game.version = 0.12;
  } else {
    game.version = loadgame.version;
  }
  if (game.version === 0.12) {
    game.version = 0.2;
    if (game.ord >= 1e100 || game.base === 2) {
      revertToPreBooster();
    }
  }
  if (game.version === 0.2) {
    game.version = 0.201;
    if (game.boostUnlock === 1) {
      game.boosters = 1;
      game.upgrades = [];
      game.factorBoosts = 1;
    }
  }
  if (game.version === 0.201) {
    game.version = 0.202;
    if (game.boostUnlock === 1 && game.boosters + (game.upgrades.includes(1) ? 1 : 0) >= 2) {
      game.boosters -= 1;
    } else if (game.boostUnlock === 1) game.factorBoosts += 1;
    
  }
}

function handlePost0202Saves() {
  if (game.version === 0.202) {
    game.version = 0.21;
    if (game.boostUnlock === 1) {
      if (game.factorBoosts === 0) {
        game.factorBoosts = 1;
        if (game.upgrades.includes(1)) {
          game.boosters = 0;
        } else {
          game.boosters = 1;
        }
      } else {
        game.boosters = game.factorBoosts * (game.factorBoosts + 1) / 2;
        if (game.upgrades.includes(1)) game.boosters--;
        if (game.upgrades.includes(2)) game.boosters--;
        if (game.upgrades.includes(3)) game.boosters--;
        if (game.upgrades.includes(5)) game.boosters -= 5;
        if (game.upgrades.includes(6)) game.boosters -= 4;
        if (game.upgrades.includes(7)) game.boosters -= 8;
      }
    }
  }
  if (game.version === 0.21) {
     game.version = 0.211;
     if (game.boostUnlock === 1) {
     game.boosters = game.factorBoosts * (game.factorBoosts + 1) / 2;
     if (game.upgrades.includes(1)) game.boosters--;
     if (game.upgrades.includes(2)) game.boosters--;
     if (game.upgrades.includes(3)) game.boosters--;
     if (game.upgrades.includes(5)) game.boosters -= 5;
     if (game.upgrades.includes(6)) game.boosters -= 4;
     if (game.upgrades.includes(7)) game.boosters -= 8;
	}
  }
}

function handlePost0211Saves() {
	if (game.version === 0.211) {
     game.version = 0.22;
     if (game.boostUnlock === 1) {
     game.boosters = game.factorBoosts * (game.factorBoosts + 1) / 2;
     if (game.upgrades.includes(1)) game.boosters--;
     if (game.upgrades.includes(2)) game.boosters--;
     if (game.upgrades.includes(3)) game.boosters--;
     if (game.upgrades.includes(5)) game.boosters -= 5;
     if (game.upgrades.includes(6)) game.boosters -= 4;
     if (game.upgrades.includes(7)) game.boosters -= 8;
     if (game.upgrades.includes(11)) game.boosters -= 16;
     }
  }
	if (game.version === 0.22) {
    game.version = 0.24;
    game.iups.push(0);
    game.iups.push(0);
    game.iups.push(0);
  }
  if (game.version === 0.24) {
    if (game.leastBoost <= 15) game.leastBoost = 15;
    if (!game.upgrades.includes(4)) {
      game.challengeCompletion[0] = 0;
      game.challengeCompletion[1] = 0;
    }
    if (!game.upgrades.includes(8)) {
      game.challengeCompletion[2] = 0;
      game.challengeCompletion[3] = 0;
    }
    if (!game.upgrades.includes(12)) {
      game.challengeCompletion[4] = 0;
      game.challengeCompletion[5] = 0;
      game.challengeCompletion[6] = 0;
      game.chal8Comp = 0;
    }
    game.version = 0.31;
  }
}

function handleOldVersions(loadgame) {
  handleVeryOldSaves(loadgame);
  handlePost0202Saves();
  handlePost0211Saves();
}

function loadGame(loadgame) {
  reset();
  for (const i in loadgame) {
    game[i] = loadgame[i];
  }
  const diff = Date.now() - game.lastTick;
  // Console.log(diff);
  handleOldVersions(loadgame);
  game.cardinals = ENify(game.cardinals);
  game.incrementy = ENify(game.incrementy);
  game.assCard[0].points = ENify(game.assCard[0].points);
  game.assCard[0].power = ENify(game.assCard[0].power);
  game.assCard[0].mult = ENify(game.assCard[0].mult);
  game.assCard[1].points = ENify(game.assCard[1].points);
  game.assCard[1].power = ENify(game.assCard[1].power);
  game.assCard[1].mult = ENify(game.assCard[1].mult);
  game.assCard[2].points = ENify(game.assCard[2].points);
  game.assCard[2].power = ENify(game.assCard[2].power);
  game.assCard[2].mult = ENify(game.assCard[2].mult);
  game.alephOmega = ENify(game.alephOmega);
  game.shiftAuto = ENify(game.shiftAuto);
  game.boostAuto = ENify(game.boostAuto);
  game.maxIncrementyRate = ENify(game.maxIncrementyRate);
  game.mostCardOnce = ENify(game.mostCardOnce);
  game.maxCard = ENify(game.maxCard);
  document.getElementById("nonC8Auto").value = game.qolSM.nc8;
  document.getElementById("C8Auto").value = game.qolSM.c8;
  document.getElementById("ttnc").value = game.qolSM.ttnc;
  // Console.log(game.leastBoost);
  if (game.leastBoost === null) game.leastBoost = Infinity;
  // Console.log(game.leastBoost);
  render();
  if (game.offlineProg === 1) {
    if (game.collapseTime <= 1000 && diff / 1000 >= 1000 - game.collapseTime) {
      loop((1000 - game.collapseTime) * 1000, 1);
      loop(diff - ((1000 - game.collapseTime) * 1000), 1);
    } else {
      loop(diff, 1);
    }
  }
  game.lastTick = Date.now();
  // Console.log(diff);
}


function save() {
  if (AF === 0) localStorage.setItem("ordinalMarkupSave", JSON.stringify(game));
}

function exporty() {
  copyStringToClipboard(btoa(JSON.stringify(game)));
}

function importy() {
  let loadgame = "";
  loadgame = JSON.parse(atob(prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")));
  if (loadgame !== "") {
    loadGame(loadgame);
  }
}
