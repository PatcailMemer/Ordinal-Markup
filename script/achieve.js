const achieveData = [
  {
    unlockReq: () => true,
    achieve: [
      () => game.ord >= 1,
      () => game.ord >= 10 || (game.ord == 9 && game.over >= 1),
      () => game.ord >= game.base**2,
      () => game.ord >= game.base**game.base,
      () => game.ord >= 4e270,
      () => game.ord >= (3**12 * 4) * 1e270,
      () => game.ord >= (3**25 * 4) * 1e270,
      () => game.ord >= BHO,
      () => game.ord > BHO*2,
      () => game.ord >= BHO*342
    ],
    name: [
      "You gotta start somewhere",
      "Maximizable",
      "Markupable",
      "Hyperdimensional",
      "Ordinal Collapsing Functions",
      "Ackermann Ordinal",
      "Double Ackermann Ordinal",
      "The Bachmann Howard Ordinal",
      "To the BHO and Beyond!",
      "Ackermann's BHO"
    ],
    tooltip: [
      "Click the successor Button",
      "Reach the ordinal 10",
      "Reach the ordinal ω^2",
      "Reach the ordinal ω^ω",
      "Reach the ordinal Ψ(Ω)",
      "Reach the ordinal Ψ(Ω^Ω^2)",
      "Reach the ordinal Ψ(Ω^(Ω^2×2))",
      "Reach the ordinal Ψ(Ω^Ω^Ω)=BHO",
      "Exceed the BHO limit",
      "Reach the ordinal Ψ(ε(Ω2)^Ω^2)",
    ]
  },
  {
    unlockReq: () => game.infUnlock==1,
    achieve: [
      () => game.factors[0]>=0.5,
      () => game.factors[1]>=0.5,
      () => game.factors[2]>=0.5,
      () => game.factors[3]>=0.5,
      () => game.factors[4]>=0.5,
      () => game.factors[5]>=0.5,
      () => game.factors[6]>=0.5,
      () => factorMult>=2e6,
      () => factorMult>=2e8,
      () => factorMult>=4e12
    ],
    name: [
      "I've been Multiplied!",
      "100 Ordinal Points is a lot",
      "Illuminati Confirmed!",
      "Left and Right 3 Factors",
      "5 Factor Ordinal Punch",
      "We can't afford 8",
      "Luck Related Achievement",
      "Faster than a potato",
      "Faster than a hundred potatoes",
      "Faster than a square potato",
    ],
    tooltip: [
      "Buy a Factor 1",
      "Buy a Factor 2",
      "Buy a Factor 3",
      "Buy a Factor 4",
      "Buy a Factor 5",
      "Buy a Factor 6",
      "Buy a Factor 7",
      "Get a 2e6x multiplier from Factors",
      "Get a 2e8x multiplier from Factors",
      "Get a 4e12x multiplier from Factors",
    ]
  },
  {
    unlockReq: () => game.boostUnlock==1,
    achieve: [
      () => game.factorBoosts>=1,
      () => game.factorBoosts>=5,
      () => game.factorBoosts>=15,
      () => game.factorBoosts>=25,
      () => game.factorBoosts>=100,
      () => game.factorBoosts>=1e4,
      () => game.factorBoosts>=1e8,
      () => game.factorBoosts>=1e12,
      () => game.factorBoosts>=1e16,
      () => game.factorBoosts>=1e21,
    ],
    name: [
      "Boost!",
      "Booster Pack",
      "Super Boost",
      "Collapsing Boosts",
      "ONE HUNDRED BOOSTS",
      "GAS",
      "GAS GAS",
      "GAS GAS GAS",
      "GAS GAS GAS GAS",
      "Not a fart achievementt",
    ],
    tooltip: [
      "Perform 1 Factor Boost",
      "Perform 5 Factor Boosts",
      "Perform 15 Factor Boosts",
      "Perform 25 Factor Boosts",
      "Perform 100 Factor Boosts",
      "Perform 10000 Factor Boosts",
      "Perform 1e8 Factor Boosts",
      "Perform 1e12 Factor Boosts",
      "Perform 1e16 Factor Boosts",
      "Perform 1e21 Factor Boosts",
    ]
  },
  {
    unlockReq: () => game.upgrades.includes(4),
    achieve: [
      () => game.challengeCompletion[0]>=1,
      () => game.challengeCompletion[1]>=1,
      () => game.challengeCompletion[2]>=2,
      () => game.challengeCompletion[3]>=2,
      () => game.challengeCompletion[4]>=3,
      () => game.challengeCompletion[5]>=3,
      () => getSumOfChallenges() >= 24,
      () => getSumOfChallenges() >= 48,
      () => (inAnyChal() && game.ord >= BHO),
      () => (inChal(3)&&game.ord>=game.base**(game.base**game.base)),
    ],
    name: [
      "Easy",
      "Medium",
      "Hard",
      "Difficult",
      "Challenging",
      "Brutal",
      "The Challenging Day",
      "Two Challenging Days",
      "Collapsing Challenges",
      "Impossible, or is it?",
    ],
    tooltip: [
      "Complete Challenge 1 once",
      "Complete Challenge 2 once",
      "Complete Challenge 3 twice",
      "Complete Challenge 4 twice",
      "Complete Challenge 5 three times",
      "Complete Challenge 6 three times",
      "Complete 24 challenges in total",
      "Complete 48 challenges in total",
      "Reach the BHO in any challenge",
      "Reach ω^(ω^ω) in Challenge 3",
    ]
  },
  {
    unlockReq: () => game.upgrades.includes(12),
    achieve: [
      () => game.manifolds>=1,
      () => game.manifolds>=2,
      () => game.manifolds>=4,
      () => game.manifolds>=7,
      () => game.manifolds>=13,
      () => game.manifolds>=26,
      () => game.manifolds>=52,
      () => game.manifolds>=69,
      () => game.manifolds>=156,
      () => game.manifolds>=398,
    ],
    name: [
      "The first of mani",
      "Two Colors",
      "Four Suits",
      "Man, I Fold Cards",
      "My Suit is better than yours",
      "Red Card!",
      "A Stacked Deck",
      "After all this time, you’re Still Immature!?!?",
      "what is with all of these deck jokes?",
      "(hardcapped)",
    ],
    tooltip: [
      "Have 1 manifold",
      "Have 2 manifolds",
      "Have 4 manifolds",
      "Have 7 manifolds",
      "Have 13 manifolds",
      "Have 26 manifolds",
      "Have 52 manifolds",
      "Have 69 manifolds",
      "Have 156 manifolds",
      "Have 398 manifolds",
    ]
  },
  {
    unlockReq: () => game.collapseUnlock==1,
    achieve: [
      () => game.aups.includes(1),
      () => game.aups.includes(2),
      () => game.aups.includes(3),
      () => game.aups.includes(4),
      () => game.aups.includes(5),
      () => game.aups.includes(6),
      () => game.aups.includes(7),
      () => game.aups.includes(8),
      () => game.aups.includes(9),
      () => game.aups.includes(10)
    ],
    name: [
      "The Singular Cardinal",
      "The Benefits of Codependence",
      "The Deep Dark",
      "Hmm yes, the OP here is now OP",
      "Wait, there’s more than 4 upgrades?",
      "Always has been",
      "The Power of Two",
      "scam + 1",
      "No Ethical Consumption",
      "These Challenges aren’t dimensions",
    ],
    tooltip: [
      "Buy Aleph Upgrade 1",
      "Buy Aleph Upgrade 2",
      "Buy Aleph Upgrade 3",
      "Buy Aleph Upgrade 4",
      "Buy Aleph Upgrade 5",
      "Buy Aleph Upgrade 6",
      "Buy Aleph Upgrade 7",
      "Buy Aleph Upgrade 8",
      "Buy Aleph Upgrade 9",
      "Buy Aleph Upgrade 10"
    ]
  },
  {
    unlockReq: () => game.collapseUnlock==1,
    achieve: [
      () => calcSlugMile() >= 1,
      () => calcSlugMile() >= 2,
      () => calcSlugMile() >= 3,
      () => calcSlugMile() >= 4,
      () => calcSlugMile() >= 5,
      () => calcSlugMile() >= 6,
      () => getBaseless() >= 1,
      () => getBaseless() >= 2,
      () => getBaseless() >= 3,
      () => getBaseless() >= 4
    ],
    name: [
      "As easy as falling over",
      "Not as easy as falling over",
      "Costco sells Challenges now!",
      "The Factor Engine",
      "Won’t need to click 100,000 times",
      "All Your Sluggish Are Belong To Us",
      "Back to basics",
      "Slider goes brrrrrrrrrrrr",
      "I Assure You It’s Quite Based",
      "All Your Baseless Are Belong To Us",
    ],
    tooltip: [
      "Collapse for the first time",
      "Complete 2 Sluggish Milestone",
      "Complete 3 Sluggish Milestone",
      "Complete 4 Sluggish Milestone",
      "Complete 5 Sluggish Milestone",
      "Complete 6 Sluggish Milestone",
      "Complete 1 Baseless Milestone",
      "Complete 2 Baseless Milestone",
      "Complete 3 Baseless Milestone",
      "Complete 4 Baseless Milestone",
    ]
  },
  {
    unlockReq: () => game.leastBoost <= 1.5,
    achieve: [
      () => getSingLevel().toNumber()>=2,
      () => getSingLevel().toNumber()>=16,
      () => getSingLevel().toNumber()>=20,
      () => getSingLevel().toNumber()>=42,
      () => getSingLevel().toNumber()>=69,
      () => getSingLevel().toNumber()>=100,
      () => getSingLevel().toNumber()>=200,
      () => getSingLevel().toNumber()>=404,
      () => getSingLevel().toNumber()>=420,
      () => getSingLevel().toNumber()>=616,
    ],
    name: [
      "A Soulless Singularity",
      "Sweet 16",
      "A Functioning Singularity",
      "The answer to life, black holes, and everything",
      "How Immature?",
      "The Great Centurion",
      "200: OK",
      "404: SINGULARITY NOT FOUND",
      "420 Blaze It",
      "Enter the E",
    ],
    tooltip: [
      "Reach Singularity Level 2",
      "Reach Singularity Level 16",
      "Reach Singularity Level 20",
      "Reach Singularity Level 42",
      "Reach Singularity Level 69",
      "Reach Singularity Level 100",
      "Reach Singularity Level 200",
      "Reach Singularity Level 404",
      "Reach Singularity Level 420",
      "Reach Singularity Level 616",
    ]
  },
  {
    unlockReq: () => game.upgrades.includes(24),
    achieve: [
      () => getOCComp(1)>=1,
      () => getOCComp(2)>=2,
      () => getOCComp(3)>=3,
      () => getOCComp(4)>=Math.PI,
      () => getOCComp(5)>=5,
      () => game.decrementy>=1e100&&game.omegaChallenge==1&&game.challenge2.includes(1)&&game.challenge2.includes(8),
      () => game.decrementy>=1e100&&game.omegaChallenge==1&&game.challenge2.includes(7)&&game.challenge2.includes(8),
      () => getSumOC()>=24,
      () => getOCComp(1)>=12,
      () => getOCComp(6)>=1.1
    ],
    name: [
      "Infinitely Challenging",
      "Double Trouble",
      "Oh Baby a Triple!",
      "How did pi get here?",
      "Cinco de Mayo",
      "Subliminal",
      "Superliminal",
      "The Challenging Eternity",
      "Redundancy",
      "(softcapped)",
    ],
    tooltip: [
      "Complete Omega Challenge 1 once",
      "Complete Omega Challenge 2 twice",
      "Complete Omega Challenge 3 three times",
      "Complete Omega Challenge 4 3.141592 times",
      "Complete Omega Challenge 5 five times",
      "Reach e1e100 decrementy in Omega Challenge 1 of a Challenge 1+8 pair",
      "Reach e1e100 decrementy in Omega Challenge 1 of a Challenge 7+8 pair",
      "Complete 24 Omega Challenges in total",
      "Complete Omega Challenge 1 twelve times",
      "Complete Omega Challenge 6 1.1 times",
    ]
  },
  {
    unlockReq: () => game.incrementyverse==1,
    achieve: [
      () => game.incrementyverse==1,
      () => game.incrementy.gte("ee5"),
      () => game.incrementy.gte("ee10"),
      () => game.incrementy.gte("eee10"),
      () => game.incrementy.gte(tenTetrTen),
      () => false,
      () => false,
      () => false,
      () => false,
      () => false
    ],
    name: [
      "Welcome to the E",
      "E for exponential",
      "Double Exponential!",
      "Triple Exponential!!!",
      "R.I.P. balancing",
      "Way too much",
      "Way too much",
      "Way too much",
      "Way too much",
      "Way too much",
    ],
    tooltip: [
      "Enter the Incrementyverse",
      "Reach e100000 Incrementy",
      "Reach ee10 Incrementy",
      "Reach eee10 Incrementy",
      "Reach 10^^10 Incrementy",
      "Reach Too Many Incrementy",
      "Reach Too Many Incrementy",
      "Reach Too Many Incrementy",
      "Reach Too Many Incrementy",
      "Reach Too Many Incrementy"
    ]
  }
]

