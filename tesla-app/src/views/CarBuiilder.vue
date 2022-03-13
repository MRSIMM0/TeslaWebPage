<template>
  <div class="main-gird">
    <v-carousel style="position:sticky" hide-delimiters="true" height="100vh">
      <v-carousel-item v-for="item in items" v-bind:key="item">
        <preview v-bind:url="item"></preview>
      </v-carousel-item>
    </v-carousel>

    <v-content class="pt-0">
      <buildSide></buildSide>
    </v-content>
  </div>
</template>

<script>
import Preview from "../components/Preview.vue";
import BuildSide from "../components/BuildSide.vue";
export default {
  components: { Preview, BuildSide },
  data() {
    return {
      items: [
        "tesla-build.png",
        "model3-side.jpg",
        "model3-back.jpg",
        "model3-rims.jpg",
        "model3-interrior.jpg",
      ],
    };
  },
};
</script>

<style>
.main-gird {
  height: 100vh;
  display: grid;
  grid-template-columns: 75vw 25vw;
}
</style>
