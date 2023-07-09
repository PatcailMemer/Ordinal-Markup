"use strict";
let reader = new FileReader();

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
  iups: [EN(0), EN(0), EN(0), 0, 0, 0, 0, 0, 0],
  buchholz: 1,
  theme: 1,
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
  mostSing: 0,
  spentFunctions: 0,
  sfBought: [],
  sfEver: [],
  mostChal4: 0,
  refundPoints: 0,
  refundPointProg: 0,
  omegaChallenge: 0,
  ocBestIncrementy: [EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0),EN(0)],
  challenge2: [0,0],
  incrementyDouble: 0,
  bestFBps: 0,
  advAutoShift: 0,
  chal9: 0,
  chal9Comp: 0,
  mostChal8Comp: 0,
  bestPsi: 0,
  fileExport: 1,
  bestIncrementy: EN(0),
  ocConf: {enter: 1, exit: 1, double: 1},
  incrementyverse: 0,
  bigBrainOrd: EN(0),
  multifolds: EN(0),
  spentENFunctions: EN(0),
  isubTab: 1,
  ivups: [],
  autoIncrementy: [1,1,1],
  achieveRow: [1],
  achievement: [],
  publicTesting: 0,
  fractalEngine: [newFractalEngine(1)],
  fractalShift: 0,
  orbEffectExp: 0,
  orbUnlock: 0,
  orbEnabled: [0,0,0,0,0],
  fractalUpgrades: [0,0,0,0,0],
  fractalBase: 100000
  }
  //By default, it should be a file export k
  //Since with plain text you can lose it easily
  document.getElementById("infinityTabButton").style.display = "none";
  render();
  updateFactors();
}

