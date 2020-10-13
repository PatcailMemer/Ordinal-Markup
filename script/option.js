/*
changeOffline
changeInt
changeOrdLengthLess
changeOrdLengthMore
changeOrdNotation
changeTheme
changeMusic
changeColor
changeHotKeys
changeThicc
*/

function updateOptions() {
  get("changeOffline").textContent =
    "Offline Progress: " + (game.offlineProg == 1 ? "ON" : "OFF");
  get("changeInt").textContent = "Millisecond Interval: " + game.msint + "ms";
  get("changeOrdLengthLess").innerHTML =
    "Maximum Ordinal Length below " +
    displayOrd(10 ** 270 * 4) +
    ": " +
    game.maxOrdLength.less;
  get("changeOrdLengthMore").innerHTML =
    "Maximum Ordinal Length above " +
    displayOrd(10 ** 270 * 4) +
    ": " +
    game.maxOrdLength.more;
  get("changeOrdNotation").textContent =
    "Current Ordinal Notation: " +
    ["Madore's", "Buchholz's", "Convenient"][game.buchholz];
  get("changeTheme").textContent =
    "Current Theme: " +
    ["Light", "Dark", "Space (https://wallpaperplay.com/page-terms)"][
      game.theme
    ];
  get("changeMusic").innerHTML = "Music: " + musicName[game.music];
  get("changeColor").textContent =
    "Colors: " + (game.colors === 1 ? "ON (high performance cost)" : (game.colors === 2 ? "Flashing" : "OFF"));
  get("changeHotKeys").textContent =
    "Hotkeys: " + (game.hotkeysOn == 1 ? "ON" : "OFF");
  get("changeThicc").textContent="T H I C C Buttons: " + (game.thicc==1?"ON":"OFF")
  
} 