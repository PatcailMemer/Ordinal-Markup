"use strict";
let incrementyUpgradeLoop = [EN(0),EN(0),EN(0)]
let inEnterIncrementyverseAnimation = 0
const incrementyverseUpgradeCosts = [EN("1e1136"),EN("1e23500"),EN("e5e7"),EN("eee10"),EN("10^^10000"),EN("10^^^1000"),EN("10^^^^^100"),EN("10^^^^^^^^^^10"),EN("NaN"),EN("NaN"),EN("NaN"),EN("NaN")]
const ordThreshData = {
  "buchholz e(W2+1)": EN(3).pow(EN(3).pow(3**26+10/3).add(27)),
  "madore e(W2+1)": EN(3).pow(EN(3).pow(EN(3).pow(30).add(3))),
  "hyperoperational cutoff": EN.arrow(3,27,3)
}
const tenTetrTen = EN(10).tetr(10)
const fractalTemplate = document.getElementById("fractalEngineMachines").children[0].cloneNode(true)


function fancyText(start,anim,text) {
  if (anim==start) {
    get("newTextFade").textContent = text
  }
  if (anim <= start+50 && anim >= start) {
    get("newTextFade").style.opacity=((anim-start)/50)
  }
  if (anim <= start+150 && anim >= start+100) {
    get("newTextFade").style.opacity=1-((anim-start-100)/50)
  }
}

function incrementyverseActivate() {
  game.incrementyverse = 1
  get("enterIncrementyTextWall").style.display="none"
  get("enterIncrementyverseButton").style.display="none"
  var txt = document.createElement("p");
  txt.style["text-align"]="center" 
  txt.style["font-size"]="30pt" 
  if (Math.random() < 0.0) flashText("Ordi.")
  txt.innerHTML="<b>Welcome to the Incrementyverse! I suggest you start exploring.</b>"
  get("csubTab9").appendChild(txt);
  game.incrementy=EN("1e540")
}

