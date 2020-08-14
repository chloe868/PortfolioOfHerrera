<template>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/abang.png">
      <div class="card-body">
        <h5 class="card-title">Abang</h5>
        <p class="card-text">Abang is a web application which helps tourists both local and foreign to rent a specific things. 
          Things just like car, van, bicycle, motorcycle, or anything that they want to rent to any company rentals. 
          The programming languages that was being used in this web application are the following: Vue.js for the Frontend, Node.js for the Backend and MongoDB serves as our Database.
        </p>
      </div>
    </div>
  </div>
  <br>
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/pn.png">
      <div class="card-body">
        <h5 class="card-title">Parent's Counterpart Management System</h5>
        <p class="card-text">Parent's Counterpart Management System is a system which bridges PN students and Admin Staff. 
          This application makes the monthly fee of every students be easily traced and be followed-up every month. 
          The programming languages that was being used in this web application are the following: XHTML for the Frontend, PHP Laravel for the Backend and MySQL serves as our Database. </p>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
@media screen and (min-width: 1000px) {
  .col-md-6 {
    width: 100%;
    height: 100vh;
    margin-top: -25%;
    margin-bottom: -5%;
  }
}
.row {
  padding: 5%;
  
}
.card-img-top {
  height: 300px;
}
.card-body {
  height: 250px;
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


