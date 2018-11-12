import axios from "axios";
// require('promise.prototype.finally').shim()
/**
 * 封装axios的通用请求
 * @param  {string}   method     get\post\put\delete
 * @param  {string}   url       请求的接口URL
 * @param  {object}   param     传的参数，没有则传空对象
 */
axios.defaults.baseURL = "https://api.example.com";
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
axios.interceptors.request.use(
	function(config) {
		console.log(config);
		return config;
	},
	function(error) {
        console.log(error);
		return Promise.reject(error);
	}
);
// 响应拦截器
axios.interceptors.response.use(
	function(response) {
		console.log(response);
		return response;
	},
	function(error) {
        console.log(error);
        if (error.status === 400 || error.status === 401) {
                  // 当 Token 已经失效时，清空所有保存在 localStorage 的数据
                  Vue.prototype.$message({
                             type: 'warning',
                             message: '你的账号已在其它设备中登录，请重新登录！'
                  })
                  localStorage.clear();
                }
		return Promise.reject(error);
	}
);
//封装请求
function http(method, url, param) {
	param = param && typeof param === "object" ? param : {};
	const token = sessionStorage.getItem('token')
	const config = {
		// url: 'https://api.example.com/'+url,
		url: url,
		method: method,
		transformRequest: [
			function(param) {
				return JSON.stringify(param);
			}
		],
		headers: {
			Authorization: token
		}
  	};
  // post请求时需要设定Content-Type
	if (method === "post") {
		config.headers["Content-Type"] ="application/x-www-form-urlencoded; charset=UTF-8";
		config.data = param;
	} else if (method === "get") {
		config.params = param;
	}
	// console.log(config);
	return axios(config);
}
export { http };
