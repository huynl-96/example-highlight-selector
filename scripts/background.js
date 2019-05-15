chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.executeScript(tab.id, { file: 'scripts/highlight.js' })
  chrome.tabs.insertCSS(tab.id, {file:'styles/styles.css'})
})
