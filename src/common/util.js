let util = {
	getData: () => {
		console.log('this is util.getData');
	},
	ajax: (obj) => {
		if (!obj.url) {
			throw '请传递请求的url';
			return;
		}
		let oAjax = null;

		if (window.XMLHttpRequest) {
			oAjax = new XMLHttpRequest();
		} else {
			oAjax = new ActiveXObjext('Microsoft.XMLHTTP');
		}

		oAjax.open(
			obj.type,
			obj.url,
			obj.async
		);
		oAjax.send();

		oAjax.onreadystatechange = () => {

			if (oAjax.readyState == 4) {
				if (oAjax.status == 200) {
					obj.success(oAjax.responseText);
				} else {
					if (obj.fail) {
						obj.fail(oAjax.status);
					}
				}
			}
		}
	}
}
module.exports = util;