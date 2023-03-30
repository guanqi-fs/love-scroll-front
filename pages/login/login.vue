<template>
  <view class="container">
    <view class="logo">Love Quest</view>
    <view class="form">
      <input v-model="username" type="text" placeholder="用户名" class="input" />
      <input v-model="password" type="password" placeholder="密码" class="input" />
      <button @click="login" class="submit">登录</button>
      <text @click="toPage()" class="link">没有账号？去注册</text>
    </view>
  </view>
</template>
<script>
import { login } from '@/api/auth';

export default {

  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const data = {
          username: this.username,
          password: this.password,
        };
        const response = await login(data);
        uni.setStorageSync('token', response.token);
        uni.showToast({
          title: '登录成功',
          icon: 'success',
        });
        uni.switchTab({
          url: '/pages/home/home',
        });
      } catch (err) {
        console.log(err);
        uni.showToast({
          title: '登录失败',
          icon: 'none',
        });
      }
    },
	toPage() {
		uni.navigateTo({
			url:"/pages/register/register"
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