function incrementyverseLoop(ms,off=0) {
  if (ms>=5) ms=Math.max(game.msint,ms)
  //console.log(ms)
  if (game.sfBought.includes(11)) {game.sfBought=game.sfBought.filter(x => {return x>=77})};
  RPloop += ms
    if (RPloop >= 1000) {
      game.refundPoints += Math.floor(RPloop/1000)
      RPloop = RPloop % 1000
    }
  if (game.orbUnlock == 0 && game.fractalShift >= 0.5) game.orbUnlock = 1
  if (game.orbUnlock == 1) {
    game.orbEffectExp += ms/1000 * calcOrbSpeedMult()
  }
  [1,2,3,4,5].forEach(num => {fuep(num,1)})
  game.bigBrainOrd=game.bigBrainOrd.add(calcIncrementyMult().times(ms/500))
  game.incrementy=game.incrementy.add(getIncrementyRate(ms))
  game.multifolds=game.multifolds.max(EN(calcIncrementyMult()).logBase(3)).floor()
  game.sing.m = Math.floor(game.multifolds)
  buyIupsWithAuto(ms)
  buyIups()
  updateFractalEngine(ms)
  incrementyverseRender()
  get("incrementyiv1").classList.add("boosterButton")
  if (game.incrementy.lt(EN(100000).pow(game.iups[0].add(1)))) get("incrementyiv1").classList.remove("boosterButton")
  get("incrementyiv2").classList.add("boosterButton")
  if (game.incrementy.lt(EN(1000).pow(game.iups[1].add(1)))) get("incrementyiv2").classList.remove("boosterButton")
  get("incrementyiv3").classList.add("boosterButton")
  if (game.incrementy.lt(EN(1000000000).pow(game.iups[2].add(1)))) get("incrementyiv3").classList.remove("boosterButton")
  let psi = getPsi()
  get("psiLevel").textContent=psi
  get("nextPsiLevel").innerHTML=displayHugeOrd(getPsiReq(psi+1))

  if (psi >= game.bestPsi) {
    game.bestPsi = psi
  }
  get("bestPsiLevel").textContent=game.bestPsi
}
function flashText(n) {
  get("flash").innerHTML = n
  get("flash").style.display = "block"
  get("flash").style.opacity = "100%"
  get("flash").style.opacity = "99%"
  let i = 0
  let a;
  window.hmm = setInterval(()=>{
    if(parseFloat(get("flash").style.opacity) <= 0) {
      clearInterval(window.hmm)
      get("flash").style.display = "none" 
    } else {
      i+=30; get("flash").style.opacity = 100-i-1+"%"
    }
  },50)
  
  
  
  
}
function incrementyverseRender() {
  incrementyverseButtons()
  const themeSave = `<link rel="stylesheet" href="${["style/light", "style/dark", "style/space"][game.theme]}.css">`;
  if (get("theme").innerHTML !== themeSave) get("theme").innerHTML = themeSave;
  get("incrementyverseText").textContent=`You have ${beautify(game.incrementy)} incrementy, multiplying Tier 2 by ${beautify(calcIncrementyMult())}x`
  get("incrementyverseText2").textContent=`You are getting ${beautify(getIncrementyRate(1000))} incrementy per second`
  get("maxAllAutoInc").textContent=beautify(calcIncrementyMult().times(2))
  get("iiup1cost").textContent=beautify(EN(100000).pow(game.iups[0].add(1)))
  get("iiup2cost").textContent=beautify(EN(1000).pow(game.iups[1].add(1)))
  get("iiup3cost").textContent=beautify(EN(1000000000).pow(game.iups[2].add(1)))
  get("manifoldAmountInc").textContent=beautify(game.multifolds) + "-" + beautify(game.multifolds)
  get("manifoldAmountInc2").textContent=beautify(game.multifolds)
  let OPord = displayHugeOrd(game.bigBrainOrd)
  let hardyDisplay = "H<sub>" + OPord + "</sub><invisible>l</invisible>(3)"
  if (game.colors == 1) {
    hardyDisplay=colorWrap(hardyDisplay,"#FF0000")
  }
  if (game.colors == 2) {
    hardyDisplay=colorWrap(hardyDisplay,HSL(Date.now()/100))
  }
  get("hardy").innerHTML=hardyDisplay
  OPord = `g<sub>${OPord}</sub> (10)`
  get("incrementyverseSuccAutoAmount").innerHTML=`You have ${OPord} successor autoclickers, clicking the successor button ${OPord} times per second`
  get("incrementyverseLimAutoAmount").innerHTML=`You have ${OPord} maximize autoclickers, clicking the maximize button ${OPord} times per second`
  get("buysuccInc").innerHTML=`Buy Successor Autobuyer for ${OPord} OP`
  get("buylimInc").innerHTML=`Buy Limit Autobuyer for ${OPord} OP`
  get("OPdisplayInc").innerHTML=`You have ${OPord} Ordinal Points<text class="invisible">____</text>`
  get("singText").innerHTML=`Singularity Level: ${beautify(getSingLevel())}`
  get("markupForOPInc1").innerHTML=`+${OPord}`
  get("functionText").textContent=`You have ${beautify(getSingLevel().minus(game.spentENFunctions))} functions.
They are based on your Singularity level.`
  get("getManifoldsInc").innerHTML =
    "Reset incrementy for a manifold.<br>Need: " +
    beautify(EN(3).pow(game.multifolds.add(1))) +
    "x<br>incrementy multiplier";
  get("incrementyverseupgradeincrementy").textContent=beautify(game.incrementy)
  for (let i=1;i<=12;i++) {
    ivup(i,1)
  }
  get("sf101effect").textContent=beautify(getSingLevel().minus(game.spentENFunctions).max(3).div(3).floor())
  get("sf102effect").textContent=calcSF102Effect().lte(1000)?calcSF102Effect().toNumber().toFixed(2):beautify(calcSF102Effect())
  get("ivup3").innerHTML=`Incrementy boosts all incrementy automation by ${calcIvup3Effect().lte(1000)?calcIvup3Effect().toNumber().toFixed(2):beautify(calcIvup3Effect())}x<br>e5e7 Incrementy`
  get("fractalEngineMachines").classList.remove("fractalEngineMachines"+(game.ivups.includes(5)?"One":"Two"))
  get("fractalEngineMachines").classList.add("fractalEngineMachines"+(game.ivups.includes(5)?"Two":"One"))
  get("fractalShiftBoostTab").style.display=(game.ivups.includes(5)?"":"none")
  get("fractalEngineSubTab").style.display=game.ivups.includes(4)?"":"none"
  let orbMult = getTotalOrbMult()
  get("energyOrbText").innerHTML=`<b>You have ${getOrbs()} Energy Orb${(getOrbs()==1?"":"s")} at ${(getOrbEffectMult()*100).toFixed(3)}% effectiveness,<br>providing a ${(orbMult.lte(1000)?orbMult.toNumber().toFixed(2):beautify(orbMult))}x multiplier</b>`
  get("energyOrbText2").innerHTML=`Efficiency: +${((1-getOrbEffectMult())*100*calcOrbSpeedMult()).toFixed(3)}%/sec (${calcOrbSpeedMult().toFixed(4)}x speed)`
  get("sf141effect").textContent=(Math.max(2,game.fractalShift-(game.fractalShift<=5.5?2:0))*0.5).toFixed(2)
  updateOrb()
  get("fractalShifts").innerHTML = `You have ${game.fractalShift} Fractal Shifts`
  get("feups").style.display=(game.ivups.includes(6)?"":"none")
  get("fueptext").style.display=(game.ivups.includes(6)?"":"none")
  get("energyOrbSubTab").style.display=(game.fractalShift>=1?"":"none")
}

