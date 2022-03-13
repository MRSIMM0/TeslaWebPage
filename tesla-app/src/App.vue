<template>
<v-app>
  <app-navigator></app-navigator>
<v-content class="ma-0 pa-0" transition="slide-x-transition">
  <router-view></router-view>
</v-content>
</v-app>
</template>

<script>
import AppNavigator from './components/AppNavigator.vue'


export default{

  components: { AppNavigator },

}
</script>

<style>
html {
  
    overflow: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
}
::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
}
/* Optional: show position indicator in red */
::-webkit-scrollbar-thumb {
    background: #FF0000;
}
</style>
