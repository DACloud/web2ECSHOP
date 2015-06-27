// 头部广告样式
		$("#adv .close").click(function(){
			$("#adv").slideUp();	//向上消除
		})
// 搜索栏input内容效果(未完成)
 		// var _value=$("#head .search input.sea").val();
 		// $("#head .search input.sea").focus(function{
 		// 	$("#head .search input.sea").val()="";
 		// })
//  导航栏滑动特效
		$(".nav ul li").not(".allGoods,.last").hover(function(){
			var _left=$(this).position().left;
			var _width=$(this).width();
			$(".nav ul li.last").css("width",_width).stop().animate({left:_left},300);
			},function(){
				$(".nav ul li.last").stop().animate({left:"190px",width:"72px"},400);
				// 之前我用的是.css("width","190px")出现了，每次hover到li上就从头滑动的问题，
				// 这是因为从一个li到另一个li之间会判定鼠标移开。
				// 因此要使用animate，前面还要加上stop().原因是什么，未查明
			})
//  吸顶盒特效
	$(window).scroll(function(){
    var topHeight=$(".top").height();
	var _scroll=$(document).scrollTop();
	document.title=_scroll+"--"+topHeight;
	if(_scroll>topHeight){
		$(".nav").addClass("fix");
	}
	else{
		$(".nav").removeClass("fix");
	}
	})
	// 问题：唯一的缺点是需要为了效果要在adv和head外面套上一层div
	
