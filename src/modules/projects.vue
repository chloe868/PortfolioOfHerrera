<template>
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/abang.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <br>
  <div class="col-sm-6">
    <div class="card">
      <img class="card-img-top" src="../assets/pn.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
@media screen and (max-width: 700px) {
  .col-md-6 {
    width: 100%;
    height: 100%;
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


