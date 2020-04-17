const keybinds = {
    i: () => infinity(1),
    m: () => maxInfStuff(),
    s: () => factorShift(1),
    b: () => game.boostUnlock==1 && game.challenge==0 ? factorBoost(1) : 0,
    r: () => game.boostUnlock==1 ? refund() : 0,
    c: () => game.collapseUnlock==1 ? collapse(1) : 0,
}
// declaring it once is probably faster
window.onkeypress = _ => {
  keybinds[_.key] ? keybinds[_.key]() : 0
}
