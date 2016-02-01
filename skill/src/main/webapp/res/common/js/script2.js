// JavaScript Document

//搜索框事件
$("input[name='keywords']").focus(function(){
	if($(this).val() == '货币码/货币符/中（英）文名'){
		$(this).val('');
		$(this).css('color','#333');
	}	
});
$("input[name='keywords']").blur(function(){
	if($(this).val() == ''){
//		$(this).val('货币码/货币符/中（英）文名');
		$(this).css('color','#cacaca');
	}	
});

//查看和申请栏目切换
$(".tab-title span").click(function(){
	$(".tab-title .active").removeClass('active');	
	$(this).addClass('active');
	var cur = 0;
	$(".tab-title span").each(function(index, element) {
		if($(this).hasClass('active')){
			cur = index;	
			return false;
		}
	});
	$(".tab-item .common").hide();
	$(".tab-item .common").eq(cur).show();
});

//点击播放按钮出现视频
$(".play_btn").click(function(){
	$(".jiangyi").addClass('temp2');	
	if($("#main").css('display') == 'block'){
		$(".sidebar").animate({marginLeft:'-24%'},'normal');
		$(".cat").fadeIn('slow');
		$(".content").animate({width:'92%'},'normal');
	}
	$(".main_left").animate({width:'55%',marginLeft:'0px'},'normal');
	$(".main_right1").fadeOut('fast');
	$(".main_right2").animate({right:'0px'},'slow');
});	
//点击收起按钮收起视频
$(".shouqi").click(function(){
	$(".jiangyi").removeClass('temp2');
	if($("#main").css('display') == 'block'){
		$(".cat").fadeOut('fast');
		$(".content").animate({width:'72%'},'normal');
		$(".sidebar").animate({marginLeft:'0px'},'normal');
	}
	$(".main_right2").animate({right:right2},'normal');
	$(".main_right1").fadeIn('fast');
	$(".main_left").animate({width:'75%',marginLeft:'2%'},'normal');
});	

//公司活期/定期查询，点击查询按钮出现列表
$(".search2").click(function(){
	$(".query-result").show();	
});

/*//柜员匹配页面列表，点击减号删除行
$(".performance-table i").click(function(){
	$(this).parent().parent().remove();	
});*/