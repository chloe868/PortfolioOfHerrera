<template>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/abang.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Abang</h5>
        <p class="card-text">Abang is a web application which helps tourists both local and foreign to rent a specific things. 
          Things just like car, van, bicycle, motorcycle, or anything that they want to rent to any company rentals. 
          The language that was being used in this web application are the following: Node.js and Vue.js as our frontend and MongoDB as our backend.
        </p>
      </div>
    </div>
  </div>
  <br>
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/pn.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Parent's Counterpart Management System</h5>
        <p class="card-text">Parent's Counterpart Management System is a system which bridges PN students and Admin Staff. 
          This application makes the monthly fee of every students be easily traced and be followed-up every month. 
          Through this system as well, it helps the admin not to </p>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
@media screen and (max-width: 700px) {
  .col-md-6 {
    width: 100%;
    height: 100vh;
    margin-top: -25%;
    margin-bottom: -5%;
  }
}
.row {
  padding: 3%;
}
</style>
<script>
export default {
    name: 'Projects', 
    data() {
        return {

        }
    },
    methods: {
    }   
};
</script>


