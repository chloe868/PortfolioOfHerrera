<template>
<div>
  <b-navbar toggleable="lg" class="navbar navbar-expand-lg navbar-light" style="background-color:rgb(200, 207, 204);">
    <b-navbar-brand href="#">KAT-ON</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" @click="redirect('login')">Login</b-nav-item>
        <b-nav-item href="#" @click="redirect('register')">Register</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="form-control mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
