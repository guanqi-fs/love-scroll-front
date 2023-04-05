<template>
  <view class="container">
    <view class="search-bar">
      <input
        type="text"
        v-model="searchKeyword"
        @input="searchTasks"
        class="search-input"
        placeholder="搜索任务"
      />
    </view>
    <view class="task-list">
      <view
        v-for="(task, index) in filteredTasks"
        :key="index"
        class="task-item"
        @click="viewTaskDetails(task.id)"
        :style="{ backgroundImage: 'linear-gradient(to right, ' + task.gradientColors[0] + ', ' + task.gradientColors[1] + ')' }"
      >
        <view class="task-status-icon">
          <image :src="task.statusIcon" mode="aspectFit" />
        </view>
        <view class="task-info">
          <view class="task-title">{{ task.title }}</view>
          <view class="task-category">
            <image :src="task.categoryIcon" mode="aspectFit" class="category-icon" /> {{ task.category }}
          </view>
          <view class="task-deadline">截止日期：{{ task.deadline }}</view>
          <view class="task-reward">奖励：{{ task.reward }}</view>
        </view>
        <view class="task-progress">
          <progress :percent="task.progress" />
        </view>
      </view>
    </view>
    <view class="add-task-button" @click="createTask">创建任务</view>
  </view>
</template>

<!-- 在 script 部分，添加相应的图片地址和渐变背景色数据 -->

<script>
export default {
  data() {
    return {
      searchKeyword: "",
      tasks: [
        {
          id: 1,
          title: '一起去看电影',
          category: '娱乐',
          deadline: '2023-04-05',
          reward: '100积分',
          statusIcon: 'https://via.placeholder.com/50x50?text=Ongoing',
          categoryIcon: 'https://via.placeholder.com/20x20?text=E',
          progress: 0,
          gradientColors: ['#a18cd1', '#fbc2eb'],
        },
        {
          id: 2,
          title: '购买周末的晚餐食材',
          category: '生活',
          deadline: '2023-04-02',
          reward: '50积分',
          statusIcon: 'https://via.placeholder.com/50x50?text=Completed',
          categoryIcon: 'https://via.placeholder.com/20x20?text=L',
          progress: 100,
          gradientColors: ['#fbc2eb', '#a6c1ee'],
        },
        {
          id: 3,
          title: '完成健身房锻炼计划',
          category: '健康',
          deadline: '2023-04-10',
          reward: '150积分',
          statusIcon: 'https://via.placeholder.com/50x50?text=Ongoing',
          categoryIcon: 'https://via.placeholder.com/20x20?text=H',
          progress: 60,
          gradientColors: ['#a6c1ee', '#f6d365'],
        },
        {
          id: 4,
          title: '学习新的编程技能',
          category: '学习',
          deadline: '2023-04-30',
          reward: '200积分',
          statusIcon: 'https://via.placeholder.com/50x50?text=Ongoing',
          categoryIcon: 'https://via.placeholder.com/20x20?text=S',
          progress: 40,
          gradientColors: ['#f6d365', '#fda085'],
        },
        {
          id: 5,
          title: '计划一次度假旅行',
          category: '旅游',
          deadline: '2023-05-01',
          reward: '300积分',
          statusIcon: 'https://via.placeholder.com/50x50?text=Ongoing',
          categoryIcon: 'https://via.placeholder.com/20x20?text=T',
          progress: 20,
          gradientColors: ['#fda085', '#a18cd1'],
        },
      ],

      filteredTasks: [],
    };
  },
  mounted() {
    this.filteredTasks = this.tasks;
  },
  methods: {
    searchTasks() {
      this.filteredTasks = this.tasks.filter((task) =>
        task.title.includes(this.searchKeyword)
      );
    },
    viewTaskDetails(taskId) {
      // 跳转到任务详情页面
    },
    createTask() {
      // 跳转到任务创建页面
    },
  },
};
</script>

<!-- 根据新增元素和样式，更新 style 部分 -->

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px;
}

.search-input {
  width: 100%;
  height: 40px;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 14px;
  background-color: #f0f0f0;
}

.task-list {
  flex: 1;
  padding: 15px;
}

.task-item {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15
px;
margin-bottom: 10px;
position: relative;
overflow: hidden;
}

.task-status-icon {
position: absolute;
top: -10px;
right: -10px;
width: 40px;
height: 40px;
}

.task-info {
z-index: 1;
}

.task-title {
font-size: 18px;
font-weight: bold;
color: #333333;
margin-bottom: 5px;
}

.task-category {
display: flex;
align-items: center;
font-size: 14px;
color: #999999;
margin-bottom: 5px;
}

.category-icon {
width: 20px;
height: 20px;
margin-right: 5px;
}

.task-deadline {
font-size: 14px;
color: #333333;
margin-bottom: 5px;
}

.task-reward {
font-size: 14px;
color: #333333;
}

.task-progress {
margin-top: 10px;
}

.add-task-button {
display: flex;
justify-content: center;
align-items: center;
background-color: #1c8cff;
color: #ffffff;
border-radius: 25px;
width: 120px;
height: 50px;
margin: 20px auto 0;
text-align: center;
font-size: 16px;
font-weight: bold;
}
</style>