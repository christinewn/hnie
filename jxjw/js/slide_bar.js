var index1 = 0;
var timer1 = setInterval("changeImage1()", 5000);

function alertMessage() {
	alert("Here!"+index1);
}

function changeImage1() { 
	index1 = (index1 + 1) % 3;  
	setSlideBarColor1(index1);
	displayImage1(index1);
}

function setSlideBarColor1(index1) {
	for (var i = 1; i <= 3; i++) {    //i=4不执行此循环
		document.getElementById("slide_bar" + i).style.backgroundColor = (i == index1 + 1) ? "#ae0c2a" : "#b4b4b4";
	}
}

function displayImage1(index1) {
	var p1 = $("#pic_box" + (index1 + 1));
	p1.animate({left:'0px',opacity:'1'},700);
	
	var p2 = $("#pic_box" + ((index1 + 1) % 3 + 1));
	p2.animate({left:'1300px',opacity:'0'},700);


	var p3 = $("#pic_box" + ((index1 + 2) % 3 + 1));
	p3.animate({left:'-1300px',opacity:'0'},700);		
}

function slideBarMouseOver1(num) {
	clearInterval(timer1);
	index1 = num - 1;
	setSlideBarColor1(index1);
	displayImage1(index1);
}

function slideBarMouseOut1(num) {
	timer1 = setInterval("changeImage1()", 5000);
}

