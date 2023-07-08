"use strict";

const keybinds = {
    i: () => if(game.incrementyverse < 1) infinity(1),
    m: () => if(game.incrementyverse < 1) maxInfStuff(),
    s: () => if(game.incrementyverse < 1) factorShift(1),
    b: () => {
		if (game.boostUnlock === 1 && game.challenge === 0 && game.incrementyverse < 1) factorBoost(1);
	},
    r: () => {
		if (game.boostUnlock === 1 && game.incrementyverse < 1) refund();
	},
    c: () => {
		if (game.collapseUnlock === 1 && game.incrementyverse < 1) collapse(1);
	}
};

window.onkeypress = _ => {
  const k = _.key.toLowerCase();
  if (keybinds[k] && game.hotkeysOn === 1) keybinds[k]();
};
