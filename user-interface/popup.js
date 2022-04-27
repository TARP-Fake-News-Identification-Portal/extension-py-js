chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.storage.sync.set({ key1: tab.url });
});

// fetch("http://127.0.0.1:8080/predict", {
//     method: "POST",
//     body: JSON.stringify({
//         data: chrome.storage.sync.get("key1"),
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
// });
const axios = require("axios");
axios({
    method: 'post',
    url: 'http://127.0.0.1:8080/predict',
    data: {
        data: chrome.storage.sync.get("key1"),
    }
});