function ivup(x,spectate=0) {
  document.getElementById("ivup" + (x)).classList.remove("canbuy")
  document.getElementById("ivup" + (x)).classList.remove("bought")
  document.getElementById("ivup" + (x)).classList.add("locked")
  if (!game.ivups.includes(x)) {
    if (game.incrementy.gte(incrementyverseUpgradeCosts[x-1])) {
        if (spectate==0) {
            game.incrementy = game.incrementy.minus(incrementyverseUpgradeCosts[x-1])

            game.ivups.push(x)
            document.getElementById("ivup" + (x)).classList.remove("canbuy")
            document.getElementById("ivup" + (x)).classList.add("bought")
            document.getElementById("ivup" + (x)).classList.remove("locked")
        } else {
          document.getElementById("ivup" + (x)).classList.add("canbuy")
          document.getElementById("ivup" + (x)).classList.remove("bought")
          document.getElementById("ivup" + (x)).classList.remove("locked")
        }
    }
  } else {
    document.getElementById("ivup" + (x)).classList.remove("canbuy")
    document.getElementById("ivup" + (x)).classList.add("bought")
    document.getElementById("ivup" + (x)).classList.remove("locked")
  }
}


function incrementyverseButtons() {
  get("collapseTabButton").style.display="inline"
  get("secretzero1").style.display="none"
  get("secretzero2").style.display="none"
  get("baselessMilestoneTab").style.display="inline"
  get("singularitySubTab").style.display="inline"
  get("singularityFunction").style.display="inline"
  get("alephPowerTab").style.display="none"
  get("alephUpgradesTab").style.display="none"
  get("enterIncrementyverse").style.display="none"
  get("omegaChallenges").style.display="none"
  get("autoPrestigeSubTab").style.display="none"
  get("boosterTabButton").style.display="none"
  get("infinityTabButton").style.display="none"
  get("collapseTabButton").classList.remove("collapseTabButton")
  get("collapseTabButton").classList.add("tabButton")
  get("collapseTabButton").textContent="Old Mechanics"
  get("collapseTabButton").style.width="180px"
  get("newAutoclickers").style.display="inline"
  get("newAutobuyers").style.display="inline"
  get("newIncrementy").style.display="inline"
  get("OPdisplayInc").style.display="inline"
  get("OPdisplayIncOut").style.display="block"
  get("getRekt20sing").style.display="none"
  get("singTable").style.display="none"
  get("singFuncContent").style.display="block"
  get("singularityFunction").textContent="Singularity Functions"
  get("infinityButton").innerHTML = `Markups no longer exist. You instead get passive pending OP`
  for (let i = 0; i < 6; i++) {
    get("slug" + i).classList.add("slugMile");
    get("slug" + i).classList.remove("notSlugMile");
  }
  for (let i = 0; i < 4; i++) {
    get("base" + i).classList.add("slugMile");
    get("base" + i).classList.remove("notSlugMile");
  }
 get("singMaterial").innerHTML =
    "You have " +
    beautify(Math.max(0,game.darkManifolds - getDMSacrafice())) +
    " Dark Manifolds, " +
    0 +
    " Manifolds, and " +
    beautifyEN(game.alephOmega) +
    " ℵ<sub>ω</sub>";
  get("sacrDM").innerHTML =
    "Upgrade with<br>" +
    beautify(1e6 * (game.sfBought.includes(23)?4:5) ** game.sing.dm) +
    "<br>Dark Manifolds";
  get("sacrNw").innerHTML =
    "Upgrade with<br>" +
    beautifyEN(1e20 * (game.sfBought.includes(21)?30:100) ** game.sing.nw) +
    " ℵ<sub>ω</sub>";
  if (get("Tab7").style.display=="block"&&game.csubTab==5) {
  get("singEffect").innerHTML =
    "Raising the Ordinal Cap to " +
    displayHugeOrd(EN(3).pow(getSingLevel()).times(BHO/3e270))
  }
  get("singFBtext").innerHTML = `You are currently getting ${beautify(getIncrementyRate(1000))} incrementy per second`
  get("blackHoleCircle").r.baseVal.value = 100;
  get("blackHoleCircle").cy.baseVal.value = 110;
  get("blackHole").height.baseVal.value = 220;
  get("minSing").style.display="block"
  get("maxSing").style.display="block"
  get("singRange").style.display="block"
  get("singRange").min=0
  get("singRange").max=1000
  get("singRange").value=1000
  get("SF81").classList.add("trueCenter")
  get("refundPointAmount").innerHTML=`You have ${game.refundPoints} Refund Points<br>You gain them passively`
  get("incrementyverseTabButton").style.display = "inline"
  get("fractalEngineMachines").style.width=document.body.clientWidth*0.75+"px"

  //I think it is better to just implement arbitrary ordinal inputs 
  //Up to 10{10{10}10}10 or something
  //
  // we will use XMLHTTPRequests to read a file nope nvm
  //wtf do we do?
}

