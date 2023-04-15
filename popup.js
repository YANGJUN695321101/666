// popup.js
$(document).ready(function () {
  $("#fetchData").click(function () {
    // 获取当前标签页
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      // 向内容脚本发送消息
      chrome.tabs.sendMessage(tabs[0].id, { action: "fetchData" }, function (response) {
        // 将结果显示在文本框中
        $("#result").val(JSON.stringify(response, null, 2));
      });
    });
  });

  // 其他代码...
});
