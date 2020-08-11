<template>
  <div class="image split background">
    <button class="btn btn-primary" @click="downloadFile">Download</button>
      <center>
        <img src="../assets/Resume.png">
      </center>
  </div>
</template>
<style scoped>
.split {
  height: 100%;
  width: 100%;
}
.background {
  background-image: linear-gradient(to top, #000000c5 20%, #ffffff 107%);;
}
@media screen and (max-width: 700px) {
  .background {
    width: 100%;
    height: 100%;
  }
  img {
    height: 600px;
    width: 1500px;
  }
}
.image {
  top: 10%;
}
img {
  width: 60%;
}
.btn-primary {
    color: #fff;
    margin-top: 1%;
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


