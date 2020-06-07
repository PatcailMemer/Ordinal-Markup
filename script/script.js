"use strict";
"ab"
// Yeah, I know it's pretty unorganized at the moment
let factorMult = 1;
let bfactorMult = 1;
let succAutoMult = 1;
let limAutoMult = 1;
/* eslint-disable */
let ordMarks = [];
let numMarks = [];
/* eslint-enable */
setMarks();
let clickCoolDown = 0;
let infinityButtonText = 0;
let game;
const factorShiftCosts = [
  200,
  1000,
  10000,
  350000,
  1e12,
  1e21,
  1e100,
  1.095e272,
  Infinity
];
const factorCostExp = [2, 2, 2, 3, 3, 6, 30, 100];
const bupUpgradeCosts = [
  1,1,1,12,
  5,4,8,36,
  72,73,16,108,
  53,74,66,324,
  Infinity,Infinity,8e8,2e11,
  Infinity,Infinity,Infinity,Infinity
];
const slugMile = [1e10, 20, 15, 12, 10, 1, -1];
let totalMult = 1;
let buptotalMute = 1;
const challengeGoals = [
  [1e32, 1e223, 5e270],
  [5e270, V(10) + 1e270, V(17) + 1e270],
  [1e200, 1e214, 1e256],
  [1e33, 5e113, 1.5e119],
  [1e122, 3.33e136, 1e218],
  [1.02e33, 1e44, 4.75e108],
  [1.05e13, 4.18e18, 1.02e20],
  [3.0e10, 6.0e10, 2.4e11, Infinity]
];
const challengeCurve = [0, 0.5, 0.75, 1];
let partOP = 0;
let factorBoostLoop = 0;
let cardinalLoop = ExpantaNum(0);
/* eslint-disable */
let collapseAnimation = 0;
/* eslint-enable */
const iupCosts = [1e5, 1e3, 1e9, 1e17, 2e22, 4e23, 1e19, 2e25, 4e27];
const dupCosts = [
  5,
  1000,
  9,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity,
  Infinity
];
let ordColor = "no";
const EN = ExpantaNum;
const get = x => document.getElementById(x);
const musicLink = [
  "https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FGoing%20Down%20by%20Jake%20Chudnow%20%5BHD%5D.mp3?v=1581538237884",
  "https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FHypnothis.mp3?v=1584285594822",
  "https://cdn.glitch.com/310d7aca-4728-445f-9084-db26ceccd7b5%2FArseniy%20Shkljaev%20-%20Nuclearoids%20%5BTrance%5D.mp3?v=1591548196791"
];
const musicName = [
  "OFF",
  "Going Down by Jake Chudnow",
  "Hypnothis by Kevin Macleod",
  "Nuclearoids by Arseniy 20Shkljaev (http://arseniymusic.com/)"
];
const BHO = V(27);
const aupCost = [
  1,
  2,
  4,
  8,
  16,
  256,
  65536,
  2 ** 32,
  2 ** 64,
  2 ** 128,
  2 ** 256,
  2 ** 512
];
let AF = 0;
const d = new Date();
if (
  d.getMonth() === 3 &&
  d.getDate() === 1 &&
  !(d.getFullYear() === Number(localStorage.ordinalMarkupAF))
) {
  AF = 1;
  console.log("April Fools!");
  localStorage.setItem("ordinalMarkupAF", d.getFullYear().toString());
} else {
  AF = 0;
}

reset();
get("music").loop = true;
get("music").volume = 0.5;
get("music").muted = false;

Tab(1);
reset();
load();
render();

function increment(manmade = 0) {
  if (manmade === 0 || game.manualClicksLeft >= 0.5) {
    if (
      manmade === 1 &&
      (game.chal8 === 1 || game.challenge === 6 || game.challenge === 7)
    )
      game.manualClicksLeft--;
    if (game.ord % game.base === game.base - 1) {
      game.over++;
    } else {
      game.ord++;
    }
    clickCoolDown = 2;
  }
  if (manmade === 1) render();
}

function maximize(manmade = 0) {
  if (game.ord % game.base === game.base - 1 && game.over >= 1) {
    game.ord -= game.base - 1;
    game.over += game.base - 1;
    do {
      game.over -= Math.ceil((game.over + game.base) / 2 - 0.1);
      game.ord += game.base;
    } while (
      game.over + game.base >= game.base * 2 &&
      game.ord % game.base ** 2 !== 0
    );
    if (game.ord % game.base ** 2 !== 0) {
      game.ord += game.over;
    }
    game.over = 0;
    clickCoolDown = 2;
  }
  if (manmade === 1) render();
}

let deltaTime;
const calculate = window.setInterval(() => {
  deltaTime = Date.now() - game.lastTick;
  loop(deltaTime);
  clickCoolDown--;
}, game.msint);

