<template>
  <div class="split">
    <div class="image background">
      <center>
        <img src="../assets/Resume.png">
        <br>
        <button class="btn btn-outline-info" @click="downloadFile"><i class="fa fa-download"></i> Download</button>
      </center>
    </div>
  </div>
</template>
<style scoped>
@media screen and (max-width: 800px) {
  img[data-v-5be1ad4e] {
    width: 95%;
  }
  button[data-v-5be1ad4e] {
    width: 25%;
  }
  .image[data-v-5be1ad4e] {
    top: 8%;
    position: absolute;
    width: 100%;
    height: 90vh;
  }
}
button {
  width: 20%;
  margin-bottom: 50px;
}
.split {
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
}
.background {
  background-image: linear-gradient(to top, #000000c5 20%, #ffffff 107%);
  height: 100%;
}
.image {
  top: 8%;
  position: absolute;
  width: 100%;
  height: 125vh;
}
img {
  width: 60%;
}
</style>
<script>
import axios from "axios";
export default {
    name: 'Resume', 
    data() {
        return {
          fileUrl: require('../assets/Resume.png') 
        }
    },
    methods: {
      downloadFile(){
        axios({
          url: this.fileUrl,
          method: 'GET',
          responseType: 'blob',
        }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');
          fileLink.href = fileURL;
          fileLink.setAttribute('download', 'resume.png');
          document.body.appendChild(fileLink);
          fileLink.click();
        });
      } 
  }  
};
</script>


