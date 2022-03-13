<template>
  <v-container fluid style="height: 100vh;" class="main pb-0 mb-0">
    <v-component style="height :100vh" align="center">
      <div class="car-info font-weight-bold ">Model 3</div>
      <v-row justify="center">
        <div class="over-info">
          <specsComp
            main="448km"
            small="Zasięg(WLTP)"
            fontSize="0.7em"
          ></specsComp>
          <specsComp
            main="225km/h"
            small="Maksymalna prędkość"
            fontSize="0.7em"
          ></specsComp>
          <specsComp
            main="5,6s"
            small="0-100 km/h"
            fontSize="0.7em"
          ></specsComp>
        </div>
      </v-row>

      <v-content align="start" class="pt-0 space">
        <v-container>
          <div class="spacer"></div>
          <h3>Rear wheel drive</h3>
          <v-row justify="center" class="mt-3">
            <v-btn
              height="3em"
              outlined="true"
              class="mt-3"
              width="80%"
              rounded="true"
            >
              <h4 class="mr-6">Standard Range Plus</h4>
              <h4>199.990zł</h4>
            </v-btn>
          </v-row>
        </v-container>

        <v-container>
          <div class="spacer"></div>
          <h3>All wheel drive</h3>
          <v-row justify="center" class="mt-3">
            <v-btn
              height="3em"
              outlined="true"
              class="mt-3"
              width="80%"
              rounded="true"
            >
              <h4 class="mr-6">Long Range</h4>
              <h4>244.990zł</h4>
            </v-btn>
            <v-btn
              height="3em"
              outlined="true"
              class="mt-3"
              width="80%"
              rounded="true"
            >
              <h4 class="mr-6">Performance</h4>
              <h4>269.990zł</h4>
            </v-btn>
          </v-row>
        </v-container>
      </v-content>

      <v-container>
        <v-content class="custom">
          <h1>Paint</h1>
          <v-row id="paint" class="mt-2" justify="center">
            <imageRoundButton
              v-for="color in colors"
              v-bind:key="color"
              v-bind:url="color"
              v-bind:parentId="'paint'"
            ></imageRoundButton>
          </v-row>
          <div class="small mt-6 font-weight-black">
            <small>Name and price</small>
          </div>
        </v-content>

        <v-content class="custom">
          <h1>Wheels</h1>
          <v-row id="wheels" class="mt-2" justify="center">
            <imageRoundButton
              v-for="wheel in wheels"
              v-bind:key="wheel"
              v-bind:url="wheel"
              v-bind:parentId="'wheels'"
            ></imageRoundButton>
          </v-row>
          <div class="small mt-6 font-weight-black">
            <small>Name and price</small>
          </div>
        </v-content>

        <v-content class="custom">
          <h1>Interrioir</h1>
          <v-row id="iColors" class="mt-2" justify="center">
            <imageRoundButton
              v-for="color in i_colors"
              v-bind:key="color"
              v-bind:url="color"
              v-bind:parentId="'iColors'"
            ></imageRoundButton>
          </v-row>
          <div class="small mt-6 font-weight-black">
            <small>Name and price</small>
          </div>
        </v-content>
      </v-container>
    </v-component>
  </v-container>
</template>

<script>
import ImageRoundButton from "./ImageRundButton.vue";
import SpecsComp from "./SpecsComp.vue";

export default {
  components: { SpecsComp, ImageRoundButton },

  data() {
    return {
      colors: [
        "/paint/paint_white.png",
        "/paint/paint_red.png",
        "/paint/paint_blue.png",
        "/paint/paint_black.png",
        "/paint/paint_silver.png",
      ],
      wheels: ["/wheels/wheels-18-aero.png", "/wheels/wheels-19-sport.png"],
      i_colors: [
        "/interrior/interior-black.png",
        "/interrior/interior-white.png",
      ],
    };
  },
  methods: {},
};
</script>

<style>
.main {
  overflow: scroll;
}

.over-info {
  display: grid;
  grid-template-columns: 30% 30% 30%;
}

.spacer {
  height: 50px;
}

.car-info {
  margin-top: 3em;
  font-size: 2.5em;
  margin-bottom: 1.5em;
}
.custom {
  margin-top: 15em;
  margin-bottom: 7em;
}
</style>
