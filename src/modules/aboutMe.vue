<template>
 <div class="background split">
    <div class="container">
      <div class="row">
          <div class="col-md-6">
            <div class="firstCol">
              <img src="../assets/che.png">
              <br>
              <hr>
              <h2><b>Cherry Mae B. Herrera</b></h2>
              <br>
              <div class="qoute">
                <hr>
                <vue-typed-js :strings="['Great things come from<br>hard work and perseverance.<br> No excuses.<h4>~ Kobe Bryant</h4>']">
                  <h1 class="typing"></h1>
                </vue-typed-js>
                <hr>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="facts">
              <center><h1>About Me</h1>
              <div>
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
              <div class="card text-right" style="width: 30rem;">
                <div class="card-body">
                  <h1 class="card-title">Words</h1>
                </div>
              </div>
              </div>
              </center>
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
    overflow-x: visible;
    margin-top: 25%;
    margin-bottom: -5%;
  }
}
.container {
  margin-top: 25%;
}
.facts {
  margin-top:-20%;
}
.split {
  height: 100%;
  width: 100%;
  position: fixed;
}
.background {
  background-image: linear-gradient(to top, #000000c5 20%, #ffffff 107%);
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
  background-image: linear-gradient(to top, #0000005d 20%, #ffffffc9 107%);
  padding: 5px;
  border-radius: 20px;
  color: white;
  height: 50%;
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
h4 {
  font-style: italic;
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


