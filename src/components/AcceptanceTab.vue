<template>
  <!-- Default form login -->
<div class="signin">

	<div class="btn-group" role="group" aria-label="...">
	  <button type="button" class="btn btn-primary button-class1">ACCEPT</button>
	  <button type="button" class="btn btn-default button-class2">DECLINE</button>


<button @click="handleClick($index, $parent.$index)"
   v-bind:class="{ 'green': isGreen($index, $parent.$index), 'blue': isBlue($index, $parent.$index)}">
            {{slot}}
</button>

	</div>

</div>

  <!-- Default form login -->
</template>

<script>
export default{
methods: {
  handleClick: function(index, parent){
      this.turn = !this.turn;
      this.turn ? this.board[parent][index] = greenDisk : this.board[parent][index]= blueDisk;
    },
isGreen: function(index,parent){
 return (this.board[parent][index] == greenDisk);
},
isBlue: function(idx1,idx2){
 return !(this.turn == null) && (this.board[idx2][idx1] == blueDisk);
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
top:1500px;
}
</style>
