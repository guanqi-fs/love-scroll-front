"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchKeyword: "",
      tasks: [
        {
          id: 1,
          title: "一起去看电影",
          category: "娱乐",
          deadline: "2023-04-05",
          reward: "100积分",
          statusIcon: "https://via.placeholder.com/50x50?text=Ongoing",
          categoryIcon: "https://via.placeholder.com/20x20?text=E",
          progress: 0,
          gradientColors: ["#a18cd1", "#fbc2eb"]
        },
        {
          id: 2,
          title: "购买周末的晚餐食材",
          category: "生活",
          deadline: "2023-04-02",
          reward: "50积分",
          statusIcon: "https://via.placeholder.com/50x50?text=Completed",
          categoryIcon: "https://via.placeholder.com/20x20?text=L",
          progress: 100,
          gradientColors: ["#fbc2eb", "#a6c1ee"]
        },
        {
          id: 3,
          title: "完成健身房锻炼计划",
          category: "健康",
          deadline: "2023-04-10",
          reward: "150积分",
          statusIcon: "https://via.placeholder.com/50x50?text=Ongoing",
          categoryIcon: "https://via.placeholder.com/20x20?text=H",
          progress: 60,
          gradientColors: ["#a6c1ee", "#f6d365"]
        },
        {
          id: 4,
          title: "学习新的编程技能",
          category: "学习",
          deadline: "2023-04-30",
          reward: "200积分",
          statusIcon: "https://via.placeholder.com/50x50?text=Ongoing",
          categoryIcon: "https://via.placeholder.com/20x20?text=S",
          progress: 40,
          gradientColors: ["#f6d365", "#fda085"]
        },
        {
          id: 5,
          title: "计划一次度假旅行",
          category: "旅游",
          deadline: "2023-05-01",
          reward: "300积分",
          statusIcon: "https://via.placeholder.com/50x50?text=Ongoing",
          categoryIcon: "https://via.placeholder.com/20x20?text=T",
          progress: 20,
          gradientColors: ["#fda085", "#a18cd1"]
        }
      ],
      filteredTasks: []
    };
  },
  mounted() {
    this.filteredTasks = this.tasks;
  },
  methods: {
    searchTasks() {
      this.filteredTasks = this.tasks.filter(
        (task) => task.title.includes(this.searchKeyword)
      );
    },
    viewTaskDetails(taskId) {
    },
    createTask() {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o([($event) => $data.searchKeyword = $event.detail.value, (...args) => $options.searchTasks && $options.searchTasks(...args)]),
    b: $data.searchKeyword,
    c: common_vendor.f($data.filteredTasks, (task, index, i0) => {
      return {
        a: task.statusIcon,
        b: common_vendor.t(task.title),
        c: task.categoryIcon,
        d: common_vendor.t(task.category),
        e: common_vendor.t(task.deadline),
        f: common_vendor.t(task.reward),
        g: task.progress,
        h: index,
        i: common_vendor.o(($event) => $options.viewTaskDetails(task.id), index),
        j: "linear-gradient(to right, " + task.gradientColors[0] + ", " + task.gradientColors[1] + ")"
      };
    }),
    d: common_vendor.o((...args) => $options.createTask && $options.createTask(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-027feebf"], ["__file", "D:/Project/love-scroll/love-scroll-front/love-scroll-front/pages/tasks/tasks.vue"]]);
wx.createPage(MiniProgramPage);
