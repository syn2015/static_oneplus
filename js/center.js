$(function(){
	$(window).on("scroll",function(){
		var scrolltop=$(window).scrollTop();
		var istop=true;
		if(scrolltop>0 && scrolltop<400){
			if(istop==true){
				$(".yu-wrap").css({
					top:scrolltop
				})
				$(".yu-img img").css({
					marginTop:-scrolltop
				})
				istop=false;
			}
		}
		if(scrolltop<=0){
			var height=$(window).height();
			console.log(height);
			$(".yu-wrap").css({
					top:0
				})
			$(".yu-img img").css({
					marginTop:-100
				})
		}
	})
	$(".k-wrap-x a").hover(function(){
			var top = $(this).position().top+$(this).offsetParent().position().top;
			var left = $(this).position().left+$(this).outerWidth()/2;
			var index = $(this).index(".k-wrap-x a");
			$(".k-span").css({"top":top, "left":left});
			$(".k-span").addClass("hover");
			console.log(index);
			if(index == 0){
				$(".k-span").css({"backgroundColor":"#e02831"});
			}else if(index == 1){
				$(".k-span").css({"backgroundColor":"#ffc027"});
			}else if(index == 2){
				$(".k-span").css({"backgroundColor":"#37a44f"});
			}
		},function(){
			$(".k-span").removeClass('hover');
		})
})
			
		$(function (){
			var wdWidth = $(window).width();
			var fixedL = wdWidth*0.035;
			var isTop = true ;
			$("#zhou_nav").css({
				position:"fixed",
				top:15,
				left:fixedL,
				width:"93%",
				height:60
			}).slideDown();

			if(wdWidth >= 800){
				$("#menu").css("display","none");
				$(".nav_center").css("display","block");
			}else {
				$("#menu").css("display","inline-block");
				$(".nav_center").css("display","none");
			}

			$(window).resize(function (){
				wdWidth = $(window).width();
				// console.log(wdWidth);
				fixedL = wdWidth*0.035;
				if($(document).scrollTop() < 200){
					$("#zhou_nav").css({
						position:"fixed",
						top:15,
						left:fixedL,
						width:"93%",
						height:60
					})
				}
				if(wdWidth >= 800){
					$("#menu").css("display","none");
					$(".nav_center").css("display","block");
				}else{
					$("#menu").css("display","inline-block");
					$(".nav_center").css("display","none");
				}
			});
			$(window).scroll(function() {
				// console.log($(document).scrollTop());
				if($(document).scrollTop() < 200) {
					if(isTop == false){
						$("#zhou_nav").stop().animate({
							top:15,
							left:fixedL,
							width:"93%",
							height:60
						},400);
						$(".nav_center a").stop().animate({
							height:56
						},400);
						isTop = true;
					}
				}else{
					if(isTop){
						$("#zhou_nav").stop().animate({
							top:0,
							left:0,
							width:"100%",
							height:70
						},400);
						$(".nav_center a").stop().animate({
							height:66
						},400);
						isTop = false;
					}
				}
			})
			$("#sample").on({
				mouseover:function (){
					$(".product").css({
						display:"block"
					})
				},
				mouseout:function (){
					$(".product").css({
						display:"none"
					})
				}
			});
			$("#sample").on("mouseover",function (){
				var nav_w = $("#zhou_nav").outerWidth();
				var sampleL = $(".nav_center:first")[0].offsetLeft  ;
				var topS ;
				if($(document).scrollTop() < 200){
					topS = 60;
				}else {
					topS = 70;
				}
				$(".goods").css({
					top:topS,
					width:nav_w,
					left: - sampleL
				}).stop().slideDown();
				$("#sample").on("mouseout",function (){
					$(".goods").stop().slideUp();
				});
			});
			
		});