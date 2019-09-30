<template>
  <div id="background">
    <div id="card">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require('assets/user.png')" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Personal Info">
                <hr>
              <b-card-text>
                <h6>firstname: {{firstname}}</h6>
                <h6>lastname: {{lastname}}</h6>
                <h6>username: {{username}}</h6>
                <h6 type="password">Password: {{password}}</h6>
              </b-card-text>
              <button @click = "update()">Update</button>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<style>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 0.5%;
  padding-bottom: 15%;
}
#card {
  margin-top: 50px;
  margin-left: 380px;
}
</style>
<script>
import AUTH from 'services/auth'
export default {
  name: "Profile",
  data() {
    return {
      firstname: sessionStorage.getItem("firstname"),
      lastname: sessionStorage.getItem("lastname"),
      username: sessionStorage.getItem("username"),
      password: sessionStorage.getItem("password")
    };
  },
  methods:{
    update: function(){
      AUTH.update(this.firstname,this.lastname,this.username, this.password)
    }
  }
};
</script>