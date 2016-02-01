<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
 "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>用户列表</title>
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
</head>
<body>
<h1>用户列表</h1>

<table class="table" width="100%" hight="137">
		<thead>
			<tr>
				<th width="120">ID</th>
				<th width="120">用户名</th>
				<th width="120">用户密码</th>
				<th width="140">操作</th>
			</tr>
		</thead>
		<tbody>
				<#list users as user>
					<tr >
						<td>${user.id!''}</td>
						<td>${user.username!''}</td>
						<td>${user.password!''}</td>
						<td><a href="http://localhost:8080/100feet/user/toupdate?id=${user.id}">修改</a>|<a href="http://localhost:8080/100feet/user/delete?id=${user.id}">删除</a>|<a href="#">增加</a></td>
					</tr>
				</#list>
		</tbody>
	</table>
	
</body>
</html> 