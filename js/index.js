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
// 问题：唯一的缺点是需要为了效果要在adv和head外面套上一层div
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
  });

// 轮播图特效
	// 左右按钮移上显示效果
	$("#view .main .flash").hover(function() {
		$("#view .main .flash a").show()
	}, function() {
		$("#view .main .flash a").hide()
	});
	// 动态效果
	var _index=0;
	var _preindex=0;
	// control控制代码
	$("#view .main .flash .control span").click(function() {
		// clearInterval(clearTime);
		_index=$(this).index();
		scrollPlay();
	});
	// 左右切换控制效果
		// 向右切换
	$("#view .main .flash .prev").click(function(){
		// clearInterval(clearTime);
		_index--;
		scrollPlay();
	});
		// 向右切换
	$("#view .main .flash .next").click(function(){
		// clearInterval(clearTime);
		_index++;
		scrollPlay();
	});
	// $("#view .flash .next,#view .flash .prev,#view .flash .control").mouseout(function() {
	// 	autoPlay();
	// });
// 思路:先按最笨的办法做，然后将函数整合成一个
	function scrollPlay(){
		$("#view .main .flash .control span").eq(_index).addClass('hover').siblings().removeClass('hover');
		if (_index>5) {
			_index=0;
			_preindex=5;
		$("#view .main .flash .control span").eq(_index).addClass('hover').siblings().removeClass('hover');
		$("#view .main .flash .scroll img").eq(_index).css("left","820px").animate({left:"0"}, 300);
		$("#view .main .flash .scroll img").eq(_preindex).animate({left:"-820px"},300);
	}
		else if (_index<0) {
			_index=5;
			_preindex=0;
			$("#view .main .flash .control span").eq(_index).addClass('hover').siblings().removeClass('hover');
			$("#view .main .flash .scroll img").eq(_index).css("left","-820px").animate({left:"0"}, 300);
			$("#view .main .flash .scroll img").eq(_preindex).animate({left:"820px"},300);
		}
		else if(_index>_preindex){
		$("#view .main .flash .scroll img").eq(_preindex).animate({left:"-820px"}, 300);
		$("#view .main .flash .scroll img").eq(_index).css("left","820px").animate({left:"0"}, 300);
		}
		else if(_preindex>_index){
			$("#view .main .flash .scroll img").eq(_preindex).animate({left:"820px"}, 300);
			$("#view .main .flash .scroll img").eq(_index).css("left","-820px").animate({left:"0"}, 300);
		};
		_preindex=_index;
	};
	// function autoPlay(){
	// 	clearTime = setInterval(function(){
	// 		_index++;
	// 		scrollPlay();
	// 	},5000);
	// };
