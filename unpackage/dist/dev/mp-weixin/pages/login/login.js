"use strict";
const common_vendor = require("../../common/vendor.js");
const api_auth = require("../../api/auth.js");
require("../../api/request.js");
require("../../config.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async login() {
      try {
        const data = {
          username: this.username,
          password: this.password
        };
        const response = await api_auth.login(data);
        common_vendor.index.setStorageSync("token", response.token);
        common_vendor.index.showToast({
          title: "登录成功",
          icon: "success"
        });
        common_vendor.index.switchTab({
          url: "/pages/home/home"
        });
      } catch (err) {
        console.log(err);
        common_vendor.index.showToast({
          title: "登录失败",
          icon: "none"
        });
      }
    },
    toPage() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.o(($event) => $options.toPage())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/love-scroll/love-scroll-front/love-scroll-front/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
