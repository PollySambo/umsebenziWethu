<template>
  <!-- Default form login -->
  <div class="sectors">
    <h4> <u>Private Sector Tenders You Qualify For</u> </h4>

    <ul style="list-style-type: none;">
 <li> <img src="../Assests/Tenders/Tender1.png" width="500" height="600"></li>
      <button v-on:click="t1" type="button" class="btn btn-primary">VIEW PDF</button>
      <button v-on:click="process"  type="button" class="btn btn-success">APPLY</button>
      <button type="button" class="btn btn-danger">DEMARCATED FOR YOUTH / WOMEN / PWD</button>

      <li> <img src="../Assests/Tenders/Tender1.png" width="500" height="600"></li>
      <button v-on:click="t2" type="button" class="btn btn-primary">VIEW PDF</button>
      <button v-on:click="process"  type="button" class="btn btn-success">APPLY</button>
      <button type="button" class="btn btn-danger">DEMARCATED FOR YOUTH / WOMEN</button>
      <hr>
      <li><img src="../Assests/Tenders/tender2.png"  width="500" height="600"></li>
      <button v-on:click="t3" type="button" class="btn btn-primary">VIEW PDF</button>
      <button v-on:click="process" type="button" class="btn btn-success">APPLY</button>
      <button type="button" class="btn btn-danger">DEMARCATED FOR PWD</button>

    </ul>

  </div>

  <!-- Default form login -->
</template>

<script>
export default{
  methods:{
    t1: function(){
    location.href = "http://102.37.123.153/Lists/eTenders/Attachments/2699/Access%20Control%20RFQ-RFQ-CMS-ITT-030433.pdf";
  },
      t2: function(){
    location.href = "http://102.37.123.153/Lists/eTenders/Attachments/931/EAM%2009-2020-21.pdf";
  },
      process: function(){
        location.href = "/trackingProcess"
      },
      t3: function(){
        location.href = "http://102.37.123.153/Lists/eTenders/Attachments/2419/Q43-02-2020-21%20DOCUMENT.pdf"
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
