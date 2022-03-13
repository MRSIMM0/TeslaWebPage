<template>
  <div class="cars-main">
    <div class="cars-left">
      <div @click="select(item)" v-for="item in cars" v-bind:key="item">
        <carMini :name="item.name" :battery="item.battery"></carMini>
      </div>
    </div>
    <div class="cars-right" v-if="selectedCar != null">
      <myCarDetails :car="selectedCar"></myCarDetails>
    </div>
  </div>
</template>

<script>
import CarMini from "./CarMini.vue";
import MyCarDetails from "./MyCarDetails.vue";

export default {
  components: { CarMini, MyCarDetails },
  mounted() {},
  data: () => ({
    selectedCar: null,
    cars: [
      {
        name: "FirstCar",
        battery: 100,
        milage: "20137 km",
        model: "Model 3",
        reviewDate: "20-06-2021",
        softwareVersion: "1.0",
      },
      {
        name: "FirstCar",
        battery: 10,
        milage: "20137 km",
        model: "Model 3",
        reviewDate: "20-06-2021",
        softwareVersion: "1.0",
      },
    ],
  }),
  methods: {
    select: function(item) {
      this.selectedCar = item;
      console.log(this.selectedCar);
    },
  },
};
</script>

<style>
:root {
  --card-border-radius: 10px;
}

.cars-main {
  width: 80vw;
  height: 70vh;
  display: grid;
  justify-content: center;
  grid-template-columns: auto auto;
}

.cars-left {
  padding-right: 10%;
  margin-right: 10em;
  overflow: scroll;
}

.cars-right {
  padding-left: 10%;
  display: grid;
  width: 30vw;
  height: auto;
}
</style>
