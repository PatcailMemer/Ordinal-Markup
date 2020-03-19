//Yeah, I know it's pretty unorganized at the moment
let factorMult = 1
let bfactorMult = 1
let ordMarks=[]
let numMarks=[]
let fake=0
setMarks()
let clickCoolDown = 0
let infinityButtonText = 0
let game
let factorShiftCosts=[200, 1000, 10000, 350000, 10**12, 10**21, 10**100, 1.095*10**272, Infinity]
let factorCostExp=[2,2,2,3,3,6,30,100]
const bupUpgradeCosts=[1,1,1,12,5,4,8,36,72,73,16,108,53,74,66,324]
let totalMult = 1
let buptotalMute = 1
const challengeGoals=[[10**32,10**223,10**270*5],[10**270*5,V(10)+10**270,V(17)+10**270],[10**200,10**214,1e256],[10**33,5e113,1.5e119],[10**122,3.33e136,6.9e207],[1.02e33,1e44,4.75e108],[1.05e13,4.18e18,1.02e20],[3.045e10,Infinity,Infinity]]
const challengeCurve=[0,0.5,0.75,1]
let partOP = 0
const iupCosts=[10**5,10**3,10**9,10**17,10**23,10**24,10**19,10**25,10**27]
let ordColor = "no"
const BHO = V(27)
reset()
document.getElementById("music").loop=true
document.getElementById("music").volume=0.5
document.getElementById("music").muted=false
var sPath = window.location.origin;
//if (sPath != "https://ordinal-markup.glitch.me" && sPath != "http://ordinal-markup.glitch.me") {
  //document.getElementById("bootLeg").style.display="block"
  //fake=1
//} else {
  fake=0
//}

function reset() {
  game={
  base: 10,
  ord: 0,
  over: 0,
  canInf: false,
  OP: 0,
  infUnlock: 0,
  subTab: 1,
  bsubTab: 1,
  succAuto: 0,
  limAuto: 0,
  maxAuto: 0,
  autoLoop: {succ: 0, lim: 0},
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
  bAutoLoop: {max: 0, inf: 0},
  autoOn: {max: 1, inf: 1},
  challenge: 0,
  challengeCompletion: [0,0,0,0,0,0,0],
  incrementy: 0,
  manifolds: 0,
  iups: [0,0,0,0,0,0,0,0,0],
  buchholz: 1,
  theme: 0,
  msint: 50,
  maxOrdLength: {less: 8,more: 10},
  colors: 0,
  music: 0,
  chal8: 0,
  chal8Comp: 0,
  decrementy: 0
  }
  document.getElementById("infinityTabButton").style.display="none"
  render()
  updateFactors()
}

Tab(1)
reset()
updateFactors()

load()
function load() {
  if (fake==0) {
  let loadgame = JSON.parse(localStorage.getItem("ordinalMarkupSave"))
  if (loadgame != null) {
    loadGame(loadgame)
  }}
}

function loadGame(loadgame) {
  reset()
  if (typeof loadgame.base != "undefined") game.base = loadgame.base
  if (typeof loadgame.ord != "undefined") game.ord = loadgame.ord
  if (typeof loadgame.over != "undefined") game.over = loadgame.over
  if (typeof loadgame.canInf != "undefined") game.canInf = loadgame.canInf
  if (typeof loadgame.OP != "undefined") game.OP = loadgame.OP
  if (typeof loadgame.infUnlock != "undefined") game.infUnlock = loadgame.infUnlock
  if (game.infUnlock==1) document.getElementById("infinityTabButton").style.display="inline-block"
  if (typeof loadgame.subTab != "undefined") game.subTab = loadgame.subTab
  if (typeof loadgame.bsubTab != "undefined") game.bsubTab = loadgame.bsubTab
  if (typeof loadgame.succAuto != "undefined") game.succAuto = loadgame.succAuto
  if (typeof loadgame.limAuto != "undefined") game.limAuto = loadgame.limAuto
  if (typeof loadgame.maxAuto != "undefined") game.maxAuto = loadgame.maxAuto
  if (typeof loadgame.autoLoop != "undefined") game.autoLoop = loadgame.autoLoop
  if (typeof loadgame.factorShifts != "undefined") game.factorShifts = loadgame.factorShifts
  if (typeof loadgame.factors != "undefined") game.factors = loadgame.factors
  if (typeof loadgame.lastTick != "undefined") game.lastTick = loadgame.lastTick
  let diff = Date.now()-game.lastTick
  console.log(diff)
  if (typeof loadgame.version == "undefined") {
    game.version = 0.12
  } else {
    game.version = loadgame.version
  }
  if (game.version == 0.12) {
    game.version = 0.2
    if (game.ord>=10**100 || game.base==2) {
      revertToPreBooster()
    }
  }
  if (typeof loadgame.boostUnlock != "undefined") game.boostUnlock = loadgame.boostUnlock
  if (typeof loadgame.boosters != "undefined") game.boosters = loadgame.boosters
  if (typeof loadgame.upgrades != "undefined") game.upgrades = loadgame.upgrades
  if (typeof loadgame.factorBoosts != "undefined") game.factorBoosts = loadgame.factorBoosts
  if (typeof loadgame.manifolds != "undefined") game.manifolds = loadgame.manifolds
  if (game.version == 0.2) {
    game.version = 0.201
    if (game.boostUnlock==1) {
      game.boosters=1
      game.upgrades=[]
      game.factorBoosts=1
    }
  }
  if (game.version == 0.201) {
    game.version = 0.202
    if (game.boostUnlock==1 && game.boosters+(game.upgrades.includes(1)?1:0) >= 2) {
      game.boosters -= 1
    } else {
      if (game.boostUnlock==1) game.factorBoosts += 1
    }
  }
  if (typeof loadgame.dynamic != "undefined") game.dynamic = loadgame.dynamic
  if (typeof loadgame.dynamicUnlock != "undefined") game.dynamicUnlock = loadgame.dynamicUnlock
  if (typeof loadgame.bAutoLoop != "undefined") game.bAutoLoop = loadgame.bAutoLoop
  if (typeof loadgame.autoOn != "undefined") game.autoOn = loadgame.autoOn
  if (game.version == 0.202) {
    game.version = 0.21
    if (game.boostUnlock==1) {
      if (game.factorBoosts==0) {
        game.factorBoosts = 1
        if (game.upgrades.includes(1)) {
          game.boosters=0
        } else {
          game.boosters=1
        }
      } else {
        game.boosters=game.factorBoosts*(game.factorBoosts+1)/2
        if (game.upgrades.includes(1)) game.boosters-=1
        if (game.upgrades.includes(2)) game.boosters-=1
        if (game.upgrades.includes(3)) game.boosters-=1
        if (game.upgrades.includes(5)) game.boosters-=5
        if (game.upgrades.includes(6)) game.boosters-=4
        if (game.upgrades.includes(7)) game.boosters-=8
      }
    }
  }
  if (game.version==0.21) {
     game.version=0.211
     if (game.boostUnlock==1) {
     game.boosters=game.factorBoosts*(game.factorBoosts+1)/2
     if (game.upgrades.includes(1)) game.boosters-=1
     if (game.upgrades.includes(2)) game.boosters-=1
     if (game.upgrades.includes(3)) game.boosters-=1
     if (game.upgrades.includes(5)) game.boosters-=5
     if (game.upgrades.includes(6)) game.boosters-=4
     if (game.upgrades.includes(7)) game.boosters-=8}
  }
  if (game.version==0.211) {
     game.version=0.22
     if (game.boostUnlock==1) {
     game.boosters=game.factorBoosts*(game.factorBoosts+1)/2
     if (game.upgrades.includes(1)) game.boosters-=1
     if (game.upgrades.includes(2)) game.boosters-=1
     if (game.upgrades.includes(3)) game.boosters-=1
     if (game.upgrades.includes(5)) game.boosters-=5
     if (game.upgrades.includes(6)) game.boosters-=4
     if (game.upgrades.includes(7)) game.boosters-=8
     if (game.upgrades.includes(11)) game.boosters-=16
     }
  }
  if (typeof loadgame.challenge != "undefined") game.challenge = loadgame.challenge
  if (typeof loadgame.challengeCompletion != "undefined") game.challengeCompletion = loadgame.challengeCompletion
  if (typeof loadgame.incrementy != "undefined") game.incrementy = loadgame.incrementy
  if (typeof loadgame.iups != "undefined") game.iups = loadgame.iups
  if (typeof loadgame.buchholz != "undefined") game.buchholz = loadgame.buchholz
  if (typeof loadgame.theme != "undefined") game.theme = loadgame.theme
  if (typeof loadgame.msint != "undefined") game.msint = loadgame.msint
  if (typeof loadgame.maxOrdLength != "undefined") game.maxOrdLength = loadgame.maxOrdLength
  if (typeof loadgame.colors != "undefined") game.colors = loadgame.colors
  if (typeof loadgame.music != "undefined") game.music = loadgame.music
  if (game.version==0.22) {
    game.version=0.24
    game.iups.push(0)
    game.iups.push(0)
    game.iups.push(0)
  }
  if (typeof loadgame.chal8 != "undefined") game.chal8 = loadgame.chal8
  if (typeof loadgame.chal8Comp != "undefined") game.chal8Comp = loadgame.chal8Comp
  if (typeof loadgame.decrementy != "undefined") game.decrementy = loadgame.decrementy
  console.log(diff)
  render()
  updateFactors()
  loop((game.challenge==6||game.challenge==7||game.chal8==1?50:diff))
  render()
  updateFactors()
}


