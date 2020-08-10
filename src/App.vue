<template>
  <div>
    <div>
      <Header></Header>
      <AppBody></AppBody>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "components/frame/Header.vue";
import AppBody from "components/frame/Body.vue";
import Footer from "components/frame/Footer.vue";
export default {
  name: "app",
  components: {
    Header,
    AppBody,
    Footer
  }
};
</script>