function buyIups() {
  
  let x=EN.affordGeometricSeries(game.incrementy,100000,100000,game.iups[0])
  if (game.iups[0].add(x).gte(120)) x=EN(120).minus(game.iups[0]).max(0)
  let c=EN.sumGeometricSeries(x,100000,100000,game.iups[0])
  game.incrementy=game.incrementy.minus(c)
  game.iups[0]=game.iups[0].add(x)
  
  x=EN.affordGeometricSeries(game.incrementy,1000,1000,game.iups[1])
  if (game.iups[1].add(x).gte(200)) x=EN(200).minus(game.iups[1]).max(0)
  c=EN.sumGeometricSeries(x,1000,1000,game.iups[1])
  game.incrementy=game.incrementy.minus(c)
  game.iups[1]=game.iups[1].add(x)
  
  x=EN.affordGeometricSeries(game.incrementy,1000000000,1000000000,game.iups[2])
  if (game.iups[2].add(x).gte(66)) x=EN(66).minus(game.iups[2]).max(0)
  c=EN.sumGeometricSeries(x,1000000000,1000000000,game.iups[2])
  game.incrementy=game.incrementy.minus(c)
  game.iups[2]=game.iups[2].add(x)
}

function buyIupsWithAuto(ms) {
  if (game.incrementy.gte(tenTetrTen)) {
    return;
  }
  incrementyUpgradeLoop[0] = incrementyUpgradeLoop[0].add(EN(0+game.sfBought.includes(93)).times(game.autoIncrementy[0]).times(ms/1000).times(calcAutoIncrementyMult()))
  incrementyUpgradeLoop[1] = incrementyUpgradeLoop[1].add(EN(0+game.sfBought.includes(91)).times(game.autoIncrementy[1]).times(ms/1000).times(calcAutoIncrementyMult())
                .times(game.sfBought.includes(111)?getSingLevel().minus(game.spentENFunctions).times(0.004).add(1).pow(1+game.sfBought.includes(112)):1))
  incrementyUpgradeLoop[2] = incrementyUpgradeLoop[2].add(EN(0+game.sfBought.includes(92)).times(game.autoIncrementy[2]).times(ms/1000).times(calcAutoIncrementyMult()))
  get("autoIncrementy1").innerHTML=`Auto: ${game.sfBought.includes(93)?(game.autoIncrementy[0]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(93)&&game.autoIncrementy[0]==1?beautify(calcAutoIncrementyMult()):0}/s`
  get("autoIncrementy2").innerHTML=`Auto: ${game.sfBought.includes(91)?(game.autoIncrementy[1]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(91)&&game.autoIncrementy[1]==1?beautify(
    calcAutoIncrementyMult().times(game.sfBought.includes(111)?getSingLevel().minus(game.spentENFunctions).times(0.004).add(1).pow(1+game.sfBought.includes(112)):1)
  ):0}/s`
  get("autoIncrementy3").innerHTML=`Auto: ${game.sfBought.includes(92)?(game.autoIncrementy[2]==1?"ON":"OFF"):"LOCKED"}<br><br>${game.sfBought.includes(92)&&game.autoIncrementy[2]==1?beautify(calcAutoIncrementyMult()):0}/s`
  for (let i=0;i<3;i++) {
    if (incrementyUpgradeLoop[i].gte(1)) {
      let bulk = incrementyUpgradeLoop[i].floor().min(EN.affordGeometricSeries(game.incrementy,iupCosts[i],iupCosts[i],game.iups[i]))
      if (game.incrementy.lt("ee16")) game.incrementy=game.incrementy.minus(EN.sumGeometricSeries(bulk,iupCosts[i],iupCosts[i],game.iups[i]))
      game.iups[i]=game.iups[i].add(bulk)
      incrementyUpgradeLoop[i]=EN.mod(incrementyUpgradeLoop[i],1)
    }
  }
    
    //if (DoubleLoop >= 1000 && EN(1000).pow(game.iups[1].add(1)).lt(game.incrementy) && game.sfBought.includes(91) && false) {
     // game.incrementy=game.incrementy.minus(EN(1000).pow(game.iups[1].add(1)))
    //  game.iups[1]=game.iups[1].add(1)
   //   DoubleLoop = DoubleLoop % 1000
  //  }
}


