function logincheck() {
	account = prompt("请输入您的管理员账号");
	passwd = prompt("请输入您的密码");
	if(account == 'admin' || passwd == 'passward') {
		document.write("身份验证成功，即将跳转...");
		window.location.href = 'admin/';
	}	
	else {
		document.write("error")
	}
}