function save() {
  if (fake==0) localStorage.setItem("ordinalMarkupSave", JSON.stringify(game))
}

function exporty() {
  prompt("Copy and paste this save into a safe place",btoa(JSON.stringify(game)))
}

function importy() {
  let loadgame=""
  loadgame=JSON.parse(atob(prompt("Paste in your save WARNING: WILL OVERWRITE YOUR CURRENT SAVE")))
  if (loadgame!="") {
    loadGame(loadgame)
  }
}

render()
updateFactors()

function increment(manmade=0) {
  if (0<=0) {
    if (game.ord % game.base == game.base-1) {
      game.over += 1
    } else {
      game.ord += 1
    }
    clickCoolDown=2
  }
  if (manmade==1) render()
}


function maximize(manmade=0) {
  if (0<=0) {
    if (game.ord % game.base == game.base-1 && game.over >= 1) {
      game.ord -= game.base-1
      game.over += game.base-1
      do {
        game.over -= Math.ceil((game.over+game.base)/2-0.1)
        game.ord += game.base
      } while (game.over+game.base >= game.base*2 && game.ord % (game.base**2) != 0)
      if (game.ord % (game.base**2) != 0) {
      game.ord += game.over
      }
      game.over = 0
    }
    clickCoolDown=2
  }
  if (manmade==1) render()
}

let deltaTime
var calculate = window.setInterval(function() {
  deltaTime = Date.now()-game.lastTick
  loop((game.challenge==6||game.challenge==7||game.chal8==1?50:deltaTime))
  clickCoolDown -= 1
}, game.msint)

