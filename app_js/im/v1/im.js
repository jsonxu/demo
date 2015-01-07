$(function (){
	var im = {
		tabPager:function(){
			
		},
		showFace:function (){
			var faceBox=$(".face_box");
			$(".face_box span").hover(function() {
				$(this).addClass('face_hover');
			}, function() {
				$(this).removeClass('face_hover');
			});
			$(".post_img .icon_a").click(function(e) {
				e.stopPropagation();
				if(!faceBox.is(":visible")){
					$(this).addClass('icon_a_on');
					faceBox.show();
					$(".panel_font").hide();
					$(".icon_b").removeClass('icon_b_on');
				}
				else{
					$(this).removeClass('icon_a_on');
					faceBox.hide();
				}
			});  
			$(document).bind('click', function(event) {
				if($(event.target).parents(".post_img").length == 0){
					faceBox.hide();
					$(".panel_font").hide();
				}
			});                  
		},//聊天信息输入框--表情交互                                                   
		panelFont:function (){
			var fontBox = $(".panel_font");
			$(".icon_b").click(function(event) {
				event.stopPropagation();
				if(fontBox.is(":visible")){
					fontBox.hide();
					$(this).removeClass('icon_b_on');
				}
				else{
					fontBox.show();
					$(".face_box").hide();
					$(".icon_a").removeClass('icon_a_on');
					$(this).addClass("icon_b_on");
				}
			});
		},//输入框字体编辑交互
		imHeight:function (){
			var talkBox = $(".talk_box");
			var imBox = $(".mod_im_box");
			var tabBox = $(".mod_top_tabs");
			function reHeight(){
				var winH = $(window).height();
				if(winH>655){
					var tabH = $(".mod_top_tabs").height();
					var imH = $(".mod_im_box").height();
					var postH = $(".post_box").height();
					if (!tabBox.is(":hidden")) {
						imBox.height(winH-tabH-40);
					}
					else{
						imBox.height(winH-40);
					}
					//alert(imH);
					talkBox.height(imBox.height()-postH-10);
				}//初始化IM窗口的高度
			}
			reHeight();
			$(window).resize(function(event) {
				setTimeout(reHeight(),10000);
				});
		},//聊天窗口高度计算
		showMsg:function (){
			
		},//发送消息
		main:function (){
			this.showFace();
			this.tabPager();
			this.panelFont();
			this.imHeight();
			this.showMsg();
		}
	};
	im.main();
});
