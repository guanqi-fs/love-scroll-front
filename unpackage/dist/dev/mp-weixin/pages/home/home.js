"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    goToTasks() {
      common_vendor.index.navigateTo({ url: "/pages/tasks/tasks" });
    },
    goToRewards() {
      common_vendor.index.navigateTo({ url: "/pages/rewards/rewards" });
    },
    goToAnniversary() {
      common_vendor.index.navigateTo({ url: "/pages/anniversary/anniversary" });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goToTasks && $options.goToTasks(...args)),
    b: common_vendor.o((...args) => $options.goToRewards && $options.goToRewards(...args)),
    c: common_vendor.o((...args) => $options.goToAnniversary && $options.goToAnniversary(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-07e72d3c"], ["__file", "D:/Project/love-scroll/love-scroll-front/love-scroll-front/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
