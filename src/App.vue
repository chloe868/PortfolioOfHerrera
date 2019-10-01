<template>
  <div id="app">
    <Header
      v-show="$route.path =='/Login' || $route.path == '/Register' || $route.path == '/'? true: false"
    ></Header>
    <AppBody></AppBody>
      <Sidebar
        v-show="$route.path === '/dashboard' || $route.path === '/Profile' || $route.path === '/add' || $route.path === '/UpdateProf'  ? true: false"
      >
      </Sidebar>
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