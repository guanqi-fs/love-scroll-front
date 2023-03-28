<template>
  <view class="home-container">
    <view class="welcome-container">
      <text class="welcome-text">情缘绘卷</text>
    </view>
    <view class="features-container">
      <view class="feature-item" @tap="goToTasks">
        <image class="feature-icon" src="/static/icons/tasks.png" />
        <text class="feature-text">任务</text>
      </view>
      <view class="feature-item" @tap="goToRewards">
        <image class="feature-icon" src="/static/icons/rewards.png" />
        <text class="feature-text">奖品</text>
      </view>
      <view class="feature-item" @tap="goToAnniversary">
        <image class="feature-icon" src="/static/icons/anniversary.png" />
        <text class="feature-text">纪念日</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    goToTasks() {
      uni.navigateTo({ url: "/pages/tasks/tasks" });
    },
    goToRewards() {
      uni.navigateTo({ url: "/pages/rewards/rewards" });
    },
    goToAnniversary() {
      uni.navigateTo({ url: "/pages/anniversary/anniversary" });
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f8f8;
  height: 100%;
}

.welcome-container {
  margin-top: 30px;
}

.welcome-text {
  font-size: 28rpx;
  color: #4a4a4a;
  font-weight: bold;
}

.features-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 60px;
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-icon {
  width: 100rpx;
  height: 100rpx;
}

.feature-text {
  font-size: 24rpx;
  color: #4a4a4a;
  margin-top: 10rpx;
}
</style>
