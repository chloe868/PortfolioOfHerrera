<template>
  <div class="row">
    <div class="split background">
        <div class="image">
            <img src="../assets/che.png">
            <br>
            <hr>
            <h2><b>Cherry Mae B. Herrera</b></h2>
            <p>Motto or Principle.</p>
        </div>
         <div class="qoute col-md-5">
           <hr>
           <br>
           <vue-typed-js :strings="['Great things come from<br>hard work and perseverance.<br> No excuses.<h4>~ Kobe Bryant</h4>']">
              <h1 class="typing"></h1>
            </vue-typed-js>
            <hr>
        </div>
    </div>
  </div>
</template>
<style scoped>
.split {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

.background {
  background-image: linear-gradient(to top, #000000c5 20%, #ffffff 107%);
}

.image {
  position: absolute;
  top: 50%;
  left: 25%;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
}

.image img {
  width: 250px;
  border-radius: 50%;
}
.qoute {
  background-image: linear-gradient(to top, #00000065 20%, #ffffff 107%);
  padding:20px;
  border-radius: 20px;
  color: white;
  float: right;
  margin-right: 5%;
  margin-top: 10%;
}
hr {
  height: 1px;
  background-color: white;
}
h1 {
  font-style: italic;
  font-family: "Times New Roman", Times, serif;
}
h4 {
  /* text-align: right; */
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


