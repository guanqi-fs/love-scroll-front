
const baseURL = 'http://localhost:8080'; // 根据实际后端 API 地址替换

export async function loginUser(username, password) {
  // ...
  const response = await uni.request({
    url: `${baseURL}/api/v1/login`,
    method: 'POST',
    data: {
      username,
      password,
    },
  });
  
  return response
}

export async function registerUser(username, password) {
  // ...
  const response = await uni.request({
    url: `${baseURL}/api/v1/register`,
    method: 'POST',
    data: {
      username,
      password,
    },
  });
  
  return response
}
