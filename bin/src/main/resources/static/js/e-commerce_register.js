<<<<<<< HEAD

=======
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
$(".vimg").on("click", function() {
	var timestamp = (new Date()).valueOf();
	$(this).attr("src", "code?timestamp=" + timestamp);
});
<<<<<<< HEAD
=======
$(function() {
	var timestamp = (new Date()).valueOf();
	$(this).attr("src", "code?timestamp=" + timestamp);
});
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6

function CustomerRegister() {
	var phone = $(".cust_phone").val();
	var password = $(".cust_password").val();
	var code = $(".code").val();
	var provice = $("#provice").val();
	var city = $("#city").val();
	var area = $("#area").val();
<<<<<<< HEAD
=======

>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
	console.log(phone, password, code);
	$.ajax({
		type : "post",
		url : "/customer/register",
		data : {
<<<<<<< HEAD
			phone 		: phone,
			password 	: password,
			code 		: code,
			provice		:provice,
			city		:city,
			area		:area,
=======
			phone : phone,
			password : password,
			code : code,
			provice : provice,
			city : city,
			area : area,
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
		},
		dataType : "json",
		success : function(data) {
			alert(data.state);
			console.log("成功", data);
		},
		error : function(data) {
			console.log("失败", data);
		}
	})
}

$(function() {
	// 初始化省市区
	initAddress();
	// 更改省份后的操作
	$("select[name='province']").change(function() {
		$("#city").html("");
		var provCode = $("select[name='province']").val();
		console.log(provCode);
		getCity(provCode);
	});
<<<<<<< HEAD
	  // 更改城市后的操作 
	$("select[name='city']").change(function() { 
		$("#area").html("");
		var cityCode = $("select[name='city']").val(); 
		console.log(cityCode);
		getArea(cityCode); });
	
	$("select[name='area']").change(function() {
		var areaCode = $("select[name='area']").val();
		console.log(areaCode);
		
	});
	 
});

function initAddress() {
	$.ajax({
		type : "post",
		url : "/Address/init",
		dataType : "json",
		success : function(data) {
			console.log("成功", data);
			var provinceList = data.provinceList;
			var txt = "";
			
			for (var i = 0; i < provinceList.length; i++) {
				txt += `<option value = ${provinceList[i].code}>${provinceList[i].name}</option>`;
			}
			$("#province").append(txt);
		},
		error : function(data) {
			console.log("失败");
		}
})
=======
	// 更改城市后的操作
	$("select[name='city']").change(function() {
		$("#area").html("");
		var cityCode = $("select[name='city']").val();
		console.log(cityCode);
		getArea(cityCode);
	});

	$("select[name='area']").change(function() {
		var areaCode = $("select[name='area']").val();
		console.log(areaCode);

	});

});

function initAddress() {
	$
			.ajax({
				type : "post",
				url : "/Address/init",
				dataType : "json",
				success : function(data) {
					console.log("成功", data);
					var provinceList = data.provinceList;
					var txt = "";

					for (var i = 0; i < provinceList.length; i++) {
						txt += `<option value = ${provinceList[i].code}>${provinceList[i].name}</option>`;
					}
					$("#province").append(txt);
				},
				error : function(data) {
					console.log("失败");
				}
			})
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
}

// 获取对应城市列表（里面包括获取第一个城市的区县列表）
function getCity(provCode) {
	var provCode = provCode;
<<<<<<< HEAD
	$.ajax({
		type : "post",
		url : "/Address/city",
		dataType : "json",
		data : {
			provCode : provCode,
		},
		success : function(data) {
			console.log("成功", data);
			var citysList = data.citysList;
			var txt = "";
			var a = -1;
			txt+=`<option value = ${a}>-- 请选择市 --</option>`;
			for (var i = 0; i < citysList.length; i++) {
			txt += `<option value = ${citysList[i].code}>${citysList[i].name}</option>`;
			}
			$("#city").append(txt);
		},
		error : function(data) {
			console.log("失败");
		}
	})
=======
	$
			.ajax({
				type : "post",
				url : "/Address/city",
				dataType : "json",
				data : {
					provCode : provCode,
				},
				success : function(data) {
					console.log("成功", data);
					var citysList = data.citysList;
					var txt = "";
					var a = -1;
					txt += `<option value = ${a}>-- 请选择市 --</option>`;
					for (var i = 0; i < citysList.length; i++) {
						txt += `<option value = ${citysList[i].code}>${citysList[i].name}</option>`;
					}
					$("#city").append(txt);
				},
				error : function(data) {
					console.log("失败");
				}
			})
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
}

function getArea(citysCode) {

	var citysCode = citysCode;
<<<<<<< HEAD
	$.ajax({
		type : "post",
		url : "/Address/area",
		dataType : "json",
		data : {
			citysCode : citysCode,
		},
		success : function(data) {
			console.log("成功", data);
			var areaList = data.areaList;
			var a = -1;
			var txt = "";
			txt+=`<option value = ${a}>-- 请选择县(区) --</option>`;
			for (var i = 0; i < areaList.length; i++) {
				txt += `<option value = ${areaList[i].code}>${areaList[i].name}</option>`;
			}
			$("#area").append(txt);
		},
		error : function(data) {
			console.log("失败");
		}
	})
=======
	$
			.ajax({
				type : "post",
				url : "/Address/area",
				dataType : "json",
				data : {
					citysCode : citysCode,
				},
				success : function(data) {
					console.log("成功", data);
					var areaList = data.areaList;
					var a = -1;
					var txt = "";
					txt += `<option value = ${a}>-- 请选择县(区) --</option>`;
					for (var i = 0; i < areaList.length; i++) {
						txt += `<option value = ${areaList[i].code}>${areaList[i].name}</option>`;
					}
					$("#area").append(txt);
				},
				error : function(data) {
					console.log("失败");
				}
			})
>>>>>>> ae91f5c60013d33b5451853a0b57e38e3e7bc4d6
}
