<template>
  <div class="split">
    <div class="image background">
      <center>
        <img src="../assets/Resume.png">
        <button v-if="show" class="btn btn-primary" @click="downloadFile"><i class="fa fa-download"></i> Download</button>
      </center>
    </div>
  </div>
</template>
<style scoped>
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: red;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}

#myBtn:hover {
  background-color: #555;
}
button {
  width: 56.5%;
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
    name: 'Contact', 
    data() {
        return {
          fileUrl: require('../assets/Resume.png'),
          show: false
        }
    },
    mounted () {
      this.scroll()
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
        })
      },
      scroll () {
        window.onscroll = () => {
          let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
          if (bottomOfWindow) {
            this.show = true
            console.log('klasjdflkajlskdjf')
          }
        }
      }
  }  
}
</script>


