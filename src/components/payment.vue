<template>
  <!-- Default form login -->
  <div class="signin">

    <img src="../Assests/logo.png" alt="">

    <button v-on:click="docs"  type="button" class="btn btn-secondary">DOCUMENTS</button>
<button v-on:click="personal"  type="button" class="btn btn-secondary">PERSONAL DETAILS</button>
<button v-on:click="home"  type="button" class="btn btn-secondary">LOGOUT</button>

    <h4>Payments</h4>
    <hr>
    <strong> Reference No. 2292</strong> <button v-on:click="process" type="button" class="btn btn-success">SUCCESSFUL</button>
    <br>
    <br>

    <strong> Reference No. 2293</strong> <button v-on:click="t2" type="button" class="btn btn-primary">PENDING</button>
  </div>

  <!-- Default form login -->
</template>

<script>
export default {
  methods:{
    docs: function(){
    location.href = "/documents";
  },
     personal: function(){
    location.href = "/personalDetails";
    },
     payments: function(){
    location.href = "/";
    },
  }
  }
</script>

<style>

.signin {
border: 5px solid black;
text-align: center;
width: 50%;
position:absolute;
right:500px;
top:30px;
}
</style>
