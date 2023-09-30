// background.js

// chrome.webNavigation.onCompleted.addListener(function(details) {
//   // 檢查網頁是否是主框架，以避免多次觸發
//   if (details.frameId === 0) {
//     // 向標籤發送消息以執行 content.js
//     chrome.tabs.sendMessage(details.tabId, { action: "executeContentScript" });
//   }
// });

// chrome.storage.sync.set({ key: value }).then(() => {
//   console.log("Value is set");
// });
//
// chrome.storage.sync.get(["key"]).then((result) => {
//   console.log("Value currently is " + result.key);
// });