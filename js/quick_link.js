$(document).ready(function(){

	var child_num = $("#footer .links .links_box .link_list ul").children().length;
	var wid = 0;
	var offset = new Array();
	offset[0] = 0;
	var index = 0;
	for (var i = 1; i <= child_num; i++) {
		wid = wid + 10 + $("#footer .links .links_box .link_list ul li:nth-child(" + i + ")").width();
		offset[i] = wid;
		//alert("length: " + offset[i]);
	}
	wid++;
	$("#footer .links .links_box .link_list ul").css("width", wid);

	function scrollLeft() {		
		if(wid - offset[index] > 840) {
			index = (index + 1) % child_num;
			$("#footer .links .links_box .link_list ul").animate({left : -offset[index]}, 1000);
		}
	}

	function scrollRight() {
		
		if(index != 0) {
			index = index - 1;
			$("#footer .links .links_box .link_list ul").animate({left : -offset[index]}, 1000);
		}
	}

	$(".left_icon").click(function() {
		scrollRight();
	});

	$(".right_icon").click(function() {
		scrollLeft();
	});
	
});