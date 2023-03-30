import config from '@/config';

export function request(options) {
  return new Promise((resolve, reject) => {
    uni.request({
      url: config.apiUrl + options.url,
      method: options.method || 'GET',
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
      },
    });
  });
}
