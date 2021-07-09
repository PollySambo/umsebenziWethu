<template>
  <!-- Default form login -->
  <div class="signin">

    <img src="../Assests/logo.png" alt="">

  <form>
    <p class="h4 text-center mb-4">Sign in</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormLoginEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>

<hr>
<button  v-on:click="t2"  type="button" class="btn btn-success">LOGIN</button>

  </form>
  </div>

  <!-- Default form login -->
</template>

<script>
export default {
  methods:{
    t2: function(){
    location.href = "/businessnumber";
  }
  // t3: function(){
  //   location.href = "/signin";
  // },
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
top:180px;
}
</style>
