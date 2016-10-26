document.getElementById("button1").addEventListener("click", function(){
	document.getElementById("box").style.height = "250px";
	document.getElementById("box").style.width = "250px";
});

document.getElementById("button2").addEventListener("click", function(){
	document.getElementById("box").style.backgroundColor = "blue";
});

document.getElementById("button3").addEventListener("click", function(){
	document.getElementById("box").style.opacity = "0.5";
});

document.getElementById("button4").addEventListener("click", function(){
	document.getElementById("box").style.height = "150px";
	document.getElementById("box").style.width = "150px";
	document.getElementById("box").style.backgroundColor = "orange";
	document.getElementById("box").style.opacity = "1.0";
});

document.getElementById("button5").addEventListener("mouseover", function(){
	document.getElementById("button5").style.right = (Math.random()*300)+"px";
	document.getElementById("button5").style.left = (Math.random()*300)+"px";
	document.getElementById("button5").style.top = (Math.random()*300)+"px";
	document.getElementById("button5").style.bottom = (Math.random()*300)+"px";
});
