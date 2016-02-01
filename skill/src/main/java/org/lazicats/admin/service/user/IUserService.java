package org.lazicats.admin.service.user;

import java.util.List;

import org.lazicats.admin.entity.user.User;



public interface IUserService {
	/**
	 * 查询用户信息
	 * @param user
	 * @return
	 */
	public List<User> findAll();
	
	/**
	 * 通过ID查询用户信息
	 */
	public User findById(Integer id);
	
	/**
	 * 修改用户信息
	 */
	
	public void update(User user);
	
	
	/**
	 * 删除用户
	 */
	public void delete(String id);
	
}
