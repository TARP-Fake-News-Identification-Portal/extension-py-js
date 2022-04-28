chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
  username = tabs[0].url.substr(20);
  chrome.storage.local.set({ key: username });
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
    .then((response) => response.json())
    .then((data) => {
      var un = document.getElementById("username");
      un.appendChild(document.createTextNode(username));
      var printTable = document.getElementById("printTable");
      for (var tweet_auth of data.prediction) {
        var row = document.createElement("tr");
        for (var i = 0; i <= 1; i++) {
          var column = document.createElement("td");
          var columnText = document.createTextNode(tweet_auth[i]);
          column.appendChild(columnText);
          row.appendChild(column);
        }
        printTable.appendChild(row);
      }
    })
    .catch(console.error);
}
