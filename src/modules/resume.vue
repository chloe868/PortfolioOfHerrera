<template>
  <div>
    <div class="split background">
        <div class="image">
          <center>
            <img src="../assets/Resume.png">
            </center>
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
}
.background {
  background-image: linear-gradient(to top, #000000c5 20%, #ffffff 107%);;
}
.image {
  top: 8%;
  position: absolute;
  width: 100%;
}
img {
  width: 60%;
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


