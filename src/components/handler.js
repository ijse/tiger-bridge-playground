export const callApi = function() {
  window.__cef_register__({
    name: "user/info",
    params: {
      title: null,
      message: "hello world!"
    },
    callback(response) {
      alert(JSON.stringify(response));
      alert(response.data.oauth.test);
    }
  });

  /*
  // 测试弹出确认对话框
  TigerBridge.ui.confirm(null, "hello").then(result => {
    alert("confirm response: \n" + JSON.stringify(result));
  });
  */

  /*
  // 测试数据订阅
  let receiveTime = 0;
  TigerBridge.user.getCurrentUserInfo(function receiveData({
    data: userData,
    error,
    unwatch
  }) {
    // 获取用户信息，每当用户信息改变时，执行这个回调
    alert(JSON.stringify(userData));

    alert(userData.oauth.test);
    if (error) {
      alert(JSON.stringify(error));
    }

    // 计数
    receiveTime++;

    // 3次后取消订阅数据
    if (receiveTime > 3) {
      unwatch();
    }
  });
  */
};
