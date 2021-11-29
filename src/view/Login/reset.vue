<template>
	<div class="reset">
		<div class="resetBoxFater">
			<div class="resetBox">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm" label-position="top">
					<el-form-item label="Email Address:" prop="address"><el-input v-model="ruleForm.email"></el-input></el-form-item>
					<el-form-item label="New password::" prop="pass">
						<el-input show-password type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="Confirm new password:" prop="checkPass">
						<el-input show-password type="password" v-model="ruleForm.confirm_password" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item><el-button type="primary" @click="submitForm('ruleForm')">Reset</el-button></el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>

<script>
import qs from 'qs';
import { passwordReset } from '@/api/api.js';
export default {
	name: 'reset',
	data() {
		var checkAge = (rule, value, callback) => {
			if (value === '') {
				return callback(new Error('账号不能为空'));
			}
		};
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.ruleForm.checkPass !== '') {
					this.$refs.ruleForm.validateField('checkPass');
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			ruleForm: {
				email: '',
				password: '',
				confirm_password: '',
			},
			rules: {
				email: [{ validator: checkAge, trigger: 'blur' }],
				password: [{ validator: validatePass, trigger: 'blur' }],
				confirm_password: [{ validator: validatePass2, trigger: 'blur' }],
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs[formName].validate(valid => {
				if (valid) {
					// alert("submit!");
					this.$router.push('/resetSuccess');
					passwordReset(qs.stringify(this.ruleForm)).then(res => {
						if (res.code == 200) {
							// this.$router.push({ path: "/Login", query: { status: true } })
							// console.log(res);
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
.reset {
	display: table;
	width: 100%;
	margin-top: 13%;
}
.resetBoxFater {
	display: table-cell;
	vertical-align: middle;
}
.resetBox {
	width: 600px;
	margin: 0 auto;
}
/deep/.el-form-item__label {
	font-size: 20px;
	font-family: Montserrat;
	font-weight: 400;
	color: #000000;
}
.el-form-item__content {
	width: 600px;
}
.el-button {
	width: 340px;
	height: 60px;
	font-size: 20px;
	margin-top: 30px;
}
</style>
