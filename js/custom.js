// JavaScript Document
$(function(){
	//给全局绑定touchstart事件，为了更兼容active替代hover在移动端中的效果	   
	document.body.addEventListener('touchstart',function(){});
	
	//设置整体比例
	/*10px = 0.1rem*/
	var scale = $("body").width()/1920;
	$("html").css("font-size",100 * scale + 'px');
	$(window).resize(function(){
		var scale = $("body").width()/1920;
		$("html").css("font-size",100 * scale + 'px');					  
	});
	
    //顶部--当小于768px时变成底部手机端
    wwHF();
    $(window).resize(function(){wwHF();});
    function wwHF(){
        var $ww = $(window).width();
		if($ww>980){
			$(".Hmenu-btn.Hmenu-web, .H-nav .Hnav-menu, .H-srch .Hsrch-menu, .H-lang .Hlang-menu").removeClass("cur");
			$(".H-nav, .Hnav-sub, .Hsrch-box, .Hlang-box").removeAttr("style");
		}
		if($ww>768){
			$(".F-nav dt").removeClass("cur");
			$(".F-nav dd").removeAttr("style");
		}
    }
	
	/*web*/
	$(".Hmenu-btn.Hmenu-web").bind("click",function(){
		if($(this).hasClass("cur")){
			$(this).removeClass("cur").siblings(".H-nav").slideUp(300);
		}else{
			$(".H-nav").css("height","auto");
			$(".H-nav")[0].scrollHeight>$(window).height()-$(".Header-cl").height()?$(".H-nav").css("height",$(window).height()-$(".Header-cl").height()):$(".H-nav").css("height","auto");
			$(this).addClass("cur").siblings(".H-nav").slideDown(300);
		}
	});

	$(".Hnav-menu i").bind("click",function(){
		if($(window).width()<=980){
			var $this = $(this).parent(".Hnav-menu");
			if($this.siblings(".Hnav-sub").length > 0){
				if($this.hasClass("cur")){
					$this.removeClass("cur").siblings(".Hnav-sub").slideUp(300);
				}else{
					$(".H-nav .Hnav-menu").removeClass("cur").siblings(".Hnav-sub").slideUp(300);
					$this.addClass("cur").siblings(".Hnav-sub").slideDown(300);
				}
				return false;
			}
		}
	});
	
	/*-- 底部 --*/
	$(".F-nav dt i").bind("click",function(){
		if($(window).width()<=768){
			var $this = $(this).parents("dt");
			if($this.hasClass("cur")){
				$this.removeClass("cur").siblings("dd").slideUp(300);
			}else{
				$(".F-nav dt").removeClass("cur").siblings("dd").slideUp(300);
				$this.addClass("cur").siblings("dd").slideDown(300);
			}
		}
	});

	//锚点跳转
 	/*var $target = $(window.location.hash);
	if($target.length > 0){
		$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
		if($target.length){
			var targetOffset = $target.offset().top - $(".header-container").height();
			$('html,body').animate({scrollTop: targetOffset},1000);
		}
	} */

	//锚点 -- 滑动
	/* $('a[href*=#],area[href*=#]').click(function(){
		if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){
			var $target = $(this.hash);
			$target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
			if($target.length){
				var targetOffset = $target.offset().top - $(".header-container").height();
				$('html,body').animate({scrollTop: targetOffset},1000);
				return false;
			}
		}
	}); */
});

/* 滚动效果1 */
function isScrolledIntoView(elem){
	var scrHeight = window.screen.availHeight;
	var boxPos = $(elem).offset().top;	
	var winPos = $(window).scrollTop()+scrHeight-500;
	if(boxPos<winPos){return true}
}
