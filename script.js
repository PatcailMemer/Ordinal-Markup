//Yeah, I know it's pretty unorganized at the moment
let factorMult = 1
let bfactorMult = 1
let succAutoMult = 1
let limAutoMult = 1
let ordMarks=[]
let numMarks=[]
setMarks()
let clickCoolDown = 0
let infinityButtonText = 0
let game
let factorShiftCosts=[200, 1000, 10000, 350000, 1e12, 1e21, 1e100, 1.095e272, Infinity]
let factorCostExp=[2,2,2,3,3,6,30,100]
const bupUpgradeCosts=[1,1,1,12,5,4,8,36,72,73,16,108,53,74,66,324]
const slugMile=[10**10,20,15,12,10,1,-1]
let totalMult = 1
let buptotalMute = 1
const challengeGoals=[[10**32,10**223,10**270*5],[10**270*5,V(10)+10**270,V(17)+10**270],[10**200,10**214,1e256],[10**33,5e113,1.5e119],[10**122,3.33e136,1e210],[1.02e33,1e44,4.75e108],[1.05e13,4.18e18,1.02e20],[3.000e10,6.00e10,2.4e11,Infinity]]
const challengeCurve=[0,0.5,0.75,1]
let partOP = 0
let collapseAnimation = 0
const iupCosts=[10**5,10**3,10**9,10**17,2e22,4e23,10**19,2e25,4e27]
const dupCosts=[5,1000,9,Infinity,Infinity,Infinity,Infinity,Infinity,Infinity]
let ordColor = "no" //yes
let EN = ExpantaNum
const musicLink=[
"https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FGoing%20Down%20by%20Jake%20Chudnow%20%5BHD%5D.mp3?v=1581538237884",
"https://cdn.glitch.com/03a4b67b-6f18-4f6d-8d37-50a18fb615c8%2FHypnothis.mp3?v=1584285594822"
]
const musicName = ['OFF', "Going Down by Jake Chudnow", "Hypnothis by Kevin Macleod"]
const BHO = V(27)
const aupCost=[1,2,4,8,16,256,65536,2**32]
let AF=0
const d=new Date()
if (d.getMonth()==3&&d.getDate()==1&&!(d.getFullYear()==Number(localStorage.ordinalMarkupAF))) {
  AF=1
  console.log("April Fools!")
  localStorage.setItem("ordinalMarkupAF",d.getFullYear().toString())
} else {
  AF=0
}
reset()
document.getElementById("music").loop=true
document.getElementById("music").volume=0.5
document.getElementById("music").muted=false


Tab(1)
reset()
updateFactors()
load()
render()
updateFactors()

function increment(manmade=0) {
  if (manmade==0 || game.manualClicksLeft >= 0.5 || game.chal8 == 0) {
    if (manmade==1 && game.chal8 == 1) game.manualClicksLeft -= 1
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
    clickCoolDown=2
  }
  if (manmade==1) render()
}

let deltaTime;
var calculate = window.setInterval(function() {
  deltaTime = Date.now()-game.lastTick
  loop(deltaTime)
  clickCoolDown -= 1
}, game.msint)

