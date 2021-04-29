function getData(api) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var ok = Math.random() > 0.5; // 模拟请求成功或失败
      if (ok) resolve("get " + api + " data");
      else {
        // reject(api + ' fail')   // 如果调用reject就会使Promise.all()进行失败回调
        resolve("error"); // Promise all的时候做判断  如果是error则说明这条请求失败
      }
    }, 2000);
  });
}
function getDatas(arr) {
  var promises = arr.map((item) => getData(item));
  return Promise.all(promises)
    .then((values) => {
      values.map((v, index) => {
        if (v == "error") {
          console.log("第" + (index + 1) + "个请求失败");
        } else {
          console.log(v);
        }
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
getDatas(["./api1", "./api2", "./api3", "./api4"]).then(() => "请求结束");
