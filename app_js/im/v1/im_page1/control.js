/**
 * 公共埋点
 */
(function($){
	/**
	 * 初始化公共埋点
	 */
	function im_initPubPoint(){
		
	};
	
	/**
	 * 显示公共埋点最近联系人
	 */
	function im_showPubHistory(){
		
	};
	
})(jQuery);

/**
 * 普通埋点
 */
(function($){
	/**
	 * 初始化会话框(打开整个页面)
	 */
	function im_initChatBox(){
		$("body").prepend('<div class="mod_top_tabs"></div>');//初始化头部框架
		$(".mod_top_tabs").after('<div class="mod_im_box" style="display:;"><div class="bar_box"></div><div class="cont_box"><div class="talk_box"></div><div class="post_box post_box_big"></div></div></div>');
	};
	
	/**
	 * 显示普通埋点最近联系人（最上面的tab）
	 */
	function im_showNonHistory(){
		var topTabCont = [];
		topTabCont.push('<div class="con"><div class="tab_box"><ul class="clearfix">');
		topTabCont.push('<li class="item clearfix on"><span class="bg1"></span><span class="bg2"></span><span class="s1"><img src="../../../app_img/im/v1/temp/face1.png" /><i></i></span><span class="s2">韩都衣舍旗舰店</span><span class="s3">15</span><a href="javascript:;" class="close">关闭</a></li>');
		topTabCont.push('<li class="item clearfix"><span class="bg1"></span><span class="bg2"></span><span class="s1"><img src="../../../app_img/im/v1/temp/face1.png" /><i></i></span><span class="s2">韩都衣舍旗舰店</span><span class="s3">15</span><a href="javascript:;" class="close">关闭</a></li>');
		topTabCont.push('</ul></div><div class="pager"><a class="last lasted" href="javascript:;">a</a><a class="next" href="javascript:;">b</a></div></div><span class="bottom_line1"></span><span class="bottom_line2"></span>');
		$(".mod_top_tabs").prepend(topTabCont.join(''));//初始化头部
	};
	/**
	 * 删除最近联系人
	 */
	function im_deleteHistory(){
		var last = $(".pager .last");
		var next = $(".pager .next");
		var mObj = $(".tab_box ul");
		var lis = $(".tab_box .item");
		var v = 5;
		var w = 186 * v;
		var count = Math.ceil(lis.length / v);
		var page = 0;
		/*切换*/
		lis.unbind("click").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
			$(this).find('.s3').remove();
		})
		/*移动*/
		last.unbind("click").click(function(){
			if(page > 0){
				page--;
				move();
			}
		})
		next.unbind("click").click(function(){
			if(page < count -1 ){
				page++;
				move();
			}
		})
		function move(){
			mObj.animate({"left":-w * page});
			(page == 0) ? last.addClass("lasted") : last.removeClass("lasted");
			(page == count-1) ? next.addClass("nexted") : next.removeClass("nexted");
		}
		function init(){
			if($(".tab_box .item").length <= v ){
				last.hide();
				next.hide();
			}
			else{
				last.show();
				next.show();
			}
			if($(".tab_box .item").length == 0 ){
				$(".mod_top_tabs").hide();
			}
			if($(".tab_box .item").length <= 5){
				mObj.animate({"left":0});
			}
		}
		move();
		init();
		/*删除*/
		lis.find(".close").on("click",function(){
			if($(this).parent(".item").next().length >0){//如果当前TAB后面有TAB就优先显示下一个TAB
				$(this).parent(".item").next().addClass('on');					
			}
			else{//如果当前TAB后面没有TAB就优先显示前一个TAB
				$(this).parent(".item").prev().addClass('on');
			}//删除聊天TAB后，判断显示下次一个TAB
			$(this).parent(".item").remove();
			init();
		})
	};
	/**
	 * 显示店铺信息
	 */
	function im_showMerchantDSR(){
		var shopCont=[];
		shopCont.push('<div class="buyer_info">');
		shopCont.push('<div class="user_img">');
		shopCont.push('<img src="../../../app_img/im/v1/temp/face2.jpg" alt="商家昵称"/>');
		shopCont.push('<i class="icon_online" title="在线"></i>');
		shopCont.push('</div>');
		shopCont.push('<p class="shop_name"><a href="">飞利浦旗舰店</a></p><p class="buyer_name">售前咨询：howLoveMe</p><p class="more_link"><a href="">更多品牌精选</a></p>');
		shopCont.push('</div>');
		$(".mod_im_box .bar_box").append(shopCont.join(""));
	};
	/**
	 * 商品详情页-----显示商品详情
	 */
	function im_showProductInfo(){
		var proCont=[];
		proCont.push('<div class="buy_pro">');
		proCont.push('<h3>咨询的商品</h3>');
		proCont.push('<p class="pro_img"><a href=""><img src="../../../app_img/im/v1/temp/pro.jpg" alt="产品名称"/></a></p>');
		proCont.push('<p class="price"><span>&yen;2266</span><del>&yen;6565</del></p>');
		proCont.push('<p class="pro_name"><a href="">[包邮]日本进口曲奇饼日本进口曲奇饼日本进口曲奇饼日本进口曲奇饼</a></p>');
		proCont.push('<p class="buy_btn"><a href="">立即购买</a></p>');
		proCont.push('</div>');
		proCont.push('<div class="other_info"><span>运费</span><i></i><span>满100元免运费</span></div>');
		$(".mod_im_box .bar_box").append(proCont.join(""));
	};
	/**
	 * 订单详情页，订单列表页-----显示订单详情
	 */
	function im_showOrderInfo(){
		
	};
	
	/**
	 * 查询左侧商品信息
	 */
	function im_queryProductInfo(){
		
	};
	
	/**
	 * 初始化富文本编辑框
	 */
	function im_initRichEditor(){
		var editorCon = [];
		editorCon.push('<div class="post_img"><ul><li><a href="javascript:void(0);" class="icon_a" title="表情">表情</a></li><li><a href="javascript:void(0);" class="icon_b" title="编辑文字">文字</a><div class="panel_font"><select class="font_size"><option value="">小</option><option value="">中</option><option value="">正常</option><option value="">大</option><option value="">特大</option></select><select class="font_family"><option value="">宋体</option><option value="">黑体</option><option value="">微软雅黑</option><option value="">Tahoma</option><option value="">Arial</option></select><input type="button" class="font-btn" value="颜色" id="J_editorSelectColor" /><input type="button" class="font-btn" value="B" style="font-weight:bold" /><input type="button" class="font-btn" value="I" style="font-style:italic" /><input type="button" class="font-btn" value="U" style="text-decoration:underline" /></div></li><li><a href="javascript:void(0);" class="icon_c" title="上传图片">图片</a></li><li><a href="javascript:void(0);" class="icon_d" title="上传文件">文件</a></li><li><a href="javascript:void(0);" class="icon_e" title="提示音设置">提示音</a></li></ul><div class="face_box"><span><img src="../../../app_img/im/v1/em/1.gif" title="OK"></span><span><img src="../../../app_img/im/v1/em/2.gif" title="爱心"></span><span><img src="../../../app_img/im/v1/em/3.gif" title="鄙视"></span><span><img src="../../../app_img/im/v1/em/4.gif" title="便便"></span><span><img src="../../../app_img/im/v1/em/5.gif" title="大哭"></span><span><img src="../../../app_img/im/v1/em/6.gif" title="得意"></span><span><img src="../../../app_img/im/v1/em/7.gif" title="感谢"></span><span><img src="../../../app_img/im/v1/em/8.gif" title="多谢"></span><span><img src="../../../app_img/im/v1/em/9.gif" title="发怒"></span><span><img src="../../../app_img/im/v1/em/10.gif" title="尴尬"></span><span><img src="../../../app_img/im/v1/em/11.gif" title="惊喜"></span><span><img src="../../../app_img/im/v1/em/12.gif" title="惊讶"></span><span><img src="../../../app_img/im/v1/em/13.gif" title="开心"></span><span><img src="../../../app_img/im/v1/em/14.gif" title="困"></span><span><img src="../../../app_img/im/v1/em/15.gif" title="流汗"></span><span><img src="../../../app_img/im/v1/em/16.gif" title="流泪"></span><span><img src="../../../app_img/im/v1/em/17.gif" title="难过"></span><span><img src="../../../app_img/im/v1/em/18.gif" title="亲亲"></span><span><img src="../../../app_img/im/v1/em/19.gif" title="色"></span><span><img src="../../../app_img/im/v1/em/20.gif" title="生病"></span><span><img src="../../../app_img/im/v1/em/21.gif" title="胜利"></span><span><img src="../../../app_img/im/v1/em/22.gif" title="衰"></span><span><img src="../../../app_img/im/v1/em/23.gif" title="偷笑"></span><span><img src="../../../app_img/im/v1/em/24.gif" title="吐"></span><span><img src="../../../app_img/im/v1/em/25.gif" title="微笑"></span><span><img src="../../../app_img/im/v1/em/26.gif" title="委屈"></span><span><img src="../../../app_img/im/v1/em/27.gif" title="无语"></span><span><img src="../../../app_img/im/v1/em/28.gif" title="小花"></span><span><img src="../../../app_img/im/v1/em/29.gif" title="心碎"></span><span><img src="../../../app_img/im/v1/em/30.gif" title="疑问"></span><span><img src="../../../app_img/im/v1/em/31.gif" title="晕"></span><span><img src="../../../app_img/im/v1/em/32.gif" title="再见"></span></div><p><a href="javascript:void(0);" class="icon_f"><i></i>聊天记录</a></p></div>');
		editorCon.push('<div class="write_msg"><div id="richEditor" contenteditable="true"></div> <!--富文本模拟编辑器--><textarea name="" id="" cols="110" rows="5"></textarea><button type="button" class="btn_post_none" id="btnPost">发送</button></div>');
		$(".mod_im_box .cont_box .post_box").append(editorCon.join(''));
		$(".mod_im_box .cont_box .post_box").after('<div class="tips"><i class="icon_care"></i><span></span></div>');
	};
	
	/**
	 * 播放声音
	 */
	function im_playVoice(){
		
	};
	
	/**
	 * 第一次去查历史消息
	 */
	function im_getFirstHisMsg(){
		
	};
	/**
	 * 查看更多历史消息
	 */
	function im_seeMoreHisMsg(){
		
	};
	/**
	 * 显示文件消息
	 */
	function im_showFileMessage(){
		var editor = $("#richEditor");
		var fileCont=[];
		fileCont.push('<div class="talk_b">');
		fileCont.push('<p class="post_date">10:18 上午</p>');
		fileCont.push('<div class="text">');
		fileCont.push('<i class="corner"></i>');
		fileCont.push('<div class="img_box">');
		fileCont.push('<p class="ing">正在发送文件</p>');
		fileCont.push('<div class="img_box"><img src="../../../app_img/im/v1/img_demo.png" alt="图片文件"/></div>');
		fileCont.push('<div class="img_txt">');
		fileCont.push('<p>IPAD瑕疵实物图.jpg</p>');
		fileCont.push('<div class="loading_bar"><div class="inner" style="width:60%;"></div></div>');
		fileCont.push('<p class="speed">500KB/S</p>');
		fileCont.push('<button class="btn_a">取消</button>');
		fileCont.push('</div></div></div>');
		$(".talk_box").append(fileCont.join(''));
		var fileId = "f"+parseInt(Math.random()*1000000);
		$(".talk_box .talk_b:last").attr({
			id: fileId
		});
		fid="#"+fileId;
		function fileSuccess(){//发送成功提示  可以作为AJAX的回调函数
			$(fid+" .ing").html('<i class="icon_succ"></i>成功发送文件');
			$(fid+" .loading_bar").remove();
			$(fid+" .speed").remove();
			$(fid+" .btn_a").remove();
		}
		function fileFale(){//发送失败提示  可以作为AJAX的回调函数
			$(fid+" .ing").html('<i class="icon_f"></i>文件发送失败');
			$(fid+" .speed").remove();
			$(fid+" .btn_a").replaceWith('<button class="btn_b">重新发送</button>');
		}
	};
	/**
	 * 显示系统提示消息
	 */
	function im_showSysMessage(){
		$('.tips span').text('系统提示信息');
		$('.tips').slideDown(100).delay(2000).slideUp(200);
	};
	 /**
	 * 显示普通消息
	 */
	function im_showMessage(){
		var editor = $("#richEditor");
		var now = new Date();
		var hour = now.getHours();
		var mi = now.getMinutes();
		var se = now.getSeconds();
		var sd = function (){
			if(hour>=0 && hour<6){
				return ("&nbsp;&nbsp;凌晨");
			}
			else if(hour>=6 && hour<12){
				return ("&nbsp;&nbsp;上午");
			}
			else if(hour>=12 && hour<18){
				return ("&nbsp;&nbsp;下午");
			}
			else{
				return ("&nbsp;&nbsp;晚上");
			}
		};//信息发送时段判断并返回  我现在用的是客户端本机时间，这个不一定准确，不过，商美女：我建议你改成获取服务器时间靠谱点
		var addHtml = '<div class="talk_b"><p class="post_date">'+hour+':'+mi+':'+se+sd()+'</p><div class="text"><i class="corner"></i>'+editor.html()+'</div></div>';
		$(".talk_box").append(addHtml);
	};
	/**
	 *发送消息 
	 */
	function im_doSendMsg(){
		var editor = $("#richEditor");
		var face = $(".face_box span");
		var btn = $("#btnPost");
		function changeBtn(){
			v = editor.html();
			if(v.length>1){
				btn[0].className="btn_post";
			}
			else{
				btn[0].className="btn_post_none";
			}
		}
		editor.keyup(function() {
				changeBtn();
			});
		changeBtn();//提交按钮状态判断
		face.click(function() {
			editor.html(editor.html()+$(this).html());
			$(".face_box").hide();
			$(".post_img .icon_a").removeClass('icon_a_on');

			function setCaretPosition(){//设置光标位置函数 
				var o=document.getElementById("bood");
				if(o.setSelectionRange) {
					setTimeout(function(){

						editor.setSelectionRange(2,2);
						editor.focus();
					},0);
					
				} 
				else if(o.createTextRange) { 
					
				}
			}
			setCaretPosition();
			changeBtn();
		});//插入表情
		function postM() {
			var n =editor.html().length;
			if(n>2000){
				$('.tips span').text('最多只能输入1000个汉字');
				$('.tips').slideDown(100).delay(2000).slideUp(200);
				return false;
			}//判断
			if(n>=1 && n<=2000 && editor.html() !== "<br>"){
				im_showMessage();
				editor.html("")
			}//添加消息到信息列表
			else{
				editor.html("");
			}
			$(".talk_box")[0].scrollTop=$(".talk_box")[0].scrollHeight;
		}//发送信息
		btn.bind('click', function (){
			postM();
		});//按按钮发送信息
		editor.keydown(function(event) {
			if(event && event.keyCode==13){
				postM();
			}
		});//按回车键发送信息
		editor.keypress(function(event) {
			if(event && event.keyCode==13){
				postM();
			}
		});
	};
	/**
	 *重新发送消息 
	 */
	function im_reSendMsg(){
		
	};
	/**
	 * 过滤接收到的消息
	 */
	function im_filterMsgs(){
		
	};
	/**
	 * 校验解析接收的信息
	 */
	function im_checkReceiveMsg(){
		
	};
	/**
	 * 更新聊天人未读消息数目
	 */
	function im_cleanMsgNum(){
		
	};
	im_initChatBox();
	im_showNonHistory();
	im_deleteHistory();
	im_showMerchantDSR();
	im_showProductInfo();
	im_initRichEditor();
	im_doSendMsg();
})(jQuery);