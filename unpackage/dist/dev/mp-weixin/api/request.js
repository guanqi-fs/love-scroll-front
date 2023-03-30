"use strict";
const common_vendor = require("../common/vendor.js");
const config = require("../config.js");
function request(options) {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: config.config.apiUrl + options.url,
      method: options.method || "GET",
      data: options.data || {},
      // header: {
      //   'content-type': 'application/json',
      //   'Authorization': `Bearer ${uni.getStorageSync('token')}`,
      // },
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
}
exports.request = request;
