package org.lazicats.admin.service.impl.user;

import java.util.List;

import org.lazicats.admin.dal.db.user.IUserDao;
import org.lazicats.admin.entity.user.User;
import org.lazicats.admin.service.user.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserServiceImpl  implements IUserService {
	
	@Autowired
	private IUserDao userDao;

	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}
	/**
	 * 通过ID查询用户信息
	 */
	@Override
	public User findById(Integer id) {
		
		return userDao.findById(id);
	}
	
	/**
	 * 修改用户信息
	 */
	@Override
	public void update(User user) {
		 userDao.update(user);
	}
	
	/**
	 * 删除用户信息
	 */
	@Override
	public void delete(String id) {
		int Id=Integer.parseInt(id);
		userDao.delete(Id);
		
	}

}