function loop(ms) {
  game.base=10-game.factorShifts+(game.challenge==3||game.challenge==7?5:0)+(game.challenge==4||game.challenge==7?game.factorShifts:0)
  if (game.base >= 8 && game.upgrades.includes(9)) game.base -= 4
  if (game.upgrades.includes(10)) game.base = 5
  game.lastTick=Date.now()
  if (game.chal8==1 && calcRefund()>0) confirm("You failed Challenge 8 because you had booster upgrades on you!")
  if (game.chal8==1 && calcRefund()>0) refund()
  if (game.dynamicUnlock==1) game.dynamic += ms/1000000+(game.iups[6]==1?99*ms/1000000:0)
  if (game.challenge==6||game.challenge==7) game.dynamic -= (10**27*ms/2)/(game.upgrades.includes(14)?10**29:1)/getManifoldEffect()
  if (game.dynamic>=10) game.dynamic = 10
  if (game.dynamic<0) game.dynamic = 0
  if (game.chal8==1) game.decrementy += 0.001*ms/50*(calcOrdPoints(game.ord,game.base,game.over)+1)**0.2
  totalMult = factorMult*(game.upgrades.includes(6)?(10+game.boosters**0.9):1)*bfactorMult*(game.dynamic*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)*(game.iups[8]==1?((Math.log10(10+game.incrementy)**(1.05**game.iups[0]))*1.2**game.iups[2]):1)/(game.chal8==1?(10**game.decrementy):1)
  buptotalMute = (game.upgrades.includes(6)?(10+game.boosters**0.9):1)*bfactorMult*((Math.log10(10+game.incrementy)**(1.05**game.iups[0]))*1.2**game.iups[2])
  if (buptotalMute <= 100000000 && game.iups[3]==1) buptotalMute=Math.min(100000000,buptotalMute*getManifoldEffect()**2)
  if ((game.succAuto < 10**265 || game.limAuto < 10**265) && !(game.ord>=3**27&&game.base<=3)) {
  if (game.succAuto*totalMult > 0) {
    game.autoLoop.succ += ms
    if (game.autoLoop.succ >= 1000/(game.succAuto*totalMult)) {
      game.autoLoop.succ -= 1000/(game.succAuto*totalMult)
      increment()
    }
  }
  if (game.limAuto*totalMult > 0) {
    game.autoLoop.lim += ms
    if (game.autoLoop.lim >= 1000/(game.limAuto*totalMult)) {
      game.autoLoop.lim -= 1000/(game.limAuto*totalMult)
      maximize()
    }
  }
    
  if (game.maxAuto > 0) {
    maxall()
  }
  
  if (game.autoLoop.succ >= 1000/(game.succAuto*totalMult)) {
    if (game.autoLoop.lim >= 1000/(game.limAuto*totalMult)) {
      game.over = 0
      game.ord += Math.min(Math.floor(game.autoLoop.succ/(1000/(game.succAuto*totalMult))),game.base*Math.floor(game.autoLoop.lim/(1000/(game.limAuto*totalMult))))
      game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*totalMult))
      game.autoLoop.lim = game.autoLoop.lim % (1000/(game.limAuto*totalMult))
    } else {
      if (Math.floor(game.autoLoop.succ/(1000/(game.succAuto*totalMult))) >= game.base-(game.ord % game.base)) {
        game.ord += game.base-(game.ord % game.base)-1
        game.over += Math.floor(game.autoLoop.succ/(1000/(game.succAuto*totalMult)))-(game.base-(game.ord % game.base)-1)
        game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*totalMult))
      } else {
        game.ord += Math.floor(game.autoLoop.succ/(1000/(game.succAuto*totalMult)))
        game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*totalMult))
      }
    }
  }} else {
    game.over=0
    game.ord=Math.max(Math.min(game.succAuto,game.limAuto),10**270*4)
  }
  if (game.dynamicUnlock==1) game.dynamic += ms/1000000+(game.iups[6]==1?99*ms/1000000:0)
  if (game.challenge==6||game.challenge==7) game.dynamic -= (10**27*ms/2)/(game.upgrades.includes(14)?10**29:1)/getManifoldEffect()
  if (game.dynamic>=10) game.dynamic = 10
  if (game.dynamic<0) game.dynamic = 0
  if (ms>0) {
  if (game.upgrades.includes(2) && game.autoOn.max==1) {
    game.bAutoLoop.max += ms
    if (game.bAutoLoop.max >= (1000/buptotalMute)) {
      game.bAutoLoop.max -= (1000/buptotalMute)
      if ((game.OP < ((game.challenge==5||game.challenge==7) && game.factorShifts >= 2?Infinity:factorShiftCosts[game.factorShifts]) && (game.challenge==0 || game.OP < challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]])) || game.OP >= 10**265) {
      if (game.succAuto==0) buysucc()
      if (game.limAuto==0) buylim()
      maxFactors()
      maxall()
      }
    }
  }
  if (game.upgrades.includes(3) && game.autoOn.inf==1) {
    game.bAutoLoop.inf += ms
    if (game.bAutoLoop.inf >= (1000/buptotalMute)) {
      game.bAutoLoop.inf -= (1000/buptotalMute)
      if (game.OP+game.ord >= 10**265 && game.challenge != 1 && game.challenge != 7) infinity()
    }
  }
  if (game.bAutoLoop.max >= (1000/buptotalMute) && game.bAutoLoop.inf >= (1000/buptotalMute)) {
    let bupCom = Math.min(game.bAutoLoop.max/(1000/buptotalMute),game.bAutoLoop.inf/(1000/buptotalMute))
    game.bAutoLoop.max = game.bAutoLoop.max % (1000/buptotalMute)
    game.bAutoLoop.inf = game.bAutoLoop.inf % (1000/buptotalMute)
    if (game.ord+game.OP > 10**265 && game.challenge != 1 && game.challenge != 7) game.OP += bupCom*10**270
    if (game.ord+game.OP > 10**265 && game.challenge != 1 && game.challenge != 7) game.ord += bupCom*10**270
  }
  }
  if (game.upgrades.includes(7)) {
    partOP += ms*(game.upgrades.includes(5)?5**(game.challenge==1 || game.challenge==7?4:1):1)/50
    game.OP += Math.floor(partOP)
    partOP = partOP % 1
  }
  if (game.upgrades.includes(8)) {
    game.incrementy += game.ord/(10**270)*ms/1000*2**game.iups[1]*(game.iups[7]==1?getDynamicFactorCap():1)
  }
  if (game.buchholz==0) {
    ordMarks[0]="ψ(x)"
    ordMarks[1]="ψ(Ωx)"
  } else if (game.buchholz==1) {
    ordMarks[0]="ψ(Ωx)"
    ordMarks[1]="ψ(Ω<sup>2</sup>x)"
  }
  let themeSave="<link rel=\"stylesheet\" href=\"" + (game.theme==0?"light":"dark") + ".css\">"
  if (document.getElementById("theme").innerHTML != themeSave) document.getElementById("theme").innerHTML = themeSave
  if (ms>0) render()
  if (game.factorBoosts < 0) game.factorBoosts=0
  if (game.base<=4) game.dynamicUnlock=1
}

