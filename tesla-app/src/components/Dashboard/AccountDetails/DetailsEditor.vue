<template>
  <div class="detailsEditor-main">
    <div class="close">
      <font-awesome-icon
        @click="clicked(null)"
        class="closeicon"
        :icon="['fas', 'plus']"
      />
    </div>
    <div :is="content"></div>
  </div>
</template>

<script>
import PaymentDetailsRight from "./Details/PaymentDetails/PaymentDetialsRight.vue";

export default {
  props: { content: "content" },
  mounted() {
    console.log(this.content);
  },
  methods: {
    components: { PaymentDetailsRight },
    data: () => ({}),
    clicked: function(details) {
      this.$emit("openEditor", {
        component: "payment",
        value: details,
      });
    },
  },
};
</script>

<style>
:root {
  --inputHeight: 40px;
}

.close {
  top: 10px;
  left: 121%;
  position: absolute;
  justify-content: right;
  display: flex;
}
.closeicon {
  font-size: 1.2em;
  transform: rotate(45deg);
  color: #e0e0e0;
}

.closeicon:hover {
  cursor: pointer;
  color: #bbbbbb;
}

.closeicon:active {
  cursor: pointer;
  color: #9c9c9c;
}

.detailsEditor-main {
  padding-top: 40px;
  display: grid;
  height: 75vh;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  justify-content: center;
  grid-template-rows: 15% 20% 20% 20% 15%;
}
</style>
