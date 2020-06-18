chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message, sender)
})

window.addEventListener('message', ({data}) => {
  console.log(data)
})

window.postMessage({from: 'content-script', api: 'window.postMessage'}, '*')

chrome.runtime.sendMessage({from: 'content-script', api: 'runtime.sendMessage'})
