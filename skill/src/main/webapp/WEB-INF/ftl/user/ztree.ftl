<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" href="${BasePath}/res/css/zTreeStyle/zTreeStyle.css" />
<script src="${BasePath}/res/js/jquery-1.4.4.min.js" type="text/javascript" charset="utf-8"></script>
<script src="${BasePath}/res/js/jquery.ztree.core-3.5.js" type="text/javascript" charset="utf-8"></script>

<title>ztree</title>
<style type="text/css">
		body{ margin:0; padding:0; font-family:"Microsoft Yahei"; font-size:12px; color:#999;line-height:18px;}
		table, th, td
  		{
  			border: 1px solid blue;
  			 text-align:center;
  		}
  		h1{
  		text-align:center;
  		}
		</style>
 <SCRIPT type="text/javascript" >
	var zTreeObj,
	setting = {
		view: {
			selectedMulti: false
		}
	},
	zTreeNodes = [
		{"name":"网站导航", open:true, children: [
			{ "name":"google", "url":"http://g.cn", "target":"_blank"},
			{ "name":"baidu", "url":"http://baidu.com", "target":"_blank"},
			{ "name":"sina", "url":"http://www.sina.com.cn", "target":"_blank"}
			]
		}
	];

	$(document).ready(function(){
		zTreeObj = $.fn.zTree.init($("#tree"), setting, zTreeNodes);

	});
  </SCRIPT>
</head>
<body>
<h1>ztree</h1>

<ul id="tree" class="ztree" style="width:230px; overflow:auto;"></ul>
</body>
</html> 