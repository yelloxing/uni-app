import {
	isArray,
	isString,
	isObject
} from "@hai2007/tool/type";

export default function(data) {

	return (function doit(data) {


		if (isString(data)) {
			return data;
		} else if (isArray(data)) {

			let temp = "[";
			for (let i = 0; i < data.length; i++) {
				temp += (doit(data[i])) + ',';
			}
			return temp.replace(/,$/, '') + "]";

		} else if (isObject(data)) {

			let temp = "{";
			for (let i in data) {
				temp += i + ":" + (doit(data[i])) + ',';
			}
			return temp.replace(/,$/, '') + "}";

		} else {
			return data.toString();
		}

	})(data);

};
