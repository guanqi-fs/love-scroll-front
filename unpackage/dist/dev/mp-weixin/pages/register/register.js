"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    async register() {
      if (!this.username || !this.password) {
        common_vendor.index.showToast({ title: "用户名和密码不能为空", icon: "none" });
        return;
      }
      try {
        const response = await registerUser(this.username, this.password);
        console.log(response);
        if (response.statusCode === 200 && response.data.code === 1e4) {
          common_vendor.index.showToast({ title: "注册成功", icon: "success" });
          common_vendor.index.setStorageSync("token", response.data.data.token);
          common_vendor.index.switchTab({ url: "/pages/home/home" });
        } else {
          common_vendor.index.showToast({ title: "注册失败，请重试", icon: "none" });
        }
      } catch (error) {
        common_vendor.index.showToast({ title: "请求错误，请重试", icon: "none" });
      }
    },
    toPage() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
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
    e: common_vendor.o((...args) => $options.register && $options.register(...args)),
    f: common_vendor.o(($event) => $options.toPage())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/Project/love-scroll/love-scroll-front/love-scroll-front/pages/register/register.vue"]]);
wx.createPage(MiniProgramPage);
