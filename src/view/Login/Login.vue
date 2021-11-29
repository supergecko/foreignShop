<template>
	<div class="Login">
		<div class="contentStyle">
			<div class="son">
				<el-form label-position="top" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="Email Address:" prop="account"><el-input v-model="ruleForm.email" autocomplete="off"></el-input></el-form-item>
					<el-form-item label="Password:" prop="pass" style="margin-top: 40px">
						<el-input show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item style="margin-top: 40px">
						<el-button type="primary" @click="submitForm('ruleForm')">Sign in</el-button>
						<p class="fontClass" @click="forget">Forget the password ?</p>
					</el-form-item>
					<div class="establish" @click="establish">Create an account ---------></div>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import { login } from '@/api/api.js';
export default {
	name: 'Login',
	data() {
		return {
			input: '',
			ruleForm: {
				email: '',
				password: ''
			},
			rules: {
				email: [{ required: true, message: '请输入账号', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		};
	},
	methods: {
		establish() {
			this.$router.push('/register');
		},
		forget() {
			this.$router.push('/reset');
		},
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					// this.$router.push({ path: "/Shopping", query: { status: true } });
					login(qs.stringify(this.ruleForm)).then(res => {
						console.log(res);
						if (res.data.code == 200) {
							// console.log(res.data.data.token)
							localStorage.setItem("token", res.data.data.token);
							this.$router.push({ path: '/Shopping'});
						} else {
							this.$message.error(res.data.msg);
						}
					});
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
};
</script>
<style scoped lang="less">
.Login {
	//   width: 1920px;
	height: 100vh;
	display: table;
	width: 100%;
}
/deep/.el-form-item__label {
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 400;
	color: #000000;
}
.contentStyle {
	display: table-cell;
	vertical-align: middle;
}
.son {
	width: 600px;
	margin: 0 auto;
}
.el-input {
	width: 600px;
}
.el-button {
	width: 300px;
	height: 50px;
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 400;
	float: left;
}
.fontSize {
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 400;
	color: #000000;
}
.fontClass {
	font-family: Montserrat;
	font-weight: 300;
	text-decoration: underline;
	color: #3e7bff;
	float: left;
	line-height: 60px;
	margin-left: 26px;
	cursor: pointer;
}
.establish {
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 300;
	color: #3e7bff;
	margin-top: 150px;
	cursor: pointer;
}
</style>
