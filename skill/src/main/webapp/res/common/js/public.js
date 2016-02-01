var strText;
var timeId = "";
$(function(){	
	var $search = $("input[keyword]");
	    strText =" "+$search.attr("keyword")+"         ";//提示信息
	var oldStrText=strText;//保存最原始的提示信息
	var searchVal=$search.val();//查询条件

	//搜索框鼠标悬浮事件监听
	$search.mouseover(function(){
		//alert(document.activeElement.id);		
		if(isEqualsTitle()){
			$search.css('color','#cacbcb');
			if(timeId){
				clearInterval(timeId);//停止滚动
			}
		   timeId=setInterval('run()',300);
		}
	});
	
	//搜索框鼠标离开事件监听
	$search.mouseout (function(){
		//失去焦点
		//$search.blur();
		clearInterval(timeId);//停止滚动
		strText=oldStrText;//提示信息还原
		if(isEqualsTitle()){
			$search.val(oldStrText);
			$search.css('color','#cacbcb');
		}
		
	});
	//获得焦点事件
	$search.focus(function(){
		clearInterval(timeId);//停止滚动
		strText=oldStrText;//提示信息还原
		if(isEqualsTitle()){
			$search.val("");
		}
		$(this).css('color','#333');
	});
	
	$search.click(function(){
		$search.focus();
	});
	
	$search.keydown(function(){
		$search.focus();
	});
	
	//失去焦点事件
	$search.blur(function(){
		var searchVal = $(this).val();
		if(searchVal == ''){
			$(this).val(strText);
			//timeId=setInterval('run()',500);//开始滚动
			$(this).css('color','#ccc');
		}
	});
	 
	//数字型去多余的零和空格
	trimNumber();
	
	//字符型去空格
	trimAll();
	
	
	//IE也能用textarea的maxlength熟悉
	$("textarea[maxlength]").keyup(function(){ 
	var area=$(this); 
	var max=parseInt(area.attr("maxlength"),10); //获取maxlength的值 
	if(max>0){ 
	if(area.val().length>max){ //textarea的文本长度大于maxlength 
	area.val(area.val().substr(0,max)); //截断textarea的文本重新赋值 
	} 
	} 
	}); 
	//复制的字符处理问题 
	$("textarea[maxlength]").blur(function(){ 
	var area=$(this); 
	var max=parseInt(area.attr("maxlength"),10); //获取maxlength的值 
	if(max>0){ 
	if(area.val().length>max){ //textarea的文本长度大于maxlength 
	area.val(area.val().substr(0,max)); //截断textarea的文本重新赋值 
	} 
	} 
	}); 
});


//滚动事件
function run() {
	strText= strText.substring(1,strText.length) +  strText.substring(0,1);
	$search = $("input[keyword]");
	$search.val(strText);
}


//重置搜索框
function resetSearch(){
	var $search = $("#query");
	var searchVal = $search.val();
	if(!searchVal)
		$search = $("input[keyword]");
	if(isEqualsTitle()){	
		$search.val('');
		$("#rel_keyword").val('');
	}
}

//判断搜索框的值是否等于提示框
function isEqualsTitle(){
	var $search = $("input[keyword]");
	var searchVal=$search.val();//查询条件
	if(searchVal==null||searchVal==''){
		return true;
	}
	if(searchVal.length==strText.length){//判断value值是否是title
		for (var i = 0; i < searchVal.length; i++) {
			var keyValue=searchVal.substring(i,searchVal.length) +  searchVal.substring(0,i);
			if(keyValue==strText){
				return true;
			}
		}
	}
	return false;
}

