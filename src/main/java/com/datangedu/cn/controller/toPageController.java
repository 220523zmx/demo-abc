package com.datangedu.cn.controller;

<<<<<<< HEAD
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
=======
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
<<<<<<< HEAD
import org.springframework.web.bind.annotation.ResponseBody;

import com.datangedu.cn.model.administrator.Administrator;
import com.datangedu.cn.model.serviceadministrator.AdministratorService;

@Controller
//@RequestMapping("/sysuser")
=======

@Controller
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
public class toPageController {
	 @RequestMapping(value = "/toPage",method = RequestMethod.GET)
	   public String toPage(HttpServletRequest request){
	       String url = request.getParameter("url");
	       return url;
	   }
<<<<<<< HEAD
	 
	 
	 @Resource
	 AdministratorService AdministratorService;
	 
	 //查询功能
		//返回数据Json类型
		@ResponseBody
		//请求地址，请求类型
		@RequestMapping(value = "/getuserinfo",method = RequestMethod.GET)
		public Map<String,Object> getUserInfo(HttpServletRequest request) {
			
			System.out.println("查看携带姓名=="+request.getParameter("name"));
			
			String admiName = request.getParameter("name");
			Map<String,Object>map = new HashMap<String,Object>();
			List<Administrator> userInfo = AdministratorService.getUserInfoByld(admiName);
			//  userInfo   省160000、市、区；
			// 黑龙江省  哈尔滨市  南岗区
			// 存入省字段  "黑龙江省  哈尔滨市  南岗区"
			map.put("userInfo", userInfo);
			return map;
		}
		
		
		
		//按钮删除功能
		//返回数据Json类型
		@ResponseBody
		//请求地址，请求类型
		@RequestMapping(value = "/userdelete",method = RequestMethod.POST)
		public Map<String,Object> userDelete(HttpServletRequest request) {

			Map<String,Object>map = new HashMap<String,Object>();
			int userInfo = AdministratorService.setUserDelete(request);
            //判断返回结果 给前台返回信息
			map.put("msg", "恭喜删除成功");
			map.put("code", 1);
			return map;
		}
		
		
=======
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
}
