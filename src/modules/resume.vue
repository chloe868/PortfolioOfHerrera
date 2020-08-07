<template>
  <div>
    <div class="split background">
        <div class="image">
            <img src="../assets/che.png">
            <h2>Cherry Mae Herrera</h2>
            <p>Motto or Principle.</p>
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
  top: 45%;
  left: 20%;
  color: white;
  transform: translate(-50%, -50%);
  text-align: center;
}

/* Style the image inside the centered container, if needed */
.image img {
  width: 250px;
  border-radius: 50%;
}
</style>
<script>
export default {
    name: 'Resume', 
    data() {
        return {

        }
    },
    methods: {
    }   
};
</script>


