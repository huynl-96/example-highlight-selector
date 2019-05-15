$(document).ready(function () {
  $('body').children().mouseover(function (e) {
    chrome.storage.sync.get('state', function (result) {
      if (result.state == 'on') {
        $('.highlighted').removeClass('highlighted')
        $(e.target).addClass('highlighted')
      }
    })
  }).mouseout(function (e) {
    chrome.storage.sync.get('state', function (result) {
      if (result.state == 'on') {
        $(e.target).removeClass('highlighted')
      }
    })
  }).click(function (e) {
    chrome.storage.sync.get('state', function (result) {
      if (result.state == 'on') {
        const script = '<script src="https://sdk.uiza.io/iframe_api.js"/></script>'
        $('body').append(script)

        const link = '<iframe id="iframe-150865fd-791a-4b11-a874-6dad56410778" width="100%" height="100%" src="https://sdk.uiza.io/#/a2aaa7b2aea746ec89e67ad2f8f9ebbf/publish/150865fd-791a-4b11-a874-6dad56410778/embed?iframeId=iframe-150865fd-791a-4b11-a874-6dad56410778&env=prod&version=3&api=YXBpd3JhcHBlci1hcGkudWl6YS5jbw==&playerId=0d5013a7-849b-4243-900e-b631cae36228" frameborder="0" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" allow="autoplay; fullscreen; encrypted-media"></iframe>'
        $(e.target).append(link)
        $(e.target).removeClass('highlighted')
        chrome.runtime.sendMessage({ 'state': 'off' })
      }
    })
  })
})
