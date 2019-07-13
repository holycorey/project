$(function(){
	/*Tab切换*/
	$(function(){
		$(".catenews dt a").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			var index = $(this).index();
			$(".newsbox").eq(index).css("display","block").siblings(".newsbox").css("display","none");
		});
	});

	//jquery 返回顶部
	$(document).on("click", ".bntTop", function () {
        $("html,body").animate({ scrollTop: 0 });
	});
	
	 //为移动端定义图片。指定class修改
	 $(".img-load").each(function () {
        if($(window).width()<768)
        {
            $(this).attr({ src: $(this).data("phone-src")})//移动端图片加载
        }
        else
        {
            $(this).attr({ src: $(this).data("src") })
        }
        
    });

     //顶部导航跟着滑块走
	/*  var $nav = $(".nav");
	 nav($nav);
	 $nav.find("li").hover(function() {
		 var left = $(this).position().left + 40;
		 $nav.find(".nav_icon").stop().animate({left: left}, 400);
	 }, function() {
		 var left = $nav.find(".on").position().left + 40;
		 $nav.find(".nav_icon").stop().animate({left: left}, 300);
	 });    */

	/*点击空白处关闭div*/
	$(".rtct-modal").click(function(event){
		 var _con = $('.rtctModal-contain');  // 设置目标区域
		 if(!_con.is(event.target) && _con.has(event.target).length === 0){
			$('.rtct-modal').fadeOut(300);
		 }
	});

	/*常见问题*/
	$(".faq_tit").click(function(){
		var down_child= $(this).parent('div').children('.faq_con');
		if(down_child.is(":visible")){
			$(this).removeClass('cur')
			down_child.slideUp(450)
		}else{
			$(this).addClass('cur')
			down_child.slideDown(450).end().siblings().removeClass('cur').children('.faq_con').slideUp(450);
		}
	})

	/*常见问题2*/
	/*$(function(){
		$(".faq dl dt").click(function(){
			if($(this).hasClass("cur")){
				$(this).removeClass("cur").siblings("dd").slideUp(200);
			}else{
				$(".faq dl dt").removeClass("cur").siblings("dd").slideUp(200);
				$(this).addClass("cur").siblings("dd").slideDown(200);
			}
		});
	})*/

	/*iframe弹出视频关闭继续播放问题*/
	$(function(){
		$(".ckshow").click(function(){
			$(".videobox").show();
		});

		$(".closev").click(function(){
			$(".videobox").hide();
			$('#iframe').attr('src', $('#iframe').attr('src')); /**强制刷新irame停止视频自动播放**/
		})
	})


	/*判断屏幕高度执行数字滚动效果*/
/* 	$(window).scroll(function(){
		if(isScrolledIntoView(".tmnumbg")){
			if($(".tmnumbg").hasClass("active")) return false;
			$("#num1").attr("data-num","5");
			$("#num2").attr("data-num","12")
			$("#num3").attr("data-num","37")
			$("#num4").attr("data-num","46")
			numCountup();
			$(".tmnumbg").addClass("active");
		}
	});

	function numCountup(){
	  var options = {
	    useEasing: true,
	    useGrouping: true,
	    separator: "",
	    decimal: ".",
	    prefix: "",
	    suffix: ""
	  };
	  var num1 = new countUp("num1", 0, $("#num1").attr("data-num"), 0, 5, options);
	  var num2 = new countUp("num2", 0, $("#num2").attr("data-num"), 0, 5, options);
	  var num3 = new countUp("num3", 0, $("#num3").attr("data-num"), 0, 5, options);
	  var num4 = new countUp("num4", 0, $("#num4").attr("data-num"), 0, 5, options);
	  num1.start();
	  num2.start();
	  num3.start();
	  num4.start();
	}
 */

})







