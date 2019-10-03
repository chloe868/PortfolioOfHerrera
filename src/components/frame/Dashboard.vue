<template>
  <div id="background">
    <div id="dash">
    <center>
      <h1>Dashboard</h1>
      <hr>
      </center>
      <div id="card">
          <center>
            <b-card-img id="image" :src="require('assets/user.png')" class="rounded-0"></b-card-img>
                <h1>Hi {{firstname}}!</h1>
                <h3>Welcome!!!</h3>
        </center>
      </div>
    </div>
  </div>
</template>
<style scoped>
#card {
  margin-top: 30px;
  margin-left: 20px;
}
#image {
  width: 250px;
  height: 220px;
}
#background {
  background-image: url("https://www.itseducation.asia/assets/images/bg-1005.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  padding-top: 10%;
  padding-bottom: 6%;
}
#dash {
  width: 30%;
  position: relative;
  left: 35%;
  background-color: rgb(200, 207, 204);
  border-radius: 5%;
  padding: 2%;
}
</style>

<script>
export default {
  name: "card",
  data() {
    return {
      firstname: sessionStorage.getItem("firstname")
    };
  },
};
</script>