function loop(ms) {
  if (game.incrementy.lt(0)) game.incrementy=EN(0)
  if (game.collapseUnlock==0) game.leastBoost=Infinity
  if (isNaN(game.leastBoost)) game.leastBoost=Infinity
  if (game.leastBoost==null) game.leastBoost=Infinity
  if (game.leastBoost=="null") game.leastBoost=Infinity
  if (typeof game.leastBoost=="undefined") game.leastBoost=Infinity
  game.collapseTime += ms/1000
  game.base=10-game.factorShifts+(game.challenge==3||game.challenge==7?5:0)+(game.challenge==4||game.challenge==7?game.factorShifts:0)
  if (game.base >= 8 && game.upgrades.includes(9)) game.base -= 4
  if (game.upgrades.includes(10)&&game.OP<=1e270) game.base = 5
  game.lastTick=Date.now()
  if (game.chal8==1 && calcRefund()>0) confirm("You failed Challenge 8 because you had booster upgrades on you!")
  if (game.chal8==1 && calcRefund()>0) refund()
  if (game.collapseUnlock==1) game.boosters=game.factorBoosts*(game.factorBoosts+1)/2 - calcRefund() + calcSlugMile()
  if (game.leastBoost <= 1e10 && game.OP < calcTotalOPGain()) {
    game.OP += (calcTotalOPGain()>=10**270?Infinity:calcTotalOPGain()/100000*ms)
    if (game.OP > calcTotalOPGain()) game.OP = calcTotalOPGain()
  }
  let assCount
  for (assCount in game.assCard) {
    game.assCard[assCount].power = game.assCard[assCount].power.add(game.assCard[assCount].points.pow(2).times(0.001*ms))
    game.assCard[assCount].mult = game.assCard[assCount].power.add(10).log10()
  }
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms/2))
  }
  changeDynamic(ms)
  if (game.dynamic<0) game.dynamic = 0
  if (game.chal8==1) game.decrementy += getDecrementyRate(ms)
  if (game.leastBoost<=1.5&&game.limAuto==0) game.limAuto=1
  totalMult = factorMult*(game.upgrades.includes(6)?(10+Math.max(game.boosters,0)**0.9):1)*bfactorMult*calcDynamic()*(game.iups[8]==1?((Math.log10(10+game.incrementy.toNumber())**(1.05**game.iups[0]))*1.2**game.iups[2]):1)/(game.chal8==1?(10**(game.decrementy*(0.95**game.dups[0]))):1)*game.assCard[0].mult.toNumber()*(1.2**game.dups[2])*(game.aups.includes(4)?Math.log10(Math.log10(1e10+game.OP)):1)
  buptotalMute = (game.upgrades.includes(6)?(10+Math.max(game.boosters,0)**0.9):1)*bfactorMult*((Math.log10(10+game.incrementy.toNumber())**(1.05**game.iups[0]))*1.2**game.iups[2])*game.assCard[1].mult.toNumber()*(game.aups.includes(1)?Math.max(getManifoldEffect(),1):1)*(1.2**game.dups[2])*(game.aups.includes(4)?Math.log10(Math.log10(1e10+game.OP)):1)
  succAutoMult = (game.aups.includes(2)?Math.max(Math.sqrt(game.limAuto),1):1)
  limAutoMult = (game.aups.includes(2)?Math.max(Math.sqrt(game.succAuto),1):1)
  let chal8Tip = (calcOrdPoints()>=1e30)
  if (buptotalMute <= 100000000 && game.iups[3]==1) buptotalMute=Math.min(100000000,buptotalMute*getManifoldEffect()**2)
  if ((game.succAuto < 10**265 || game.limAuto < 10**265) && !(game.ord>=3**27&&game.base<=3)) {
  if (game.succAuto*totalMult > 0) {
    game.autoLoop.succ += ms
    if (game.autoLoop.succ >= 1000/(game.succAuto*succAutoMult*totalMult)) {
      game.autoLoop.succ -= 1000/(game.succAuto*succAutoMult*totalMult)
      increment()
    }
  }
  if (game.limAuto*limAutoMult*totalMult > 0) {
    game.autoLoop.lim += ms
    if (game.autoLoop.lim >= 1000/(game.limAuto*limAutoMult*totalMult)) {
      game.autoLoop.lim -= 1000/(game.limAuto*limAutoMult*totalMult)
      maximize()
    }
  }
    
  if (game.maxAuto > 0) {
    maxall()
  }
  if (game.autoLoop.succ >= 1000/(game.succAuto*succAutoMult*totalMult)) {
    if (game.autoLoop.lim >= 1000/(game.limAuto*limAutoMult*totalMult)) {
      game.over = 0
      game.ord += Math.min(Math.floor(game.autoLoop.succ/(1000/(game.succAuto*succAutoMult*totalMult))),game.base*Math.floor(game.autoLoop.lim/(1000/(game.limAuto*limAutoMult*totalMult))))
      game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*succAutoMult*totalMult))
      game.autoLoop.lim = game.autoLoop.lim % (1000/(game.limAuto*limAutoMult*totalMult))
    } else {
      if (Math.floor(game.autoLoop.succ/(1000/(game.succAuto*succAutoMult*totalMult))) >= game.base-(game.ord % game.base)) {
        game.ord += game.base-(game.ord % game.base)-1
        game.over += Math.floor(game.autoLoop.succ/(1000/(game.succAuto*succAutoMult*totalMult)))-(game.base-(game.ord % game.base)-1)
        game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*succAutoMult*totalMult))
      } else {
        game.ord += Math.floor(game.autoLoop.succ/(1000/(game.succAuto*succAutoMult*totalMult)))
        game.autoLoop.succ = game.autoLoop.succ % (1000/(game.succAuto*succAutoMult*totalMult))
      }
    }
  }} else {
    game.over=0
    game.ord=Math.max(Math.min(game.succAuto,game.limAuto),10**270*4)
  }
  if ((!chal8Tip)&&game.chal8==1&&calcOrdPoints()>=1e30) game.ord=game.base**(game.base*3)
  changeDynamic(ms)
  if (game.dynamic<0) game.dynamic = 0
  if (ms>0) {
  if ((game.upgrades.includes(2)||game.leastBoost<=1.5) && game.autoOn.max==1) {
    game.bAutoLoop.max += ms
    if (game.bAutoLoop.max >= (1000/buptotalMute)) {
      game.bAutoLoop.max -= (1000/buptotalMute)
      if ((game.OP < ((game.challenge==5||game.challenge==7) && game.factorShifts >= 2?Infinity:factorShiftCosts[game.factorShifts]) && (game.challenge==0 || game.OP < challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]])) || game.OP >= 10**265) {
      maxInfStuff()
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
  if (game.bAutoLoop.max >= (1000/buptotalMute) && (game.bAutoLoop.inf >= (1000/buptotalMute) || game.leastBoost <= 1e10)) {
    let bupCom = Math.min(game.bAutoLoop.max/(1000/buptotalMute),(game.leastBoost <= 1e10?Infinity:game.bAutoLoop.inf/(1000/buptotalMute)))
    game.bAutoLoop.max = game.bAutoLoop.max % (1000/buptotalMute)
    game.bAutoLoop.inf = game.bAutoLoop.inf % (1000/buptotalMute)
    if (game.ord+game.OP > 10**265 && game.challenge != 1 && game.challenge != 7) game.OP += bupCom*10**270
    if (game.ord+game.OP > 10**265 && game.challenge != 1 && game.challenge != 7) game.ord += bupCom*10**270
  }
  }
  if (game.upgrades.includes(7)) {
    partOP += ms*(game.upgrades.includes(5)?5**(game.challenge==1 || game.challenge==7?4:1):1)/50*game.assCard[2].mult.toNumber()
    game.OP += Math.floor(partOP)
    partOP = partOP % 1
  }
  if (game.leastBoost<=15) {
    partOP += ms*(game.upgrades.includes(5)?5**(game.challenge==1 || game.challenge==7?4:1):1)/1000*15*game.assCard[2].mult.toNumber()
    game.OP += Math.floor(partOP)
    partOP = partOP % 1
  }
  if (game.OP>V(27)) game.OP=V(27)
  if (game.ord>V(27)) game.ord=V(27)
  if (game.upgrades.includes(8)) {
    game.incrementy = game.incrementy.add(getIncrementyRate(ms/2))
  }
  game.cAutoLoop.shift += (game.leastBoost<=12&&game.cAutoOn.shift==1?ms/1000*game.shiftAuto.toNumber():0)
  if (game.cAutoLoop.shift>=1) {
    factorShift()
    game.cAutoLoop.shift = game.cAutoLoop.shift % 1
  }
  game.cAutoLoop.boost += (game.leastBoost<=12&&game.cAutoOn.boost==1?ms/1000*game.boostAuto.toNumber():0)
  if (game.cAutoLoop.boost>=1) {
    if (game.OP>=V(27)) factorBoost()
    game.cAutoLoop.boost = game.cAutoLoop.boost % 1
  }
  let themeSave="<link rel=\"stylesheet\" href=\"" + (game.theme==0?"light":"dark") + ".css\">"
  if (document.getElementById("theme").innerHTML != themeSave) document.getElementById("theme").innerHTML = themeSave
  if (game.OP>=V(27)||game.ord >= V(27)||game.factorBoosts >= 25) game.reachedBHO=1
  project(buptotalMute)
  if (ms>0) render()
  if (game.factorBoosts < 0) game.factorBoosts=0
  if (game.base<=4) game.dynamicUnlock=1
}

