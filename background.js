chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender)
})

chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  console.log(message, sender)
})

setTimeout(() => {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {from: 'background-script', api: 'tabs.sendMessage'})
  })
}, 5000)
