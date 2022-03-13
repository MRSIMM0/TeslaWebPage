<template>
  <v-container fluid class="promo ">
    <v-content style="margin-top:8em">
      <div class="text-center">
        <h1 class="car-brand">Model 3</h1>
        <small class="model">Long Range</small>
      </div>

      <v-row justify="center">
        <div class="specs">
          <div class="grid">
            <v-row class="text-start" justify="center">
              <img class="speed" src="../../public/speed.svg" />
              <h1 class="time">3,3s</h1>
            </v-row>
            <div class="spacer"></div>
            <div class="text-center">
              <small class="small"> 0 - 100 km/h</small>
            </div>
          </div>

          <div class="grid">
            <v-row class="text-start" justify="center">
              <h1>614 km</h1>
            </v-row>
            <div class="spacer"></div>
            <div class="text-center">
              <small class="small"> Range (WLTP)</small>
            </div>
          </div>

          <div class="grid">
            <v-row class="text-start" justify="center">
              <h1 class="time">AWD</h1>
            </v-row>
            <div class="spacer"></div>
            <div class="text-center">
              <small class="small ">Dual motor</small>
            </div>
          </div>
          <v-btn
            color="transparent"
            @click="redirectBuild"
            rounded="true"
            height="45px"
            class="font-weight-bold black--text ml-3"
            >Order now</v-btn
          >
        </div>
      </v-row>

      <v-row justify="center">
        <img
          @click="specScroll"
          class="arrow"
          src="../../public/Arrow-down.svg"
        />
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
export default {
  methods: {
    specScroll: function() {
      const el = document.getElementById("car-specyfication");

      el.scrollIntoView({ behavior: "smooth" });
    },
    redirectBuild: function() {
       this.$router.push("/build");
       window.location.reload();
    },
  },
};
</script>

<style>
.promo {
  background: url("../../public/model3.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: local;
  background-position: center;
  width: 100%;
  height: 100vh;
}

.car-brand {
  font-size: 3em;
  font-weight: bolder;
}
.specs {
  margin-top: 58vh;
  display: grid;
  grid-template-columns: 100px 100px 100px 150px;

  grid-column-gap: 100px;
}
.speed {
  height: 3em;
}
.time {
  padding-top: 2px;
  margin-left: 4px;
  font-size: 2em;
}
.small {
  font-size: 15px;
}
.spacer {
  height: 5px;
}
.grid {
  display: grid;
  grid-template-rows: 20px 12px 2em;
}
.arrow {
  position: absolute;
  height: 2em;
  animation: moveArrow 6s infinite;
  transition: all 0 ease;
}

.arrow:hover {
  cursor: pointer;
  animation-play-state: paused;
}

@keyframes moveArrow {
  from {
    margin-top: 0px;
  }
  25% {
    margin-top: 12px;
  }
  50% {
    margin-top: 0px;
  }
  to {
    margin-top: 0px;
  }
}
.model {
  margin-top: 0px;
  font-size: 1.3em;
}
</style>
