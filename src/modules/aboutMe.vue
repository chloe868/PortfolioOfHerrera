<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="firstCol">
          <img src="../assets/che.png">
          <br>
          <hr>
          <h2><b>Cherry Mae B. Herrera</b></h2>&nbsp;
          <div class="qoute">
            <vue-typed-js :strings="['Great things come from<br>hard work and perseverance.<br> No excuses.<h5>~ Kobe Bryant</h5>']">
              <h1 class="typing"></h1>
            </vue-typed-js>
          </div>
        </div>
      </div>
      <div class="facts col-md-6 cardlist">
        <h1><b>About Me</b></h1>
          <div class="card" style="width: 30rem;">
            <div class="card-body">
              <h1 class="card-title">Speechless</h1>
            </div>
          </div>
          <br>
          <div class="card text-center" style="width: 30rem;">
            <div class="card-body">
              <h1 class="card-title">Nothing to say</h1>
            </div>
          </div>
          <br>
          <div class="card text-center" style="width: 30rem;">
            <div class="card-body">
              <h1 class="card-title">Words</h1>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 700px) {
  .col-md-6 {
    width: 100%;
    height: 100%;
    margin-top: -25%;
    margin-bottom: -5%;
  }
}
.container {
  margin-top: 30vh;
}
.facts {
  margin-top:-15%;
  text-align: center;
}
.cardlist {
  padding: 55px;
}
.firstCol{
  margin-top: -30%;
  color: white;
  text-align: center;
}
img {
  width: 250px;
  border-radius: 50%;
}
.qoute {
  background-image: linear-gradient(to top, #0000005d 20%, #ffffffc9 130%);
  padding: 5px;
  border-radius: 20px;
  color: white;
  height: 30%;
  width: 100%;
}
hr {
  height: 1px;
  background-color: white;
}
h1 {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
  width: 100%;
}
h5 {
  font-style: italic;
}
.card {
  background-image: linear-gradient(to top, #0000005d 80%, #ffffffc9 90%);
  padding: 5px;
  border-radius: 20px;
  color: white;
  height: 25%;
  width: 100%;
}
</style>
<script>
export default {
    name: 'AboutMe', 
    data() {
        return {

        }
    },
    methods: {
    }   
};
</script>


