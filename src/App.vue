<template>
  <div id="app">
  <Header></Header>
  <Login></Login>
  <Register></Register>
  </div>
</template>

<script>
import Header from './components/frame/Header.vue'
import Login from './components/Login.vue'
//import Register from './components/Register.vue'
//import LoginPage from './components/LoginPage.vue'

export default {
  name: 'app',
  components: {
    Header,
    Login
  }
}
</script>