<template>

  <div id="app" >
    <!-- <img src="./Assests/logo.png" alt="logo"> -->
    <router-view></router-view>
  </div>

</template>

<script>
import Home from './components/Home.vue'
import Signin from './components/SignIn.vue'
import Register from './components/Register.vue'


export default {
  components: {
    'Home': Home,
    'Signin': Signin,
    'Register': Register
  },
 data () {
  }
}
</script>


<style>
body{
    font-family: 'Times New Roman', Times, serif;
    font-size: 30px;
}
</style>
