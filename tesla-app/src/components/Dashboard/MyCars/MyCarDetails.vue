<template>
  <div class="mycar-details-main">
    <input
      class="mycar-name"
      v-model.lazy="car.name"
      v-bind:placeholder="car.name"
    />
    <h3 class=" mycar-model">{{ car.model }}</h3>
    <h3 class="mycar-item">
      <div>
        <div data-title="battery level">
          <font-awesome-icon
            class="mycar-icons"
            :icon="['fas', 'battery-full']"
          />
        </div>
      </div>
      {{ car.battery }}%
    </h3>
    <h3 class="mycar-item">
      <div data-title="Milage">
        <font-awesome-icon class="mycar-icons" :icon="['fas', 'route']" />
      </div>
      {{ car.milage }}
    </h3>
    <h3 class="mycar-item">
      <div data-title="Next Review">
        <font-awesome-icon class="mycar-icons" :icon="['fas', 'tools']" />
      </div>
      {{ car.reviewDate }}
    </h3>
    <h3 class="mycar-item ">
      <div data-title="Software Version">
        <font-awesome-icon class="mycar-icons" :icon="['fas', 'robot']" />
      </div>
      {{ car.softwareVersion }}
    </h3>
  </div>
</template>

<script>
export default {
  props: { car: "car" },
};
</script>

<style>
[data-title] {
  position: relative;
  cursor: pointer;
}

[data-title]:hover::before {
  content: attr(data-title);
  position: absolute;
  bottom: -20px;
  display: inline-block;
  padding: 3px 6px;
  border-radius: 5px;
  background: #424242;
  color: #fff;
  font-size: 12px;
  font-family: sans-serif;
  white-space: nowrap;
  z-index: 9999;
}
[data-title]:hover::after {
  content: "";
  position: absolute;
  bottom: -1px;
  left: 0px;
  display: inline-block;
  color: #fff;
  border: 8px solid transparent;
  border-bottom: 9px solid #424242;
  z-index: 9999;
}

.mycar-icons {
  font-size: 4vh;
  margin-right: 20px;
}

.mycar-details-main {
  width: 30vw;
  text-align: center;
  display: grid;
  justify-content: center;
  grid-template-rows: 18% 15% repeat(4, 10%);
  border-radius: 15px;
  border: 2px solid #e0e0e0;
  padding-top: 40px;
}
.mycar-model {
  font-size: 4vh;
  color: #686868;
}
.mycar-name {
  color: #a8a8a8;
  justify-self: center;
  text-align: center;
  width: 80%;
  height: 60%;
  font-size: 2.5em;
  padding-bottom: 9px;
  font-size: 2em;
  border-bottom: 2px solid #e0e0e0;
  transition: all 0.5s ease;
}
.mycar-name:focus {
  outline: none;
  color: #7a7a7a;
  border-bottom: 2px solid #b6b6b6;
  transition: all 0.5s ease;
}
.mycar-name::placeholder {
  color: #a8a8a8;
  transition: all 0.5s ease;
}

.mycar-name:focus::placeholder {
  color: #7a7a7a;
  transition: all 0.5s ease;
}
.mycar-item {
  display: grid;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: auto auto;
  color: #686868;
  font-size: 3.2vh;
  font-weight: 500;
}
</style>
