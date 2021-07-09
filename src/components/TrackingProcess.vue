<template>



<ul class="checkmark">

  <img src="../Assests/logo.png" alt="">

<button v-on:click="docs"  type="button" class="btn btn-secondary">DOCUMENTS</button>
<button v-on:click="status"  type="button" class="btn btn-secondary">TENDER ACCEPTANCE STATUS</button>
<button v-on:click="personal"  type="button" class="btn btn-secondary">PERSONAL DETAILS</button>
<button v-on:click="payments"  type="button" class="btn btn-secondary">PAYMENTS</button>

  <h2>Process tracking for Tender applications</h2>

<hr>
  <b><h2>Process for Reference No. 2293</h2></b>
  <br>
    <li>Administrative pre-qualification verification</li>
    <li>Technical Mandatory requirement evaluation</li>
    <li>Technical Functionality requirement evaluation</li>
    <li>Technical Proof of Concept requirement evaluation</li>
    <li>Special Conditions of Contract verification</li>
    <li>Price / B-BBEE evaluation</li>
    <button type="button" class="btn btn-warning">PENDING</button>

<br>
<br>
<ul class="checkmark2">
<hr>
 <h2>Process for Reference No. 2292</h2>
  <br>
    <li>Administrative pre-qualification verification</li>
    <li>Technical Mandatory requirement evaluation</li>
    <li>Technical Functionality requirement evaluation</li>
    <li>Technical Proof of Concept requirement evaluation</li>
    <li>Special Conditions of Contract verification</li>
    <li>Price / B-BBEE evaluation</li>

    <button type="button" class="btn btn-success">COMPLETED</button>
</ul>
</ul>
</template>


<script>
export default {
  methods:{
    docs: function(){
    location.href = "/documents";
  },
  status: function(){
    location.href = "/accept";
    },
     personal: function(){
    location.href = "/personalDetails";
    },
     payments: function(){
    location.href = "/payment";
    },
  }
}
</script>


<style>
.checkmark {
border: 5px solid black;
text-align: center;
width: 50%;
position:absolute;
right:500px;
top:180px;
}

ul.checkmark li {
  font-size: 20px;
  margin-bottom: 1em;
  list-style-type: none;
  padding: 0.25em 0 0 2.5em;
  position: relative;
  /* font-size: 30px; */
}
ul.checkmark li:before {
  content: " ";
  display: block;
  border: solid 0.8em red;
  border-radius: 0.8em;
  height: 0;
  width: 0;
  position: absolute;
  left: 0.5em;
  top: 40%;
  margin-top: -0.5em;
}
ul.checkmark li:after {
  content: " ";
  display: block;
  width: 0.3em;
  height: 0.6em;
  border: solid #fff;
  border-width: 0 0.2em 0.2em 0;
  position: absolute;
  left: 1em;
  top: 40%;
  margin-top: -0.2em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}






ul.checkmark2 li {
  font-size: 20px;
  margin-bottom: 1em;
  list-style-type: none;
  padding: 0.25em 0 0 2.5em;
  position: relative;
  /* font-size: 30px; */
}
ul.checkmark2 li:before {
  content: " ";
  display: block;
  border: solid 0.8em green;
  border-radius: 0.8em;
  height: 0;
  width: 0;
  position: absolute;
  left: 0.5em;
  top: 40%;
  margin-top: -0.5em;
}
ul.checkmark2 li:after {
  content: " ";
  display: block;
  width: 0.3em;
  height: 0.6em;
  border: solid #fff;
  border-width: 0 0.2em 0.2em 0;
  position: absolute;
  left: 1em;
  top: 40%;
  margin-top: -0.2em;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}



</style>

