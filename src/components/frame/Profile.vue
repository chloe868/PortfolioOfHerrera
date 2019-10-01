<template>
  <div id="background">
    <div id="prof">
    <center>
      <h1>Profile</h1>
    </center>
      <hr>
      <center>
        <b-card-img :src="require('assets/user.png')" id="image" class="rounded-0"></b-card-img>
        </center>
              <hr>
              <h4><label id="fname">Firstname:&nbsp;&nbsp;</label>{{firstname}}</h4>
              <h4><label id="fname">Lastname:&nbsp;&nbsp;</label>{{lastname}}</h4>
              <h4><label id="fname">Username:&nbsp;&nbsp;</label>{{username}}</h4>
             <h4 type="password"><label id="fname">Password:&nbsp;&nbsp;</label>{{password}}</h4>
            <button class="btn btn-primary btn-lg btn-block" @click = "update()">Update</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "assets/colors.scss";
#fname{
  color: $danger !important;
}

#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 5%;
  padding-bottom: 10%;
}
#prof {
  width: 30%;
  position: relative;
  left: 35%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
#image {
  width: 150px;
  height: 150px;
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