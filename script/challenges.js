"use strict";

function exitChallenge() {
  if (game.qolSM.abu === 1 && game.leastBoost <= 1.5) {
    refundAction();
  }
  if (game.challenge > 0 || game.chal8 === 1) {
    resetEverythingBoostDoes();
  }
}

function completeChallenge() {
  if (game.OP >= (
    game.chal8 === 1 
    ? getChal8Goal(game.chal8Comp) 
    : challengeGoals[game.challenge - 1][game.challengeCompletion[game.challenge - 1]]
  )) {
    if (game.chal8 === 1) {
      if (game.leastBoost <= 15) {
        while (game.OP >= getChal8Goal(game.chal8Comp)) {
          game.chal8Comp += 1;
        }
      } else {
      game.chal8Comp += 1;
      }
    } else if (game.leastBoost <= 15) {
      
        while (
			game.challengeCompletion[game.challenge - 1] <= 2 && 
			game.OP >= challengeGoals[game.challenge - 1][game.challengeCompletion[game.challenge - 1]]
		) {
          game.challengeCompletion[game.challenge - 1] += 1;
        }
      
    } else {
      game.challengeCompletion[game.challenge - 1] += 1;
    }
    if (game.qolSM.abu === 1 && game.leastBoost <= 1.5) {
    refundAction();
    }
    resetEverythingBoostDoes();
  }
}

function enterChallenge(c) {
  if (game.challenge === 0 && (game.challengeCompletion[c - 1] < 2.5||game.upgrades.includes(17)) && game.chal8 === 0) {
	let conf;
	switch (game.bConf.chal) {
		case 1:
			conf = confirm("Are you sure you want to start a challenge?" + 
			" You'll forfeit your current run in favor of the challenge.");
			break;
	
		default:
			conf = true;
			break;
	}
    if (conf) {
      if (game.bConf.chalFB === 1) factorBoost();
      if (game.qolSM.abu === 1 && game.leastBoost <= 1.5) {
        refundAction();
       }
      resetEverythingBoostDoes();
      game.challenge = c;
    }
  }
}

function enterChallenge8() {
  if (game.challenge === 0) {
	let conf;
	switch (game.bConf.chal) {
		case 1:
			conf = confirm("Are you sure you want to start a challenge? You'll " +
			"forfeit your current run in favor of the challenge.");
			break;
	
		default:
			conf = true;
			break;
	}
    if (conf) {
      if (game.bConf.chalFB === 1) factorBoost();
      refundAction();
      resetEverythingBoostDoes();
      game.chal8 = 1;
    }
  }
}