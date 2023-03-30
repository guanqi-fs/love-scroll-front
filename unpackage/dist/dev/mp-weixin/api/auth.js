"use strict";
const api_request = require("./request.js");
function login(data) {
  return api_request.request({
    url: "/login",
    method: "POST",
    data
  });
}
exports.login = login;
