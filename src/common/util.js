let util = {};
util.getData = () => {
	console.log('this is util.getData');
},
util.formatData = data => {
	console.log('data',data);
	let dataStr = '';
	let dataArr = [];
	for (let k in data) {
		dataArr.push(`${k}=${data[k]}`);
	}
	dataArr.join('&');
	return dataArr;
},
util.ajax = (obj = {}) => {
	// 初始化数据
	if (!obj.url) {
		throw '请传递请求地址';
		return;
	}
	obj.type = (obj.type || 'GET').toUpperCase();
	obj.dataType = obj.dataType || 'json';

	let params = util.formatData(obj.data);

	// 创建
	let xhr = null;
	if (window.XMLHttpRequest) {
		xhr = new XMLHttpRequest();
	} else {
		xhr = new ActiveXObject('Microsoft XMLHTTP');
	}

	// 连接 && 发送
	if (obj.type.toUpperCase() == 'GET') {
		xhr.open(
			'GET',
			`${obj.url}?${params}`,
			true
		);
		xhr.send(null);
	} else if (obj.type.toUpperCase() == 'POST') {
		xhr.open('POST', obj.url, true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
	}
	
	// 接收
	xhr.onreadystatechange = () => {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				obj.success && obj.success(xhr.responseText);
			} else {
				obj.fail && obj.fail(xhr.status);
			}
		}
	}
	
}
module.exports = util;