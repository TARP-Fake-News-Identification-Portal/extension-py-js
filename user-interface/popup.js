chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
  chrome.storage.sync.set({ key1: tab.url });
});

chrome.tabs.create("https://www.google.com");
