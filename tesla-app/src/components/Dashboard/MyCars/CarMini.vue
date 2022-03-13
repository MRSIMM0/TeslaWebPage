<template>
  <div class="cars-card">
    <div class="cars-card-image"></div>
    <div class="cars-card-footer">
      <div>{{ name }}</div>
      <div class="cars-battery">
        <font-awesome-icon
          v-bind:style="{ color: icon.iColor }"
          :icon="icon.icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { name: "name", battery: "battery" },
  mounted() {
    if (this.battery <= 100 && this.battery >= 90) {
      this.icon = this.icons[0];
    }
    if (this.battery < 90 && this.battery >= 65) {
      this.icon = this.icons[1];
    }
    if (this.battery < 65 && this.battery >= 45) {
      this.icon = this.icons[2];
    }
    if (this.battery < 45 && this.battery >= 10) {
      this.icon = this.icons[3];
    }
    if (this.battery < 10 && this.battery >= 0) {
      this.icon = this.icons[4];
    }
  },
  data: () => ({
    icons: [
      { icon: ["fas", "battery-full"], iColor: "green" },
      { icon: ["fas", "battery-three-quarters"], iColor: "green" },
      { icon: ["fas", "battery-half"], iColor: "orange" },
      { icon: ["fas", "battery-quarter"], iColor: "red" },
      { icon: ["fas", "battery-empty"], iColor: "red" },
    ],
    color: "color",
    icon: { icon: ["fas", "battery-full"], iColor: "green" },
  }),
};
</script>

<style>
.cars-card {
  margin-bottom: 15%;
  transition: 0.3s;
  display: grid;
  width: 35vh;
  aspect-ratio: 2.5 /2;

  border-radius: var(--card-border-radius);
  grid-template-rows: 80% 20%;
}

.cars-card:hover {
  cursor: pointer;
}

.cars-card-image {
  display: block;
  border-top-left-radius: var(--card-border-radius);
  border-top-right-radius: var(--card-border-radius);

  background-position: center;
  background-image: url("../../../assets/tesla-build.png");
  background-size: 250%;
}
.cars-card-footer {
  font-size: 1.2em;
  font-weight: 500;
  display: grid;
  height: 3em;
  align-content: center;
  justify-content: center;
  border: 2px solid #e0e0e0;
  border-top: none;
  border-bottom-left-radius: var(--card-border-radius);
  border-bottom-right-radius: var(--card-border-radius);
}
.cars-battery {
  display: flex;
  justify-content: center;
  font-size: 1.2em;
}
</style>
