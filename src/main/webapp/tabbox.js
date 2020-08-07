$(function(){	
	$(".tab-box ul li").click(function(){
		$(".tab-box ul li.selected").removeClass("selected");
		$(this).addClass("selected");
	});
});