function loop(unadjusted, off = 0) {
  let ms=unadjusted
  if (game.chal8==1&&game.decrementy<10) {
    ms=50
  }
  if (game.incrementy.lt(0)) game.incrementy = EN(0);
  if (game.collapseUnlock === 0) game.leastBoost = Infinity;
  if (isNaN(game.leastBoost)) game.leastBoost = Infinity;
  if (game.leastBoost === null) game.leastBoost = Infinity;
  if (game.leastBoost === "null") game.leastBoost = Infinity;
  if (typeof game.leastBoost === "undefined") game.leastBoost = Infinity;
  game.collapseTime += ms / 1000;
  game.base = calcBase();
  game.lastTick = Date.now();
  game.qolSM.nc8 = get("nonC8Auto").value;
  game.qolSM.c8 = get("C8Auto").value;
  game.qolSM.ttnc = get("ttnc").value;
  if (game.challenge !== 0 && game.leastBoost <= 1.5 && game.qolSM.acc === 1) {
    if (
      game.OP >= challengeGoals[game.challenge - 1][Number(game.qolSM.nc8) - 1]
    ) {
      completeChallenge();
    }
  }
  if (game.chal8 === 1 && game.leastBoost <= 1.5 && game.qolSM.acc === 1) {
    if (game.OP >= getChal8Goal(Number(game.qolSM.c8) - 1)) {
      completeChallenge();
    }
  }
  if (game.chal8 === 1 && calcRefund() > 0)
    confirm("You failed Challenge 8 because you had booster upgrades on you!");
  if (game.chal8 === 1 && calcRefund() > 0) refund();
  game.boosters =
    (game.factorBoosts * (game.factorBoosts + 1)) / 2 -
    calcRefund() +
    calcSlugMile();
  if (game.leastBoost <= 1e10 && game.OP < calcTotalOPGain()) {
    game.OP +=
      calcTotalOPGain() >= 1e270 ? Infinity : (calcTotalOPGain() / 100000) * ms;
    if (game.OP > calcTotalOPGain()) game.OP = calcTotalOPGain();
  }
  if (getSingLevel()>=game.mostSing) {
    game.mostSing=getSingLevel()
  }
  if (1+game.sing.dm+game.sing.nw+game.manifolds<game.mostSing) {
    game.mostSing=game.sing.dm+game.sing.nw+game.manifolds+1
  }
  let assCount;
  for (assCount in game.assCard) {
    game.assCard[assCount].power = game.assCard[assCount].power.add(
      game.assCard[assCount].points
        .pow(
          game.assCard[assCount].points
            .log10()
            .pow(0.5)
            .max(2)
        )
        .times(0.001 * ms)
    );
    game.assCard[assCount].mult = game.assCard[assCount].power
      .add(10)
      .log10()
      .times(game.aups.includes(7) && assCount == 1? game.alephOmega.add(1).pow(1 / 32): 1);
  }
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms / 2));
  }
  changeDynamic(ms);
  if (game.dynamic < 0) game.dynamic = 0;
  if (game.chal8 === 1) game.decrementy += getDecrementyRate(ms);
  if (game.boostUnlock == 1 && game.limAuto === 0) game.limAuto = 1;
  totalMult = factorMult * calcTotalMultWOFactor();
  buptotalMute =
    bfactorMult *
    calcBupTotalMultWOFactor() *
    calcIncrementyMult() *
    (game.aups.includes(4) ? Math.log10(Math.log10(1e10 + game.OP)) : 1);
  succAutoMult = game.aups.includes(2)
    ? Math.max(Math.sqrt(game.limAuto), 1)
    : 1;
  limAutoMult = game.aups.includes(2)
    ? Math.max(Math.sqrt(game.succAuto), 1)
    : 1;
  const chal8Tip = calcOrdPoints() >= 1e30;
  const tempSucc = game.succAuto * succAutoMult * totalMult;
  const tempLim = game.limAuto * limAutoMult * totalMult;
  if (buptotalMute <= 100000000 && game.iups[3] === 1)
    buptotalMute = Math.min(100000000, buptotalMute * getManifoldEffect() ** 2);
  if (
    (game.succAuto < 1e265 || game.limAuto < 1e265) &&
    !(game.ord >= 3 ** 27 && game.base <= 3)
  ) {
    if (game.succAuto * totalMult > 0) {
      game.autoLoop.succ += ms;
      if (game.autoLoop.succ >= 1000 / tempSucc) {
        game.autoLoop.succ -= 1000 / tempSucc;
        increment();
      }
    }
    if (tempLim > 0) {
      game.autoLoop.lim += ms;
      if (game.autoLoop.lim >= 1000 / tempLim) {
        game.autoLoop.lim -= 1000 / tempLim;
        maximize();
      }
    }

    if (game.maxAuto > 0) {
      maxall();
    }
    if (game.autoLoop.succ >= 1000 / tempSucc) {
      if (game.autoLoop.lim >= 1000 / tempLim) {
        game.over = 0;
        game.ord += Math.min(
          Math.floor(game.autoLoop.succ / (1000 / tempSucc)),
          game.base *
            Math.floor(
              game.autoLoop.lim /
                (1000 / (game.limAuto * limAutoMult * totalMult))
            )
        );
        game.autoLoop.succ %= 1000 / tempSucc;
        game.autoLoop.lim %= 1000 / tempLim;
      } else if (
        Math.floor(game.autoLoop.succ / (1000 / tempSucc)) >=
        game.base - (game.ord % game.base)
      ) {
        game.ord += game.base - (game.ord % game.base) - 1;
        game.over +=
          Math.floor(game.autoLoop.succ / (1000 / tempSucc)) -
          (game.base - (game.ord % game.base) - 1);
        game.autoLoop.succ %= 1000 / tempSucc;
      } else {
        game.ord += Math.floor(game.autoLoop.succ / (1000 / tempSucc));
        game.autoLoop.succ %= 1000 / tempSucc;
      }
    }
  } else {
    game.over = 0;
    game.ord = Math.max(Math.min(game.succAuto, game.limAuto), 4e270);
  }
  if (!chal8Tip && game.chal8 === 1 && calcOrdPoints() >= 1e30)
    game.ord = game.base ** (game.base * 3);
  changeDynamic(ms);
  if (game.dynamic < 0) game.dynamic = 0;
  if (ms > 0) {
    if (
      (game.upgrades.includes(2) || game.leastBoost <= 1.5) &&
      game.autoOn.max === 1
    ) {
      game.bAutoLoop.max += ms;
      if (game.bAutoLoop.max >= 1000 / buptotalMute) {
        game.bAutoLoop.max -= 1000 / buptotalMute;
        if (
          (game.OP <
            ((game.challenge === 5 || game.challenge === 7) &&
            game.factorShifts >= 2
              ? Infinity
              : factorShiftCosts[game.factorShifts]) &&
            (game.challenge === 0 ||
              game.OP <
                challengeGoals[game.challenge - 1][
                  game.challengeCompletion[game.challenge - 1]
                ])) ||
          game.OP >= 1e265
        ) {
          maxInfStuff();
        }
      }
    }
    if (game.upgrades.includes(3) && game.autoOn.inf === 1) {
      game.bAutoLoop.inf += ms;
      if (game.bAutoLoop.inf >= 1000 / buptotalMute) {
        game.bAutoLoop.inf -= 1000 / buptotalMute;
        if (
          game.OP + game.ord >= 1e265 &&
          game.challenge !== 1 &&
          game.challenge !== 7
        )
          infinity();
        if (
          game.OP + game.ord <= 1e265 &&
          totalMult <= 0.01 &&
          game.leastBoost <= 1.5
        )
          infinity();
      }
    }
    if (
      game.bAutoLoop.max >= 1000 / buptotalMute &&
      (game.bAutoLoop.inf >= 1000 / buptotalMute || game.leastBoost <= 1e10)
    ) {
      const bupCom = Math.min(
        game.bAutoLoop.max / (1000 / buptotalMute),
        game.leastBoost <= 1e10
          ? Infinity
          : game.bAutoLoop.inf / (1000 / buptotalMute)
      );
      game.bAutoLoop.max %= 1000 / buptotalMute;
      game.bAutoLoop.inf %= 1000 / buptotalMute;
      increaseOrdTier2(bupCom);
    }
  }
  if (game.upgrades.includes(7) || game.leastBoost <= 15) {
    partOP += (ms / 1000) * calcOPPS();
    game.OP += Math.floor(partOP);
    partOP %= 1;
  }
  if (game.OP > BHO * getSingLevel()) game.OP = BHO * getSingLevel();
  if (game.ord > BHO * getSingLevel()) game.ord = BHO * getSingLevel();
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms / 2));
    if (
      getIncrementyRate(1000).gte(game.maxIncrementyRate) &&
      game.challenge % 2 === 0
    )
      game.maxIncrementyRate = getIncrementyRate(1000);
  }
  game.cAutoLoop.shift +=
    game.leastBoost <= 12 && game.cAutoOn.shift === 1
      ? (ms / 1000) * game.shiftAuto.toNumber()
      : 0;
  if (game.cAutoLoop.shift >= 1) {
    factorShift();
    game.cAutoLoop.shift %= 1;
  }
  game.cAutoLoop.boost +=
    game.leastBoost <= 12 && game.cAutoOn.boost === 1
      ? (ms / 1000) * game.boostAuto.toNumber()
      : 0;
  if (game.cAutoLoop.boost >= 1) {
    if (
      game.OP >= BHO &&
      game.challenge === 0 &&
      !(
        game.factorBoosts <=
        slugMile[
          slugMile.findIndex(mile => mile < game.leastBoost)
        ]
      )
    )
      factorBoost();
    game.cAutoLoop.boost %= 1;
  }
  if (game.aups.includes(8))
    cardinalLoop = cardinalLoop.add(game.mostCardOnce.times(ms / 33333));
  if (cardinalLoop.gte(1)) {
    game.cardinals = game.cardinals.add(cardinalLoop.floor());
    cardinalLoop = cardinalLoop.mod(1);
  }
  if (
    game.challenge === 0 &&
    game.chal8 === 0 &&
    !game.upgrades.includes(10) &&
    game.cAutoOn.shift === 1 &&
    game.cAutoOn.boost === 1 &&
    game.leastBoost <= 12 &&
    calcFactorBoostTime() <= ms * 0.022
  ) {
    factorBoostLoop +=
      ((1 / calcFactorBoostTime() - 1 / (ms * 0.022)) * ms) / 1000;
    game.factorBoosts += Math.floor(factorBoostLoop);
    factorBoostLoop %= 1;
  }
  if (
    game.qolSM.ca === 1 &&
    game.collapseTime >= game.qolSM.ttnc &&
    game.reachedBHO === 1 &&
    off === 0
  )
    collapse();
  const themeSave = `<link rel="stylesheet" href="${["style/light", "style/dark", "style/space"][game.theme]}.css">`;
  if (get("theme").innerHTML !== themeSave) get("theme").innerHTML = themeSave;
  if (game.OP >= V(27) || game.ord >= V(27) || game.factorBoosts >= 25)
    game.reachedBHO = 1;
  project(buptotalMute);
  if (ms > 0) render();
  if (game.factorBoosts < 0) game.factorBoosts = 0;
  if (game.base <= 4) game.dynamicUnlock = 1;
}

