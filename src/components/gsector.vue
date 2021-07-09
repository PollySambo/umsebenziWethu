<template>
  <!-- Default form login -->
  <div class="sectors">

    <img src="../Assests/logo.png">
    <h4>Goverment  Tenders You Qualify For</h4>
    <ul style="list-style-type: none;">
      <li> <img src="../Assests/Tenders/Tender3.png" width="500" height="600"></li>
      <button v-on:click="t1" type="button" class="btn btn-primary">VIEW PDF</button>
      <button v-on:click="process" type="button" class="btn btn-success">APPLY</button>

      <button type="button" class="btn btn-danger">DEMARCATED FOR YOUTH / WOMEN / PWD</button>
      <hr>
      <li><img src="../Assests/Tenders/tender4.png"  width="500" height="600"></li>
      <button v-on:click="t2" type="button" class="btn btn-primary">VIEW PDF</button>
      <button v-on:click="process" type="button" class="btn btn-success">APPLY</button>

      <button type="button" class="btn btn-danger">DEMARCATED FOR YOUTH</button>
    </ul>

  </div>

</template>

<script>
export default{
  methods:{
    t1: function(){
    location.href = "http://102.37.123.153/Lists/eTenders/Attachments/1058/Q62-01-2020-21.pdf";
  },
      t2: function(){
    location.href = "http://102.37.123.153/Lists/eTenders/Attachments/562/RFQ%20CRAC-ELF-35291%20Tender%20Doc.pdf";
  },
      process: function(){
        location.href = "/trackingProcess"
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
top:150px;
}
</style>
