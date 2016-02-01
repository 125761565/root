package org.lazicats.admin.dal.db.user;

import java.util.List;
import org.lazicats.admin.entity.user.User;
import org.springframework.stereotype.Repository;

@Repository
public interface IUserDao {
	/**
	 * 查询用户信息
	 * 
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
	 * 删除用户信息
	 */

	public void delete(Integer id);

}
