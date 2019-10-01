<template>
  <div id="background">
    <div id="Updateprof" class="col-sm-4">
    <center>
      <h1>Update Profile</h1>
    </center>
      <hr>
      <div class="container">
        <center>
        <b-card-img :src="require('assets/user.png')" id="image" class="rounded-0"></b-card-img>
        </center>
          <hr>
            <div class="form-group">
              <label for="firstname">Firstname</label>
              <input type="text" class="form-control" id="firstname" v-model="firstname" />
            </div>
            <div class="form-group">
              <label for="lastname">Lastname</label>
              <input type="text" class="form-control" id="lastname" v-model="lastname" />
            </div>
            <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username" v-model="username" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="passw" v-model="password" />
            </div>
          <center>
            <button type="button" class="btn btn-primary btn-lg btn-block" id="btnLogin" @click="save">Save changes</button>
          </center>
          </div>
      </div>
    </div>
</template>
<script>
import AUTH from 'services/auth'
export default {
  name: "UpdateProfile",
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    };
  },
  methods: {
    save: function(e) {
      e.preventDefault();
        sessionStorage.setItem("firstname", this.firstname),
        sessionStorage.setItem("lastname", this.lastname),
        sessionStorage.setItem("username", this.username),
        sessionStorage.setItem("password", this.password),
        AUTH.save(this.firstname, this.lastname, this.username, this.password);
    }
  }
};
</script>
<style scoped>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: .3%;
  padding-bottom: 5%;
}
#Updateprof {
  width: 30%;
  position: relative;
  left: 35%;
  margin-top: 2%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
#image {
  width: 150px;
  height: 150px;
}
</style>