function render() {
  let outSize = fghexp((game.ord % (game.base**3)+0.1)/(game.base**2),Math.pow(2,Math.floor((game.ord % (game.base**2)+0.1)/game.base))*(game.base+game.over+(game.ord % game.base)))
  ordColor = "no"
  let ordSub = (game.ord<=10**100?displayOrd(game.ord,game.base,game.over,0,0,0,game.colors):displayOrd(Math.round(game.ord/(10**270)+1)*10**270-10**270,3,0,0,0,0,game.colors))
  document.getElementById("hardy").innerHTML=colorWrap("H",ordColor)+"<sub>" + ordSub + "</sub><text class=\"invisible\">l</text>"+colorWrap("(" + game.base + ")" + (game.ord >= (game.base**3) || outSize >= 10**264 || (game.ord>=5 && game.base==2) ? "" : "=" + beautify(outSize)),ordColor)
  game.canInf = (game.ord >= (game.base**3) || outSize >= 10240 || outSize >= Infinity)
  if (game.infUnlock==1) {
    document.getElementById("infinityTabButton").style.display="inline-block"
  } else {
    document.getElementById("infinityTabButton").style.display="none"
  }
  if (game.boostUnlock==1) {
    document.getElementById("boosterTabButton").style.display="inline-block"
    if (game.challenge==0 && game.chal8==0) {
      document.getElementById("factorBoostText").style.display="inline-block"
      document.getElementById("completeChallenge").style.display="none"
    } else {
      document.getElementById("factorBoostText").style.display="none"
      document.getElementById("completeChallenge").style.display="inline-block"
      document.getElementById("finishChallenge").innerHTML="Complete the challenge!<br>" + beautify((game.chal8==1?challengeGoals[7][game.chal8Comp]:challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]])) + " OP"
    }
  } else {
    document.getElementById("boosterTabButton").style.display="none"
    document.getElementById("factorBoostText").style.display="none"
    document.getElementById("completeChallenge").style.display="none"
  }
  if (game.dynamicUnlock==1) {
    document.getElementById("dynamicFactorButton").style.display="inline-block"
  } else {
    document.getElementById("dynamicFactorButton").style.display="none"
  }
  if (game.canInf) {
    infinityButtonText=beautify(calcOrdPoints(game.ord,game.base,game.over)*(game.upgrades.includes(5) && calcOrdPoints(game.ord,game.base,game.over) < 10**265?5:1)*(game.upgrades.includes(15) && game.base<6 && calcOrdPoints(game.ord,game.base,game.over) < 10**265?666666:1)*(game.challenge==7?game.challengeCompletion[5]:1)*(game.chal8==1?game.challengeCompletion[6]:1))
    if (document.getElementById("infinityButton").innerHTML != "Infinity to gain " + infinityButtonText + " Ordinal Points") document.getElementById("infinityButton").innerHTML = "Infinity to gain " + infinityButtonText + " Ordinal Points"
    if (document.getElementById("infinityButton2").innerHTML != "+" + infinityButtonText) document.getElementById("infinityButton2").innerHTML = "+" + infinityButtonText
  } else {
    document.getElementById("infinityButton").innerHTML = "Reach 10240 to Infinity"
    document.getElementById("infinityButton2").innerHTML = "Reach 10240 to Infinity"
  }
  document.getElementById("challengeSubTab").style.display=(game.upgrades.includes(4) ? "inline-block" : "none")
  document.getElementById("incrementySubTab").style.display=(game.upgrades.includes(8) ? "inline-block" : "none")
  document.getElementById("ordinalPointsDisplay").innerHTML = "You have " + beautify(game.OP) + " Ordinal Points"
  document.getElementById("succAutoAmount").innerHTML = "You have " + logbeautify(game.succAuto) + " successor autobuyer, clicking the successor button " + (game.succAuto>10**265?logbeautify(game.succAuto):beautify(game.succAuto*totalMult)) + " times per second" 
  document.getElementById("limAutoAmount").innerHTML = "You have " + logbeautify(game.limAuto) + "  maximize autobuyer, clicking the maximize button " + (game.succAuto>10**265?logbeautify(game.succAuto):beautify(game.limAuto*totalMult)) + " times per second"
  document.getElementById("buysucc").innerHTML = "Buy Successor Autobuyer for " + (game.challenge==1||game.challenge==7?(game.succAuto==1?"Infinity":"1.000e6"):beautify(Math.min(10**260+game.succAuto,100*2**game.succAuto))) + " OP"
  document.getElementById("buylim").innerHTML = "Buy Maximize Autobuyer for " + (game.challenge==1||game.challenge==7?(game.limAuto==1?"Infinity":"1.000e6"):beautify(Math.min(10**260+game.limAuto,100*2**game.limAuto))) + "  OP"
  document.getElementById("factorShift").innerHTML = "Factor Shift (" + game.factorShifts + "): Requires " + ((game.challenge==5||game.challenge==7) && game.factorShifts >= 2?"Infinity":(game.factorShifts==7?(game.boostUnlock?"Infinity":"Graham's number (g<sub>ψ(Ω<sup>Ω</sup>ω)</sub> (10))"):beautify(factorShiftCosts[game.factorShifts]))) +" OP"
  document.getElementById("noFactors").style.display=(game.factors.length==0 ? "inline-block" : "none")
  document.getElementById("factorList").style.display=(game.factors.length==0 ? "none" : "inline-block")
  factorMult=1
  if (game.factors.length>0) {
    for(let factorListCounter=0;factorListCounter<game.factors.length;factorListCounter++){
      factorMult *= (1+game.factors[factorListCounter]+(game.upgrades.includes(11)?3*(game.challenge==3||game.challenge==7?2:1):0))*(game.upgrades.includes(1)?2:1)
    }
  }
  document.getElementById("factorMult").innerHTML = "Your factors are multiplying Tier 1 Automation by " + beautify(factorMult)
  document.getElementById("boostersText").innerHTML = "You have " + game.boosters + " boosters"
  document.getElementById("refundBoosters").innerHTML = "Refund back " + calcRefund() + " boosters, but reset all factor shifts"
  document.getElementById("factorBoost").innerHTML = "Factor Boost (" + game.factorBoosts + "): Requires g<sub>" + displayOrd(V(game.factorBoosts+3)) + "</sub> (10) OP"
  document.getElementById("gainBoosters").innerHTML = "Gain " + (game.OP>=V(game.factorBoosts+3)?getFactorBoostGain():(game.factorBoosts+1)) + " Boosters"
  document.getElementById("dynamicMult").innerHTML = "Your Dynamic Multiplier is x" + ((game.dynamic*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)).toFixed(3)
  document.getElementById("maxAllAuto").innerHTML = "Your Max All Autobuyer is clicking the Max All button " + (game.upgrades.includes(2) && game.autoOn.max==1 ? beautify(buptotalMute) : 0) + " times per second, but only if you can't Factor Shift"
  document.getElementById("infinityAuto").innerHTML = "Your Infinity Autobuyer is clicking the Infinity button " + (game.upgrades.includes(3) && game.autoOn.inf==1 ? beautify(buptotalMute) : 0) + " times per second, but only if you're past " + displayOrd(10**270*4)
  document.getElementById("autoMaxButton").innerHTML = "Max All Autobuyer: " + (game.upgrades.includes(2) ? (game.autoOn.max==1 ? "ON" : "OFF") : "LOCKED")
  document.getElementById("autoInfButton").innerHTML = "Infinity Autobuyer: " + (game.upgrades.includes(3) ? (game.autoOn.inf==1 ? "ON" : "OFF") : "LOCKED")
  document.getElementById("bup6 current").innerHTML = (10+game.boosters**0.9).toFixed(2)
  document.getElementById("runChal").innerHTML = (game.chal8==1?"You're currently running Challenge 8":(game.challenge==0?"You're currently not in a challenge":"You're currently running Challenge "+game.challenge))
  document.getElementById("incrementyText").innerHTML = "You have "+beautify(game.incrementy)+" incrementy, multiplying " + (game.iups[8]==1?"Tier 1 and ":"") + "Tier 2 Automation by "+((Math.log10(10+game.incrementy)**(1.05**game.iups[0]))*1.2**game.iups[2]).toFixed(3) + "x"
  document.getElementById("incrementyText2").innerHTML = "You are getting " + beautify(game.ord/(10**270)*2**game.iups[1]*(game.iups[7]==1?getDynamicFactorCap():1)) + " incrementy per second"
  document.getElementById("iup1").innerHTML = "Raise Incrementy multiplier to the<br>1.05<br>Cost: " + beautify(10**(5*(game.iups[0]+1)))
  document.getElementById("iup2").innerHTML = "Double production of incrementy<br><br>Cost: " + beautify(10**(3*(game.iups[1]+1)))
  document.getElementById("iup3").innerHTML = "Multiply Incrementy multiplier by 1.2<br><br>Cost: " + beautify(10**(9*(game.iups[2]+1)))
  document.getElementById("manifoldShift").style.display = (game.upgrades.includes(12) ? "inline-block" : "none")
  document.getElementById("manifoldAmount").innerHTML = beautify(game.manifolds)
  document.getElementById("manifoldBoost").innerHTML = getManifoldEffect().toFixed(3)
  document.getElementById("changeOrdNotation").innerHTML = "Current Ordinal Notation: " + (game.buchholz == 1 ? "Buchholz's" : "Madore's")
  document.getElementById("changeTheme").innerHTML = "Current Theme: " + (game.theme == 1 ? "Dark" : "Light")
  document.getElementById("changeInt").innerHTML = "Millisecond Interval: " + game.msint + "ms"
  document.getElementById("changeOrdLengthLess").innerHTML = "Maximum Ordinal Length below " + displayOrd(10**270*4) + ": " + game.maxOrdLength.less
  document.getElementById("changeOrdLengthMore").innerHTML = "Maximum Ordinal Length above " + displayOrd(10**270*4) + ": " + game.maxOrdLength.more
  document.getElementById("getManifolds").innerHTML = "Reset incrementy for a manifold.<br>Need: "+((game.iups[5]==1?2:3)**(game.manifolds+1)).toFixed(2)+"x<br>incrementy multiplier"
  document.getElementById("manifoldIncrease").innerHTML = "It is increasing by " + ((game.upgrades.includes(13) && game.challenge % 2 == 1?" a non-constant amount ":((0.002*(game.iups[6]==1?100:1))*getManifoldEffect()).toFixed(3))) + " per second and caps at " + ((10*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)).toFixed(3)
  document.getElementById("dynamicDecreaseText").style.display=(game.challenge==6||game.challenge==7?"inline":"none")
  document.getElementById("dynamicDecrease").innerHTML=(game.upgrades.includes(14)?"10.000":beautify(10**30))
  let bfactor
  bfactorMult = 1
  for (let i=0;i<7;i++) {
    bfactor = (((1+(game.factors.length >= i+1?game.factors[i]+(game.upgrades.includes(11)?3:0):0))*(game.upgrades.includes(1) && game.factors.length >= i+1?2:1))**(challengeCurve[game.challengeCompletion[i]]))
    if (((game.challenge==2||game.challenge==7) && i==0)||game.chal8==1) bfactor = 1
    bfactorMult *= bfactor
    document.getElementById("challenge" + (i+1) + "Effect").innerHTML = "x" + bfactor.toFixed(2) + " ("+game.challengeCompletion[i]+"/3)"
    document.getElementById("challenge" + (i+1) + "Goal").innerHTML = "Goal: " + beautify(challengeGoals[i][Math.min(game.challengeCompletion[i],2)]) + " OP"
    chalbut(i)
  }
  bfactor = getDynamicFactorCap()**challengeCurve[game.chal8Comp]
  if (game.chal8==1) bfactor = 1
  bfactorMult *= bfactor
  document.getElementById("challenge" + "8" + "Effect").innerHTML = "x" + bfactor.toFixed(2) + " ("+game.chal8Comp+"/3)"
  document.getElementById("challenge" + "8" + "Goal").innerHTML = "Goal: " + beautify(challengeGoals[7][game.chal8Comp]) + " OP"
  chalbut(7)
  for(let i=0;i<bupUpgradeCosts.length;i++) {
    bup(i+1,1)
  }
  document.getElementById("chalMult").innerHTML = "Your " + getSumOfChallenges() + " challenge completions have multiplied Tier 1 and 2 Automation by " + beautify(bfactorMult)
  iup(1,1)
  iup(2,1)
  iup(3,1)
  iup(4,1)
  iup(5,1)
  iup(6,1)
  iup(7,1)
  iup(8,1)
  iup(9,1)
  document.getElementById("changeColor").innerHTML = "Colors: " + (game.colors==1?"ON":"OFF")
  document.getElementById("changeMusic").innerHTML = "Music: " + (game.music==1?"ON":"OFF")
  document.getElementById("incrementyText3").innerHTML = "You start gaining incrementy when you reach " + displayOrd(4e270)
  document.getElementById("decrementyText").innerHTML = "There is " + beautifypower(game.decrementy) + " decrementy"
  document.getElementById("decrementyText").style.display = (game.chal8==1?"inline":"none")
}

