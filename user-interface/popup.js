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
      title: "username",
      data: username,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      alert(response);
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}
