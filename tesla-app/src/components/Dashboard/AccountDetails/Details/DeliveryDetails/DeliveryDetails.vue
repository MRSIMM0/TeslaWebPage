<template>
  <div class="deliveryDetails-main">
    <deliveryDetailsItem />
    <button
      @click="clicked"
      class="paymentDetails-addCard-button addButton clickAnimation"
    >
      Add Address
    </button>
  </div>
</template>

<script>
import DeliveryDetailsRight from "./DeliveryDetailsRight.vue";
import DeliveryDetailsItem from "./DeliveryDetailsitem.vue";
export default {
  components: {
    DeliveryDetailsItem,
  },
  methods: {
    clicked: function(details) {
      this.$emit("accountDetailsAddButton", {
        component: DeliveryDetailsRight,
        value: details,
      });
    },
  },
};
</script>

<style>
.deliveryDetails-main {
  display: grid;
  justify-items: center;
}
.addButton {
  width: auto;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;
}
</style>
