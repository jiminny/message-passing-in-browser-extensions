<template>
  <main></main>
</template>

<script>
const EXTENSION_ID = 'dndnjmnldcbbmiioelkmhnljgimglnef'

export default {
  created () {
    window.addEventListener('message', ({data}) => {
      console.log(data)
    })

    window.postMessage({from: 'webpage', api: 'window.postMessage'}, '*')

    window.chrome.runtime.sendMessage(EXTENSION_ID, {from: 'webpage', api: 'runtime.sendMessage'})
  }
}
</script>
