console.log("Theme by Backser");

function logout() {
	alert("确认退出吗？");
	window.location.href = '/index.html';
} 
function check() {
	alert("检测完成，未检测到木马！");
}
function send() {
	document.write("正在发布中，请稍后；待发布成功后会自动返回主页....");
	setTimeout(alert("发布完成！"),4500);
	window.location.href = 'index.html';
}
function change() {
	change = prompt("请输入确认更改吗？（Y/N）")
	if(change == 'Y') {
		alert("更改成功！");
	}
	else {
		alert("取消了操作");
	}
}