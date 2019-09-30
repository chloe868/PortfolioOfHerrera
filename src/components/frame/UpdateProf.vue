<template>
  <div id="background">
    <div id="Update">
          <div class="text-center h4"><b>UPDATE INFO</b></div>
          <div class="card-body">
            <div class="form-group">
              <label for="firstname" class="bmd-label-floating">Firstname</label>
              <input type="text" class="form-control" id="firstname" v-model="firstname" />
            </div>
            <div class="form-group">
              <label for="lastname" class="bmd-label-floating">Lastname</label>
              <input type="text" class="form-control" id="lastname" v-model="lastname" />
            </div>
            <div class="form-group">
              <label for="username" class="bmd-label-floating">Username</label>
              <input type="text" class="form-control" id="username" v-model="username" />
            </div>
            <div class="form-group">
              <label for="password" class="bmd-label-floating">Password</label>
              <input type="password" class="form-control" id="passw" v-model="password" />
            </div>
            <center>
              <button type="button" class="btn btn-outline-success login-btn" id="btnLogin" @click="save">Save changes</button>
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
        sessionStorage.setItem("username", this.username),
        sessionStorage.setItem("Password", this.password),
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
  padding-top: 0.5%;
  padding-bottom: 15%;
}
#Update {
  width: 30%;
  position: relative;
  left: 35%;
  margin-top: 10%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
</style>