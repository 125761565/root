package org.lazicats.website.goods.common;
/***
 * 数据库
 * @author yu.li
 *
 */
public class DataTable {
	private String title;
	private String content;
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	@Override
	public String toString() {
		return String
				.format("DataTable [title=%s, content=%s, getTitle()=%s, getContent()=%s, getClass()=%s, hashCode()=%s, toString()=%s]",
						title, content, getTitle(), getContent(), getClass(),
						hashCode(), super.toString());
	}
	
}