function render() {
  let outSize = fghexp((game.ord % (game.base**3)+0.1)/(game.base**2),Math.pow(2,Math.floor((game.ord % (game.base**2)+0.1)/game.base))*(game.base+game.over+(game.ord % game.base)))
  ordColor = "no"
  let ordSub = (game.ord<=10**100?displayOrd(game.ord,game.base,game.over,0,0,0,game.colors):displayOrd(Math.round(game.ord/(10**270)+1)*10**270-10**270,3,0,0,0,0,game.colors))
  document.getElementById("hardy").innerHTML=colorWrap("H",ordColor)+"<sub>" + ordSub + "</sub><text class=\"invisible\">l</text>"+colorWrap("(" + game.base + ")" + (game.ord >= (game.base**3) || outSize >= 10**264 || (game.ord>=5 && game.base==2) ? "" : "=" + beautify(outSize)),ordColor)
  game.canInf = (game.ord >= (game.base**3) || outSize >= (game.leastBoost<=15?100:10240) || outSize >= Infinity)
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
    infinityButtonText=beautify(calcTotalOPGain())
    if (document.getElementById("infinityButton").innerHTML != "Infinity to gain " + infinityButtonText + " Ordinal Points (I)") document.getElementById("infinityButton").innerHTML = "Infinity to gain " + infinityButtonText + " Ordinal Points (I)"
    if (document.getElementById("infinityButton2").innerHTML != "+" + infinityButtonText) document.getElementById("infinityButton2").innerHTML = "+" + infinityButtonText
  } else {
    document.getElementById("infinityButton").innerHTML = "Reach " + (game.leastBoost<=15?100:10240) +" to Infinity"
    document.getElementById("infinityButton2").innerHTML = "Reach " + (game.leastBoost<=15?100:10240) +" to Infinity"
  }
  document.getElementById("challengeSubTab").style.display=(game.upgrades.includes(4) ? "inline-block" : "none")
  document.getElementById("incrementySubTab").style.display=(game.upgrades.includes(8) ? "inline-block" : "none")
  document.getElementById("ordinalPointsDisplay").innerHTML = "You have " + beautify(game.OP) + " Ordinal Points"
  document.getElementById("succAutoAmount").innerHTML = "You have " + logbeautify(game.succAuto) + " successor autoclickers, clicking the successor button " + (game.succAuto>10**265?logbeautify(game.succAuto):beautify(game.succAuto*totalMult*succAutoMult)) + " times per second" 
  document.getElementById("limAutoAmount").innerHTML = "You have " + logbeautify(game.limAuto) + "  maximize autoclickers, clicking the maximize button " + (game.succAuto>10**265?logbeautify(game.succAuto):beautify(game.limAuto*totalMult*limAutoMult)) + " times per second"
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
  document.getElementById("factorMult").textContent = "Your factors are multiplying Tier 1 Automation by " + beautify(factorMult)
  document.getElementById("boostersText").textContent = "You have " + game.boosters + " boosters"
  document.getElementById("refundBoosters").textContent = "Refund back " + calcRefund() + " boosters, but reset all factor shifts (R)"
  document.getElementById("factorBoost").innerHTML = "Factor Boost (" + game.factorBoosts + "): Requires g<sub>" + displayOrd(V(game.factorBoosts+3)) + "</sub> (10) OP"
  document.getElementById("gainBoosters").textContent = "Gain " + (game.OP>=V(game.factorBoosts+3)?getFactorBoostGain():(game.factorBoosts+1)) + " Boosters (B)"
  document.getElementById("dynamicMult").textContent = "Your Dynamic Multiplier is x" + ((game.dynamic*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)).toFixed(3)
  document.getElementById("maxAllAuto").innerHTML = "Your Max All Autobuyer is clicking the Max All button " + ((game.upgrades.includes(2)||game.leastBoost<=1.5) && game.autoOn.max==1 ? beautify(buptotalMute) : 0) + " times per second, but only if you can't Factor Shift"
  document.getElementById("infinityAuto").innerHTML = "Your Infinity Autobuyer is clicking the Infinity button " + (game.upgrades.includes(3) && game.autoOn.inf==1 ? beautify(buptotalMute) : 0) + " times per second, but only if you're past " + displayOrd(10**270*4)
  document.getElementById("autoMaxButton").textContent = "Max All Autobuyer: " + ((game.upgrades.includes(2)||game.leastBoost<=1.5) ? (game.autoOn.max==1 ? "ON" : "OFF") : "LOCKED")
  document.getElementById("autoInfButton").textContent = "Infinity Autobuyer: " + (game.upgrades.includes(3) ? (game.autoOn.inf==1 ? "ON" : "OFF") : "LOCKED")
  document.getElementById("bup6 current").textContent = (10+game.boosters**0.9).toFixed(2)
  document.getElementById("runChal").textContent = (game.chal8==1?"You're currently running Challenge 8":(game.challenge==0?"You're currently not in a challenge":"You're currently running Challenge "+game.challenge))
  document.getElementById("incrementyText").textContent = "You have "+beautify(game.incrementy)+" incrementy, multiplying " + (game.iups[8]==1?"Tier 1 and ":"") + "Tier 2 Automation by "+((Math.log10(10+game.incrementy.toNumber())**(1.05**game.iups[0]))*1.2**game.iups[2]).toFixed(3) + "x"
  document.getElementById("incrementyText2").textContent = "You are getting " + beautify(getIncrementyRate(1000)) + " incrementy per second"
  document.getElementById("iup1").innerHTML = "Raise Incrementy multiplier to the<br>1.05<br>Cost: " + beautify(10**(5*(game.iups[0]+1)))
  document.getElementById("iup2").innerHTML = "Double production of incrementy<br><br>Cost: " + beautify(10**(3*(game.iups[1]+1)))
  document.getElementById("iup3").innerHTML = "Multiply Incrementy multiplier by 1.2<br><br>Cost: " + beautify(10**(9*(game.iups[2]+1)))
  document.getElementById("manifoldShift").style.display = (game.upgrades.includes(12) ? "inline-block" : "none")
  document.getElementById("manifoldAmount").textContent = beautify(game.manifolds)
  document.getElementById("manifoldBoost").textContent = getManifoldEffect().toFixed(3)
  document.getElementById("changeOrdNotation").textContent = "Current Ordinal Notation: " + ["Madore's","Buchholz's","Convenient"][game.buchholz]
  document.getElementById("changeTheme").textContent = "Current Theme: " + (game.theme == 1 ? "Dark" : "Light")
  document.getElementById("changeInt").textContent = "Millisecond Interval: " + game.msint + "ms"
  document.getElementById("changeOrdLengthLess").innerHTML = "Maximum Ordinal Length below " + displayOrd(10**270*4) + ": " + game.maxOrdLength.less
  document.getElementById("changeOrdLengthMore").innerHTML = "Maximum Ordinal Length above " + displayOrd(10**270*4) + ": " + game.maxOrdLength.more
  document.getElementById("getManifolds").innerHTML = "Reset incrementy for a manifold.<br>Need: "+((game.iups[5]==1?2:3)**(game.manifolds+1)).toFixed(2)+"x<br>incrementy multiplier"
  document.getElementById("manifoldIncrease").textContent = "It is increasing by " + ((game.upgrades.includes(13) && game.challenge % 2 == 1?" a non-constant amount ":((0.002*(game.iups[6]==1?100:1))*getManifoldEffect()).toFixed(3))) + " per second and caps at " + getDynamicFactorCap().toFixed(3)
  document.getElementById("dynamicDecreaseText").style.display=(game.challenge==6||game.challenge==7?"inline":"none")
  document.getElementById("dynamicDecrease").textContent=(game.upgrades.includes(14)?"10.000":beautify(10**30))
  let bfactor
  bfactorMult = 1
  for (let i=0;i<7;i++) {
    bfactor = (((1+(game.factors.length >= i+1?game.factors[i]+(game.upgrades.includes(11)?3:0):0))*(game.upgrades.includes(1) && game.factors.length >= i+1?2:1))**(game.leastBoost<=20&&game.challengeCompletion[i]==0?0.25:challengeCurve[game.challengeCompletion[i]]))
    if (((game.challenge==2||game.challenge==7) && i==0)||game.chal8==1) bfactor = 1
    bfactorMult *= bfactor
    document.getElementById("challenge" + (i+1) + "Effect").textContent = "x" + bfactor.toFixed(2) + " ("+game.challengeCompletion[i]+"/3)"
    document.getElementById("challenge" + (i+1) + "Goal").innerHTML = "Goal: " + beautify(challengeGoals[i][Math.min(game.challengeCompletion[i],2)]) + " OP"
    chalbut(i)
  }
  bfactor = getDynamicFactorCap()**challengeCurve[game.chal8Comp]
  if (game.chal8==1) bfactor = 1
  bfactorMult *= bfactor
  document.getElementById("challenge8Effect").textContent = "x" + bfactor.toFixed(2) + " ("+game.chal8Comp+"/∞)"
  document.getElementById("challenge8Goal").textContent = "Goal: " + beautify(challengeGoals[7][game.chal8Comp]) + " OP"
  chalbut(7)
  for(let i=0;i<bupUpgradeCosts.length;i++) {
    bup(i+1,1)
  }
  document.getElementById("chalMult").textContent = "Your " + getSumOfChallenges() + " challenge completions have multiplied Tier 1 and 2 Automation by " + beautify(bfactorMult)
  iup(1,1)
  iup(2,1)
  iup(3,1)
  iup(4,1)
  iup(5,1)
  iup(6,1)
  iup(7,1)
  iup(8,1)
  iup(9,1)
  document.getElementById("changeColor").textContent = "Colors: " + (game.colors==1?"ON":"OFF")
  document.getElementById("changeMusic").textContent = "Music: " + musicName[game.music]
  document.getElementById("incrementyText3").innerHTML = "You start gaining incrementy when you reach " + displayOrd(4e270)
  document.getElementById("decrementyText").textContent = "There is " + beautifypower(game.decrementy) + " decrementy and " + game.manualClicksLeft + " clicks left"
  document.getElementById("decrementyText").style.display = (game.chal8==1?"inline":"none")
  document.getElementById("collapseScreen").style.display = (collapseAnimation==0?"none":"block")
  document.getElementById("collapseScreen").style.opacity = collapseAnimation + "%"
  document.getElementById("collapseTabButton").style.display=(game.collapseUnlock==0?"none":"inline-block")
  document.getElementById("cardinalText").textContent = "You have " + beautify(game.cardinals) + " Unassigned Cardinals"
  document.getElementById("cardText1").innerHTML = "You have " + beautify(game.assCard[0].points) + " ℵ<sub>0</sub>"
  document.getElementById("cardPow1").innerHTML = "You have " + beautify(game.assCard[0].power) + " ℵ<sub>0</sub> Power (+" + beautify(game.assCard[0].points.pow(2)) + "/s)"
  document.getElementById("cardMult1").textContent = "x" + beautify(game.assCard[0].mult,3)
  document.getElementById("cardText2").innerHTML = "You have " + beautify(game.assCard[1].points) + " ℵ<sub>1</sub>"
  document.getElementById("cardPow2").innerHTML = "You have " + beautify(game.assCard[1].power) + " ℵ<sub>1</sub> Power (+" + beautify(game.assCard[1].points.pow(2)) + "/s)"
  document.getElementById("cardMult2").textContent = "x" + beautify(game.assCard[1].mult,3)
  document.getElementById("cardText3").innerHTML = "You have " + beautify(game.assCard[2].points) + " ℵ<sub>2</sub>"
  document.getElementById("cardPow3").innerHTML = "You have " + beautify(game.assCard[2].power) + " ℵ<sub>2</sub> Power (+" + beautify(game.assCard[2].points.pow(2)) + "/s)"
  document.getElementById("cardMult3").textContent = "x" + beautify(game.assCard[2].mult,3)
  for (let i=0;i<6;i++) {
    document.getElementById("slug"+i).classList.remove("slugMile")
    document.getElementById("slug"+i).classList.add("notSlugMile")
	  //yeet
  }
  for (let i=0;i<calcSlugMile();i++) {
    document.getElementById("slug"+i).classList.add("slugMile")
    document.getElementById("slug"+i).classList.remove("notSlugMile")
  }
  document.getElementById("alephOmegaText").innerHTML = "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>"
  document.getElementById("alephOmegaText2").innerHTML = "You have " + beautify(game.alephOmega) + " ℵ<sub>ω</sub>"
  aup(1,1)
  aup(2,1)
  aup(3,1)
  aup(4,1)
  aup(5,1)
  aup(6,1)
  aup(7,1)
  aup(8,1)
  document.getElementById("collapseButton").innerHTML = (game.reachedBHO==1?"Collapse for " + beautify(EN(calcCard())) + " Cardinals (C)":"Reach the BHO to Collapse!<br>(OR restart the current Collapse)")
  document.getElementById("decrementyRate").textContent = (game.chal8==1?beautifypower(getDecrementyRate(1000)):1)
  dup(1,1)
  dup(2,1)
  dup(3,1)
  document.getElementById("dup1").innerHTML = "Reduce the potency of decrementy by 5%<br><br>Cost: " + beautifypower(dupCosts[0]**(game.dups[0]+1))
  document.getElementById("dup2").innerHTML = "Halve decrementy growth below ω^(ω3), otherwise double it<br>Cost: " + beautifypower(dupCosts[1]**(game.dups[1]+1))
  document.getElementById("dup3").innerHTML = "Gain a 1.2x multiplier to Tier 1 and 2<br><br>Cost: " + beautifypower(dupCosts[2]**(game.dups[2]+1))
  document.getElementById("getDarkManifolds").innerHTML = "Get a Dark Manifold<br>Need: " + beautifypower(Math.log10(3)*(1+game.darkManifolds)) + " Decrementy"
  document.getElementById("darkManifoldAmount").textContent = game.darkManifolds
  document.getElementById("darkUpButton").style.display=(game.aups.includes(3)?"inline":"none")
  document.getElementById("darkManifoldBoost").textContent = ((game.darkManifolds+1)**0.1).toFixed(3)
  document.getElementById("darkManifoldMaxMode").textContent = "Max Mode: " + (game.darkManifoldMax==1 ? "ON" : "OFF")
  document.getElementById("autoPrestigeSubTab").style.display = (game.leastBoost<=12?"inline-block":"none")
  document.getElementById("factorShiftAutoToggle").textContent = "Factor Shift Autoprestiger: " + (game.cAutoOn.shift==1?"ON":"OFF")
  document.getElementById("factorShiftAutoText").textContent = "Your Factor Shift Autoprestiger is Factor Shifting " + (game.cAutoOn.shift==1?beautifyEN(game.shiftAuto):0) + " time(s) per second"
  document.getElementById("factorBoostAutoToggle").textContent = "Factor Boost Autoprestiger: " + (game.cAutoOn.boost==1?"ON":"OFF")
  document.getElementById("factorBoostAutoText").textContent = "Your Factor Boost Autoprestiger is Factor Boosting " + (game.cAutoOn.boost==1?beautifyEN(game.boostAuto):0) + " time(s) per second, but only at the BHO or higher"
  document.getElementById("cardExtra1").classList.remove("invisible")
  if (!game.aups.includes(1000)) document.getElementById("cardExtra1").classList.add("invisible")
  document.getElementById("cardExtra2").classList.remove("invisible")
  if (!game.aups.includes(6)) document.getElementById("cardExtra2").classList.add("invisible")
  document.getElementById("cardExtra3").classList.remove("invisible")
  if (!game.aups.includes(5)) document.getElementById("cardExtra3").classList.add("invisible")
  document.getElementById("collapseCardHelp").textContent=(game.reachedBHO==1?"Next Cardinal in " + Math.ceil(calcCardExponent(game.collapseTime)>=1?1:(calcCard().toNumber()+1)**(1/calcCardExponent(game.collapseTime))+24-game.factorBoosts) + " Factor Boost(s) (":"Reach the BHO first to collapse! (") + game.collapseTime.toFixed(1) + "s in collapse)"
  document.getElementById("changeOffline").textContent = "Offline Progress: " + (game.offlineProg==1?"ON":"OFF")
  document.getElementById("bup10").innerHTML = "The base is always five below " + displayOrd(4e270) + "<br><br>73 Boosters"
  document.getElementById("aup4").innerHTML = "OP boosts Tier 1 and 2 by x" + Math.log10(Math.log10(1e10+game.OP)).toFixed(3) + "<br><br>Cost: 8 ℵ<sub>ω</sub>"
  document.getElementById("checkIncrementy").style.display=(game.upgrades.includes(8)?"inline":"none")
  document.getElementById("checkIncrementy").style.color=HSL(Date.now()/10)
  document.getElementById("fbConfirm").textContent="Factor Boost Confirmation: " + (game.fbConfirm==1?"ON":"OFF")
  document.getElementById("bulkBoost").textContent="Bulk Boosting: " + (game.bulkBoost==1?"ON":"OFF")
}

