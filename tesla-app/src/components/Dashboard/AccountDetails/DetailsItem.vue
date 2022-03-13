<template>
  <div class="details-item">
    <div class="details-item-title">
      <div class="details-title">{{ title }}</div>
      <div id="toggleCollapside" class="detailsCollapside">
        <font-awesome-icon
          class="toggle"
          @click="openCollaps"
          :icon="['fas', 'angle-down']"
        />
      </div>
    </div>
    <div class="details-collapside-content hideDetailsCollapside">
      <div
        class="hide"
        @accountDetailsAddButton="openEditor"
        :is="content"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: "title",
    content: "content",
  },
  methods: {
    openEditor: function(value) {
      this.$emit("openEditor", value);
    },
    openCollaps: function(event) {
      let el = event.path[3];

      let colaps = el.getElementsByClassName("details-collapside-content")[0];
      let arrow = el.getElementsByClassName("toggle")[0];
      if (colaps == undefined) {
        let el2 = event.path[4];
        colaps = el2.getElementsByClassName("details-collapside-content")[0];
        arrow = el2.getElementsByClassName("toggle")[0];
      }

      if (colaps.classList.contains("hideDetailsCollapside")) {
        colaps.classList.remove("hideDetailsCollapside");
        arrow.style.transition = "all 0.2s ease-out";
        arrow.style.transform = "rotateZ(180deg)";
      } else {
        colaps.classList.add("hideDetailsCollapside");
        arrow.style.transform = "rotateZ(360deg)";
      }
    },
  },
};
</script>

<style>
.details-title {
  grid-template-columns: 70% 30%;
  display: grid;
  align-items: center;
  font-weight: 500;
  font-size: 1.2em;
}

.details-item {
  transition: all 0.2s ease-in;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 10px;
}

.details-item-title {
  padding-left: 20px;
  padding-right: 10px;
  grid-template-columns: 70% 30%;
  display: grid;
  grid-template-columns: 97% 1%;
}

.detailsCollapside {
  z-index: 1;
  grid-template-columns: 70% 30%;
  font-size: 30px;
  color: #b3b3b3;
}
.detailsCollapside:hover {
  cursor: pointer;
  color: #e9e9e9;
}
.details-collapside-content {
  width: 100%;
  height: auto;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: #f0f0f0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.2s ease-out;
}
.hideDetailsCollapside {
  z-index: -10;
  display: none;
  max-height: 0px;
  height: 0px;
  padding: 0px;
  transition: height 0.2s ease-out;
}
.hide {
  z-index: -1;
}
</style>
