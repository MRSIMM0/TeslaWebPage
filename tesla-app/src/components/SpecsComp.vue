<template>
  <div v-bind:style="{'font-size': fontSize ,'grid-template-rows': gridTemplateRows}" class="grid"> 
         <v-row class="text-start"  justify="center">
            <h1>{{main}}</h1>
           
         </v-row>
         <div class="spacer"></div>
         <div class="text-center">
          <small class="small">{{small}}</small>
          </div>
         </div>
</template>

<script>
export default {
mounted(){

},
    props:{
        main: 'main',
        small: 'small',
        fontSize: 'fontSize',
        gridTemplateRows: 'grid'
    }

}
</script>

<style>
.grid{
    font-size: 0.7em;
    display: grid;
    grid-template-rows:10px 12px;
}
</style>