function beautifypower(number) {
  if (number==Infinity) {
    return "Infinity"
  } else {
	let exponent = Math.floor(number)
	let mantissa = 10**(number % 1)
	if (exponent < 6) return Math.round(10**number)
  if (mantissa.toFixed(3)=="10.000") return "9.999e" + exponent
	return mantissa.toFixed(3) + "e" + exponent
  }
}

function changeMusic() {
  game.music = 1-game.music
  if (game.music==0) {
    document.getElementById("music").pause()
  } else {
    document.getElementById("music").play()
  }
}


function changeColor() {
  game.colors = 1-game.colors
}

function getManifoldEffect() {
  return (((game.manifolds+1)**0.5)*(game.iups[4-1]==1?3:1)*(game.iups[4]==1?1.26:1))
}

function getDynamicFactorCap() {
  return (10*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)
}

function changeInt() {
  let newms = prompt("Please type in the new millisecond interval (20≤x≤1000)")
  if (20<=Number(newms) && Number(newms)<=1000 && (!isNaN(Number(newms)))) {
    game.msint = Math.round(Number(newms))
    save()
    location.reload()
  }
}

function changeOrdLengthLess() {
  let newms = prompt("Please type in the new max length. Type in 0 for no maximum")
  if (!isNaN(Number(newms))) {
    game.maxOrdLength.less = Math.round(Number(newms))
  }
}

function changeOrdLengthMore() {
  let newms = prompt("Please type in the new max length. Type in 0 for no maximum")
  if (!isNaN(Number(newms))) {
    game.maxOrdLength.more = Math.round(Number(newms))
  }
}

function changeTheme() {game.theme = (game.theme + 1)%2}
function changeOrdNotation() {game.buchholz = (game.buchholz + 1)%2}

function iup(n,spectate=0) {
  document.getElementById("iup" + n).classList.remove("boosterButton")
  document.getElementById("iup" + n).classList.remove("locked")
  document.getElementById("iup" + n).classList.remove("bought")
  if (n<=3){
    document.getElementById("iup"+ + n).style.display = "";
    if (game.incrementy >= iupCosts[n-1]**(game.iups[n-1]+1)) {
      if (spectate==0) {
      game.iups[n-1] += 1
      game.incrementy -= iupCosts[n-1]**game.iups[n-1]
      } else {
        document.getElementById("iup" + n).classList.add("boosterButton")
      }
    } else {
      document.getElementById("iup" + n).classList.add("locked")
    }
  } else {
    if (!game.upgrades.includes(12)) {
      document.getElementById("iup"+ + n).style.display = "none";
    } else {
      document.getElementById("iup"+ + n).style.display = "inline-block";
      if (game.iups[n-1]==1) {
        document.getElementById("iup" + n).classList.add("bought")
      } else if (game.incrementy >= iupCosts[n-1]) {
        if (spectate == 0) {
          game.incrementy -= iupCosts[n-1]
          game.iups[n-1] = 1
        } else {
          document.getElementById("iup" + n).classList.add("boosterButton")
        }
      } else {
        document.getElementById("iup" + n).classList.add("locked")
      }
    }
  }
}

function getFactorBoostGain() {
  let fbgg = game.factorBoosts
  let fbg = 0
  for (let j=0;j<getFactorBulk();j++) {
    fbgg += 1
    fbg += fbgg
  }
  return fbg
}

function getFactorBulk() {
  if (game.OP>=V(game.factorBoosts+3)) {
    let i=1
    while (game.OP>=V(game.factorBoosts+3+i) && game.factorBoosts+3+i<=27) {
      i++
    }
    return i
  } else {
    return 0
  }
}

