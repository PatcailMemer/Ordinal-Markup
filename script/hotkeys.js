"use strict";

const keybinds = {
    i: () => infinity(1),
    m: () => maxInfStuff(),
    s: () => factorShift(1),
    b: () => {
		if (game.boostUnlock === 1 && game.challenge === 0) factorBoost(1);
	},
    r: () => {
		if (game.boostUnlock === 1) refund();
	},
    c: () => {
		if (game.collapseUnlock === 1) collapse(1);
	},
};

// Declaring it once is probably faster
window.onkeypress = _ => {
  const k = _.key.toLowerCase();
  if (keybinds[k] && game.hotkeysOn === 1) keybinds[k]();
};
