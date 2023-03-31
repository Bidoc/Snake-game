window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,80);
}
var x = 200;
px=py= 10;
gs=tc=20;
ax=ay=15;
xv=yv=0;
trail=[];
var tail = 5;
var high = 0;
function game() {
	px+=xv;
    py+=yv;
    if(px<0) {
		px= tc-1;
    }
    if(px>tc-1) {
		px= 0;
    }
    if(py<0) {
		py= tc-1;
    }
    if(py>tc-1) {
		py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==px && trail[i].y==py) {
            tail = 5;
			// this.score = tail;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
	// console.log(tail.toString());
    if(ax==px && ay==py) {
		tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
	document.getElementById("controls_score-label").innerHTML = tail - 5;
	if( tail - 5 > high ){
		high = tail - 5;	
		// x = x - 5;
		// clearInterval(x);
		// setInterval(game,x);
		document.getElementById("highest").innerHTML = "Highest score " +high;
	}
	// if( tall == 5){
	// 	x = 200	;
	// 	clearInterval(x);
	// 	setInterval(game,x);
	// }


}
