# **extension-py-js**

This extension is created using [Rapydscript](https://openbase.com/js/rapydscript) (_subject to change_)

## **how to use?**

1. clone this repo
2. open extension manager page on chrome
3. enable developer mode
4. click on "Load unpacked"
5. navigate and choose the root folder

## **description of files & folders**

### [manifest.json](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/manifest.json)

---

The extension starts with a manifest.json file. It provides various important informations such as manifest version, nme of the extension, version name, various actions that need to be performed, language of the extension, description, various ucons that are used, and many more.

1. **background** - After installing the extension we need to instruct it about what to do next. We need to register the background script to tell the extension which file to refer to and how that file should behave.

   1.1 **service_worker** - lets Chrome know which file to scan for additional instructions, such as events it need to listen for.

2. **[permissions](https://developer.chrome.com/docs/extensions/reference/permissions/)** - All the APIs must be registered under this field.

   2.1 **[storage](https://developer.chrome.com/docs/extensions/reference/storage/)** - this API is used to store, retrieve, and track changes to user data  
   2.2 **[activeTab](https://developer.chrome.com/docs/extensions/mv3/manifest/activeTab/)** - gives the extension temporary access to the currently active tab when the user invokes the extension.
   2.3 **[scripting](https://developer.chrome.com/docs/extensions/reference/scripting/)** - execute scripts in various contexts. Here we use this API to use the executeScript() Runtime function to specify a function to be executed instead of a file.

3. **[action](https://developer.chrome.com/docs/extensions/reference/action/)** - This API is used to control the extension's icon in the Chrome Toolbar and the extension manager page.

   3.1 **default_popup** - the popup.html page is set as default_popup to define the actions that need to be performed when the extension button is clicked on the toolbar.

   3.2 **default_icon** - this field contains the paths for the images of various sizes for the toolbar icon.

4. **[icons](https://developer.chrome.com/docs/extensions/mv3/user_interface/#icon_size)** - Extensions also display images on the extension management page, the permissions warning, and favicon. The images are registered in the manifest under icons.

### [background.js](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/background.js)

> included in [functionality](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/tree/main/functionality) folder

---

The extension will need information from a persistent variable as soon as it is installed. We start by including a listener for runtime.onInstalled in the background.js script.

1. **[chrome.runtime](https://developer.chrome.com/docs/extensions/reference/runtime)** - The API is used to retrieve the background page, return details about the manifest, and listen for and respond to events in the extension lifecycle.

   1.1 **[runtime.onInstalled](https://developer.chrome.com/docs/extensions/reference/runtime#event-onInstalled)** - Inside the listener the extension will set a value using the storage API. This will allow multiple components of the extension to access the value and update it.

### [popup.html](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/user-interface/popup.html)

> included in [user-interface](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/tree/main/user-interface) folder

---

Extensions can have many kinds of forms of [user interface](https://developer.chrome.com/docs/extensions/mv3/user_interface/) such as a popup, tooltip, omnibox and many more. We will use a popup user interface. A button is used to set the background color of the popup-styled extension.

### [button.css](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/user-interface/button.css)

> included in [user-interface](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/tree/main/user-interface) folder

---

external CSS file for the popup. We define the styles of the button which is used as the background.

### [popup.js](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/blob/main/user-interface/popup.js)

> included in [user-interface](https://github.com/TARP-Fake-News-Identification-Portal/extension-py-js/tree/main/user-interface) folder

---

1. to add color to the button we request the color value from storage. The color is set as the background color of the button. This file is included in the script tag in popup.html.

2. we define a click eventListener for the changeColor button. When the button is clicked we inject setPageBackgroundColor function into the current page. The content of this function will be executed as [programmatically injected content script](https://developer.chrome.com/docs/extensions/mv3/content_scripts/#programmatic) inside the current page. It turns the background color of the page the same color as the button.