function setAchieveText() {
for (let row in achieveData) {
  let rowData = achieveData[row]
  for (let col in rowData.achieve) {
    let elem = get("achievementTable").children[0].children[row].children[col]
    elem.textContent=rowData.name[col]
    elem.attributes.tooltip.value=rowData.tooltip[col]
  }
}
  updateAchieveColor()
}

function checkAchieve() {
  let achieveGain = false
  for (let row in achieveData) {
    let rowData = achieveData[row]
    let numberrow = Number(row)
    if ((!game.achieveRow.includes(numberrow+1))&&(rowData.unlockReq()||(numberrow<=7&&(game.incrementyverse==1)))) {
      game.achieveRow.push(numberrow+1)
      $.notify("New Achievement Row Unlocked: " + ["Ordinal","Factors","Factor Boosts","Challenges","Manifolds","Aleph Upgrades","Milestones","Singularity","Omega Challenges","Incrementyverse"][row],"achieve")
      achieveGain = true
    }
    if (game.achieveRow.includes(numberrow+1)) {
      for (let col in rowData.achieve) {
        let numbercol = Number(col)
        let achieveId=numberrow*10+numbercol+1
        if ((!game.achievement.includes(achieveId))&&(rowData.achieve[col]()||(achieveId<=90&&(game.incrementyverse==1)))) {
          game.achievement.push(achieveId)
          $.notify("New Achievement Unlocked: " + rowData.name[col],"achieve")
          achieveGain = true
        }
      }
    }
  }
  if (achieveGain) {
    updateAchieveColor()
  }
  get("achieveTotal").textContent=game.achievement.length
  get("nextRowAchieve").textContent = 
    [
    "Unlock",
    "Perform a Markup to unlock the next row of achivements",
    "Perform 8 Factor Shifts to unlock the next row of achivements",
    "Unlock Challenges to unlock the next row of achivements",
    "Extend Incrementy to unlock the next row of achivements",
    "Unlock the next layer to unlock the next row of achivements",
    "Unlock the next layer to unlock the next row of achivements",
    "Get all of the sluggish milestones to unlock the next row of achivements",
    "Unlock Omega Challenges to unlock the next row of achivements",
    "Enter the Portal and have 90 achievements to unlock the next row of achievements",
    "Next row of achievements is coming soon!",
    "You unlocked the last set of achievements. Now get them all to beat the game!"
  ][game.achieveRow.length]
}

function updateAchieveColor() {
  for (let row=0;row<10;row++) {
    if (game.achieveRow.includes(row+1)) {
      get("achievementTable").children[0].children[row].style.display=""
      for (let col=0;col<10;col++) {
        get("achievementTable").children[0].children[row].children[col].style.background=(game.achievement.includes(row*10+col+1)?"green":"grey")
      }
    } else {
      get("achievementTable").children[0].children[row].style.display="none"
    }
  }
}