function die() {
  if (inEnterIncrementyverseAnimation == 1) return
  if (!game.bestIncrementy.gte("1e540")) return
  if (game.achievement.length <= 89.5) return
  if (!confirm("Are you sure you want to enter the Incrementyverse? You'll lose all of your factors, boosters, cardinals, challenges, omega challenges, and so on.")) return
  if (!confirm("You also die by entering the Incrementyverse, and your soul will pass through. Are you still sure you want to enter?")) return
  if (!confirm("But you lose everything. You have to be damn sure you want to enter.")) return
  if (!confirm("BUT WAIT, IF YOU DIE IN ORDINAL MARKUP YOU DIE IN MEMES")) return
  alert("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO...")
  inEnterIncrementyverseAnimation=1
  let anim=0
  get("enterIncrementyverseButton2").style.display="block"
  get("enterIncrementyverseButton2").style["z-index"]="2"
  get("enterIncrementyverseButton2").style.margin="0"
  get("enterIncrementyverseButton2").style.cursor="default"
  get("enterIncrementyverseButton2").style.top="50%"
  get("enterIncrementyverseButton2").style.left="50%"
  get("enterIncrementyverseButton2").style.transform="translate(-50%, -50%)"
  get("enterIncrementyverseButton2").style["-ms-transform"]="translate(-50%, -50%)"
  get("enterIncrementyverseButton2").style.position="absolute"
  const death = setInterval(() => {
    
    anim += 1;
    if (anim<=100) {
      get("enterIncrementyverseButton2").style.width = `calc(${(50+anim*0.50)}% + ${anim/10}px)` //document.body.scrollHeight-300
      get("enterIncrementyverseButton2").style.height = `calc(${anim/100} * (100%-300px) + 300px)`
      document.body.style.margin=(2-anim/50) + "em"
    }
    if (anim<=120 && anim >= 20) {
      get("newTextFade").style.opacity = 1-((anim-20)/100)
    }
    if (anim <= 200 && anim >= 100) {
      get("enterIncrementyverseButton2").style.height = `calc(${anim/100 + (anim-100)/100} * (100%-300px) + 300px)`
      get("enterIncrementyverseButton2").style["background-size"]=`${100*2**((anim-100)/20)}%`
    }
    if (anim <= 250 && anim >= 200) {
      get("enterIncrementyverseButton2").style.filter=`brightness(${1+(anim-200)/1000})`
    }
    if (anim == 250) {
      get("whitescreen").style.display="block"
      get("whitescreen").style["z-index"]="3"
      get("enterIncrementyverseButton2").style.background="url('https://cdn.glitch.com/6f7e4eb0-585a-45ff-a8c1-2d13a9a7d93f%2Fwhite.png?v=1597786875194')"
      get("enterIncrementyverseButton2").style["border-color"]="#FFFFFF"
      get("enterIncrementyverseButton2").style["background-size"]="400%"
      get("enterIncrementyverseButton2").style.filter=`brightness(1)`
      get("newTextFade").style.opacity=0
    }  
    if (anim == 270) {
      get("whitescreen").style.display="none"
      get("whitescreen").style["z-index"]="0"
    }
    if (anim == 300) {
      get("newTextFade").style["font-family"]="serif"
      get("enterIncrementyverseButton2").style.color="#000000"
      get("enterIncrementyverseButton2").style["text-shadow"]="none"
    }
    fancyText(300,anim,"HELLO MORTAL")
    fancyText(500,anim,"YOUR SOUL HAS PASSED THROUGH THE PORTAL")
    fancyText(700,anim,"YOU HAVE EXPERIENCED THE TRUE DIVINE")
    fancyText(900,anim,"AT THE EXPENSE OF ALL OF THOSE MECHANICS")
    fancyText(1100,anim,"WELCOME TO THE INCREMENTYVERSE")
    if (anim==1300) {
      incrementyverseActivate()
    }
    if (anim >= 1300) {
      get("enterIncrementyverseButton2").style.opacity=1-(anim-1300)/200
      document.body.style.margin=((anim-1300)/100)+ "em"
    }
    if (anim === 1500) {
      get("enterIncrementyverseButton2").style.display="none"
      inEnterIncrementyverseAnimation=0
      clearInterval(death);
    }
  }, 50);
}

function displayHugeOrd(x) {
  if (!x.isFinite()) return "Ω"
  return "ψ(" + realDisplayHugeOrd(x.div(4).floor()) + ")"
}

