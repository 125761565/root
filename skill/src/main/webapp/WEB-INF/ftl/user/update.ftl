<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>修改用户信息</title>
<script src="res/common/js/speedup.js" type="text/javascript"></script>
<style type="text/css">
		body{ margin:0; padding:0; font-family:"Microsoft Yahei"; font-size:12px; color:#999;line-height:18px;}
		.update{
			align:center;
			top:30px;
			width:30%;
			hight:300px;
			font-size:12px;
			border: 1px solid #000000;
			margin:10px; padding:10px;
		}
  		td{
  			border: 1px solid blue;
  			margin:10px; padding:10px;
  			 text-align:center;
  		}
  		h1{
  		margin:10px;
  		text-align:left;
  		}
		</style>
		<script>
			function fun1(){
			$("#form1").submit();	
			}
		</script>
</head>
<body>
			<h1>修改用户信息</h1>
			<div class="update">
			<form id="form1" action="update" method="post" class="table" width="80%" hight="137" onclick="fun1();" >
			
				<td>用户&nbsp;&nbsp;ID:<input width="120" disabled="disabled" type="text" name="id"  value="${user.id!''}" /></td><br/><br/>
				<td>用户名：<input  width="120" type="text" name="username"  value="${user.username!''}" /></td><br/><br/>
				<td>密&nbsp;&nbsp;&nbsp;&nbsp;码:<input width="120" type="text" name="password"  value="${user.password!''}" /></td><br/><br/>
				  <td><input width="120" type="submit" value="提交"/>
				       <input width="120" type="button" value="取消"/></td>
			</form>
		</div>
	
</body>
</html> 