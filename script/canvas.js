var canvas = document.getElementById("tree");
var ctx = canvas.getContext("2d");

window.addEventListener("resize", resizeCanvas);

function resizeCanvas() {
    canvas.width = 0;
    canvas.height = 0;
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
    drawStudyTree();
}

function drawTreeBranch(num1, num2) {
    var start = document.getElementById(num1).getBoundingClientRect();
    var end = document.getElementById(num2).getBoundingClientRect();
    var x1 = start.left + (start.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
    var y1 = start.top + (start.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
    var x2 = end.left + (end.width / 2) + (document.documentElement.scrollLeft || document.body.scrollLeft);
    var y2 = end.top + (end.height / 2) + (document.documentElement.scrollTop || document.body.scrollTop);
    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.strokeStyle = "#fff" 
    if (!game.sfBought.includes(Number(num2.split("F")[1]))) ctx.strokeStyle = "#777"
    if (!game.sfBought.includes(Number(num1.split("F")[1]))) ctx.strokeStyle = "#333"
    if (game.theme==0) {
      ctx.strokeStyle = "#000" 
      if (!game.sfBought.includes(Number(num2.split("F")[1]))) ctx.strokeStyle = "#888"
      if (!game.sfBought.includes(Number(num1.split("F")[1]))) ctx.strokeStyle = "#ccc"
    }
    //if (game.theme == 0) { ctx.strokeStyle = "#000000"; }
    //else if (game.theme == 1) { ctx.strokeStyle = "#ffffff"; }
    ctx.moveTo(Math.floor(x1), Math.floor(y1));
    ctx.lineTo(Math.floor(x2), Math.floor(y2));
    ctx.stroke();
}

function drawStudyTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = 0;
    canvas.height = 0;
    canvas.width = document.body.scrollWidth;
    canvas.height = document.body.scrollHeight;
  let arr // this is definitely necessary yes it is
	for (arr in singfunctions) {
		  singfunctions[arr].prereq.forEach(parent => {
			if (game.sfEver.includes(parent)) {drawTreeBranch("SF" + parent,"SF"+singfunctions[arr].id.toString());}
		}) // prereq is id lmao not the object itself
	} //  i know that's bad but i mean there's no use for the other stuff also it would be a lot harder to test if the prerequisites were met also you forgot to make it update 
} // let me check, in the render loop, it draws the study tree also it doesn't update the stuff when you respec