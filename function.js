function calcDynamic() {
  return (game.dynamic*getManifoldEffect())**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)
}

function getAlephOmega() {
  if (game.assCard[0].points.gte(1)&&game.assCard[1].points.gte(1)&&game.assCard[2].points.gte(1)) {
    game.assCard[0].points = game.assCard[0].points.minus(1)
    game.assCard[1].points = game.assCard[1].points.minus(1)
    game.assCard[2].points = game.assCard[2].points.minus(1)
    game.alephOmega = game.alephOmega.add(1)
  }
}

function getHalfAlephOmega() {
  let bulk=game.assCard[0].points.min(game.assCard[1].points).min(game.assCard[2].points).floor().divide(2)
  game.assCard[0].points = game.assCard[0].points.minus(bulk)
  game.assCard[1].points = game.assCard[1].points.minus(bulk)
  game.assCard[2].points = game.assCard[2].points.minus(bulk)
  game.alephOmega = game.alephOmega.add(bulk)
}

function calcCard() {
  return EN(Math.max(game.factorBoosts-24,2)**calcCardExponent(game.collapseTime)).floor()
}

function calcCardExponent(s) {
  return 0.5+0.8*((5-Math.min(Math.log10(Math.max(1000,s)),5))**1.5)
}

function getManifoldEffect() {
  return (((game.manifolds+1)**0.5)*(game.iups[4-1]==1?3:1)*(game.iups[4]==1?1.26:1))
}

function getDynamicFactorCap() {
  return (10*getManifoldEffect()*((game.darkManifolds+1)**0.1)*(game.aups.includes(6)?game.assCard[1].mult.toNumber():1))**(game.upgrades.includes(13) && game.challenge % 2 == 1?2:1)
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
    return (game.bulkBoost==1?i:1)
  } else {
    return 0
  }
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

function calcTotalOPGain() {
  if (calcOrdPoints(game.ord,game.base,game.over)>=9e257&&calcOrdPoints(game.ord,game.base,game.over)<=1.1e258) {
    return 1e258
  } else {
  return (calcOrdPoints(game.ord,game.base,game.over)*(calcOrdPoints(game.ord,game.base,game.over) >= 10**265?1:((game.upgrades.includes(5)?5:1)*(game.upgrades.includes(15) && game.base<6?666666:1)*(game.challenge==7?Math.max(game.challengeCompletion[5],1):1)*(game.chal8==1?Math.max(game.challengeCompletion[6],1):1)*game.assCard[2].mult)))
  }
}

function timeSince(x) {
  return (Date.now()-x)/1000
}

function calcSlugMile() {
  let k=0
  while (game.leastBoost <= slugMile[k]) {
    k++
  }
  return k
}

function getDecrementyRate(x) {
  return 0.000666*x/50*(calcOrdPoints(game.ord,game.base,game.over)+1)**0.2/(game.iups[8]==1?((Math.log10(10+game.incrementy.toNumber())**(1.05**game.iups[0]))*1.2**game.iups[2]*1.2):1)*(2**game.dups[1])**(calcOrdPoints(game.ord,game.base,game.over)<1e30?-1:1)
}

function getIncrementyRate(x) {
  return EN(game.ord/(10**270)*x/1000*2**game.iups[1]*(game.iups[7]==1?getDynamicFactorCap():1)).times(game.aups.includes(5)?game.assCard[2].mult:1)
}

function changeOfflineProg() {
  game.offlineProg = 1-game.offlineProg
  save()
}
