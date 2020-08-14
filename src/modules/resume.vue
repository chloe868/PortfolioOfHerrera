<template>
  <div>
    <div class="split">
      <div class="image background">
        <center>
          <img src="../assets/Resume.png">
          <br>
          <button class="btn btn-outline-info" @click="downloadFile"><i class="fa fa-download"></i> Download</button>
        </center>
      </div>
    </div>
  </div>
</template>
<style scoped>
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