function render() {
  const outSize = fghexp(
    ((game.ord % game.base ** 3) + 0.1) / game.base ** 2,
    Math.pow(2, Math.floor(((game.ord % game.base ** 2) + 0.1) / game.base)) *
      (game.base + game.over + (game.ord % game.base))
  );
  ordColor = "no";
  const ordSub =
    game.ord <= 1e200
      ? getFBps() >= 10
        ? displayOrd(0, game.base, 0, 0, 0, 0, game.colors)
        : displayOrd(game.ord, game.base, game.over, 0, 0, 0, game.colors)
      : displayOrd(
          Math.round(game.ord / 1e270 + 1) * 1e270 - 1e270,
          3,
          0,
          0,
          0,
          0,
          game.colors
        );
  get("hardy").innerHTML =
    `${colorWrap("H", ordColor)}<sub>${ordSub}</sub><text class="invisible">l</text>${colorWrap(
      `(${game.base})${(game.ord >= game.base ** 3 ||
        outSize >= 10 ** 264 ||
        (game.ord >= 5 && game.base === 2)
          ? getFBps() >= 10
            ? `=${game.base}`
            : ""
          : `=${beautify(outSize)}`)}`,
      ordColor
    )}`
  game.canInf =
    game.ord >= game.base ** 3 ||
    outSize >=
      (game.leastBoost <= 15 ? (game.leastBoost <= 1.5 ? 10 : 100) : 10240) ||
    outSize >= Infinity;
  if (game.infUnlock === 1) {
    get("infinityTabButton").style.display = "inline-block";
  } else {
    get("infinityTabButton").style.display = "none";
  }
  if (game.boostUnlock === 1) {
    get("boosterTabButton").style.display = "inline-block";
    if (game.challenge === 0 && game.chal8 === 0) {
      get("factorBoostText").style.display = "inline-block";
      get("completeChallenge").style.display = "none";
    } else {
      get("factorBoostText").style.display = "none";
      get("completeChallenge").style.display = "inline-block";
      get("finishChallenge").innerHTML =
        `Complete the challenge!<br>${beautify(
          game.chal8 === 1
            ? getChal8Goal(game.chal8Comp)
            : challengeGoals[game.challenge - 1][
                game.challengeCompletion[game.challenge - 1]
              ]
        )} OP`;
    }
  } else {
    get("boosterTabButton").style.display = "none";
    get("factorBoostText").style.display = "none";
    get("completeChallenge").style.display = "none";
  }
  if (game.dynamicUnlock === 1) {
    get("dynamicFactorButton").style.display = "inline-block";
  } else {
    get("dynamicFactorButton").style.display = "none";
  }
  if (getFBps() < 10 && game.canInf) {
    infinityButtonText = beautify(calcTotalOPGain());
    if (
      get("infinityButton").innerHTML !==
      `Markup to gain ${infinityButtonText} Ordinal Points (I)`
    )
      get("infinityButton").innerHTML =
        `Markup to gain ${infinityButtonText} Ordinal Points (I)`;
    if (get("infinityButton2").innerHTML !== `+${infinityButtonText}`)
      get("infinityButton2").innerHTML = `+${infinityButtonText}`;
  } else {
    get("infinityButton").innerHTML =
      `Reach ${(game.leastBoost <= 15 ? (game.leastBoost <= 1.5 ? 10 : 100) : 10240)} to Markup`;
    get("infinityButton2").innerHTML =
      `Reach ${(game.leastBoost <= 15 ? (game.leastBoost <= 1.5 ? 10 : 100) : 10240)} to Markup`;
  }
  get("challengeSubTab").style.display = game.upgrades.includes(4)
    ? "inline-block"
    : "none";
  get("incrementySubTab").style.display = game.upgrades.includes(8)
    ? "inline-block"
    : "none";
  get("ordinalPointsDisplay").innerHTML =
    `You have ${beautify(game.OP)} Ordinal Points`;
  get("succAutoAmount").innerHTML =
    `You have ${logbeautify(game.succAuto)} successor autoclickers, clicking the successor button ${(game.succAuto > 1e265
      ? logbeautify(game.succAuto)
      : beautify(game.succAuto * totalMult * succAutoMult))} times per second`;
  get("limAutoAmount").innerHTML =
    `You have ${logbeautify(game.limAuto)} maximize autoclickers, clicking the maximize button ${(game.succAuto > 10 ** 265
      ? logbeautify(game.succAuto)
      : beautify(game.limAuto * totalMult * limAutoMult))} times per second`;
  get("buysucc").innerHTML =
    `Buy Successor Autobuyer for ${(game.challenge === 1 || game.challenge === 7
      ? game.succAuto === 1
        ? "Infinity"
        : "1.000e6"
      : beautify(
          Math.min(1e260 + game.succAuto, 100 * (2 ** game.succAuto))
        ))} OP`;
  get("buylim").innerHTML =
    "Buy Maximize Autobuyer for " +
    (game.challenge === 1 || game.challenge == 7
      ? game.limAuto === 1
        ? "Infinity"
        : "1.000e6"
      : beautify(Math.min(10 ** 260 + game.limAuto, 100 * 2 ** game.limAuto))) +
    "  OP";
  get("factorShift").innerHTML =
    "Factor Shift (" +
    game.factorShifts +
    "): Requires " +
    ((game.challenge == 5 || game.challenge == 7) && game.factorShifts >= 2
      ? "Infinity"
      : game.factorShifts == 7
      ? game.boostUnlock
        ? "Infinity"
        : "Graham's number (g<sub>ψ(Ω<sup>Ω</sup>ω)</sub> (10))"
      : beautify(factorShiftCosts[game.factorShifts])) +
    " OP";
  get("noFactors").style.display =
    game.factors.length == 0 ? "inline-block" : "none";
  get("factorList").style.display =
    game.factors.length == 0 ? "none" : "inline-block";
  factorMult = 1;
  if (game.factors.length > 0) {
    for (
      let factorListCounter = 0;
      factorListCounter < game.factors.length;
      factorListCounter++
    ) {
      factorMult *=
        (1 +
          game.factors[factorListCounter] +
          (game.upgrades.includes(11)
            ? 3 * (game.challenge == 3 || game.challenge == 7 ? 2 : 1)
            : 0)) *
        (game.upgrades.includes(1) ? 2 : 1);
    }
  }
  get("factorMult").textContent =
    "Your factors are multiplying Tier 1 Automation by " + beautify(factorMult);
  get("boostersText").textContent = "You have " + beautify(game.boosters) + " boosters";
  get("refundBoosters").textContent =
    "Refund back " +
    beautify(calcRefund()) +
    " boosters, but reset all factor shifts (R)";
  get("factorBoost").innerHTML =
    "Factor Boost (" +
    game.factorBoosts +
    "): Requires g<sub>" +
    displayOrd(V(game.factorBoosts + 3, 1)) +
    "</sub> (10) OP";
  get("gainBoosters").textContent =
    (getSingLevel() == 1
      ? "Gain " +
        (game.OP >= V(game.factorBoosts + 3)
          ? getFactorBoostGain()
          : game.factorBoosts + 1) +
        " Boosters"
      : "Gain " + getFBmult() + " Factor Boosts") + " (B)";
  get("dynamicMult").textContent =
    "Your Dynamic Multiplier is x" +
    (
      (game.dynamic * getManifoldEffect()) **
      (game.upgrades.includes(13) && game.challenge % 2 == 1 ? 2 : 1)
    ).toFixed(3);
  get("maxAllAuto").innerHTML =
    "Your Max All Autobuyer is clicking the Max All button " +
    ((game.upgrades.includes(2) || game.leastBoost <= 1.5) &&
    game.autoOn.max == 1
      ? beautify(buptotalMute)
      : 0) +
    " times per second, but only if you can't Factor Shift";
  get("infinityAuto").innerHTML =
    "Your Markup Autobuyer is clicking the Markup button " +
    (game.upgrades.includes(3) && game.autoOn.inf == 1
      ? beautify(buptotalMute)
      : 0) +
    " times per second, but only if you're past " +
    displayOrd(10 ** 270 * 4) +
    (game.leastBoost <= 1.5
      ? ". It also activates if your Tier 1 automation isn't autoclicking at least once a second"
      : "");
  get("autoMaxButton").textContent =
    "Max All Autobuyer: " +
    (game.upgrades.includes(2) || game.leastBoost <= 1.5
      ? game.autoOn.max == 1
        ? "ON"
        : "OFF"
      : "LOCKED");
  get("autoInfButton").textContent =
    "Markup Autobuyer: " +
    (game.upgrades.includes(3)
      ? game.autoOn.inf == 1
        ? "ON"
        : "OFF"
      : "LOCKED");
  get("bup6 current").textContent = (getBoostFromBoosters(1) < 1000000 ? getBoostFromBoosters(1).toFixed(2) : beautify(getBoostFromBoosters(1)))
  get("runChal").textContent =
    game.chal8 == 1
      ? "You're currently running Challenge 8"
      : game.challenge == 0
      ? "You're currently not in a challenge"
      : "You're currently running Challenge " + game.challenge;
  get("incrementyText").textContent =
    "You have " +
    beautify(game.incrementy) +
    " incrementy, multiplying " +
    "Tier 2 Automation by " +
    calcIncrementyMult().toFixed(3) +
    "x";
  get("incrementyText2").textContent =
    "You are getting " +
    beautify(getIncrementyRate(1000)) +
    " incrementy per second";
  get("iup1").innerHTML =
    "Base Incrementy multiplier is raised to the 1.05<br>Cost: " +
    beautify(10 ** (5 * (game.iups[0] + 1)));
  get("iup2").innerHTML =
    "Double the production of incrementy<br><br>Cost: " +
    beautify(10 ** (3 * (game.iups[1] + 1)));
  get("iup3").innerHTML =
    "Multiply Incrementy multiplier by 1.2<br><br>Cost: " +
    beautify(10 ** (9 * (game.iups[2] + 1)));
  get("manifoldShift").style.display = game.upgrades.includes(12)
    ? "inline-block"
    : "none";
  get("manifoldAmount").textContent =
    beautify(game.manifolds) +
    (game.sing.m > 0.5
      ? "-" + game.sing.m
      : game.sing.m == 0
      ? ""
      : "+" + (0 - game.sing.m));
  get("manifoldBoost").textContent = getManifoldEffect().toFixed(3);
  get("changeOrdNotation").textContent =
    "Current Ordinal Notation: " +
    ["Madore's", "Buchholz's", "Convenient"][game.buchholz];
  get("changeTheme").textContent =
    "Current Theme: " +
    ["Light", "Dark", "Space (https://wallpaperplay.com/page-terms)"][
      game.theme
    ];
  get("changeInt").textContent = "Millisecond Interval: " + game.msint + "ms";
  get("changeOrdLengthLess").innerHTML =
    "Maximum Ordinal Length below " +
    displayOrd(10 ** 270 * 4) +
    ": " +
    game.maxOrdLength.less;
  get("changeOrdLengthMore").innerHTML =
    "Maximum Ordinal Length above " +
    displayOrd(10 ** 270 * 4) +
    ": " +
    game.maxOrdLength.more;
  get("getManifolds").innerHTML =
    "Reset incrementy for a manifold.<br>Need: " +
    ((game.iups[5] == 1 ? 2 : 3) ** (game.manifolds + 1)).toFixed(2) +
    "x<br>incrementy multiplier";
  get("manifoldIncrease").textContent =
    "It is increasing by " +
    (game.upgrades.includes(13) && game.challenge % 2 == 1
      ? " a non-constant amount "
      : (0.002 * (game.iups[6] == 1 ? 100 : 1) * getManifoldEffect()).toFixed(
          3
        )) +
    " per second and caps at " +
    getDynamicFactorCap().toFixed(3);
  get("dynamicDecreaseText").style.display =
    game.challenge == 6 || game.challenge == 7 ? "inline" : "none";
  get("dynamicDecrease").textContent = game.upgrades.includes(14)
    ? "10.000"
    : "1.000e300";
  let bfactor;
  bfactorMult = 1;
  for (let i = 0; i < 7; i++) {
    bfactor =
      ((1 +
        (game.factors.length >= i + 1
          ? game.factors[i] + (game.upgrades.includes(11) ? 3 : 0)
          : 0)) *
        (game.upgrades.includes(1) && game.factors.length >= i + 1 ? 2 : 1)) **
      (game.leastBoost <= 20 && game.challengeCompletion[i] == 0
        ? 0.25
        : challengeCurve[game.challengeCompletion[i]]);
    if (
      ((game.challenge == 2 || game.challenge == 7) && i == 0) ||
      game.chal8 == 1
    )
      bfactor = 1;
    bfactorMult *= bfactor;
    get("challenge" + (i + 1) + "Effect").textContent =
      "x" + bfactor.toFixed(2) + " (" + game.challengeCompletion[i] + "/3)";
    get("challenge" + (i + 1) + "Goal").innerHTML =
      "Goal: " +
      beautify(challengeGoals[i][Math.min(game.challengeCompletion[i], 2)]) +
      " OP";
    chalbut(i);
  }
  bfactor = getDynamicFactorCap() ** getChalCurve(game.chal8Comp);
  if (game.chal8 == 1) bfactor = 1;
  bfactorMult *= bfactor;
  get("challenge8Effect").textContent =
    "x" + bfactor.toFixed(2) + " (" + game.chal8Comp + "/∞)";
  get("challenge8Goal").textContent =
    "Goal: " + beautify(getChal8Goal(game.chal8Comp)) + " OP";
  chalbut(7);
  for (let i = 0; i < bupUpgradeCosts.length; i++) {
    bup(
      i + 1,
      game.leastBoost <= 1.5 &&
        game.qolSM.abu == 1 &&
        (game.qolSM.ig73 == 0 ||
          i + 1 != 10 ||
          game.challenge == 4 ||
          game.challenge == 6 ||
          game.challenge == 7) &&
        (game.qolSM.igc8 == 0 || game.chal8 == 0)
        ? 0
        : 1
    );
  }
  get("chalMult").textContent =
    "Your " +
    getSumOfChallenges() +
    " challenge completions have multiplied Tier 1 and 2 Automation by " +
    beautify(bfactorMult);
  for (let i = 1; i <= 9; i++) {
    iup(i, 1);
  }
  get("changeColor").textContent =
    "Colors: " + (game.colors === 1 ? "ON" : "OFF");
  get("changeMusic").innerHTML = "Music: " + musicName[game.music];
  get("incrementyText3").innerHTML =
    "You start gaining incrementy when you reach " + displayOrd(4e270);
  get("decrementyText").textContent =
    "There is " +
    (game.chal8 === 1
      ? beautifypower(game.decrementy) + " decrementy and "
      : "") +
    game.manualClicksLeft +
    " clicks left";
  get("decrementyText").style.display =
    game.chal8 === 1 || game.challenge === 6 || game.challenge === 7
      ? "inline"
      : "none";
  get("collapseScreen").style.display =
    collapseAnimation === 0 ? "none" : "block";
  get("collapseScreen").style.opacity = collapseAnimation + "%";
  get("collapseTabButton").style.display =
    game.collapseUnlock === 0 ? "none" : "inline-block";
  get("cardinalText").textContent =
    "You have " + beautify(game.cardinals) + " Unassigned Cardinals";
  get("cardText1").innerHTML =
    "You have " + beautify(game.assCard[0].points) + " ℵ<sub>0</sub>";
  get("cardPow1").innerHTML =
    "You have " +
    beautify(game.assCard[0].power) +
    " ℵ<sub>0</sub> Power (+" +
    beautify(
      game.assCard[0].points.pow(
        game.assCard[0].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult1").textContent = "x" + beautify(game.assCard[0].mult, 3);
  get("cardText2").innerHTML =
    "You have " + beautify(game.assCard[1].points) + " ℵ<sub>1</sub>";
  get("cardPow2").innerHTML =
    "You have " +
    beautify(game.assCard[1].power) +
    " ℵ<sub>1</sub> Power (+" +
    beautify(
      game.assCard[1].points.pow(
        game.assCard[1].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult2").textContent = "x" + beautify(game.assCard[1].mult, 3);
  get("cardText3").innerHTML =
    "You have " + beautify(game.assCard[2].points) + " ℵ<sub>2</sub>";
  get("cardPow3").innerHTML =
    "You have " +
    beautify(game.assCard[2].power) +
    " ℵ<sub>2</sub> Power (+" +
    beautify(
      game.assCard[2].points.pow(
        game.assCard[2].points
          .log10()
          .pow(0.5)
          .max(2)
      )
    ) +
    "/s)";
  get("cardMult3").textContent = "x" + beautify(game.assCard[2].mult, 3);
  for (let i = 0; i < 6; i++) {
    get("slug" + i).classList.remove("slugMile");
    get("slug" + i).classList.add("notSlugMile");
  }
  for (let i = 0; i < calcSlugMile(); i++) {
    get("slug" + i).classList.add("slugMile");
    get("slug" + i).classList.remove("notSlugMile");
  }
  get("alephOmegaText").innerHTML =
    "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>";
  get("alephOmegaText2").innerHTML =
    "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>";
  for (let i = 1; i <= 12; i++) {
    aup(i, 1);
  }
  get("collapseButton").innerHTML =
    game.reachedBHO == 1
      ? "Collapse for " + beautify(EN(calcCard())) + " Cardinals (C)"
      : "Reach the BHO to Collapse!<br>(OR restart the current Collapse)";
  get("decrementyRate").textContent =
    game.chal8 == 1 ? beautifypower(getDecrementyRate(1000)) : 1;
  dup(1, 1);
  dup(2, 1);
  dup(3, 1);
  get("dup1").innerHTML =
    "Reduce the potency of decrementy by 5%<br><br>Cost: " +
    beautifypower(dupCosts[0] ** (game.dups[0] + 1));
  get("dup2").innerHTML =
    "Halve decrementy growth below " + (game.buchholz==2?"ω^(ω3)":"ω<sup>ω3</sup>") + ", otherwise double it<br>Cost: " +
    beautifypower(dupCosts[1] ** (game.dups[1] + 1));
  get("dup3").innerHTML =
    "Gain a 1.2x multiplier to Tier 1 and 2<br><br>Cost: " +
    beautifypower(dupCosts[2] ** (game.dups[2] + 1));
  get("getDarkManifolds").innerHTML =
    "Get a Dark Manifold<br>Need: " +
    beautifypower(Math.log10(3) * (1 + game.darkManifolds)) +
    " Decrementy";
  get("darkManifoldAmount").textContent =
    beautify(game.darkManifolds) + (game.sing.dm===0?"":"-" + beautify(getDMSacrafice()))
  get("darkUpButton").style.display = game.aups.includes(3) ? "inline" : "none";
  get("darkManifoldBoost").textContent = (
    Math.max(1, game.darkManifolds + 1 - getDMSacrafice()) ** 0.1
  ).toFixed(3);
  get("darkManifoldMaxMode").textContent =
    "Max Mode: " + (game.darkManifoldMax === 1 ? "ON" : "OFF");
  get("autoPrestigeSubTab").style.display =
    game.leastBoost <= 12 ? "inline-block" : "none";
  get("factorShiftAutoToggle").textContent =
    "Factor Shift Autoprestiger: " + (game.cAutoOn.shift === 1 ? "ON" : "OFF");
  get("factorShiftAutoText").textContent =
    "Your Factor Shift Autoprestiger is Factor Shifting " +
    (game.cAutoOn.shift === 1 ? beautifyEN(game.shiftAuto) : 0) +
    " time(s) per second";
  get("factorBoostAutoToggle").textContent =
    "Factor Boost Autoprestiger: " + (game.cAutoOn.boost === 1 ? "ON" : "OFF");
  get("factorBoostAutoText").textContent =
    "Your Factor Boost Autoprestiger is Factor Boosting " +
    (game.cAutoOn.boost == 1 ? beautifyEN(game.boostAuto) : 0) +
    " time(s) per second, but only at the BHO or higher, and if you can't get a sluggish milestone";
  get("cardExtra1").classList.remove("invisible");
  if (!game.aups.includes(1000)) get("cardExtra1").classList.add("invisible");
  get("cardExtra2").classList.remove("invisible");
  if (!game.aups.includes(6)) get("cardExtra2").classList.add("invisible");
  get("cardExtra3").classList.remove("invisible");
  if (!game.aups.includes(5)) get("cardExtra3").classList.add("invisible");
  get("collapseCardHelp").innerHTML =
    (game.reachedBHO === 1
      ? "Next Cardinal in " +
        beautify(
          Math.ceil(
            (calcCard().toNumber() + 1) **
              (1 / calcCardExponent(game.collapseTime)) +
              24 -
              game.factorBoosts
          )
        ) +
        " Factor Boost(s) ("
      : "Reach the BHO first to collapse! (") +
    game.collapseTime.toFixed(1) +
    "s in collapse)" + "<p>Most Cardinals collapsed at once: " + beautify(game.mostCardOnce) +
    (game.aups.includes(8)?", providing a constant " + beautify(game.mostCardOnce.times(0.03)) + " Cardinals per second":"") + "</p>";
  get("changeOffline").textContent =
    "Offline Progress: " + (game.offlineProg == 1 ? "ON" : "OFF");
  get("bup10").innerHTML =
    "The base is always five below " +
    displayOrd(4e270) +
    "<br><br>73 Boosters";
  get("aup4").innerHTML =
    "OP boosts Tier 1 and 2 by x" +
    Math.log10(Math.log10(1e10 + game.OP)).toFixed(3) +
    "<br><br>Cost: 8 ℵ<sub>ω</sub>";
  get("checkIncrementy").style.display =
    game.upgrades.includes(8) && game.flashIncrementy == 1 ? "inline" : "none";
  get("flashIncrementy").style.display = game.upgrades.includes(8)
    ? "inline"
    : "none";
  get("flashIncrementy").textContent =
    "Flashing Incrementy Reminder: " +
    (game.flashIncrementy == 1 ? "ON" : "OFF");
  get("checkIncrementy").style.color = HSL(Date.now() / 10);
  get("fbConfirm").textContent =
    "Factor Boost Confirmation: " + (game.fbConfirm == 1 ? "ON" : "OFF");
  get("bulkBoost").textContent =
    "Bulk Boosting: " + (game.bulkBoost == 1 ? "ON" : "OFF");
  get("aup7").innerHTML =
    "ℵ<sub>ω</sub> boosts the ℵ<sub>1</sub> multiplier by<br>x" +
    game.alephOmega
      .add(1)
      .pow(1 / 32)
      .toNumber()
      .toFixed(2) +
    "<br>Cost: 65536 ℵ<sub>ω</sub>";
  updateFactors();
  get("chal8Incrementy").style.display =
    game.leastBoost <= 1.5 ? "inline" : "none";
  get("chal8IncrementyBoost").style.display =
    game.leastBoost <= 1.5 ? "inline" : "none";
  get("chal8IncrementyBoost").innerHTML =
    "<br>To Incrementy: x" +
    (getDynamicFactorCap() ** getChalIncrementyCurve(game.chal8Comp)).toFixed(
      2
    );
  get("refundConfirmation").textContent =
    "Refund Confirmation: " + (game.bConf.ref == 1 ? "ON" : "OFF");
  get("refundFB").textContent =
    "Factor Boost if possible on Refund: " +
    (game.bConf.refFB == 1 ? "ON" : "OFF");
  get("chalConf").textContent =
    "Challenge Confirmation: " + (game.bConf.chal == 1 ? "ON" : "OFF");
  get("chalFB").textContent =
    "Factor Boost if possible on entering a Challenge: " +
    (game.bConf.chalFB == 1 ? "ON" : "OFF");
  get("bottomBoosterUpgrades").style.display =
    game.leastBoost <= 1.5 ? "inline" : "none";
  get("bottomBoosterUpgrades2").style.display =
    game.leastBoost <= 1.5 ? "inline" : "none";
  get("distributeCard").style.display =
    game.leastBoost <= 10 ? "block" : "none";
  get("auprow2").style.display = game.aups.includes(4) ? "block" : "none";
  get("auprow3").style.display = game.aups.includes(8) ? "block" : "none";
  get("auprow4").style.display = game.aups.includes(12) ? "block" : "none";
  get("autoPrestigeBuy").style.display =
    game.leastBoost <= 10 ? "inline" : "none";
  get("autoBup").style.display = game.leastBoost <= 1.5 ? "block" : "none";
  get("abu").textContent =
    "Autobuy Booster Upgrades: " + (game.qolSM.abu == 1 ? "ON" : "OFF");
  get("ig73").textContent =
    "Ignore the 73 Booster Upgrade unless in challenge 4, 6, or 7: " +
    (game.qolSM.ig73 == 1 ? "ON" : "OFF");
  get("igc8").textContent =
    "Ignore in Challenge 8: " + (game.qolSM.igc8 == 1 ? "ON" : "OFF");
  get("acc").textContent =
    "Autocomplete Challenges: " + (game.qolSM.acc == 1 ? "ON" : "OFF");
  get("ca").textContent =
    "Collapse Autoprestiger: " + (game.qolSM.ca == 1 ? "ON" : "OFF");
  get("changeHotKeys").textContent =
    "Hotkeys: " + (game.hotkeysOn == 1 ? "ON" : "OFF");
  get("fbps").style.display = getFBps() >= 1 ? "block" : "none";
  get("fbps").textContent =
    "You should be getting a total of " +
    beautify(getFBps()) +
    " Factor Boost(s) per second";
  get("singularitySubTab").style.display = game.upgrades.includes(20)
    ? "inline"
    : "none";
  get("singularityFunction").style.display = game.upgrades.includes(20)
    ? "inline"
    : "none";
  get("singText").textContent = "Singularity Level: " + getSingLevel();
  get("singMaterial").innerHTML =
    "You have " +
    beautify(game.darkManifolds - getDMSacrafice()) +
    " Dark Manifolds, " +
    (game.manifolds - game.sing.m) +
    " Manifolds, and " +
    beautifyEN(game.alephOmega) +
    " ℵ<sub>ω</sub>";
  get("singEffect").innerHTML =
    "Raising the Factor Boosts 25+ requirement to " +
    displayOrd(BHO * getSingLevel()) +
    " and having them give out " +
    (2 * getSingLevel() - 1) +
    " times the Factor Boosts";
  get("blackHoleCircle").r.baseVal.value = 10 * Math.sqrt(getSingLevel());
  get("blackHoleCircle").cy.baseVal.value = 10 * Math.sqrt(getSingLevel()) + 10;
  get("blackHole").height.baseVal.value =
    (10 * Math.sqrt(getSingLevel()) + 10) * 2;
  get("sacrDM").innerHTML =
    "Upgrade with<br>" +
    beautify(1e6 * 5 ** game.sing.dm) +
    "<br>Dark Manifolds";
  get("singFBtext").textContent =
    "You are currently getting " +
    beautify(getFBps()) +
    " Factor Boosts per second";
  get("sacrNw").innerHTML =
    "Upgrade with<br>" +
    beautifyEN(1e20 * 100 ** game.sing.nw) +
    " ℵ<sub>ω</sub>";
  get("changeThicc").textContent="T H I C C Buttons: " + (game.thicc==1?"ON":"OFF")
  for (let i=0;i<3;i++) {
    document.getElementsByClassName("canThicc")[i].classList.remove("thicc")
    if (game.thicc==1) document.getElementsByClassName("canThicc")[i].classList.add("thicc")
  }
  get("collapseConf").textContent="Collapse Confirmation: " + (game.collapseConf==1?"ON":"OFF")
  get("singularityFunction").textContent=(game.mostSing<19.5?"Reach level 20 Singularity":"Spoiler Alert")
  get("getRekt20sing").style.display=(game.mostSing<19.5?"block":"none")
  get("singFuncContent").style.display=(game.mostSing>19.5?"block":"none")
}

function dup(n, spectate = 0) {
  get("dup" + n).classList.remove("darkButton");
  get("dup" + n).classList.remove("locked");
  get("dup" + n).classList.remove("bought");
  if (n <= 3) {
    if (game.decrementy >= dupCosts[n - 1] ** (game.dups[n - 1] + 1)) {
      if (spectate == 0) {
        game.dups[n - 1] += 1;
        //game.decrementy = game.decrementy.minus(iupCosts[n-1]**game.iups[n-1])
      } else {
        get("dup" + n).classList.add("darkButton");
      }
    } else {
      get("dup" + n).classList.add("locked");
    }
  } /* else {
    if (!game.upgrades.includes(12)) {
      get("iup"+ + n).style.display = "none";
    } else {
      get("iup"+ + n).style.display = "inline-block";
      if (game.iups[n-1]==1) {
        get("iup" + n).classList.add("bought")
      } else if (game.incrementy.gte(iupCosts[n-1])) {
        if (spectate == 0) {
          game.incrementy = game.incrementy.minus(iupCosts[n-1])
          game.iups[n-1] = 1
        } else {
          get("iup" + n).classList.add("boosterButton")
        }
      } else {
        get("iup" + n).classList.add("locked")
      }
    }
  } */
}

function assign(a, b, c) {
  let assigning = true
  if (game.assBefore == 0&&a!=2) assigning=false
  if (game.assBefore == 0&&a!=2) alert("You should probably go for ℵ1 for your first cardinal")
  if (assigning && game.cardinals.gte(b)) {
    let bulk = EN(c == 1 ? game.cardinals.divide(b).floor() : 1).times(b);
    game.cardinals = game.cardinals.minus(bulk);
    game.assCard[a - 1].points = game.assCard[a - 1].points.add(bulk);
    game.assBefore = 1;
  }
}

function beautifypower(number) {
  if (number == Infinity) {
    return "Infinity";
  } else {
    let exponent = Math.floor(number);
    let mantissa = 10 ** (number % 1);
    if (exponent < 5) return Math.round(10 ** number);
    if (exponent > 100000) {
      exponent = Math.floor(Math.log10(number));
      mantissa = number / 10 ** exponent;
      if (mantissa.toFixed(5) == "10.00000") return "e9.99999e" + exponent;
      return "e" + mantissa.toFixed(5) + "e" + exponent;
    }
    if (mantissa.toFixed(2) == "10.00") return "9.99e" + exponent;
    return mantissa.toFixed(2) + "e" + exponent;
  }
}

function changeMusic() {
  game.music = (game.music + 1) % (musicLink.length + 1);
  if (game.music == 0) {
    get("music").pause();
  } else {
	console.log(musicLink[game.music - 1] || "")
    get("music").src = musicLink[game.music - 1] || "";
    get("music").play();
  }
}

function changeColor() {
  game.colors = 1 - game.colors;
}

function changeInt() {
  let newms = prompt("Please type in the new millisecond interval (20≤x≤1000)");
  if (20 <= Number(newms) && Number(newms) <= 1000 && !isNaN(Number(newms))) {
    game.msint = Math.round(Number(newms));
    save();
    location.reload();
  }
}

function changeOrdLengthLess() {
  let newms = prompt(
    "Please type in the new max length. Type in 0 for no maximum"
  );
  if (!isNaN(Number(newms))) {
    game.maxOrdLength.less = Math.round(Number(newms));
  }
}

function changeOrdLengthMore() {
  let newms = prompt(
    "Please type in the new max length. Type in 0 for no maximum"
  );
  if (!isNaN(Number(newms))) {
    game.maxOrdLength.more = Math.round(Number(newms));
  }
}

function changeTheme() {
  game.theme = (game.theme + 1) % 3;
}
function changeOrdNotation() {
  game.buchholz = (game.buchholz + 1) % 3;
}

function iup(n, spectate = 0) {
  get("iup" + n).classList.remove("boosterButton");
  get("iup" + n).classList.remove("locked");
  get("iup" + n).classList.remove("bought");
  if (n <= 3) {
    get("iup" + +n).style.display = "";
    if (game.incrementy.gte(iupCosts[n - 1] ** (game.iups[n - 1] + 1))) {
      if (spectate == 0) {
        game.iups[n - 1] += 1;
        game.incrementy = game.incrementy.minus(
          iupCosts[n - 1] ** game.iups[n - 1]
        );
      } else {
        get("iup" + n).classList.add("boosterButton");
      }
    } else {
      get("iup" + n).classList.add("locked");
    }
  } else {
    if (!game.upgrades.includes(12)) {
      get("iup" + +n).style.display = "none";
    } else {
      get("iup" + +n).style.display = "inline-block";
      if (game.iups[n - 1] == 1) {
        get("iup" + n).classList.add("bought");
      } else if (game.incrementy.gte(iupCosts[n - 1])) {
        if (spectate == 0) {
          game.incrementy = game.incrementy.minus(iupCosts[n - 1]);
          game.iups[n - 1] = 1;
        } else {
          get("iup" + n).classList.add("boosterButton");
        }
      } else {
        get("iup" + n).classList.add("locked");
      }
    }
  }
}

function chalbut(i) {
  get("challenge" + (i + 1)).classList.remove("boosterButton");
  get("challenge" + (i + 1)).classList.remove("bought");
  get("challenge" + (i + 1)).classList.remove("running");
  if (game.challenge == i + 1 || (game.chal8 == 1 && i == 7)) {
    get("challenge" + (i + 1)).classList.add("running");
  } else if (game.challengeCompletion[i] >= 3 && i <= 6.1) {
    get("challenge" + (i + 1)).classList.add("bought");
  } else {
    get("challenge" + (i + 1)).classList.add("boosterButton");
  }
}

function getManifolds() {
  if (
    calcIncrementyMult() >=
    (game.iups[5] == 1 ? 2 : 3) ** (game.manifolds + 1)
  ) {
    game.incrementy = EN(0);
    game.manifolds += 1;
  }
}

function changeDynamic(ms) {
  if (game.dynamicUnlock == 1)
    game.dynamic +=
      ms / 1000000 + (game.iups[6] == 1 ? (99 * ms) / 1000000 : 0);
  if (game.challenge == 6 || game.challenge == 7)
    game.dynamic -=
      (10 ** 27 * ms) /
      2 /
      (game.upgrades.includes(14) ? 10 ** 29 : 1) /
      getManifoldEffect();
  let capp =
    10 *
    (game.darkManifolds + 1) ** 0.1 *
    (game.aups.includes(6) ? game.assCard[1].mult.toNumber() : 1);
  if (game.dynamic >= capp) game.dynamic = capp;
}

function getDarkManifolds() {
  if (game.decrementy <= game.darkManifolds * Math.log10(3)) return;
  if (game.darkManifoldMax == 1) {
    game.darkManifolds = Math.floor(game.decrementy / Math.log10(3));
  } else {
    game.darkManifolds += 1;
  }
}

function aup(x, spectate = 0) {
  get("aup" + x).classList.remove("collapse");
  get("aup" + x).classList.remove("bought");
  get("aup" + x).classList.add("locked");
  if (
    spectate == 0 &&
    !game.aups.includes(x) &&
    game.alephOmega.gte(EN(aupCost[x - 1]))
  ) {
    game.alephOmega = game.alephOmega.minus(aupCost[x - 1]);
    game.aups.push(x);
  }
  if (game.alephOmega.gte(EN(aupCost[x - 1]))) {
    get("aup" + x).classList.add("collapse");
    get("aup" + x).classList.remove("locked");
  }
  if (game.aups.includes(x)) {
    get("aup" + x).classList.add("bought");
    get("aup" + x).classList.remove("collapse");
    get("aup" + x).classList.remove("locked");
  }
}

function bup(x, spectate = 0) {
  get("bup" + x).classList.remove("canbuy");
  get("bup" + x).classList.remove("bought");
  get("bup" + x).classList.add("locked");
  if (!game.upgrades.includes(x)) {
    if (
      game.boosters >= bupUpgradeCosts[x - 1] &&
      (game.leastBoost <= 1.5 || (game.challenge != 6 && game.challenge != 7))
    ) {
      if (
        !(x == 12 && !(getSumOfChallenges() >= 7)) &&
        !(x == 16 && !(getSumOfChallenges() >= 22)) &&
        !(x == 20 && !(getSumOfChallenges() >= 33)) &&
        (x < 4.5 || game.upgrades.includes(x - 4))
      ) {
        if (spectate == 0) {
          if (x == 16&&collapseAnimation==0) {
            let a = confirm(
              "Buying this upgrade will destroy everything booster destroys, along with all of your upgrades, autobuyers, challenges, incrementy, incrementy upgrades, and manifolds for a single currency of the next prestige layer. Are you ready for this?"
            );
            if (a) {
              let b = confirm(
                "Are you really sure about this? YOU WILL LOSE EVERYTHING YOU HAVE!"
              );
              if (b) {
                let c = confirm(
                  "ARE YOU REALLY SURE YOU WANT TO DO THAT! YOU WILL LOSE EVERYTHING AND YOU CAN'T UNDO THIS AND MOM WILL GET MAD AND YOU WILL SEE A GLIMPSE OF THE UNKNOWN AND THIS IS YOUR LAST CHANCE!!!"
                );
                if (c) {
                  collapse();
                }
              }
            }
          } else {
            if (x % 4 != 0) game.boosters -= bupUpgradeCosts[x - 1];
            game.upgrades.push(x);
            get("bup" + x).classList.remove("canbuy");
            get("bup" + x).classList.add("bought");
            get("bup" + x).classList.remove("locked");
          }
        } else {
          get("bup" + x).classList.add("canbuy");
          get("bup" + x).classList.remove("bought");
          get("bup" + x).classList.remove("locked");
        }
      }
    }
  } else {
    get("bup" + x).classList.remove("canbuy");
    get("bup" + x).classList.add("bought");
    get("bup" + x).classList.remove("locked");
  }
}

function logbeautify(number) {
  if (beautify(number) == "10^^10") {
    return "10^^9";
  } else if (beautify(number) == "10^^100") {
    return "10^^99";
  } else {
    return beautify(number);
  }
}

function updateFactors() {
  if (game.factors.length >= 0) {
    let factorListHTML = "";
    for (
      let factorListCounter = 0;
      factorListCounter < game.factors.length;
      factorListCounter++
    ) {
	  const cost = Math.pow(
		  10 ** (factorListCounter + 1),
          factorCostExp[factorListCounter] ** game.factors[factorListCounter]
        )
      factorListHTML +=
        "<li>Factor " +
        (factorListCounter + 1) +
        " x" +
        (1 +
          (game.upgrades.includes(11)
            ? 3 * (game.challenge == 3 || game.challenge == 7 ? 2 : 1)
            : 0) +
          game.factors[factorListCounter]) *
          (game.upgrades.includes(1) ? 2 : 1) +
        ' <button onclick="buyFactor(' +
        factorListCounter +
        `)" class="infinityButton">${cost === Infinity
		? `Maxed!`
		: `Increase Factor ${
			factorListCounter + 1
		} for ${beautify(cost)} OP`}</button></li>`;
    }
    if (get("factorListMain").innerHTML != factorListHTML)
      get("factorListMain").innerHTML = factorListHTML;
  }
}

function buysucc(rend = 0) {
  if (game.challenge == 1 || game.challenge == 7) {
    if (game.OP >= 1000000 && game.succAuto == 0) {
      game.OP -= 1000000;
      game.succAuto += 1;
    }
  } else {
    if (game.OP >= 100 * 2 ** game.succAuto && game.OP < 10 ** 265) {
      game.OP -= 100 * 2 ** game.succAuto;
      game.succAuto += 1;
    } else if (game.OP > 10 ** 265) {
      game.succAuto = game.OP;
    }
  }
  if (rend == 1) render();
}

function buylim(rend = 0) {
  if (game.challenge == 1 || game.challenge == 7) {
    if (game.OP >= 1000000 && game.limAuto == 0) {
      game.OP -= 1000000;
      game.limAuto += 1;
    }
  } else {
    if (game.OP >= 100 * 2 ** game.limAuto && game.OP < 10 ** 265) {
      game.OP -= 100 * 2 ** game.limAuto;
      game.limAuto += 1;
    } else if (game.OP > 10 ** 265) {
      game.limAuto = game.OP;
    }
  }
  if (rend == 1) render();
}

function maxall() {
  let bulk = 0;
  if (game.challenge == 1 || game.challenge == 7) {
    buysucc();
    buylim();
  } else {
    if (game.OP < 10 ** 265) {
      buysucc();
      buylim();
      bulk = Math.floor(
        Math.log(1 + game.OP / (100 * 2 ** game.succAuto)) / Math.log(2)
      );
      game.OP -= (2 ** bulk - 1) * (100 * 2 ** game.succAuto);
      game.succAuto += bulk;
      bulk = Math.floor(
        Math.log(1 + game.OP / (100 * 2 ** game.limAuto)) / Math.log(2)
      );
      game.OP -= (2 ** bulk - 1) * (100 * 2 ** game.limAuto);
      game.limAuto += bulk;
    } else {
      game.succAuto = game.OP;
      game.limAuto = game.OP;
    }
  }
}

function displayOrd(
  ord,
  base = 3,
  over = 0,
  trim = 0,
  large = 0,
  multoff = 0,
  colour = 0
) {
  if (ord < base && large == 0) {
    if (ordColor == "no") ordColor = "red";
    return colour == 1
      ? "<span style='color:red'>" + (ord + over) + "</span>"
      : ord + over;
  } else if ((ord < 3 ** 27 || base > 3) && large == 0) {
    let tempvar = Math.floor(Math.log(ord + 0.1) / Math.log(base));
    if (ordColor == "no") ordColor = HSL(tempvar * 8);
    let tempvar2 = Math.pow(base, tempvar);
    let tempvar3 = Math.floor((ord + 0.1) / tempvar2);
    let tempvar4 =
      "ω" +
      (tempvar == 1
        ? ""
        : (game.buchholz == 2 ? "^(" : "<sup>") +
          displayOrd(tempvar, base, 0) +
          (game.buchholz == 2 ? ")" : "</sup>")) +
      (tempvar3 == 1
        ? ""
        : (game.buchholz == 2 && tempvar > 1.5 ? "×" : "") + tempvar3) +
      (ord - tempvar2 * tempvar3 + over == 0 ||
      trim == game.maxOrdLength.less - 1
        ? ord - tempvar2 * tempvar3 + over == 0
          ? ""
          : "+..."
        : "+");
    return (
      (colour == 1
        ? "<span style='color:" + HSL(tempvar * 8) + "'>" + tempvar4 + "</span>"
        : tempvar4) +
      (ord - tempvar2 * tempvar3 + over == 0 ||
      trim == game.maxOrdLength.less - 1
        ? ""
        : displayOrd(
            ord - tempvar2 * tempvar3,
            base,
            over,
            trim + 1,
            large,
            multoff,
            colour
          ))
    );
  } else if (ord < 4 * 10 ** 270) {
    let tempvar =
      multoff == 0
        ? [
            displayOrd(3),
            displayOrd(9),
            displayOrd(27),
            displayOrd(19683),
            ordMarks[game.buchholz][0].replace("x", "")
          ][Math.max(0, Math.floor((ord + 10 ** 268) / 10 ** 270))]
        : [
            "1",
            displayOrd(3),
            displayOrd(27),
            displayOrd(19683),
            ordMarks[game.buchholz][0].replace("x", "")
          ][Math.max(0, Math.floor((ord + 10 ** 268) / 10 ** 270))];
    return colour == 1
      ? color(tempvar, ["ω", "(", ")", "^", "!", "@", "$"], "red")
      : tempvar;
  } else if (ord < BHO) {
    let tempvar = Math.floor(
      Math.log((ord + 10 ** 268) / (4 * 10 ** 270)) / Math.log(3)
    );
    if (ordColor == "no") ordColor = HSL(tempvar * 8);
    let tempvar2 = displayOrd(
      ord - 3 ** tempvar * 4 * 10 ** 270 + 10 ** 265,
      base,
      over,
      trim + 1,
      1,
      ordMarks[game.buchholz][tempvar][
        ordMarks[game.buchholz][tempvar].length - 2
      ] == "x",
      colour
    );
    let output = (colour == 1
      ? color(
          ordMarks[game.buchholz][tempvar],
          ["ψ", "(", "Ω", ")", "BHO", "^", "×", "@", "+", "!", "$"],
          HSL(tempvar * 8)
        )
      : ordMarks[game.buchholz][tempvar]
    ).replace(
      "x",
      trim == game.maxOrdLength.more - 1
        ? colour == 1
          ? color("...", ["..."], HSL(tempvar * 8))
          : "..."
        : tempvar2 == "1" || tempvar2 == "<span style='color:red'>1</span>"
        ? tempvar <= 0.5 && game.buchholz == 0
          ? colour == 1
            ? "<span style='color:red'>0</span>"
            : "0"
          : game.buchholz == 2
          ? colour == 1
            ? "<span style='color:red'>1</span>"
            : "1"
          : ""
        : tempvar2
    );
    return output;
  } else if (getSingLevel() == 1) {
    if (ordColor == "no") ordColor = HSL(40 * 8);
    return colour == 1 ? color("BHO", ["BHO"], HSL(80 * 4)) : "BHO";
  } else {
    let tempvar = Math.floor(ord / BHO - 1);
    let tempvar2 = 3 ** (ord / BHO - 1) - 3 ** tempvar;
    if ((ord / BHO) % 1 >= 0.99999999999999) {
      tempvar++;
      tempvar2 = 0;
    }
    let tempvar3 =
      tempvar2 < 1
        ? BHO * tempvar2
        : (Math.log10(tempvar2) / Math.log10(3) + 1) * BHO;
    if (ordColor == "no") ordColor = HSL((tempvar + 40) * 8);
    let tempvar4 = displayOrd(
      tempvar3 + 10 ** 265,
      base,
      over,
      trim + 1,
      large,
      ordMarks[game.buchholz][tempvar + 40][
        ordMarks[game.buchholz][tempvar + 40].length - 2
      ] == "x"
        ? 1
        : 0,
      colour
    );
    let output = (colour == 1
      ? color(
          ordMarks[game.buchholz][tempvar + 40],
          ["ψ", "(", "Ω", ")", "ε", "^", "×", "@", "+", "!", "$"],
          HSL((tempvar + 40) * 8)
        )
      : ordMarks[game.buchholz][tempvar + 40]
    ).replace(
      "x",
      trim == game.maxOrdLength.more - 1
        ? colour == 1
          ? color("...", ["..."], HSL(tempvar * 8))
          : "..."
        : tempvar4 == "1" || tempvar4 == "<span style='color:red'>1</span>"
        ? game.buchholz == 2
          ? colour == 1
            ? "<span style='color:red'>1</span>"
            : "1"
          : ""
        : tempvar4
    );
    return output;
  }
}

function fghexp(times, on) {
  if (times < 1) {
    return on;
  } else {
    if (times < 5) {
      return fghexp(times - 1, Math.pow(2, on) * on);
    } else {
      return Infinity;
    }
  }
}

function beautify(number, f = 0) {
  if (typeof number == "number") {
    if (number == Infinity) {
      return "Infinity";
    } else if (1e265 > number) {
      if (1e257 > number) {
        let exponent = Math.floor(Math.log10(number + 0.1));
        let mantissa = number / Math.pow(10, exponent);
        if (exponent < 6) return Math.round(number);
        if (mantissa.toFixed(3) == "10.000") return "9.999e" + exponent;
        return mantissa.toFixed(3) + "e" + exponent;
      } else {
        return "1.000e257 (cap in base " + game.base + ")";
      }
    } else {
      return "g<sub>" + displayOrd(number - 9.9e269, 3) + "</sub> (10)";
    }
  } else {
    return beautifyEN(number, f);
  }
}

function beautifyEN(n, f = 0) {
  let x = EN(n);
  if (x.lte(1e5)) {
    return f === 0 ? x.floor().toString() : x.toNumber().toFixed(f);
  } else if (x.lte("ee5")) {
    let exponent = x.log10().floor();
    let mantissa = x
      .divide(EN(10).pow(exponent))
      .toNumber()
      .toFixed(2);
    if (mantissa == "10.00") exponent = exponent.add(1);
    if (mantissa == "10.00") mantissa = "1.00";
    return mantissa + "e" + beautify(exponent);
  } else {
    return x.floor().toString();
  }
}

function calcOrdPoints(ord = game.ord, base = game.base, over = game.over) {
  if (!(ord > 3 ** 27 && base <= 3)) {
    if (ord < base) {
      return ord + over;
    } else {
      let tempvar = Math.floor(Math.log(ord + 0.1) / Math.log(base));
      let tempvar2 = Math.pow(base, tempvar);
      let tempvar3 = Math.floor((ord + 0.1) / tempvar2);
      return Math.min(
        1e258,
        10 ** calcOrdPoints(tempvar, base, 0) * tempvar3 +
          calcOrdPoints(ord - tempvar2 * tempvar3, base, over)
      );
    }
  } else {
    return Math.round(ord / 1e270 + 1) * 1e270;
  }
}

function Tab(t) {
  get("Tab1").style.display = "none";
  get("Tab2").style.display = "none";
  get("Tab3").style.display = "none";
  get("Tab4").style.display = "none";
  get("Tab5").style.display = "none";
  get("Tab6").style.display = "none";
  get("Tab7").style.display = "none";
  get("Tab" + t).style.display = "block";
  subTab(game.subTab);
  bsubTab(game.bsubTab);
  csubTab(game.csubTab);
  if (game.music >= 1) get("music").play();
}

function subTab(t) {
  get("subTab1").style.display = "none";
  get("subTab2").style.display = "none";
  get("subTab3").style.display = "none";
  get("subTab4").style.display = "none";
  get("subTab5").style.display = "none";
  get("subTab" + t).style.display = "block";
  game.subTab = t;
}
function bsubTab(t) {
  get("bsubTab1").style.display = "none";
  get("bsubTab2").style.display = "none";
  get("bsubTab3").style.display = "none";
  get("bsubTab4").style.display = "none";
  get("bsubTab" + t).style.display = "block";
  game.bsubTab = t;
}

function csubTab(t) {
  get("csubTab1").style.display = "none";
  get("csubTab2").style.display = "none";
  get("csubTab3").style.display = "none";
  get("csubTab4").style.display = "none";
  get("csubTab5").style.display = "none";
  get("csubTab6").style.display = "none";
  get("csubTab" + t).style.display = "inline-block";
  game.csubTab = t;
  //get("body").style["background-size"]="cover"
  //Site: https://wallpaperplay.com/
  //Terms: https://wallpaperplay.com/page-terms
}

var autoSave = window.setInterval(function() {
  save();
}, 10000);

function resetConf() {
  let code = prompt(
    'Are you sure you want to delete all of your progress? Type in "yes" to reset all of your progress.'
  );
  if (code.toLowerCase() == "yes") reset();
}

function maxFactors() {
  if (game.challenge != 2 && game.challenge != 7) {
    if (game.factors.length >= 7 && game.OP >= 1e257) {
      game.factors = [9, 8, 7, 4, 4, 3, 2];
    } else {
      for (let i = 0; i < game.factors.length; i++)
        while (
          game.OP >=
          Math.pow(10 ** (i + 1), Math.pow(factorCostExp[i], game.factors[i]))
        )
          buyFactor(i);
    }
  }
}

function buyFactor(n) {
  if (
    game.OP >=
      Math.pow(10 ** (n + 1), Math.pow(factorCostExp[n], game.factors[n])) &&
    game.challenge != 2 &&
    game.challenge != 7
  ) {
    if (game.OP < 1e265)
      game.OP -= Math.pow(
        10 ** (n + 1),
        Math.pow(factorCostExp[n], game.factors[n])
      );
    game.factors[n] += 1;
  }
}

function debug() {
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 0;
  game.succAuto = 0;
  game.limAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 7;
  game.base = 3;
  game.manualClicksLeft = 1000;
  game.factors = [9, 8, 7, 4, 4, 3, 2];
  game.infUnlock = 1;
  game.dynamic = 1;
  game.challenge = 0;
  game.chal8 = 0;
  game.decrementy = 0;
  render();
  get("infinityTabButton").style.display = "inline-block";
}

function revertToPreBooster() {
  game.ord = 0;
  game.over = 0;
  game.canInf = false;
  game.OP = 10 ** 270 * 5;
  game.succAuto = 0;
  game.limAuto = 0;
  game.autoLoop = { succ: 0, lim: 0 };
  game.factorShifts = 7;
  game.manualClicksLeft = 1000;
  game.base = 3;
  game.factors = [9, 8, 7, 4, 4, 3, 2];
  game.infUnlock = 1;
  game.dynamic = 1;
  game.challenge = 0;
  game.chal8 = 0;
  game.decrementy = 0;
  render();
  get("infinityTabButton").style.display = "inline-block";
}

function V(n, fb = 0) {
  if (n < 27) {
    let tempvar = 0;
    let tempvar2 = 0;
    while (tempvar < n) {
      if (ordMarks[1][tempvar2][ordMarks[1][tempvar2].length - 2] == "x") {
        tempvar++;
      }
      tempvar2++;
    }
    tempvar2--;
    return 3 ** tempvar2 * 4 * 10 ** 270;
  } else {
    return (
      V(26) *
      243 *
      (fb == 1 ? (game.factorBoosts >= 24 ? getSingLevel() : 1) : 1)
    );
  }
}

function toggleAutoMax() {
  if (game.upgrades.includes(2) || game.leastBoost <= 1.5) {
    game.autoOn.max = 1 - game.autoOn.max;
  }
  render();
}

function toggleAutoInf() {
  if (game.upgrades.includes(3)) {
    game.autoOn.inf = 1 - game.autoOn.inf;
  }
  render();
}

if (game.music >= 1) get("music").play();
get("music").src = musicLink[game.music - 1] || "";
get("music").muted = false;

function ENify(x) {
  if (typeof x == "number") {
    return EN(x);
  } else if (x == "null") {
    return EN(0);
  } else {
    let newEN = new EN(0);
    newEN.array = x.array;
    newEN.sign = x.sign;
    newEN.layer = x.layer;
    return newEN;
  }
}

function project(x) {
  if (game.OP >= V(game.factorBoosts + 3, 1) && game.bulkBoost == 0) {
    get("nextBulkTime").innerHTML =
      "You can do a Factor Boost now, but bulking is currently disabled now";
    get("bulking").innerHTML = 1;
    get("factorBoostProg").style.width = "100%";
    get("factorBoostProg").innerHTML = "100.00%";
  } else {
    get("nextBulkTime").innerHTML =
      game.OP < 1e270
        ? "Reach " + beautify(5e270) + " to see when you can boost!"
        : game.factorBoosts + getFactorBulk() >= 25 && getFactorBulk() >= 1
        ? "You can't bulk past the BHO!"
        : "Next boost in bulk will take " +
          ((game.upgrades.includes(2) || game.leastBoost <= 1.5) &&
          (game.upgrades.includes(3) || game.leastBoost <= 25)
            ? time(
                game.factorBoosts < 24
                  ? Math.floor(
                      (V(game.factorBoosts + getFactorBulk() + 3) - game.OP) /
                        x /
                        1e270
                    )
                  : postBHOproj(x)
              )
            : Math.floor(
                (V(game.factorBoosts + getFactorBulk() + 3) - game.OP) /
                  1 /
                  1e270
              ) + " click cycles");
    get("bulking").innerHTML = getFactorBulk();
    let percentage =
      game.factorBoosts + getFactorBulk() >= 25 && getFactorBulk() >= 1
        ? 100
        : (game.OP / V(game.factorBoosts + getFactorBulk() + 3)) * 100;
    if (game.factorBoosts >= 24 && game.OP < BHO) {
      percentage = (100 * game.OP) / BHO / 3 ** (getSingLevel() - 1);
    }
    if (game.factorBoosts >= 24 && game.OP >= BHO) {
      percentage = 100 * (1 / 3) ** ((BHO * getSingLevel() - game.OP) / BHO);
    }
    get("factorBoostProg").style.width = percentage + "%";
    get("factorBoostProg").innerHTML = percentage.toFixed(2) + "%";
  }
}

function time(x) {
  let timeList = [
    Math.floor(x / 86400),
    Math.floor((x % 86400) / 3600),
    Math.floor((x % 3600) / 60),
    Math.floor(x % 60)
  ];
  let timeUnits = ["d ", "h ", "m ", "s"];
  while (timeList[0] == 0) {
    timeList.shift();
    timeUnits.shift();
  }
  let timeOut = "";
  for (let i = 0; i < timeList.length; i++) {
    timeOut += timeList[i];
    timeOut += timeUnits[i];
  }
  if (timeOut == "") timeOut = "<1s";
  return timeOut;
}

function copyStringToClipboard(str) {
  var el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style = {
    position: "absolute",
    left: "-9999px"
  };
  document.body.appendChild(el);
  copyToClipboard(el);
  document.body.removeChild(el);
  alert("Copied to clipboard");
}

function copyToClipboard(el) {
  el = typeof el === "string" ? document.querySelector(el) : el;
  if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
    var editable = el.contentEditable;
    var readOnly = el.readOnly;
    el.contentEditable = true;
    el.readOnly = true;
    var range = document.createRange();
    range.selectNodeContents(el);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    el.setSelectionRange(0, 999999);
    el.contentEditable = editable;
    el.readOnly = readOnly;
  } else {
    el.select();
  }
  document.execCommand("copy");
}

function buyFactorShiftAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega = game.alephOmega.minus(500);
    game.shiftAuto = game.shiftAuto.add(1);
  }
}

function buyFactorBoostAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega = game.alephOmega.minus(500);
    game.boostAuto = game.boostAuto.add(1);
  }
}

