<template>
	<div>
		<div class="login-wrap">
			<div class="title">
				<span>党建产品管理后台</span>
			</div>
			<el-form :model="loginForm" :rules="rules" status-icon ref="loginForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="账号：" prop="username" class="form-item">
					<el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
				</el-form-item>
				<el-form-item label="密码：" prop="password" class="form-item">
					<el-input type="password" v-model="loginForm.password" placeholder="请输入密码" @keyup.enter.native="loginFn('loginForm')"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="loginFn('loginForm')" class="form-btn" element-loading-text="拼命加载中，请稍等" v-loading.fullscreen.lock="loading">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
		<div class="footer">奇&nbsp;&nbsp;聚&nbsp;&nbsp;联&nbsp;&nbsp;创</div>
	</div>
	 
	
</template>

<script>
export default {
    data() {
        return {
			loginForm:{},
			rules: {
				username: [
					{ required: true, message: '请输入用户名', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
				// verification: [
				//   { required: true, message: '请输入验证码', trigger: 'blur' }
				// ]
			},
			imgSrc: '',
			loading: false
        };
	},
	methods: {
		loginFn(){
			this.$router.push('/homePage')
		}
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.login-wrap {
    position: relative;
    // box-sizing: border-box;
    width: 50%;
    height: 50vh;
    margin: 0 auto;
    top: 25vh;
	// background-color: #ce2c1e;
	border: 1px solid #6CBDDE;
	border-radius: 2vh;
	text-align: center;
    .title {
        position: absolute;
		left: 0;
		top: 20%;
		width: 100%;
		font-size: 18px;
		color: #00B7FF;
		font-size: 3.5rem;
		font-weight: 100;
    }
    .demo-ruleForm {
        position: absolute;
        left: 26%;
		top: 34%;
        box-sizing: border-box;
        width: 40%;
        min-width: 280px;
        padding-top: 5%;
        background-color: #fff;
        .form-btn {
			width: 100%;
			margin-top: 30px;
			margin-bottom: 0;
        }
	}
}
.footer {
		margin-top: 21.8%;
		width: 100%;
		height: 50px;
		line-height: 50px;
		background: #8C8C8C;
        font-size: 14px;
		font-size: 2rem;
		color: #F7FBF4;
        text-align: center;
    }
</style>