function dup(n,spectate=0) {
  document.getElementById("dup" + n).classList.remove("darkButton")
  document.getElementById("dup" + n).classList.remove("locked")
  document.getElementById("dup" + n).classList.remove("bought")
  if (n<=3){
    if (game.decrementy >= (dupCosts[n-1]**(game.dups[n-1]+1))) {
      if (spectate==0) {
      game.dups[n-1] += 1
      //game.decrementy = game.decrementy.minus(iupCosts[n-1]**game.iups[n-1])
      } else {
        document.getElementById("dup" + n).classList.add("darkButton")
      }
    } else {
      document.getElementById("dup" + n).classList.add("locked")
    }
  } /* else {
    if (!game.upgrades.includes(12)) {
      document.getElementById("iup"+ + n).style.display = "none";
    } else {
      document.getElementById("iup"+ + n).style.display = "inline-block";
      if (game.iups[n-1]==1) {
        document.getElementById("iup" + n).classList.add("bought")
      } else if (game.incrementy.gte(iupCosts[n-1])) {
        if (spectate == 0) {
          game.incrementy = game.incrementy.minus(iupCosts[n-1])
          game.iups[n-1] = 1
        } else {
          document.getElementById("iup" + n).classList.add("boosterButton")
        }
      } else {
        document.getElementById("iup" + n).classList.add("locked")
      }
    }
  } */
}


