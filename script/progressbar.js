

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
          ((game.upgrades.includes(2) || game.leastBoost <= 1.5) && (game.autoOn.max==1) &&
          ((game.upgrades.includes(3)&&game.autoOn.inf==1) || game.leastBoost <= 1e10)
            ? time(
                game.factorBoosts < 24
                  ? Math.floor(
                      (V(game.factorBoosts + getFactorBulk() + 3) - game.OP) /
                        x /
                        1e270
                    )
                  : postBHOproj(x)
              )
            : (game.factorBoosts <= 24?Math.floor(
                (V(game.factorBoosts + getFactorBulk() + 3) - game.OP) /
                  1 /
                  1e270
              ):postBHOproj(1)) + " click cycles");
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

function challengeProject() {
  let percent = 0
  if (game.chal9==1||(game.challenge>0&&game.challengeCompletion[game.challenge-1]>=3)) {
    percent = 100
    get("chalProg").style.width="100%"
    get("chalProg").textContent="100.00%"
    get("nextChalBulkTime").textContent="There are no more goals to be completed in this challenge"
  } else if (game.challenge == 2 && game.challengeCompletion[1] != 0) {
    percent = Math.min(1,game.OP/challengeGoals[1][game.challengeCompletion[1]])*100
    let autoOn = (game.upgrades.includes(2) || game.leastBoost <= 1.5) && (game.autoOn.max==1) && ((game.upgrades.includes(3)&&game.autoOn.inf==1) || game.leastBoost <= 1e10)
    get("chalProg").style.width=percent + "%"
    get("chalProg").textContent=percent.toFixed(2) + "%"
    get("nextChalBulkTime").textContent=percent==100?"Goal reached!":"The next challenge completion will take " + time(((challengeGoals[1][game.challengeCompletion[1]]-game.OP)/(10**270))/buptotalMute/(0+autoOn)) + " assuming your Tier 2 speed stays constant"
  } else if (game.chal8 == 1) {
    let effectiveOP = Math.max(game.OP,calcTotalOPGain())
    percent = Math.min(1,effectiveOP/getChal8Goal(game.chal8Comp))*100
    get("chalProg").style.width=percent + "%"
    get("chalProg").textContent=percent.toFixed(2) + "%"
    get("nextChalBulkTime").textContent=percent==100?"Goal reached!":"The next challenge completion will take " + time((getChal8Goal(game.chal8Comp)-effectiveOP)/(calcOPPS())) + " if you rely on passive OP gain only"
  } else {
    let ord = game.ord
    let rate = totalMult*Math.min(game.succAuto,game.limAuto*game.base)*(game.aups.includes(2)?Math.min(Math.sqrt(Math.max(game.limAuto,1)),game.base*Math.sqrt(Math.max(game.succAuto,1))):1)
    let OPmult = calcOPonInfMult()
    let goal = challengeGoals[game.challenge-1][game.challengeCompletion[game.challenge-1]]
    goal = (goal - (game.challenge==6||game.challenge==7?0:game.OP)) / OPmult
    let ordGoal = OPtoOrd(goal,game.base)
    percent = Math.min(1,ord / ordGoal)*100
    get("chalProg").style.width=percent + "%"
    get("chalProg").textContent=percent.toFixed(2) + "%"
    get("nextChalBulkTime").textContent=percent==100?"Goal reached!":"The next challenge completion will take " + time((ordGoal-ord)/(rate)) + " assuming your Tier 1 speed stays constant"
    

  }
}