// JavaScript Document
$(function(){
	$(window).scroll(function(){
	    var top = $(window).scrollTop();   //设置变量top,表示当前滚动条到顶部的值
		if(top>350){                              
		   $("#totop").slideDown(500);	//返回顶部按钮显示
		}
		else{
		    $("#totop").slideUp(500);  //返回顶部按钮隐藏
		}
	})
	

	$("#totop").click(function(){
	    $("html,body").animate({scrollTop:0},500)	
	})
})