function assign(a,b,c) {
  let assigning = (game.assBefore==0?confirm("Choose wisely (Hint: go for ℵ0 or ℵ1 for your first cardinal)"):true)
  if (assigning&&game.cardinals.gte(b)) {
    let bulk = EN(c==1?game.cardinals.divide(b).floor():1).times(b)
    game.cardinals = game.cardinals.minus(bulk)
    game.assCard[a-1].points = game.assCard[a-1].points.add(bulk)
    game.assBefore=1
  }
}

function resetEverythingCollapseDoes() {
  game.base=10
  game.ord=0
  game.over=0
  game.canInf=false
  game.OP=0
  game.succAuto=0
  game.limAuto=0
  game.maxAuto=0
  game.autoLoop={succ: 0, lim: 0}
  game.factorShifts=0
  game.factors=[]
  game.boosters=0
  game.upgrades=[4,8,12,16]
  game.factorBoosts=0
  game.dynamic=1
  game.maxAuto=0
  game.infAuto=0
  game.bAutoLoop={max: 0, inf: 0}
  game.challenge=0
  game.challengeCompletion=[0,0,0,0,0,0,0]
  game.incrementy=EN(0)
  game.chal8=0
  game.chal8Comp=0
  game.decrementy=0
  game.manualClicksLeft=1000
  game.collapseUnlock=1
  game.collapseTime=0
  game.reachedBHO=0
  if (game.leastBoost>=1.5) {
  game.manifolds=0
  game.iups=[0,0,0,0,0,0,0,0,0]
  game.dups = [0,0,0,0,0,0,0,0,0]
  game.darkManifolds = 0
  }
}

