<template>
  <div>
    <div class="split background">
        <div class="image">
            <img src="../assets/che.png">
            <br>
            <hr>
            <h2><b>Cherry Mae B. Herrera</b></h2>
            <p>Motto or Principle.</p>
        </div>
         <div class="qoute">
           <hr>
           <br>
           <vue-typed-js :strings="['Great things come from<br>hard work and perseverance.<br> No excuses.']">
              <!-- <h1>Hello <span class="typing"></span></h1> -->
              <h1 class="typing"></h1>
            </vue-typed-js>
            <br>
            <h4>~ Kobe Bryant</h4>
            <hr>
        </div>
    </div>
  </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Split the screen in half */
.split {
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Control the left side */
.background {
  background-image: linear-gradient(to top, #000000 10%, #ffffff 107%);;
}

/* If you want the content centered horizontally and vertically */
.image {
  position: absolute;
  top: 50%;
  left: 25%;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.image img {
  width: 250px;
  border-radius: 50%;
}
.qoute {
  background-image: url("");
  color: white;
  float: right;
  margin-right: 10%;
  margin-top: 20%;
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
  text-align: right;
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


