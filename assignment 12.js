var numSquares = 6;
var i;
var colours=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var goal = document.getElementById("goal");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var rst=document.querySelector("#reset");
var easy=document.getElementById("easy");
var	hard=document.getElementById("hard");
var modeBtns = document.querySelectorAll(".mode");
init();
function init(){
	setupModeBtns();
	setupSquares();
	work();
}

rst.addEventListener("click",function(){
	work();
});

function setupModeBtns(){
	for(var i=0;i<modeBtns.length;i++)
	{
		modeBtns[i].addEventListener("click",function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares=3: numSquares=6;
			work();
		});
	}
}

function setupSquares(){
	for(i=0;i<squares.length;i++)
	{
		squares[i].addEventListener("click",function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor)
			{
				message.textContent = "You guessed it right";
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;
				rst.textContent = "New Game";
			}
			else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again!";
			}
		});
	}
}

function work(){
	colours = randomColorGen(numSquares);
	pickedColor = randomColorPick();
	goal.textContent = pickedColor;
	for(i=0;i<squares.length;i++)
	{
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
	rst.textContent="New Colours"
}

function changeColor(color){
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}
function randomColorPick(){
	var random = Math.floor(Math.random()*colours.length);
	return colours[random];
}
function randomColorGen(num){
	var arr=[];
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g +", " + b + ")";
}