function collapse(manmade=0) {
  if (game.reachedBHO==1 || game.collapseUnlock==0) {
  if (game.collapseUnlock==0) {
  let i=1
  let anim = 0
  let id = setInterval(frame, 50);
  function frame() {
    collapseAnimation += i
    anim++
    if (collapseAnimation == 100 && i==1) {
      i=0
    }
    if (anim==300) {
      game.collapseUnlock=1
      game.upgrades=[4,8,12,16]
      game.cardinals = game.cardinals.add(EN(Math.max(game.factorBoosts-24,2)**0.5).floor())
      if (game.leastBoost>=game.factorBoosts) game.leastBoost=game.factorBoosts
      resetEverythingCollapseDoes()
      i=-1
    }
    if (i==-1 && collapseAnimation==0) {
      clearInterval(id)
    }
  }
  } else {
    game.cardinals = game.cardinals.add(calcCard())
    if (game.leastBoost>=game.factorBoosts) game.leastBoost=game.factorBoosts
    resetEverythingCollapseDoes()
  }
  } else {
    if (manmade==1) {
      if (confirm("Do you want to restart this current collapse to restart the collapse timer?")) {
        resetEverythingCollapseDoes()
      }
    }
  }
}

function beautifypower(number) {
  if (number==Infinity) {
    return "Infinity"
  } else {
	let exponent = Math.floor(number)
	let mantissa = 10**(number % 1)
	if (exponent < 5) return Math.round(10**number)
  if (exponent > 100000) {
    exponent=Math.floor(Math.log10(number))
    mantissa=(number/(10**exponent))
    if (mantissa.toFixed(5)=="10.00000") return "e9.99999e" + exponent
    return "e" + mantissa.toFixed(5) + "e" + exponent
  }
  if (mantissa.toFixed(2)=="10.00") return "9.99e" + exponent
	return mantissa.toFixed(2) + "e" + exponent
  }
}

function changeMusic() {
  game.music = (game.music+1)%(musicLink.length+1)
  if (game.music==0) {
    document.getElementById("music").pause()
  } else {
    document.getElementById("music").src=musicLink[game.music-1]
    document.getElementById("music").play()
  }
}


