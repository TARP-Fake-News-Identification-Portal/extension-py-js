chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  username = tabs[0].url.substr(20);
  chrome.storage.local.set({ key: username });
  // console.log(username);
  // chrome.tabs.create({ url: "https://twitter.com/" + username });
});

chrome.storage.local.get("key", function (obj) {
  apicall(obj.key);
});

function apicall(username) {
  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
      data: username,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      console.log(response);
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
// const axios = import("axios");

// const predict = (url) => {
//   axios
//     .post("http://127.0.0.1:5000/predict", url)
//     .then((response) => {
//       const result = response.prediction;
//       console.log("POST call result", result);
//     })
//     .catch((error) => console.error(error));
// };

// predict({
//   data: chrome.storage.sync.get("key-1"),
// });

// axios({
//   method: "post",
//   url: "http://127.0.0.1:5000/predict",
//   data: {
//     data: chrome.storage.sync.get("key1"),
//   },
// });

// axios
//   .post("http://127.0.0.1:5000/predict", {
//     data: chrome.storage.sync.get("key1"),
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// async function makeGetRequest() {
//   let payload = { data: chrome.storage.sync.get("key1") };

//   let res = await axios.post("http://127.0.0.1:5000/predict", payload);

//   let data = res.data;
//   console.log(data);
// }

// makeGetRequest();