function completeChallenge() {
  if (game.OP>=(game.chal8==1?challengeGoals[7][game.chal8Comp]:challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]])) {
    game.ord=0
    game.over=0
    game.canInf=false
    game.OP=0
    game.succAuto=0
    game.limAuto=0
    game.autoLoop={succ: 0, lim: 0}
    game.factorShifts = 0
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    if (game.chal8==1) {
      game.chal8Comp += 1
    } else {
      game.challengeCompletion[game.challenge-1] += 1
    }
    game.challenge=0
    game.incrementy=0
    game.chal8=0
    game.decrementy=0
  }
}

function chalbut(i) {
  document.getElementById("challenge"+(i+1)).classList.remove("boosterButton")
  document.getElementById("challenge"+(i+1)).classList.remove("bought")
  document.getElementById("challenge"+(i+1)).classList.remove("running")
  if (game.challenge==(i+1) || (game.chal8==1&&i==7)) {
    document.getElementById("challenge"+(i+1)).classList.add("running")
  } else if (game.challengeCompletion[i]>=3 && i<=6.1) {
    document.getElementById("challenge"+(i+1)).classList.add("bought")
  } else {
    document.getElementById("challenge"+(i+1)).classList.add("boosterButton")
  }
}

function factorBoost() {
  if (game.OP>=V(game.factorBoosts+3)) {
    game.boosters += getFactorBoostGain()
    game.factorBoosts += getFactorBulk()
    game.ord=0
    game.over=0
    game.canInf=false
    game.OP=0
    game.succAuto=0
    game.limAuto=0
    game.autoLoop={succ: 0, lim: 0}
    game.factorShifts = 0
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    game.challenge=0
    game.incrementy=0
    game.chal8=0
    game.decrementy=0
  }
}

function refund() {
  game.boosters += calcRefund()
  let rightrow = []
  if (game.upgrades.includes(4)) rightrow.push(4)
  if (game.upgrades.includes(8)) rightrow.push(8)
  if (game.upgrades.includes(12)) rightrow.push(12)
  if (game.upgrades.includes(16)) rightrow.push(16)
  game.upgrades = rightrow
  for (let i=0;i<bupUpgradeCosts.length;i++) {
    document.getElementById("bup" + (i+1)).classList.remove("canbuy")
    document.getElementById("bup" + (i+1)).classList.remove("bought")
    document.getElementById("bup" + (i+1)).classList.add("locked")
  }
  game.ord=0
  game.over=0
  game.canInf=false
  game.OP=0
  game.succAuto=0
  game.limAuto=0
  game.autoLoop={succ: 0, lim: 0}
  game.factorShifts = 0
  game.base = 10
  game.factors=[]
  game.boostUnlock=1
  game.dynamic=1
  game.challenge=0
  game.incrementy=0
  game.chal8=0
  game.decrementy=0
}

function getManifolds() {
  if(!(((Math.log10(10+game.incrementy)**(1.05**game.iups[0]))*1.2**game.iups[2]) >= (game.iups[5]==1?2:3)**(game.manifolds+1))) return;
  game.incrementy=0
  game.manifolds += 1
}

function calcRefund() {
  let refundBoost = 0
  for(let i=0;i<bupUpgradeCosts.length;i++) {
    refundBoost += (game.upgrades.includes(i+1) && i%4 != 3 ? bupUpgradeCosts[i] : 0)
  }
  return refundBoost
}

function getSumOfChallenges() {
  let r = 0;
  for (let i=0; i<game.challengeCompletion.length; i++) r += game.challengeCompletion[i]
  return r+game.chal8Comp;
}

function bup(x,spectate=0) {
  document.getElementById("bup" + (x)).classList.remove("canbuy")
  document.getElementById("bup" + (x)).classList.remove("bought")
  document.getElementById("bup" + (x)).classList.add("locked")
  if (!game.upgrades.includes(x)) {
    if (game.boosters>=bupUpgradeCosts[x-1] && game.challenge != 6 && game.challenge != 7) {
      if (!(x==12 && !(getSumOfChallenges() >= 7)) && !(x==16 && !(getSumOfChallenges() >= 22)) && (x<4.5||game.upgrades.includes(x-4))) {
        if (spectate==0) {
          if (x==16) {
            let a=confirm("Coming Soon!")
          } else {
            if (x%4 != 0) game.boosters -= bupUpgradeCosts[x-1]
            game.upgrades.push(x)
            document.getElementById("bup" + (x)).classList.remove("canbuy")
            document.getElementById("bup" + (x)).classList.add("bought")
            document.getElementById("bup" + (x)).classList.remove("locked")
            updateFactors()
          }
        }  else {
          document.getElementById("bup" + (x)).classList.add("canbuy")
          document.getElementById("bup" + (x)).classList.remove("bought")
          document.getElementById("bup" + (x)).classList.remove("locked")
        }
      }
    }
  } else {
    document.getElementById("bup" + (x)).classList.remove("canbuy")
    document.getElementById("bup" + (x)).classList.add("bought")
    document.getElementById("bup" + (x)).classList.remove("locked")
  }
}

function logbeautify(number) {
  if (beautify(number)=="10^^10") {
    return "10^^9"
  } else if (beautify(number)=="10^^100") {
    return "10^^99"
  } else {
    return beautify(number)
  }
}

function updateFactors() {
  if (game.factors.length>=0) {
    let factorListHTML=""
    for(let factorListCounter=0;factorListCounter<game.factors.length;factorListCounter++){
      factorListHTML = factorListHTML + "<li>Factor " + (factorListCounter+1) + " x" + (1+(game.upgrades.includes(11)?3*(game.challenge==3||game.challenge==7?2:1):0)+game.factors[factorListCounter])*(game.upgrades.includes(1)?2:1) + " <button onclick=\"buyFactor(" + factorListCounter + ")\" class=\"infinityButton\">Increase Factor " + (factorListCounter+1) + " for " + beautify(Math.pow(10**(factorListCounter+1),Math.pow(factorCostExp[factorListCounter],game.factors[factorListCounter]))) + " OP</button></li>"
    }
    document.getElementById("factorListMain").innerHTML=factorListHTML
  }
}

function buysucc(rend=0) {
  if (game.challenge==1||game.challenge==7) {
    if (game.OP>=1000000 && game.succAuto==0) {
      game.OP-=1000000
      game.succAuto += 1
    }
  } else {
    if (game.OP>=100*2**game.succAuto && game.OP<10**265) {
      game.OP-=100*2**game.succAuto
      game.succAuto += 1
    } else if (game.OP>10**265) {
      game.succAuto=game.OP
    }
  }
  if (rend==1) render()
}

function buylim(rend=0) {
  if (game.challenge==1||game.challenge==7) {
    if (game.OP>=1000000 && game.limAuto==0) {
      game.OP-=1000000
      game.limAuto += 1
    }
  } else {
    if (game.OP>=100*2**game.limAuto && game.OP<10**265) {
      game.OP-=100*2**game.limAuto
      game.limAuto += 1
    } else if (game.OP>10**265) {
      game.limAuto=game.OP
    }
  }
  if (rend==1) render()
}

