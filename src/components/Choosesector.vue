<template>
  <!-- Default form login -->
  <div class="sectors">
    <img src="../Assests/logo.png" alt="">
    <h1>Choose preferred Sector </h1>
    <br>
<button v-on:click="psector"  class="btn btn-outline-secondary"  >PRIVATE</button>
<button v-on:click="gsector"  class="btn btn-outline-secondary">GOVERNMENT</button>
  </div>

  <!-- Default form login -->
</template>

<script>
export default{
  methods:{
    psector: function(){
    location.href = "/psector";
  },
      gsector: function(){
    location.href = "/gsector";
  }
  }
}
</script>


<style>
.sectors {
border: 5px solid black;
text-align: center;
width: 50%;
position:absolute;
right:500px;
top:290px;
}
</style>
