package org.lazicats.admin.entity.user;
import java.io.Serializable;

import org.lazicats.common.basecomponent.utils.BeanUtils;
public class User extends BeanUtils  implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	
	private Integer id;
	private String username;
	private String password;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return String.format("User [id=%s, username=%s, password=%s]", id,
				username, password);
	}
	
	
	
	
	
}
