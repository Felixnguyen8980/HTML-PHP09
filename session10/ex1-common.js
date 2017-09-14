document.getElementById('content').style.width="200px"
document.getElementById('content').style.height="200px"
document.getElementById("content").style.border="2px solid black" ;
document.getElementById("img-people").style.width="300px" ;
var x=document.getElementsByClassName("people");
for(var i=0;i<x.length;i++){
	x[i].style.width="200px";
}
function boxchange(){
	var x = document.getElementById("mySelect").value;
	document.getElementById("gender").innerHTML = x;
}
function borderchange(){
	var x = document.getElementById("color-selector").value;
	document.getElementById("content").style.border="2px solid " +x;
}


function Rona1(){
	document.getElementById("img-people").src="people-01.jpg"
}
function Rona2(){
	document.getElementById("img-people").src="people-02.jpg"
}
function Rona3(){
	document.getElementById("img-people").src="people-03.jpg"
}