function changeColor() {
  game.colors = 1-game.colors
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
function changeOrdNotation() {game.buchholz = (game.buchholz + 1)%3}

function iup(n,spectate=0) {
  document.getElementById("iup" + n).classList.remove("boosterButton")
  document.getElementById("iup" + n).classList.remove("locked")
  document.getElementById("iup" + n).classList.remove("bought")
  if (n<=3){
    document.getElementById("iup"+ + n).style.display = "";
    if (game.incrementy.gte(iupCosts[n-1]**(game.iups[n-1]+1))) {
      if (spectate==0) {
      game.iups[n-1] += 1
      game.incrementy = game.incrementy.minus(iupCosts[n-1]**game.iups[n-1])
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
      } else if (game.incrementy.gte(iupCosts[n-1])) {
        if (spectate == 0) {
          game.incrementy = game.incrementy.minus(iupCosts[n-1])
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

function completeChallenge() {
  if (game.OP>=(game.chal8==1?challengeGoals[7][game.chal8Comp]:challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]])) {
    if (game.chal8==1) {
      if (game.leastBoost<=15) {
        while (game.chal8Comp<=2&&game.OP>=challengeGoals[7][game.chal8Comp]) {
          game.chal8Comp += 1
        }
      } else {
      game.chal8Comp += 1
      }
    } else {
      if (game.leastBoost<=15) {
        while (game.challengeCompletion[game.challenge-1]<=2&&game.OP>=challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]]) {
          game.challengeCompletion[game.challenge-1] += 1
        }
      } else {
      game.challengeCompletion[game.challenge-1] += 1
      }
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
    game.incrementy=EN(0)
    game.chal8=0
    game.decrementy=0
    game.manualClicksLeft=1000
  }
}

function chalbut(i) {
  document.getElementById("challenge"+(i+1)).classList.remove("boosterButton")
  document.getElementById("challenge"+(i+1)).classList.remove("bought")
  document.getElementById("challenge"+(i+1)).classList.remove("running")
  if (game.challenge==(i+1) || (game.chal8==1&&i==7)) {
    document.getElementById("challenge"+(i+1)).classList.add("running")
  } else if ((game.challengeCompletion[i]>=3 && i<=6.1)) {
    document.getElementById("challenge"+(i+1)).classList.add("bought")
  } else {
    document.getElementById("challenge"+(i+1)).classList.add("boosterButton")
  }
}

function factorBoost(manmade=0) {
  if (game.OP>=V(game.factorBoosts+3)) {
    if (manmade==1&&game.fbConfirm==1) {
      if (!confirm("Are you sure you want to do a Factor Boost?" + (game.upgrades.includes(8)?" Don't forget to check Incrementy!":""))) return
    }
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
    game.incrementy=EN(0)
    game.chal8=0
    game.decrementy=0
    game.manualClicksLeft=1000
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
  game.incrementy=EN(0)
  game.manualClicksLeft=1000
  game.chal8=0
  game.decrementy=0
}

function getManifolds() {
  if ((((Math.log10(10+game.incrementy)**(1.05**game.iups[0]))*1.2**game.iups[2]) >= (game.iups[5]==1?2:3)**(game.manifolds+1))) {
  game.incrementy=EN(0)
  game.manifolds += 1
  }
}

function changeDynamic(ms) {
  if (game.dynamicUnlock==1) game.dynamic += ms/1000000+(game.iups[6]==1?99*ms/1000000:0)
  if (game.challenge==6||game.challenge==7) game.dynamic -= (10**27*ms/2)/(game.upgrades.includes(14)?10**29:1)/getManifoldEffect()
  let capp=10*((game.darkManifolds+1)**0.1)*(game.aups.includes(6)?game.assCard[1].mult.toNumber():1)
  if (game.dynamic>=capp) game.dynamic = capp
}

function getDarkManifolds() {
  if (game.decrementy <= game.darkManifolds*Math.log10(3)) return;
  if (game.darkManifoldMax==1) {
    game.darkManifolds = Math.floor(game.decrementy/Math.log10(3))
  } else {
    game.darkManifolds += 1
  }
}

function aup(x,spectate=0) {
  document.getElementById("aup" + (x)).classList.remove("collapse")
  document.getElementById("aup" + (x)).classList.remove("bought")
  document.getElementById("aup" + (x)).classList.add("locked")
  if (spectate==0 && (!game.aups.includes(x)) && game.alephOmega.gte(EN(aupCost[x-1]))) {
    game.alephOmega = game.alephOmega.minus(aupCost[x-1])
    game.aups.push(x)
  }
  if (game.alephOmega.gte(EN(aupCost[x-1]))) {
    document.getElementById("aup" + (x)).classList.add("collapse")
    document.getElementById("aup" + (x)).classList.remove("locked")
  }
  if (game.aups.includes(x)) {
    document.getElementById("aup" + (x)).classList.add("bought")
    document.getElementById("aup" + (x)).classList.remove("collapse")
    document.getElementById("aup" + (x)).classList.remove("locked")
  }
}

function bup(x,spectate=0) {
  document.getElementById("bup" + (x)).classList.remove("canbuy")
  document.getElementById("bup" + (x)).classList.remove("bought")
  document.getElementById("bup" + (x)).classList.add("locked")
  if (!game.upgrades.includes(x)) {
    if (game.boosters>=bupUpgradeCosts[x-1] && game.challenge != 6 && game.challenge != 7) {
      if (!(x==12 && !(getSumOfChallenges() >= 7)) && !(x==16 && !(getSumOfChallenges() >= 23)) && (x<4.5||game.upgrades.includes(x-4))) {
        if (spectate==0) {
          if (x==16) {
            let a=confirm("Buying this upgrade will destroy everything booster destroys, along with all of your upgrades, autobuyers, challenges, incrementy, incrementy upgrades, and manifolds for a single currency of the next prestige layer. Are you ready for this?")
            if (a) {
              let b=confirm("Are you really sure about this? YOU WILL LOSE EVERYTHING YOU HAVE!")
              if (b) {
                let c=confirm("ARE YOU REALLY SURE YOU WANT TO DO THAT! YOU WILL LOSE EVERYTHING AND YOU CAN'T UNDO THIS AND MOM WILL GET MAD AND YOU WILL SEE A GLIMPSE OF THE UNKNOWN AND THIS IS YOUR LAST CHANCE!!!")
                if (c) {
                  collapse()
                }
              }
            }
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
    if (document.getElementById("factorListMain").innerHTML!=factorListHTML) document.getElementById("factorListMain").innerHTML=factorListHTML
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
      if (game.chal8==1||game.challenge==6||game.challenge==7) game.OP=0
      game.OP += calcTotalOPGain()
    }
    game.ord = 0
    game.over = 0
    document.getElementById("infinityTabButton").style.display="inline-block"
    game.infUnlock = 1
    game.dynamic=1
    game.decrementy=0
    game.autoLoop.succ=0
    game.autoLoop.lim=0
    game.manualClicksLeft=1000
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
    let tempvar4 = "ω" + (tempvar==1 ? "" : (game.buchholz==2?"^(":"<sup>") + displayOrd(tempvar,base,0) + (game.buchholz==2?")":"</sup>")) + (tempvar3==1 ? "" : (game.buchholz==2&&tempvar>1.5?"×":"") + tempvar3) + (ord-tempvar2*tempvar3+over==0 || trim==(game.maxOrdLength.less-1) ? (ord-tempvar2*tempvar3+over==0 ? "": "+...") : "+" )
    return (colour==1?"<span style='color:" + HSL(tempvar*8) + "'>" + tempvar4 + "</span>":tempvar4) + (ord-tempvar2*tempvar3+over==0 || trim==(game.maxOrdLength.less-1)?"":displayOrd(ord-tempvar2*tempvar3,base,over,trim+1,large,multoff,colour))
  } else if (ord<4*10**270) {
    let tempvar = (multoff==0 ? [displayOrd(3),displayOrd(9),displayOrd(27),displayOrd(19683),ordMarks[game.buchholz][0].replace("x","")][Math.max(0,Math.floor((ord+10**268)/(10**270)))] : ["1",displayOrd(3),displayOrd(27),displayOrd(19683),ordMarks[game.buchholz][0].replace("x","")][Math.max(0,Math.floor((ord+10**268)/(10**270)))]) 
    return (colour==1?color(tempvar,["ω","(",")","^","!","@","$"],"red"):tempvar)
  } else if (ord<=BHO) {
    let tempvar = Math.floor(Math.log((ord+10**268)/(4*10**270))/Math.log(3))
    if (ordColor == "no") ordColor=HSL(tempvar*8)
    let tempvar2 = displayOrd(ord-((3**tempvar)*4*10**270)+10**265,base,over,trim+1,1,ordMarks[game.buchholz][tempvar][ordMarks[game.buchholz][tempvar].length-2]=="x",colour)
    let output=(colour==1?color(ordMarks[game.buchholz][tempvar],["ψ","(","Ω",")","BHO","^","×","@","+","!","$"],HSL(tempvar*8)):ordMarks[game.buchholz][tempvar]).replace("x",(trim==(game.maxOrdLength.more-1)?(colour==1?color("...",["..."],HSL(tempvar*8)):"..."):(tempvar2=="1"||tempvar2=="<span style='color:red'>1</span>"?(tempvar<=0.5 && game.buchholz == 0?(colour==1?"<span style='color:red'>0</span>":"0"):(game.buchholz == 2 ? (colour==1?"<span style='color:red'>1</span>":"1") : "")):tempvar2)))
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

function beautify(number,f=0) {
  if (typeof number == "number") {
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
  }} else {
    return beautifyEN(number,f)
  }
}

function beautifyEN(n,f=0) {
 let x = EN(n)
  if (x.lte(1e5)) {
    return (f==0?x.floor().toString():x.toNumber().toFixed(f))
  } else if (x.lte("ee5")) {
    let exponent = x.log10().floor()
    let mantissa = x.divide(EN(10).pow(exponent)).toNumber().toFixed(2)
    if (mantissa=="10.00") exponent = exponent.add(1)
    if (mantissa=="10.00") mantissa = "1.00"
    return mantissa + "e" + beautify(exponent)
  } else {
    return x.floor().toString()
  }
}



function calcOrdPoints(ord=game.ord,base=game.base,over=game.over) {
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
  document.getElementById("Tab7").style.display="none"
  document.getElementById("Tab" + t).style.display="block"
  subTab(game.subTab)
  bsubTab(game.bsubTab)
  csubTab(game.csubTab)
  if (game.music>=1) document.getElementById("music").play();
  updateFactors()
}

function subTab(t) {
  document.getElementById("subTab1").style.display="none"
  document.getElementById("subTab2").style.display="none"
  document.getElementById("subTab3").style.display="none"
  document.getElementById("subTab4").style.display="none"
  document.getElementById("subTab" + t).style.display="block"
  game.subTab=t
}
function bsubTab(t) {
  document.getElementById("bsubTab1").style.display="none"
  document.getElementById("bsubTab2").style.display="none"
  document.getElementById("bsubTab3").style.display="none"
  document.getElementById("bsubTab4").style.display="none"
  document.getElementById("bsubTab" + t).style.display="block"
  game.bsubTab=t
}

function csubTab(t) {
  document.getElementById("csubTab1").style.display="none"
  document.getElementById("csubTab2").style.display="none"
  document.getElementById("csubTab3").style.display="none"
  document.getElementById("csubTab4").style.display="none"
  document.getElementById("csubTab" + t).style.display="inline-block"
  game.csubTab=t
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

function factorShift(manmade=0) {
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
      game.manualClicksLeft=1000
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
      game.manualClicksLeft=1000
      game.factorBoosts += 1
      game.challenge=0
      game.incrementy=EN(0)
      game.chal8=0
      game.decrementy=0
      game.autoLoop.succ=0
      game.autoLoop.lim=0
      }
    }
  }
  if (manmade==1) render()
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
  game.manualClicksLeft=1000
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
  game.manualClicksLeft=1000
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
      if (ordMarks[1][tempvar2][ordMarks[1][tempvar2].length-2]=="x") {
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
  if (game.upgrades.includes(2)||game.leastBoost<=1.5) {
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

function setMarks() {
ordMarks = [
  [
  "ψ(x)",
  "ψ(Ωx)",
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
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)"
  ],
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
  "BHO",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)"
  ],
  [
  "ψ(Ωx)",
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
  "BHO",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+1)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub>2+2)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)",
  "ψ(ψ<sub>2</sub>(Ω<sub>2</sub><sup>2</sup>)x)"
  ]
]
}

if (game.music>=1) document.getElementById("music").play();
document.getElementById("music").src=musicLink[game.music-1]
document.getElementById("music").muted=false

function ENify(x) {
  if (typeof x == "number") {
    return EN(x)
  } else {
    let newEN = new EN(0)
    newEN.array = x.array
    newEN.sign = x.sign
    newEN.layer = x.layer
    return newEN
  }
}

function project(x) {
  if (game.OP>=V(game.factorBoosts+3)&&game.bulkBoost==0) {
  document.getElementById("nextBulkTime").innerHTML="You can do a Factor Boost now, but bulking is currently disabled now"
  document.getElementById("bulking").innerHTML=1
  document.getElementById("factorBoostProg").style.width="100%"
  document.getElementById("factorBoostProg").innerHTML="100.00%"
  } else {
  document.getElementById("nextBulkTime").innerHTML=(game.OP<1e270?"Reach " + beautify(5e270) + " to see when you can boost!":(game.factorBoosts+getFactorBulk()>=25&&getFactorBulk()>=1?"You can't bulk past the BHO!":"Next boost in bulk will take " + ((game.upgrades.includes(2)||game.leastBoost<=1.5)&&(game.upgrades.includes(3)||game.leastBoost<=25)?time(Math.floor((V(game.factorBoosts+getFactorBulk()+3)-game.OP)/x/(1e270))):(Math.floor((V(game.factorBoosts+getFactorBulk()+3)-game.OP)/1/(1e270))) + " click cycles")))
  document.getElementById("bulking").innerHTML = getFactorBulk()
  document.getElementById("factorBoostProg").style.width = (game.factorBoosts+getFactorBulk()>=25&&getFactorBulk()>=1?100:game.OP/V(game.factorBoosts+getFactorBulk()+3)*100) + "%"
  document.getElementById("factorBoostProg").innerHTML = (game.factorBoosts+getFactorBulk()>=25&&getFactorBulk()>=1?100:game.OP/V(game.factorBoosts+getFactorBulk()+3)*100).toFixed(2) + "%"
  }
}

function time(x) {
  let timeList = [Math.floor(x/86400),Math.floor((x%86400)/3600),Math.floor((x%3600)/60),Math.floor(x%60)]
  let timeUnits = ["d ", "h ", "m ", "s"]
  while (timeList[0]==0) {
    timeList.shift()
    timeUnits.shift()
  }
  let timeOut = ""
  for (let i=0;i<timeList.length;i++) {
    timeOut += timeList[i]
    timeOut += timeUnits[i]
  }
  if (timeOut=="") timeOut = "<1s"
  return timeOut
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
  copyToClipboard(el)
  document.body.removeChild(el);
  alert("Copied to clipboard")
}

function copyToClipboard(el) {
    el = (typeof el === "string") ? document.querySelector(el) : el;
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
    }
    else {
        el.select();
    }
    document.execCommand("copy");
}


function buyFactorShiftAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega=game.alephOmega.minus(500)
    game.shiftAuto=game.shiftAuto.add(1)
  }
}

function buyFactorBoostAuto() {
  if (game.alephOmega.gte(500)) {
    game.alephOmega=game.alephOmega.minus(500)
    game.boostAuto=game.boostAuto.add(1)
  }
}

function maxAutoprestige() {
  let bulk=game.alephOmega.divide(2000).floor()
  game.alephOmega=game.alephOmega.minus(bulk.times(1000))
  game.shiftAuto=game.shiftAuto.add(bulk)
  game.boostAuto=game.boostAuto.add(bulk)
}

function maxInfStuff() {
  if (game.succAuto==0) buysucc()
  if (game.limAuto==0) buylim()
  maxFactors()
  maxall()
}

function distributeCard() {
  let bulk=game.cardinals.divide(3).floor()
  game.cardinals=game.cardinals.minus(bulk.times(3))
  game.assCard[0].points=game.assCard[0].points.add(bulk)
  game.assCard[1].points=game.assCard[1].points.add(bulk)
  game.assCard[2].points=game.assCard[2].points.add(bulk)
}
