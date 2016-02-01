package org.lazicats.admin.controller.view;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.lazicats.admin.entity.user.User;
import org.lazicats.admin.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.sun.org.glassfish.gmbal.ParameterNames;

@Controller
@RequestMapping(value="/user/")
public class UserController  {
	@Autowired
	private IUserService userService;
	
	
	/**
	 * 查询用户列表
	 * @param modelMap
	 * @return
	 */
	@RequestMapping(value="list")
	public String list( Model model, HttpServletRequest request){
		
		List<User> list=userService.findAll();
		
		model.addAttribute("users", list);
		
		return "user/list";
	}
	
	/**
	 * 通过ID查询用户信息
	 */
	@RequestMapping("toupdate")
	public String findById(Model model,HttpServletRequest request){
		String id=request.getParameter("id");
		User user2=userService.findById(Integer.parseInt(id));
		model.addAttribute("user", user2);
		return "user/update";
	}
	
	
	
	/**
	 * 修改用户信息
	 */
	@RequestMapping(value="update",method=RequestMethod.POST)
	public String update(@PathVariable("id")String id,@PathVariable("username")String username,@PathVariable("password")String password,HttpServletRequest request){
		
		System.out.println("-------------------");
		// id=(String) request.getParameter("id");
		Integer Id=Integer.parseInt(id);
		System.out.println("id="+id);
		// username=(String) request.getParameter("username");
		System.out.println("username="+username);
		// password=(String) request.getParameter("password");
		User user=new User();
		user.setId(Id);
		user.setUsername(username);
		user.setPassword(password);
		userService.update(user);
		return "user/list";
		
		
		
		
	}
	
	
	/**
	 * 删除用户信息
	 */
	@RequestMapping(value="delete")
	public String delete(HttpServletRequest request){
		String id=request.getParameter("id");
		System.out.println(id);
		//Integer Id=Integer.parseInt(id);
		userService.delete(id);
		System.out.println("删除用户信息成功!");
		return "redirect:user/list";
	}
	
	@RequestMapping(value="ztree")
	public String ztree(HttpServletRequest request,Model model) {
		// TODO Auto-generated method stub
		return "user/ztree";

	}
}
