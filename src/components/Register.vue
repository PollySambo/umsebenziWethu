<template>
  <!-- Default form register -->
  <form class="signin">
<img src="../Assests/logo.png" alt="">

    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Your name</label>
    <input type="text" id="defaultFormRegisterNameEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterEmailEx" class="grey-text">Your email</label>
    <input type="email" id="defaultFormRegisterEmailEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterConfirmEx" class="grey-text">Confirm your email</label>
    <input type="email" id="defaultFormRegisterConfirmEx" class="form-control"/>
    <br/>
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Your password</label>
    <input type="password" id="defaultFormRegisterPasswordEx" class="form-control"/>
    <div class="text-center mt-4">

      <button type="button" class="btn btn-success">REGISTER</button>


      <!-- <button v-on:click="t3" type="button" class="btn btn-success">SIGNIN</button> -->

    </div>
<br>
    <button v-on:click="t2" type="button" class="btn btn-secondary btn-lg">DON'T HAVE A COMAPNY? REGISTER HERE</button>
  </form>
  <!-- Default form register -->
</template>


<script>
export default {
  methods:{
    t2: function(){
    location.href = "http://www.cipc.co.za/index.php";
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
top:160px;
}
</style>
