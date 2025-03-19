//Объявление глобальных переменных
var playerSprite= document.createElement("img");
	playerSprite.src="images/tile-P.png";
var backgroundSprite = document.createElement("img");
	backgroundSprite.src="images/sprites.png";
var directionKey = 37;
var myReq;
var display = document.getElementById("time");
var last;
var now=0,dt;

var scream = new Audio("scream.mp3");
scream.addEventListener("ended", function(){
	music.play();
});
//Для музыки
var music = new Audio("music.mp3");
music.addEventListener("ended", function() {
this.currentTime = 0;
	this.play();
}, false);
music.play();

//Returns Time
function timestamp(){
	return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
}

function onLoad(){
	last= timestamp();
	var gameObject = new Game();
	gameObject.canvasObject.assignMap();
	gameObject.playerObject.level = document.getElementById("level").innerHTML;
	gameObject.playerObject.points = Number(document.getElementById("points").innerHTML);
	gameObject.duration = (4.5 - gameObject.playerObject.level*0.5)*60;
	gameObject.startLoop();

}

function keypress(e){
	e=e|| window.event;
	switch(e.keyCode){
		case 37   : directionKey = 37;
					break;
		case 38   : directionKey=38;
					break;
		case 39   : directionKey=39;
					break;
		case 40   : directionKey=40;
					break;
	}
}


window.addEventListener("load", onLoad);
window.addEventListener("keydown",keypress);