function realDisplayHugeOrd(x,layer=0) {
  let trimmer = (game.maxOrdLength.more==0||true?0:game.maxOrdLength.more-6)
  let nly = layer+1
  if (x.gte(ordThreshData["hyperoperational cutoff"])) {
    let k=x.clone()
    if (k.layer == 0) {
      //return `φ<sub>${k.array.length}</sub> (Ω+1)`
      return `way too large`
    } else {
      k.layer--
      //return `φ<sub>${realDisplayHugeOrd(k,nly)}</sub> (Ω+1)`
      return `way too large`
    }
  }
  if (x.gte(ordThreshData["buchholz e(W2+1)"])&&game.buchholz != 0) {
    return "Ω<sub>2</sub>Ω2"
  }
  if (x.gte(ordThreshData["madore e(W2+1)"])&&game.buchholz == 0) {
    return "ε<sub>Ω<sup>2</sup></sub>"
  }
  if (x.gte(3**27)) {
    //return `Ψ<sub>1</sub>(Ψ<sub>2</sub>(Ω)+Ψ<sub>1</sub>(Ψ<sub>2</sub>(Ω)+${realDisplayHugeOrd(x.logBase(3).div(41).floor())}))`
    if (game.buchholz == 0) return `${game.buchholz==2?"ε(Ω2)^(":"ε<sub>Ω2</sub><sup>"}${realDisplayHugeOrd(x.logBase(3).div(27).floor(),nly)}${game.buchholz==2?")":"</sup>"}`
    let ret = x.logBase(3).minus(27)
    if (layer == 0) ret = ret.logBase(3).minus(10/3).floor().times(3).add(0.001) //This 0.001 prevents floating erorr, it;s going to be floored anyways
    return `${layer==0?"Ω<sub>2</sub>Ω+Ψ<sub>1</sub>(Ω<sub>2</sub>Ω+":""}Ψ<sub>1</sub>(Ω<sub>2</sub>Ω+${realDisplayHugeOrd(ret.floor(),nly)})${layer==0?")":""}`
  }
  if (x.gte(3)) {
    return displayOrd(x.toNumber(),3,0,game.maxOrdLength.less-game.maxOrdLength.more).split("ω").join("Ω")
    
  }
  return x.toString()
}

function displayHugeNum(x) {
  return `g<sub>${displayHugeOrd(x)}</sub> (10)`
}

function calcSF102Effect() {
  return game.incrementy.max(10).log10().pow(0.1)
}

function calcIvup3Effect() {
  return game.incrementy.max(1e10).log10().log10().sqrt()
}

function calcAutoIncrementyMult() {
  return EN(game.sfBought.includes(113)?5:1)
    .times(game.sfBought.includes(113)&&game.sfBought.includes(114)?5:1)
    .times(game.ivups.includes(3)?calcIvup3Effect():1)
    .times(game.sfBought.includes(103)?10:1)
    .times(game.sfBought.includes(115)?10:1)
    .times(game.orbEnabled[0]?getTotalOrbMult():1)
}

function newFractalEngine(x) {
  return {
    level: EN(x),
    own: EN(0),
    charge: EN(0)
  }
}



function FGH(a,b) {
  a=EN(a)
  b=EN(b)
  if (a.eq(2)) {
    return EN(2).pow(b).times(b)
  }
  let ret = EN(1) //Switch might be a better option
  if (a.eq(3)) {
    ret.array = [[0, 10000000000],[1, b.toNumber()-1]]
    return ret
  }
  if (a.eq(4)) {
    ret.array = [[0, 10000000000],[1,8],[2, b.toNumber()-1]]
    return ret
  } 
  if (a.gte(5)) {
    ret.array = [[a.toNumber()-4, 8],[a.toNumber()-3, 8],[a.toNumber()-2, b.toNumber()-1]]
    return ret
  } 
  return EN.arrow(10,a.minus(1),b.add(1))
}

