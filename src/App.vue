<template>
  <div id="app">
  <Header></Header>
  <AppBody></AppBody>
  <Sidebar>
  <div slot="header">header</div>
    <div slot="footer">footer</div>
    <span slot="toggle-icon">toggle-icon</span>
    <span slot="dropdown-icon">dropdown-icon</span>
  </Sidebar>
  </div>
</template>

<script>
import Header from 'components/frame/Header.vue'
import AppBody from 'components/frame/Body.vue'
import Sidebar from 'components/frame/Sidebar.vue'
//import Sidebar from 'modules/Dashboard.vue'
// import Login from './modules/Login.vue'
// import Register from './modules/Register.vue'

export default {
  name: 'app',
  components: {
    Header,
    AppBody,
    Sidebar
  }
}
</script>