function load() {
  const loadgame = localStorage[(inPublicTesting()?"ordinalMarkupPublicTestingSave":"ordinalMarkupSave")];
  if (loadgame !== undefined && AF === 0) {
    loadGame(JSON.parse(loadgame));
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
  if (game.version === 0.31) {
   game.upgrades=game.upgrades.filter(x => {return ![17,24].includes(x)})
   game.version = 0.34;
  }
  if (game.version === 0.34) {
    if (game.darkManifolds>=1e128) {
      alert("Oh hi, you used a game-breaking bug in challenge 8 that was patched. Would you like to revert your save to pre-Omega Challenge?")
      localStorage[(inPublicTesting()?"ordinalMarkupPublicTestingSave":"ordinalMarkupSave")]=atob("eyJiYXNlIjozLCJvcmQiOjAsIm92ZXIiOjAsImNhbkluZiI6ZmFsc2UsIk9QIjowLCJpbmZVbmxvY2siOjEsInN1YlRhYiI6MiwiYnN1YlRhYiI6MSwiY3N1YlRhYiI6Niwic3VjY0F1dG8iOjAsImxpbUF1dG8iOjAsImF1dG9Mb29wIjp7InN1Y2MiOjAsImxpbSI6MH0sImZhY3RvclNoaWZ0cyI6NywiZmFjdG9ycyI6WzAsMCwwLDAsMCwwLDBdLCJsYXN0VGljayI6MTU5MzAyNTgyNzMzOSwidmVyc2lvbiI6MC4zMSwiYm9vc3RVbmxvY2siOjEsImJvb3N0ZXJzIjozLjU2MzUzMTcwNzQ0MDM5NmUrMjMsInVwZ3JhZGVzIjpbNCw4LDEyLDE2LDIwLDEsMiwzLDUsNiw3LDksMTEsMTMsMTUsMTcsMTksMjNdLCJmYWN0b3JCb29zdHMiOjg0NDI0Mzc1MDgwOCwiZHluYW1pYyI6MSwiZHluYW1pY1VubG9jayI6MSwibWF4QXV0byI6MCwiaW5mQXV0byI6MCwiYkF1dG9Mb29wIjp7Im1heCI6My4zMjczNTg0MTEzNDc0NTJlLTQzLCJpbmYiOjMuMzI3MzU4NDExMzQ3NDUyZS00M30sImF1dG9PbiI6eyJtYXgiOjEsImluZiI6MX0sImNoYWxsZW5nZSI6MCwiY2hhbGxlbmdlQ29tcGxldGlvbiI6WzMsMywzLDMsMywzLDNdLCJpbmNyZW1lbnR5Ijp7ImFycmF5IjpbWzAsNC44MzE4MTIwOTQyNzgyMDQzZS0xOTFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJtYW5pZm9sZHMiOjE3LCJpdXBzIjpbMTcsMjgsOSwxLDEsMSwxLDEsMV0sImJ1Y2hob2x6IjoxLCJ0aGVtZSI6MSwibXNpbnQiOjUwLCJtYXhPcmRMZW5ndGgiOnsibGVzcyI6MCwibW9yZSI6M30sImNvbG9ycyI6MSwibXVzaWMiOjMsImNoYWw4IjowLCJjaGFsOENvbXAiOjE1LCJkZWNyZW1lbnR5IjowLCJjb2xsYXBzZWQiOjAsIm1hbnVhbENsaWNrc0xlZnQiOjEwMDAsImNvbGxhcHNlVW5sb2NrIjoxLCJjYXJkaW5hbHMiOnsiYXJyYXkiOltbMCwzMy40NzY2ODE4ODk4MTI1MV0sWzEsMV1dLCJsYXllciI6MCwic2lnbiI6MX0sImNvbGxhcHNlVGltZSI6ODQzMTIwLjk2NzAwMTIwNjUsInJlYWNoZWRCSE8iOjEsImFzc0NhcmQiOlt7InBvaW50cyI6eyJhcnJheSI6W1swLDMyLjExODIyMDQ1OTQ1OF0sWzEsMV1dLCJsYXllciI6MCwic2lnbiI6MX0sInBvd2VyIjp7ImFycmF5IjpbWzAsMTk2LjMyNDk0NTM1MjI0NDFdLFsxLDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJtdWx0Ijp7ImFycmF5IjpbWzAsMTk2LjMyNDk0NTM1MjI0NDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9fSx7InBvaW50cyI6eyJhcnJheSI6W1swLDMyLjExODIyMDQ1OTQ1OF0sWzEsMV1dLCJsYXllciI6MCwic2lnbiI6MX0sInBvd2VyIjp7ImFycmF5IjpbWzAsMTk2LjMyNDk0NTM1MjI0NDFdLFsxLDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJtdWx0Ijp7ImFycmF5IjpbWzAsMTczNy4zMTM3MTk2MjQ0NDVdXSwibGF5ZXIiOjAsInNpZ24iOjF9fSx7InBvaW50cyI6eyJhcnJheSI6W1swLDMyLjExODIyMDQ1OTQ1OF0sWzEsMV1dLCJsYXllciI6MCwic2lnbiI6MX0sInBvd2VyIjp7ImFycmF5IjpbWzAsMTk2LjMyNDk0NTM1MjI0NDFdLFsxLDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJtdWx0Ijp7ImFycmF5IjpbWzAsMjYzMC43NTQyNjc3MjAwNzFdXSwibGF5ZXIiOjAsInNpZ24iOjF9fV0sImxlYXN0Qm9vc3QiOjEsImFsZXBoT21lZ2EiOnsiYXJyYXkiOltbMCwzMC4zMDA4ODg0NTAxNjUwNTRdLFsxLDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJhdXBzIjpbMSwyLDMsNCw1LDYsNyw4LDldLCJhc3NCZWZvcmUiOjEsImR1cHMiOls0NCwxMCwzMiwwLDAsMCwwLDAsMF0sImRhcmtNYW5pZm9sZHMiOjkuMDYzMDE5NDA0NTQyOTI0ZSszMSwiZGFya01hbmlmb2xkTWF4IjoxLCJjQXV0b09uIjp7InNoaWZ0IjoxLCJib29zdCI6MX0sImNBdXRvTG9vcCI6eyJzaGlmdCI6MCwiYm9vc3QiOjB9LCJvZmZsaW5lUHJvZyI6MSwic2hpZnRBdXRvIjp7ImFycmF5IjpbWzAsMjYuMjQwOTczNjg0MjA1MTczXSxbMSwxXV0sImxheWVyIjowLCJzaWduIjoxfSwiYm9vc3RBdXRvIjp7ImFycmF5IjpbWzAsMjYuMjQwOTczNjg0MjA1MTczXSxbMSwxXV0sImxheWVyIjowLCJzaWduIjoxfSwiZmJDb25maXJtIjowLCJidWxrQm9vc3QiOjEsIm1heEluY3JlbWVudHlSYXRlIjp7ImFycmF5IjpbWzAsODIuNjU4MDEwNjc2MDY5OF0sWzEsMV1dLCJsYXllciI6MCwic2lnbiI6MX0sIm1vc3RDYXJkT25jZSI6eyJhcnJheSI6W1swLDI5LjU3NDA5OTE4ODU2ODM3XSxbMSwxXV0sImxheWVyIjowLCJzaWduIjoxfSwiZmxhc2hJbmNyZW1lbnR5IjoxLCJiQ29uZiI6eyJyZWYiOjAsInJlZkZCIjoxLCJjaGFsIjowLCJjaGFsRkIiOjF9LCJxb2xTTSI6eyJhYnUiOjEsImlnNzMiOjEsImlnYzgiOjEsImFjYyI6MSwibmM4IjoiMyIsImM4IjoiMTIiLCJjYSI6MCwic3QiOjAsInR0bmMiOiIxMDAwIn0sIm1heENhcmQiOnsiYXJyYXkiOltbMCwyNi44NzgyNjg3NDA0MjI1NzNdLFsxLDFdXSwibGF5ZXIiOjAsInNpZ24iOjF9LCJob3RrZXlzT24iOjEsInNpbmciOnsiZG0iOjQ0LCJtIjotMSwibnciOjEwfSwidGhpY2MiOjEsImNvbGxhcHNlQ29uZiI6MSwibW9zdFNpbmciOjcyLCJzcGVudEZ1bmN0aW9ucyI6NDEsInNmQm91Z2h0IjpbMTEsMjIsMzEsNDIsNTEsNjEsNzFdLCJzZkV2ZXIiOlsxMSwyMiwzMSw0Miw1MSw2MSw3MSw2Miw2Myw1MiwzMiwyMSwyMyw3Ml0sImZ1bmN0aW9ucyI6MjQsInNpbmd1bGFyaXR5Ijp7ImRtIjowLCJtIjowLCJudyI6MH0sInFvbFNNMSI6e30sImZhY3RvckJvb3N0Q29uZmlybWF0aW9uIjowLCJkZWNyZW1lbnQiOjk1MCwibGVhc3RCb3N0IjoxMiwiY2hhbDhDb21vIjozfQ==")

      game.version = 0.341
      window.location.reload()
    }
    game.version = 0.341
  }
}

function handleOldVersions(loadgame) {
  handleVeryOldSaves(loadgame);
  handlePost0202Saves();
  handlePost0211Saves();
}

function loadGame(loadgame) {
  let tempgame = JSON.stringify(game)
  reset();
  for (const i in loadgame) {
    game[i] = loadgame[i];
  }
  if (inPublicTesting()) game.publicTesting=1
  if (inPrivateTesting()) game.publicTesting=0
  if (game.publicTesting==1&&!inPublicTesting()) {
    $.notify("Import Failed, attemped to import public testing version into the main game","error")
    game = JSON.parse(tempgame)
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
  game.bestIncrementy = ENify(game.bestIncrementy);
  game.bigBrainOrd = ENify(game.bigBrainOrd);
  game.multifolds=ENify(game.multifolds)
  game.iups[0]=ENify(game.iups[0])
  game.iups[1]=ENify(game.iups[1])
  game.iups[2]=ENify(game.iups[2])
  for (let u in game.fractalEngine) {
    for (let v in game.fractalEngine[u]) {
      game.fractalEngine[u][v]=ENify(game.fractalEngine[u][v])
    }
  }
  game.spentENFunctions=ENify(game.spentENFunctions)
  for (let i in game.ocBestIncrementy) {game.ocBestIncrementy[i]=ENify(game.ocBestIncrementy[i])}
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
  if (AF === 0) {
    localStorage.setItem((inPublicTesting()?"ordinalMarkupPublicTestingSave":"ordinalMarkupSave"), JSON.stringify(game))
  };
}
// hi
function exporty(file=0) {
  if(file) {
    save();
    let file = new Blob([btoa(JSON.stringify(game))], {type: "text/plain"})
    window.URL = window.URL || window.webkitURL;
    let a = document.createElement("a")
    a.href = window.URL.createObjectURL(file)
    a.download = "Ordinal Markup Save.txt"
    a.click()
    $.notify("File Export Successful!","success")
  } else {
    copyStringToClipboard(btoa(JSON.stringify(game)));
  }
  if (inPublicTesting()) {$.notify("Warning! This is a Public Testing save! You will not be able to import this save into the base game","warn")}
}

function importy(file=0) {
  if(file) {
    let loadgame = "";
    reader.readAsText(document.getElementById("a").files[0]);
      
      window.setTimeout(function() {
      console.log(52)
      loadgame=JSON.parse(atob(reader.result))
      if (loadgame !== "") {
      loadGame(loadgame);
      $.notify("Import Successful!","success")
      }
        window.setTimeout(() => {
        save()
       window.location.reload()
        },200)
      }, 100)
      

  } else {
  let loadgame = "";
  loadgame = JSON.parse(atob(prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")));
  if (loadgame !== "") {
    loadGame(loadgame);
    $.notify("Import Successful!","success")
    window.setTimeout(() => {
    save()
    window.location.reload()
    },200)
  }
  }
}

function inPublicTesting() {
  return false
}

function inPrivateTesting() {
  return window.location.href.split(".")[1]=="glitch"&&window.location.href.split(".")[2].startsWith("me")
}