function updateFractalEngine(ms) {
  while (game.fractalEngine.length >= 4.5) {
    game.fractalEngine.splice(1, 1);
  }
  let anyAuto = 0
  let highAuto = EN(0)
  for (let ind=game.fractalEngine.length-1;ind>=0;ind--) {
    let mach = game.fractalEngine[ind]
    if (mach.level.lt(highAuto)) {
      mach.own = mach.own.add(game.incrementy)
    }
    let tempown = mach.own
    if (tempown.gte(140)) tempown = tempown.div(140).pow(0.1).times(140)
    mach.charge=mach.charge.add(tempown.times(ms/1000).times(getMachMult(mach.level)))
    let autoReq = EN(10).pow(mach.level)
    if (mach.charge.gte(autoReq)) {
      if (highAuto.eq(0)) highAuto = mach.level
      anyAuto = 1
      let autobought = mach.charge.div(autoReq).floor()
      autobought = autobought.minus(1)
      mach.charge=EN.mod(mach.charge,autoReq)
      if (autobought.div(Math.max(1,ms/1000)).gte(1e9)) {mach.charge = EN(Math.random()).times(EN(10).pow(mach.level)).minus(0.001).max(0).floor()}
      if (!(autobought.eq(0))) {
        game.incrementy = arrowIncrease(game.incrementy,mach.level,autobought);
        // if (!(mach.level.eq(1))) {game.fractalEngine[mach.level-2].own = game.fractalEngine[mach.level-2].own.add(1)}
      }
    }
  }
  if (anyAuto == 1) {
    game.iups[0]=game.incrementy.logBase(100000).floor()
    game.iups[1]=game.incrementy.logBase(1000).floor()
    game.iups[2]=game.incrementy.logBase(1000000000).floor()
  }
  get("fractalEngineMachines").children[1].style.display=(game.fractalEngine.length>=2?"":"none")
  get("fractalEngineMachines").children[2].style.display=(game.fractalEngine.length>=3?"":"none")
  get("fractalEngineMachines").children[3].style.display=(game.fractalEngine.length>=4?"":"none")
  for (let i in game.fractalEngine) {
    let mach = game.fractalEngine[i]
    get("fractalEngineMachines").children[i].children[0].children[0].children[0].children[0].innerHTML=`
    Buy Fractal Engine Level ${beautifyEN(mach.level)}<br>Owned: ${beautifyEN(mach.own)}<br>Cost: ${beautifyEN(FGH(mach.level.add(1),EN(getFractalBase())).times(EN(game.fractalShift).tetr(3)))} Incrementy`
    let tempown = mach.own
    if (tempown.gte(140)) tempown = tempown.div(140).pow(0.1).times(140)
    get("fractalEngineMachines").children[i].children[0].children[0].children[0].children[1].innerHTML=`
    Automation Charge: ${beautifyEN(mach.charge)}/${beautifyEN(EN(10).pow(mach.level))}<br>+${beautify(tempown.times(getMachMult(mach.level)))}/s`
  }
  get("fractalDimensionalBase").innerHTML=`Fractal Dimensional Base: ${getFractalBase()}<br>Incrementy: ${beautifyEN(game.incrementy)}
${(game.fractalEngine.some(mach => {return mach.own.gte(140)})?`<br><b style="color:red;">Your Fractal Engine gets slower after 140 copies (x --> 140(x/140)^(0.1))</b>`:"")}`
  get("fractalShift").children[0].innerHTML=`Perform a Fractal Shift and gain the following:
  <br>+1 Automation Engine
  <br>-1 Fractal Engine Base
  <br>${(getOrbs(game.fractalShift+1)-getOrbs(game.fractalShift)==0?`Next Orb in ${Math.floor((getOrbs()/2+1)**2)-game.fractalShift} FS`:`+1 Energy Orb`)}
  <br>Fractal Engine Costs go up
  <br><br>Requirement: 10{${(game.fractalShift+2)}}1000 Incrementy`
  get("cumFSReward").innerHTML=
    `Cumulative Rewards:<br>
    ${game.fractalShift+1} Fractal Engine Levels<br>
    -${game.fractalShift} Fractal Base<br>
    +${getOrbs()} Energy Orbs<br>
    x${beautify(EN(game.fractalShift).tetr(3))} Engine Cost`
}

function arrowIncrease(num,order,rep) { //Apply (10{order})^rep num
  // oh hello there
  let numthing = num.clone()
  let orderthing = order.clone()
  let orderNum = order.toNumber()
  let numOrd = numthing.array[numthing.array.length-1][0]
  //console.log(numOrd)
  //console.log(orderNum)
  if (numthing.layer >= 0.5||orderNum>9007199254740991) { //Above 10{9007199254740991}10
    orderthing.layer += 1
    return numthing.max(orderthing)
  }
  if (orderNum >= numOrd+1) { //new arrow set
    if (rep.gte(9007199254740991)) {
      return EN.arrow(10,order,rep)
    }
    numthing.array.push([order.toNumber(),rep.toNumber()])
    return numthing.standardize()
  }
  if (orderNum == numOrd) { //change recursion level
    let rec=EN(numthing.array[numthing.array.length-1][1])
    rec=rec.add(rep)
    if (rec.toNumber()>9007199254740991) {
      return EN.arrow(10,EN(order).add(1),rec)
    }
    numthing.array[numthing.array.length-1][1]=rec.toNumber()
    return numthing
  }
  if (orderNum == numOrd-1) { //same arrow set, Needs Work
    let klength = numthing.array.length
    numthing.array[klength-1][1] -= 1
    if (numthing.array[klength-1][1]==0) {
      let lastArrow = numthing.array.pop()
      numthing=numthing.add(rep)
      return EN.arrow(10,lastArrow[0],numthing.standardize())
    }
    numthing=numthing.add(rep)
    numthing.array[klength-1][1] += 1    
    return numthing.standardize()
  }
  return numthing
}