function maxall() {
  let bulk=0
  if (game.challenge==1||game.challenge==7) {
    buysucc()
    buylim()
  } else {
    if (game.OP<10**265) {
      buysucc()
      buylim()
      bulk=Math.floor(Math.log(1+game.OP/(100*2**game.succAuto))/Math.log(2))
      game.OP -= ((2**bulk)-1)*(100*2**game.succAuto)
      game.succAuto += bulk
      bulk=Math.floor(Math.log(1+game.OP/(100*2**game.limAuto))/Math.log(2))
      game.OP -= ((2**bulk)-1)*(100*2**game.limAuto)
      game.limAuto += bulk
    } else {
      game.succAuto=game.OP
      game.limAuto=game.OP
    }
  }
}

function infinity(manmade=0) {
  if (game.canInf) {
    if (calcOrdPoints(game.ord,game.base,game.over)>=10**265) {
      game.OP = Math.max(game.OP,calcOrdPoints(game.ord,game.base,game.over))
    } else {
      if (game.chal8==1) game.OP=Math.round(0.015*game.OP)
      if (game.challenge==6||game.challenge==7) game.OP=0
      game.OP += calcOrdPoints(game.ord,game.base,game.over)*(game.upgrades.includes(5)?5:1)*(game.upgrades.includes(15) && game.base<6?666666:1)*(game.challenge==7?game.challengeCompletion[5]:1)*(game.chal8==1?game.challengeCompletion[6]:1)
    }
    game.ord = 0
    game.over = 0
    document.getElementById("infinityTabButton").style.display="inline-block"
    game.infUnlock = 1
    game.dynamic=1
    game.decrementy=0
    game.autoLoop.succ=0
    game.autoLoop.lim=0
  }
  loop(0)
  if (manmade==1) render()
}

function displayOrd(ord,base=3,over=0,trim=0,large=0,multoff=0,colour=0) {
  if (ord<base && large==0) {
    if (ordColor == "no") ordColor="red"
    return (colour==1?"<span style='color:red'>" + (ord+over) + "</span>":ord+over)
  } else if ((ord<3**27 || base>3) && large==0) {
    let tempvar = Math.floor(Math.log(ord+0.1)/Math.log(base))
    if (ordColor == "no") ordColor=HSL(tempvar*8)
    let tempvar2 = Math.pow(base,tempvar)
    let tempvar3 = Math.floor((ord+0.1)/tempvar2)
    let tempvar4 = "ω" + (tempvar==1 ? "" : "<sup>" + displayOrd(tempvar,base,0) + "</sup>") + (tempvar3==1 ? "" : tempvar3) + (ord-tempvar2*tempvar3+over==0 || trim==(game.maxOrdLength.less-1) ? (ord-tempvar2*tempvar3+over==0 ? "": "+...") : "+" )
    return (colour==1?"<span style='color:" + HSL(tempvar*8) + "'>" + tempvar4 + "</span>":tempvar4) + (ord-tempvar2*tempvar3+over==0 || trim==(game.maxOrdLength.less-1)?"":displayOrd(ord-tempvar2*tempvar3,base,over,trim+1,large,multoff,colour))
  } else if (ord<4*10**270) {
    let tempvar = (multoff==0 ? ["ω","ω<sup>2</sup>","ω<sup>ω</sup>","ω<sup>ω<sup>2</sup></sup>",ordMarks[0].replace("x","")][Math.max(0,Math.floor((ord+10**268)/(10**270)))] : ["1","ω","ω<sup>ω</sup>","ω<sup>ω<sup>2</sup></sup>",ordMarks[0].replace("x","")][Math.max(0,Math.floor((ord+10**268)/(10**270)))]) 
    return (colour==1?color(tempvar,["ω","!","@","$"],"red"):tempvar)
  } else if (ord<=BHO) {
    let tempvar = Math.floor(Math.log((ord+10**268)/(4*10**270))/Math.log(3))
    if (ordColor == "no") ordColor=HSL(tempvar*8)
    let tempvar2 = displayOrd(ord-((3**tempvar)*4*10**270)+10**265,base,over,trim+1,1,ordMarks[tempvar][ordMarks[tempvar].length-2]=="x",colour)
    let output=(colour==1?color(ordMarks[tempvar],["ψ","(","Ω",")","BHO","@","+","!","$"],HSL(tempvar*8)):ordMarks[tempvar]).replace("x",(trim==(game.maxOrdLength.more-1)?(colour==1?color("...",["..."],HSL(tempvar*8)):"..."):(tempvar2=="1"||tempvar2=="<span style='color:red'>1</span>"?(tempvar<=0.5 && game.buchholz == 0?(colour==1?"<span style='color:red'>0</span>":"0"):""):tempvar2)))
    return output
  } else {
    return displayOrd(BHO,base,over,trim,large,multoff,colour)
  }
}

function fghexp(times, on) {
  if (times<1) {
    return on
  } else {
    return fghexp(times-1,Math.pow(2,on)*on)
  }
}

function beautify(number) {
  if (number==Infinity) {
    return "Infinity"
  } else if (10**265 > number) {
  if (10**257>number) {
	let exponent = Math.floor(Math.log10(number+0.1))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 6) return Math.round(number)
  if (mantissa.toFixed(3)=="10.000") return "9.999e" + exponent
	return mantissa.toFixed(3) + "e" + exponent
  } else {
    return "1.000e300"
  }
  } else {
    return "g<sub>" + displayOrd(number-10**270,3) + "</sub> (10)"
  }
}

function calcOrdPoints(ord,base,over) {
  if (!(ord>3**27 && base<=3)) {
    if (ord<base) {
      return ord+over
    } else {
      let tempvar = Math.floor(Math.log(ord+0.1)/Math.log(base))
      let tempvar2 = Math.pow(base,tempvar)
      let tempvar3 = Math.floor((ord+0.1)/tempvar2)
      return Math.min(10**258,10**calcOrdPoints(tempvar,base,0)*tempvar3+calcOrdPoints(ord-tempvar2*tempvar3,base,over))
    }
  } else {
    return Math.round(ord/(10**270)+1)*10**270
  }
}

function Tab(t) {
  document.getElementById("Tab1").style.display="none"
  document.getElementById("Tab2").style.display="none"
  document.getElementById("Tab3").style.display="none"
  document.getElementById("Tab4").style.display="none"
  document.getElementById("Tab5").style.display="none"
  document.getElementById("Tab6").style.display="none"
  document.getElementById("Tab" + t).style.display="inline-block"
  subTab(game.subTab)
  bsubTab(game.bsubTab)
  if (game.music==1) document.getElementById("music").play();
  updateFactors()
}

function subTab(t) {
  document.getElementById("subTab1").style.display="none"
  document.getElementById("subTab2").style.display="none"
  document.getElementById("subTab3").style.display="none"
  document.getElementById("subTab" + t).style.display="inline-block"
  game.subTab=t
}
function bsubTab(t) {
  document.getElementById("bsubTab1").style.display="none"
  document.getElementById("bsubTab2").style.display="none"
  document.getElementById("bsubTab3").style.display="none"
  document.getElementById("bsubTab4").style.display="none"
  document.getElementById("bsubTab" + t).style.display="inline-block"
  game.bsubTab=t
}

var autoSave = window.setInterval(function() {
  save()
}, 2000)

