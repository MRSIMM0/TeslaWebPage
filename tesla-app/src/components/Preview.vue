<template>
<div>
  <v-container v-bind:style="{ 'background-image': 'url('+bg+')' }"  class="main pt-0 pl-0">
    
      <v-content fill-height  class=" pt-0 pl-0" >
          <!-- <v-row 
      justify="center" style="margin-top:50vh" align="center">
          <button style="margin-left:5em" class="circle-btn">
           <img class="btn btn-left" src="../../public/Arrow-down.svg"/>
           </button>
            <v-spacer></v-spacer>
           <button  style="margin-right:5em" class="circle-btn">
           <img class="btn btn-right" src="../../public/Arrow-down.svg"/>
           </button>
          </v-row> -->
  
      </v-content>
  </v-container>
</div>
</template>

<script>




export default {
  mounted (){

},
props:{url:'url'},
   data() {
    return {
   
  bg: require("../assets/"+this.url)

    
  }},
components: {

},


  
}
</script>

<style scoped>

.main{

    height:100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

}
.btn{
  display:flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  padding-top:3px;
  

  }

.btn-left{
 transform:rotate(90deg);

}
.btn-right{
 transform:rotate(-90deg);

}


.circle-btn{
  display:flex;
  text-align: center;
  height:40px;
  aspect-ratio: 1/1;
  border: 3px solid;
  font-size:2em;
  justify-content: center;
  align-items: center;
  border-radius:100%;
}
.circle-btn:hover{
  background-color:rgb(218, 218, 218);
}
.circle-btn:active{
  background-color:rgb(185, 185, 185);
}

</style>