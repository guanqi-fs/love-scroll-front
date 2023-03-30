<template>
  <view class="container">
    <view class="logo">Love Quest</view>
    <view class="form">
      <input v-model="username" type="text" placeholder="用户名" class="input" />
      <input v-model="password" type="password" placeholder="密码" class="input" />
      <button @click="register" class="submit">注册</button>
      <text @click="toPage()" class="link">已有账号？去登录</text>
    </view>
  </view>
</template>

<script>
	
import { login } from '@/api/auth';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async register() {
      // 提交注册表单到后端 API
	  if (!this.username || !this.password) {
	    uni.showToast({ title: '用户名和密码不能为空', icon: 'none' });
	    return;
	  }
	  try {
	    const response = await registerUser(this.username, this.password);
		console.log(response)
	    if (response.statusCode === 200 && response.data.code === 10000) {
	  	uni.showToast({ title: '注册成功', icon: 'success' });
	  	// 存储token
	  	uni.setStorageSync('token', response.data.data.token);
	  	// 登录成功后的操作，例如跳转到首页
	  	uni.switchTab({ url: '/pages/home/home' });
	    } else {
	  	uni.showToast({ title: '注册失败，请重试', icon: 'none' });
	    }
	  } catch (error) {
	    uni.showToast({ title: '请求错误，请重试', icon: 'none' });
	  }
    },
	toPage() {
		uni.navigateTo({
			url:"/pages/login/login"
		})
	},
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 20px;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 30px;
}

.form {
  width: 100%;
}

.input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.submit {
  width: 100%;
  padding: 10px;
  background-color: #007aff;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 15px;
}

.link {
  color: #007aff;
  text-align: center;
}

</style>