function resetConf() {
  let code = prompt("Are you sure you want to delete all of your progress? Type in \"yes\" to reset all of your progress.")
  if (code.toLowerCase()=="yes") reset()
}

function maxFactors() {
  if (game.challenge != 2 && game.challenge != 7) {
    for(let i=0;i<game.factors.length;i++)
      while (game.OP >= (Math.pow(10**(i+1),Math.pow(factorCostExp[i],game.factors[i])))) buyFactor(i)
  }
}

function factorShift() {
  if (game.OP>=factorShiftCosts[game.factorShifts] && !((game.challenge==5||game.challenge==7) && game.factorShifts >= 2)) {
    if (game.base>3) {
      game.ord=0
      game.over=0
      game.canInf=false
      game.OP=0
      game.succAuto=0
      game.limAuto=0
      game.autoLoop={succ: 0, lim: 0}
      game.factorShifts += 1
      game.base -= 1
      game.factors=[]
      game.dynamic=1
      game.decrementy=0
      game.autoLoop.succ=0
      game.autoLoop.lim=0
      for(let i=0;i<game.factorShifts;i++) {
        game.factors.push(0)
      }
    } else {
      if (game.boostUnlock==0) {
      game.dynamic=1
      game.ord=0
      game.over=0
      game.canInf=false
      game.OP=0
      game.succAuto=0
      game.limAuto=0
      game.autoLoop={succ: 0, lim: 0}
      game.factorShifts = 0
      game.base = 10
      game.factors=[]
      game.boostUnlock=1
      game.boosters += 1
      game.factorBoosts += 1
      game.challenge=0
      game.incrementy=0
      game.chal8=0
      game.decrementy=0
      game.autoLoop.succ=0
      game.autoLoop.lim=0
      }
    }
  }
  render()
  updateFactors()
}

function buyFactor(n) {
  if (game.OP >= (Math.pow(10**(n+1),Math.pow(factorCostExp[n],game.factors[n]))) && (game.challenge != 2) && (game.challenge != 7)) {
    if (game.OP<10**265) game.OP -= (Math.pow(10**(n+1),Math.pow(factorCostExp[n],game.factors[n])))
    game.factors[n] += 1
  }
  render()
  updateFactors()
}

function debug() {
  game.ord=0
  game.over=0
  game.canInf=false
  game.OP=0
  game.succAuto=0
  game.limAuto=0
  game.autoLoop={succ: 0, lim: 0}
  game.factorShifts = 7
  game.base = 3
  game.factors=[9,8,7,4,4,3,2]
  game.infUnlock = 1
  game.dynamic=1
  game.challenge=0
  game.chal8=0
  game.decrementy=0
  render()
  updateFactors()
  document.getElementById("infinityTabButton").style.display="inline-block"
}

function revertToPreBooster() {
  game.ord=0
  game.over=0
  game.canInf=false
  game.OP=10**270*5
  game.succAuto=0
  game.limAuto=0
  game.autoLoop={succ: 0, lim: 0}
  game.factorShifts = 7
  game.base = 3
  game.factors=[9,8,7,4,4,3,2]
  game.infUnlock = 1
  game.dynamic=1
  game.challenge=0
  game.chal8=0
  game.decrementy=0
  render()
  updateFactors()
  document.getElementById("infinityTabButton").style.display="inline-block"
}

function V(n) {
  if (n<27) {
    let tempvar=0
    let tempvar2=0
    while (tempvar<n) {
      if (ordMarks[tempvar2][ordMarks[tempvar2].length-2]=="x") {
        tempvar++
      }
      tempvar2++
    }
    tempvar2--
    return 3**tempvar2*4*10**270
  } else {
    return V(26)*243
  }
}

function toggleAutoMax() {
  if (game.upgrades.includes(2)) {
    game.autoOn.max=1-game.autoOn.max
  }
  render()
}

function toggleAutoInf() {
  if (game.upgrades.includes(3)) {
    game.autoOn.inf=1-game.autoOn.inf
  }
  render()
}

function exitChallenge() {
  if (game.challenge > 0 || game.chal8==1) {
    game.ord=0
    game.over=0
    game.canInf=false
    game.OP=0
    game.succAuto=0
    game.limAuto=0
    game.autoLoop={succ: 0, lim: 0}
    game.factorShifts = 0
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    game.challenge=0
    game.incrementy=0
    game.chal8=0
    game.decrementy=0
  }
}

function enterChallenge(c) {
  if (game.challenge == 0 && game.challengeCompletion[c-1] != 3 && game.chal8 == 0) {
    game.ord=0
    game.over=0
    game.canInf=false
    game.OP=0
    game.succAuto=0
    game.limAuto=0
    game.autoLoop={succ: 0, lim: 0}
    game.factorShifts = 0
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    game.challenge=c
    game.incrementy=0
  }
}

function enterChallenge8() {
  if (game.challenge == 0 && game.chal8Comp != 3) {
    game.ord=0
    game.over=0
    game.canInf=false
    game.OP=0
    game.succAuto=0
    game.limAuto=0
    game.autoLoop={succ: 0, lim: 0}
    game.factorShifts = 0
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    game.chal8=1
    game.incrementy=0
  }
}

function color(string,searches,color) {
  let target=string
  target=target.split("0").join("$")
  target=target.split("1").join("!")
  target=target.split("2").join("@")
  for (let i=0;i<searches.length;i++) {
    target = target.split(searches[i]).join("J" + color + "'>" +searches[i]+ "K")
  }
  target=target.split("J").join("<span style='color:")
  target=target.split("K").join("</span>")
  target=target.split("$").join("0")
  target=target.split("!").join("1")
  target=target.split("@").join("2")
  return target
}

function setMarks() {
ordMarks = [
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
  "BHO",
  "ψ(ψ<sub>2</sub>(Ω))"
]
}

function preConvertHex(n) {
  if (n==0) {
    return ""
  } else {
    return preConvertHex(Math.floor(n/16+0.001)) + ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"][n%16]
  }
}

function convertHex(r,g,b) {
  let x=preConvertHex(r*65536+g*256+b)
  while (x.length < 6) {
    x = "0" + x
  }
  return "#" + x
}

function HSL(hue) {
  if (hue>360) {
  return HSL(hue % 360)
  } else {
  let X=(1-Math.abs((hue/60)%2-1))
  X=Math.round(X*255)
  let R=0
  let G=0
  let B=0
  if (hue<60) {
    R=255
    G=X
  } else if (hue<120) {
    R=X
    G=255
  } else if (hue<180) {
    G=255
    B=X
  } else if (hue<240) {
    G=X
    B=255
  } else if (hue<300) {
    B=255
    R=X
  } else {
    B=X
    R=255
  }
  return convertHex(R,G,B)
  }
}

function colorWrap(string,coloring) {
  return (coloring=="no" || game.colors==0?string:"<span style='color:"+coloring+"'>"+string+"</span>") 
}

if (game.music==1) document.getElementById("music").play();
document.getElementById("music").muted=false

function gotoReal() {
  window.open("https://ordinal-markup.glitch.me/","_blank")
  window.close()
}
