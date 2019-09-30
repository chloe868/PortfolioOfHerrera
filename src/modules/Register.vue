<template>
  <div id="background">
    <div id="divFrom">
      <center>
        <h1>Register</h1>
      </center>
        <div class="card-body">
          <form @submit="onsubmit">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="firstname" name="firstname" v-model="input.firstname" required/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="lastname" name="lastname" v-model="input.lastname" required/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-user"></i></span>
              </div>
              <input type="text" class="form-control" placeholder="username" name="username" v-model="input.username" required/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control" name="password" placeholder="password" v-model="input.password" required/>
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-key"></i></span>
              </div>
              <input type="password" class="form-control" name="confirmpassword" placeholder="confirm password" v-model="input.confirmpassword" required/>
            </div>
            <div class="form-group">
              <button id="btnSubmit" type="submit" class="btn btn-primary btn-lg btn-block">Register</button>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>
<style scoped>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 0.5%;
  padding-bottom: 15%;
}
#divFrom {
  width: 30%;
  position: relative;
  left: 35%;
  margin-top: 10%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
</style>
<script>
import AUTH from 'services/auth'
export default {
    name: 'register',
    auth:AUTH,
    data() {
        return {
            input: {
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                confirmpassword: ""
            }
        }
    },
    methods: {
        onsubmit(e) {
            e.preventDefault();
            sessionStorage.setItem("firstname", this.input.firstname)
            sessionStorage.setItem("lastname", this.input.lastname)
            sessionStorage.setItem("username", this.input.username)
            sessionStorage.setItem("password", this.input.password)
            sessionStorage.setItem("confirmpassword",this.input.confirmpassword)
            AUTH.register(this.input.username, this.input.password,this.input.confirmpassword)
        }
    }
}
</script>

