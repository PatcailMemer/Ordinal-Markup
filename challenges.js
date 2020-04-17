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
    game.manualClicksLeft=1000
    game.base = 10
    game.factors=[]
    game.boostUnlock=1
    game.dynamic=1
    game.challenge=0
    game.incrementy=EN(0)
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
    game.incrementy=EN(0)
  }
}

function enterChallenge8() {
  if (game.challenge == 0) {
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
    game.incrementy=EN(0)
  }
}
