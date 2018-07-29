$(document).ready(function(){ 
    //滚动图片
	var timer = setInterval(scrollLeft, 5000);
	var child_num = $("#main .content .photo_list").children().length;
	var wid = child_num * 179;
	var group_num = parseInt((child_num - 1) / 4 + 1);
	var group = 0;
	
	$("#main .content .photo_list").css("width", wid);

	function scrollLeft() {
		group = (group + 1) % group_num;
		var $left = -group * 179 * 4;
		$("#main .content .photo_list").animate({left : $left}, 1000);
	}

	function scrollRight() {
		group = (group + group_num - 1) % group_num;
		var $left = -group * 179 * 4;
		$("#main .content .photo_list").animate({left : $left}, 1000);
	}

	
	$("#main .content .photo_list").mouseover(function() {
		clearInterval(timer);
	});

	$("#main .content .photo_list").mouseout(function() {
		timer = setInterval(scrollLeft, 5000);
	});
	
	$(".left_icon").click(function() {
		clearInterval(timer);
		scrollRight();
		timer = setInterval(scrollLeft, 5000);
	});

	$(".right_icon").click(function() {
		clearInterval(timer);
		scrollLeft();
		timer = setInterval(scrollLeft, 5000);
	});
	
});