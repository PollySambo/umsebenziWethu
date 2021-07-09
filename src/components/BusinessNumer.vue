<template>
  <!-- Default form login -->
  <div class="signin">
<img src="../Assests/logo.png" alt="">

  <form>
    <p class="h4 text-center mb-4">Enter Business Number</p>
    <label for="defaultFormLoginEmailEx" class="grey-text">number</label>
    <input type="text"  class="form-control"/>

<br>
<button  v-on:click="t2"  type="button" class="btn btn-success">PROCEED</button>

  </form>
  </div>

  <!-- Default form login -->
</template>

<script>
export default {
  methods:{
    t2: function(){
    location.href = "/personaldetails";
  }

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
top:180px
}
</style>