function maxAutoprestige() {
  let bulk = game.alephOmega.divide(2000).floor();
  game.alephOmega = game.alephOmega.minus(bulk.times(1000));
  game.shiftAuto = game.shiftAuto.add(bulk);
  game.boostAuto = game.boostAuto.add(bulk);
}

function maxInfStuff() {
  if (game.succAuto == 0) buysucc();
  if (game.limAuto == 0) buylim();
  maxFactors();
  maxall();
}

function distributeCard() {
  let bulk = game.cardinals.divide(3).floor();
  game.cardinals = game.cardinals.minus(bulk.times(3));
  game.assCard[0].points = game.assCard[0].points.add(bulk);
  game.assCard[1].points = game.assCard[1].points.add(bulk);
  game.assCard[2].points = game.assCard[2].points.add(bulk);
}

function getSingularity(x) {
  if (
    x == 0 &&
    game.darkManifolds - getDMSacrafice() >= 1e6 * 5 ** game.sing.dm
  ) {
    game.sing.dm++;
  } else if (x == 1 && game.manifolds >= game.sing.m + 1) {
    game.sing.m++;
  } else if (x == 2 && game.alephOmega.gte(1e20 * 100 ** game.sing.nw)) {
    game.alephOmega = game.alephOmega.minus(1e20 * 100 ** game.sing.nw);
    game.sing.nw++;
  }
}

function getSingManifold() {
  if (getSingLevel() >= 1.5) {
    --game.sing.m;
  }
}

function postBHOproj(x) {
  let goal = (BHO / 1e270) * 3 ** (getSingLevel() - 1);
  let amt = game.OP / 1e270;
  if (game.OP > BHO) amt = (BHO / 1e270) * 3 ** (game.OP / BHO - 1);
  return Math.floor((goal - amt) / x);
}
