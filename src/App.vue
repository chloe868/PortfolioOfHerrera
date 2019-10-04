<template>
  <div id="app">
    <Header></Header>
    <AppBody></AppBody>
    <Sidebar v-show ="$route.path === '/dashboard' || $route.path === '/add' || $route.path === '/UpdateProf' || $route.path === '/Profile'"></Sidebar>
  </div>
</template>

<script>
import Header from "components/frame/Header.vue";
import AppBody from "components/frame/Body.vue";
import Sidebar from "components/frame/Sidebar.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    Sidebar
  }
};
</script>