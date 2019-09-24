<template>
  <div id="app">
  <Header></Header>
  <AppBody></AppBody>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'

// import Login from './modules/Login.vue'
// import Register from './modules/Register.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody
  }
}
</script>