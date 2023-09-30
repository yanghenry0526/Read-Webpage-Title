// const myArray = []

// // 获取当前页面的网址
// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   const currentUrl = tabs[0].title;
//   displayCurrentUrl(currentUrl);
// });

// // 显示当前页面的网址
// function displayCurrentUrl(url) {
//   const urlParagraph = document.getElementById('currentUrl');
//   myArray.push(url);
//   for (let i = 0; i < myArray.length; i++) {
//     urlParagraph.textContent = myArray[i];
//   }
// }

// function exportTableToCSV() {

//   const table = document.getElementById('myTable');
//   const rows = table.querySelectorAll('tr');
//   const csv = [];

//   for (const row of rows) {
//       const rowData = [];
//       const cells = row.querySelectorAll('td, th');
//       for (const cell of cells) {
//           rowData.push(cell.textContent);
//       }
//       csv.push(rowData.join(','));
//   }

//   const csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
//   const encodedUri = encodeURI(csvContent);
//   const link = document.createElement('a');
//   link.setAttribute('href', "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent));
//   link.setAttribute('download', 'exported_data.csv');
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }

// // 綁定按鈕的點擊事件處理程序
// document.getElementById('exportButton').addEventListener('click', function() {
//   exportTableToCSV();
// });

// alert("幹")


// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.action === "executeContentScript") {
//     // 在這裡執行您的 content.js 代碼
//     console.log("Content script executed!");
//   }
// });
