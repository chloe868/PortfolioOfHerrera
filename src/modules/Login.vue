<template>
  <div id="background">
    <div id="divLogin">
          <div>
          <center>
            <h1>Login</h1>
          </center>
            <div class="card-body">
                <form @submit="onsubmit">
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-envelope"></i></span>
                        </div>
                        <input type="email" class="form-control" placeholder="username" name="username" v-model="input.username">

                    </div>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" class="form-control" placeholder="password" name="password" v-model="input.password">
                    </div>
                    <div class="form-group">
                     <button id="btnSubmit" type="submit" class="btn btn-primary btn-lg btn-block" @click='logins()'>Submit</button>
                    </div>
                </form>
            </div>
          </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 10%;
  padding-bottom: 15%;
}
#divLogin {
  width: 30%;
  position: relative;
  left: 35%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
</style>
<script>
import AUTH from 'services/auth'
import jquery from 'jquery'
export default {
    name: 'Login',
    auth: AUTH,   
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        Signup() {
            window.location.href = '/Register';
        },
        onsubmit(e) {
            e.preventDefault();
            AUTH.login(this.input.username, this.input.password)
        },
        logins() {            
            let link= 'http://localhost:3000/user'
                jquery.ajax({
                    url: link,
                    method: 'POST',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(response => {
                    alert(response.username)
                })
        }
    }   
};
</script>


