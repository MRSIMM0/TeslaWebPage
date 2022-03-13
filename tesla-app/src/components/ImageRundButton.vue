<template>
  <button
    v-bind:id="url"
    v-bind:class="{ selected: active }"
    v-on:click="
      {
        setActive(), find();
      }
    "
    v-bind:style="{ 'background-image': 'url(' + this.paint + ')' }"
    class="round-img-button"
  ></button>
</template>

<script>
export default {
  props: {
    url: "url",
    parentId: "parentId",
  },
  mounted() {},
  data() {
    return {
      paint: require("../assets" + this.url),
      active: false,
    };
  },
  methods: {
    setActive: function() {
      this.active = true;
      const el = document.getElementById(this.url);

      if (el.classList.contains("selected") == false && this.active == false) {
        this.active = true;
      } else if (
        el.classList.contains("selected") == false &&
        this.active == true
      ) {
        el.classList.add("selected");
      }
    },
    find: function() {
      const el2 = document.getElementById(this.parentId);
      const sel2 = el2.getElementsByClassName("selected");
      sel2.forEach((el) => {
        if (el.id != this.url) {
          el.classList.remove("selected");
        }
      });
    },
  },
};
</script>

<style>
.round-img-button {
  border-radius: 100%;
  width: 75px;
  height: 75px;
  background-size: 57px;
  background-position: center;
}
.selected {
  border: 3px solid rgb(0, 10, 148);
}
</style>