//数字型去多余的零和空格 
//自动触发条件：在<input>标签添加trimNumber属性
//trimNumber属性值:
//		all - 去掉左右两边多余的空格和零
//		left - 去掉左右两边多余的空格和小数点左边多余的零
function trimNumber($target){
	var $target = $("input[trimNumber]");  
	$target.change(function(){
		var attrVal = $(this).attr("trimNumber");
		var classAttr = $(this).attr("class"); 
		var fieldValue = $(this).val();
	    if($.trim(fieldValue).length == 0){
	    	return ;
	    };
		var oldVal = fieldValue; //备份值
		//去多余的空格
		fieldValue = $.trim(fieldValue);
		var scale = 0; //小数位数
		var dotIndex = fieldValue.indexOf(".");
		if(dotIndex != -1){
			scale = fieldValue.length - dotIndex - 1;
		} 
		//去全部多余的零
		fieldValue = Math.abs(fieldValue); 
		if(!fieldValue && fieldValue != 0){
			$(this).val(oldVal);
			return ;
		} 
		fieldValue = fieldValue + ""; //数字型转字符型
		if(fieldValue.indexOf("e") != -1){ //科学计数法
			return ;
		}
		var trimDotIndex = fieldValue.indexOf(".");
		if(attrVal == "left" && scale > 0){
			//使用Math.abs()函数后的小数位数
			var trimScale = 0;
			if(trimDotIndex != -1)
				trimScale = fieldValue.length - trimDotIndex - 1;
			else{
				fieldValue = fieldValue + "."; 
				trimScale = 0;
			}
			//还原小数点右边的零  
			for(var i = 0; i < (scale - trimScale); i++){
				fieldValue = fieldValue + "0";
			}
		}
		if(fieldValue)
			$(this).val(fieldValue);  
	}); 
}

//字符型去空格
function trimAll(){
	var $target = $("[trimAll]");
	$target.each(function(){
		$(this).blur(function(){ 
			var fieldValue = $(this).val();
			if(fieldValue){
				fieldValue = $.trim(fieldValue);
				$(this).val(fieldValue);
			}
		});
	});
}


//点击查询时给隐藏域赋值
function relSubmit(){	
	var keyword1 = $("input[keyword]").val();
	//var keyword2=$("input #rel_keyword").val();
	/*var keyword1 = $("#keywords").val();*/
	if(keyword1){
		$("#rel_keyword").val(keyword1);
	}
	$("#rel_keyword1").val($("#resType").val());
	resetSearch();
	 //页号重置为1
    $("#pageNo").val("1");
	postData();
	return false;
}

//设置表单为不可用
function setFormDisabled($form){
	$("input, textarea , select", $form).each(function(){
		if($(this).attr("type") != "button")
			$(this).attr("disabled", "disabled");
		if($(this).attr("truetype") == "select"){
			$(this).render();
		}
	});
}

//渲染分页控件
function renderPager(){
	var pageNo = Number($("#pageNo").val()) - 1;
	$(".pages").addClass("nofixTips"); //设置每页记录数下拉框不添加提示
	$(".pages").html("<div class='pageNumber' id='pageContent' ></div>");
	$("#pageContent").attr("total", $("#totalCount").val());
	$("#pageContent").attr("pageSize", $("#pageSize").val());
	$("#pageContent").attr("page", pageNo);
/*	$("#pageContent").attr("showSelect", "true");
	$("#pageContent").attr("showInput", "true");*/
	$("#pageContent").render(); 
	initComplete();
}

function initSearch(){
	//搜索框初始化
	var $search = $("input[keyword]");
	var strText =" "+$search.attr("keyword")+"         ";//提示信息		
	if($search.val()==null || $search.val() ==''){
		$("input[keyword]").val(strText);
	}
	if(!isEqualsTitle()){
		$search.css('color','#333');
	}else{
		$search.css('color','#cacbcb');
	}
}

//异步获取表格数据
//callback回调函数
function ajaxGetData(callback){
	
	//$(".table_content").mask("正在加载数据", null, true);
	$.ajax({
		url: $("form").attr("action"),
		type: "post",
		data: $("form").serialize(),
		dataType: "html",
		success: function(data){
			
			if(callback && typeof(callback) == "function")
				callback();
			else{
				$(".table_content").html(data);
				
				$(".pages").css('display' , 'block');
				var keyword = $("#rel_keyword").val();
//				$("[keyword]").val(keyword);
				renderPager();
				initSearch();
			}
			//$(".table_content").unmask();
		}
	});
}

//修正数据表表头样式
function fixDataTable(){
	var tsH = $(".tableStyle", $(".table_content")).height();
	var tcH = $(".table_content").height();
	if(tsH <= tcH)
		$(".p_box").css({"display": "none"});
	else
		$(".p_box").css({"display": ""});
}


