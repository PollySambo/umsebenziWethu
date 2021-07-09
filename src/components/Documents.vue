<template>
  <!-- Default form login -->
  <div class="signin">

    <img src="../Assests/logo.png" alt="">

<br>
<img src="../Assests/Documents/docs.png" alt="">

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
