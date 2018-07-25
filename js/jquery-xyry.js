$(document).ready(function(){ 

    $(".pic_box").hover(
		        function() {
		           
		            $(this).find('.pic_title').show();
		            $(this).find('.box').css('top','0px');
		        },
		        function() {
		            
		             $(this).find('.pic_title').hide();
		             $(this).find('.box').css('top','20px');
		        }
		    );
});