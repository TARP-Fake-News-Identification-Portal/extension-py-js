# extension-py-js

This extension is created using [Rapydscript](https://openbase.com/js/rapydscript) (_subject to change_)

## files

### [manifest.json](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/manifest.json)

---

The extension starts with a manifest.json file. It provides various important informations such as manifest version, nme of the extension, version name, various actions that need to be performed, language of the extension, description, various ucons that are used, and many more.

1. **background** - After installing the extension we need to instruct it about what to do next. We need to register the background script to tell the extension which file to refer to and how that file should behave.

   1.1 **service_worker** - lets Chrome know which file to scan for additional instructions, such as events it need to listen for

2. **permissions** - All the APIs must be registered under this field.

   2.1 **[storage](https://developer.chrome.com/docs/extensions/reference/storage/)** - this API is used to store, retrieve, and track changes to user data

### [background.js](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/background.js)

---

The extension will need information from a persistent variable as soon as it is installed. We start by including a listener for runtime.onInstalled in the background.js script.

1. **[chrome.runtime](https://developer.chrome.com/docs/extensions/reference/runtime)** - The API is used to retrieve the background page, return details about the manifest, and listen for and respond to events in the extension lifecycle.

   1.1 **[runtime.onInstalled](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled)** - Inside the listener the extension will set a value using the storage API. This will allow multiple components of the extension to access the value and update it.
