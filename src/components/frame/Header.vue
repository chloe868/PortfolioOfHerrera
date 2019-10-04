<template>
<div>
 <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#" class="title"><b>KAT-ON</b></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav v-if="auth.user===null">
      <b-navbar-nav  class="nav navbar-nav ml-auto">
        <b-nav-item  v-on:click = "redirect('/Register')">Register</b-nav-item>
        <b-nav-item v-on:click = "redirect('/Login')">Login</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<style scoped lang="scss">
@import"assets/colors.scss";
$titleColor:red;
.title{
  color: $secondary !important;
}
</style>
<script>
import ROUTER from 'router';
import AUTH from 'services/auth';
export default {
    data(){
      return{
        auth: AUTH
      }
    },
    methods: {
        redirect(router){
            ROUTER.push(router)
        }
    }
}
</script>
