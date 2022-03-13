<template>
  <div id="car-specyfication" class="specyfication">
    <img
      class="hidden-md-and-down"
      style="margin-top:10em; margin-left:0;"
      src="../../../public/model3-specs.jpg"
    />
    <div class="main-grid">
      <v-row justify="center">
        <h1>Technical Details</h1>
        <h1 style="margin-left:0.5em; color:azure">Model 3</h1>
      </v-row>
      <v-row justify="center">
        <div class="button-grid">
          <!-- <v-btn
            v-for="model in models"
            v-bind:key="model"
            outlined="true"
            rounded="true"
            color="white"
            width="150px"
            class="hidden-sm-and-down   "
            @click="selectedModel = model"
            >{{ model.model }}</v-btn
          > -->
          <button
            class="model-button"
            v-for="model in models"
            v-bind:key="model"
            v-bind:value="model.model"
            @click="selected(model)"
          >
            {{ model.model }}
          </button>
        </div>
      </v-row>
      <div class="details">
        <div class="detail">
          <h1 class="detail-title">Range (WLTP)</h1>
          <p>
            {{ selectedModel.range }}
          </p>
        </div>
        <div class="detail">
          <h1 class="detail-title">Acceleration</h1>
          <p>
            {{ selectedModel.acceleration }}
          </p>
        </div>

        <div class="detail">
          <h1 class="detail-title">Weight</h1>
          <p>
            {{ selectedModel.weight }}
          </p>
        </div>
        <div class="detail">
          <h1 class="detail-title">Wheels</h1>
          <p>
            {{ selectedModel.wheels }}
          </p>
        </div>
        <div class="detail">
          <h1 class="detail-title">Cargo</h1>
          <p>
            {{ selectedModel.cargo }}
          </p>
        </div>
        <div class="detail">
          <h1 class="detail-title">Gwarancja</h1>
          <p>
            {{ selectedModel.gwarancja }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let model = {
      model: "Standard Plus",
      range: "448km",
      acceleration: "5,6s 0-100 km/h",
      weight: "1745 kg",
      wheels: "18″ or 19″",
      cargo: "649 l",
      gwarancja:
        "Gwarancja Podstawowy Pojazd — 4 lata lub 80 000 km, w zależności od tego, co nastąpi wcześniej baterię i Jednostka Napędowa — 8 lat lub 192 000 km, w zależności od tego, co nastąpi wcześnie",
    };
    this.selected(model);
  },

  methods: {
    selected: function(model) {
      this.selectedModel = model;
      let el = document.getElementsByClassName("model-button");
      el.forEach((item) => {
        item.classList.remove("model-button-selected");
        if (this.selectedModel.model == item.value) {
          item.classList.add("model-button-selected");
        }
      });
    },
  },
  data: () => ({
    models: [
      {
        model: "Standard Plus",
        range: "448km",
        acceleration: "5,6s 0-100 km/h",
        weight: "1745 kg",
        wheels: "18″ or 19″",
        cargo: "649 l",
        gwarancja:
          "Gwarancja Podstawowy Pojazd — 4 lata lub 80 000 km, w zależności od tego, co nastąpi wcześniej baterię i Jednostka Napędowa — 8 lat lub 192 000 km, w zależności od tego, co nastąpi wcześnie",
      },
      {
        model: "Performance",
        range: "567km",
        acceleration: "3,3s 0-100 km/h",
        weight: "1844 kg",
        wheels: "20″",
        cargo: "649 l",
        gwarancja:
          "Gwarancja Podstawowy Pojazd — 4 lata lub 80 000 km, w zależności od tego, co nastąpi wcześniej baterię i Jednostka Napędowa — 8 lat lub 192 000 km, w zależności od tego, co nastąpi wcześnie",
      },
      {
        model: "Long Range",
        range: "614km",
        acceleration: "4,4s 0-100 km/h",
        weight: "1844 kg",
        wheels: "18″ or 19″",
        cargo: "649 l",
        gwarancja:
          "Gwarancja Podstawowy Pojazd — 4 lata lub 80 000 km, w zależności od tego, co nastąpi wcześniej baterię i Jednostka Napędowa — 8 lat lub 192 000 km, w zależności od tego, co nastąpi wcześnie",
      },
    ],
    selectedModel: null,
  }),
};
</script>

<style>
.specyfication {
  background: black;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100vh;
}
.main-grid {
  margin-top: 18%;
  color: white;
  display: grid;
  grid-template-rows: 45px 150px 10px;
}
.button-grid {
  width: 350px;
  height: 6em;
  display: grid;
  grid-template-columns: 150px 150px;
  grid-gap: 10px;
  padding: 10px;
}

.details {
  width: 50vw;
  display: grid;
  justify-content: center;
  grid-template-columns: 15vw 15vw;
  grid-auto-rows: min-content;
  grid-auto-flow: dense;
}

.detail {
  display: inline-block;
  width: 11vw;
  margin-bottom: 20px;
  word-wrap: break-word;
  font-size: 0.9em;
  height: auto;
  border: 2px solid white;
  border-left: none;
  border-right: none;
}

.detail-title {
  margin-top: 10px;
  margin-bottom: 5px;
  font-size: 1.2em;
}
.model-button {
  width: auto;
  padding-right: 20px;
  padding-left: 20px;
  height: 35px;
  margin-left: 2px;
  margin-right: 2px;
  border: 2px solid white;
  border-radius: 20px;
}
.model-button:hover {
  background-color: white;
  color: black;
  font-weight: 500;
}

.model-button-selected {
  background-color: white;
  color: black;
  font-weight: 500;
}
</style>