function buyFractalEngine(x) {
  let cost=FGH(game.fractalEngine[x-1].level.add(1),EN(game.fractalBase)).times(EN(game.fractalShift).tetr(3))
  if (game.incrementy.gte(cost)) {
    game.incrementy=game.incrementy.minus(cost)
    game.fractalEngine[x-1].own=game.fractalEngine[x-1].own.add(1)
    if (x==game.fractalEngine.length&&game.fractalShift>=game.fractalEngine[x-1].level.toNumber()) {
      game.fractalEngine.push(newFractalEngine(game.fractalEngine[x-1].level.add(1)))
      while (game.fractalEngine.length >= 4.5) {
        game.fractalEngine.splice(1, 1);
      }
    }
  }
}
function fractalShift() {
  let cost = EN.arrow(10,(game.fractalShift+2),1000)
  if (game.incrementy.gte(cost)) {
    game.incrementy=EN(0)
    game.bigBrainOrd=EN(0)
    game.iups[0] = EN(0)
    game.iups[1] = EN(0)
    game.iups[2] = EN(0)
    game.sing.m=0
    game.multifolds=EN(0)
    game.incrementy = EN(0)
    game.sing.m = EN(0)
    game.spentENFunctions=EN(0)
    game.sfBought=[]  
    game.fractalEngine=[newFractalEngine(1)]
    game.fractalUpgrades[0] = 0
    game.fractalUpgrades[1] = 0
    game.fractalUpgrades[2] = 0
    game.fractalShift += 1
  }
}

function getFractalBase() {
  let x=100000-game.fractalShift
  if (isNaN(x)||typeof x != "number"||x == null) return 100000
  return x
}

function getOrbs(x=game.fractalShift) {
  return Math.floor(Math.max(((x.toNumber()+0.26)**0.5)*2-1,0))
}

function getOrbEffectMult(x=game.orbEffectExp) {
  return 1-Math.exp(-x)
}

function getTotalOrbMult() {
  return EN(2.5+game.fractalUpgrades[2]*0.3).pow(getOrbs()*getOrbEffectMult())
}

function toggleOrb(x) {
  game.orbEnabled[x-1] = 1-game.orbEnabled[x-1]
  game.orbEffectExp = 0
}

function updateOrb() {
  [1,2,3].forEach(num => {
    get("energyOrb"+num).textContent = (game.orbEnabled[num-1]==1?"ON":"OFF")
  })
}

function calcOrbSpeedMult() {
  return (1+0.2*game.fractalUpgrades[1])*(game.sfBought.includes(132)?1.75:1)/game.orbEnabled.reduce(function(total, num, ind) {
    return total * [200,1000,1000][ind]**num;
  }, 1);
}

function getMachMult(x) {
  return EN(1)
    .times(game.orbEnabled[1]&&x.round().mod(2).eq(1)?getTotalOrbMult():1)
    .times(game.orbEnabled[2]&&x.round().mod(2).eq(0)?getTotalOrbMult():1)
    .times(EN(2).pow(game.fractalUpgrades[0]))
    .times(game.sfBought.includes(131)?1+(game.fractalShift-Math.floor(Math.max(((game.fractalShift+0.26)**0.5)*2-1,0)))*1.5:1)
    .times(game.ivups.includes(7)?4:1)
    .times(game.sfBought.includes(141)?(Math.max(2,game.fractalShift-(game.fractalShift<=5.5?2:0))*0.5):1)
}

function fuep(x,spectate=0) {
  get("feup"+x).classList.remove("locked")
  get("feup"+x).classList.remove("boosterButton")
  let cost = [2,3,5,10,20][x-1]+[1,2,3,5,10][x-1]*game.fractalUpgrades[x-1]
  if (x <= 3) cost -= game.fractalUpgrades[3]
  get("feup"+x+"c").textContent=`10{${cost}}10`
  let effInc = game.incrementy.array[game.incrementy.array.length-1]
  if (effInc[0] >= cost || (effInc[0]==cost-1 && effInc[1] >= 9)) {
    if (spectate==0) {game.fractalUpgrades[x-1] += 1}
    get("feup"+x).classList.add("boosterButton")
  } else {
    get("feup"+x).classList.add("locked")
  }
}
