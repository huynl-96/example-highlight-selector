chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.storage.sync.get('state', function(result) {
    if (result.state === 'off') chrome.tabs.insertCSS(tab.id, { file: 'styles/styles.css' })

    changeState(result.state === 'on' ? 'off' : 'on')
  })
})

chrome.runtime.onMessage.addListener(
  function(request) {
    if (request.state) changeState(request.state)
  }
)

function changeState (state) {
  chrome.storage.sync.set({ state: state })
  chrome.browserAction.setTitle({ title: `Highlight Selector (${state})` })
}
