
var index2 = 0;
var timer2 = setInterval("changeImage2()", 5000);

function changeImage2() {
	index2 = (index2 + 1) % 2;
	setSlideBarColor2(index2);
	displayImage2(index2);
}

function setSlideBarColor2(index2) {
	for (var i = 1; i <= 2; i++) {
		document.getElementById("slide_bar" + i).style.backgroundColor = (i == index2 + 1) ? "#ae0c2a" : "#b4b4b4";
	}
}
function displayImage2(index2) {
	var end = -index2 * 176;
	$("#journal_list").animate({left : end}, 800);
}

function slideBarMouseOver2(num) {
	clearInterval(timer2);
	index2 = num - 1;
	setSlideBarColor2(index2);
	displayImage2(index2);
}

function slideBarMouseOut2(num) {
	timer2 = setInterval("changeImage2()", 5000);
}