<template>
  <div id="Header">
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item @click="redirect('/Home')">About Me</b-nav-item>
          <b-nav-item @click="redirect('/Resume')">Resume</b-nav-item>
          <b-nav-item @click="redirect('/Projects')">Projects</b-nav-item>
          <b-nav-item @click="redirect('/Contact')">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped lang="scss">

</style>
<script>
import ROUTER from 'router';
export default {
    data(){
      return{
      }
    },
    methods: {
        redirect(router){
            ROUTER.push(router)
        }
    }
}
</script>
