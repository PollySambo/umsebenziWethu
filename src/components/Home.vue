<template>

<div id="home">
   <img src="../Assests/logo.png" alt="">

    <h2> home page</h2>
    <br>
    <ul>
      <button v-on:click="t1" type="button" class="btn btn-primary btn-lg">Register</button>
      <button v-on:click="t2" type="button" class="btn btn-secondary btn-lg">Sign In</button>
    </ul>

  </div>
</template>


<script>
export default {
  methods:{
    t1: function(){
    location.href = "/register";
  },
  t2: function(){
    location.href = "/signin";
  }
}
}
</script>


<style>
#home {
border: 5px solid black;
text-align: center;
width: 50%;
position:absolute;
right:500px;
top:190px;
}

</style>
