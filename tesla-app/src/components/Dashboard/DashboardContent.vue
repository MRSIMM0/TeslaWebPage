<template>
  <v-content>
    <orders v-if="prop == 'orders'"></orders>
    <myCars v-if="prop == 'cars'"></myCars>
    <cart v-if="prop == 'cart'"></cart>
    <accountDetails v-if="prop == 'details'"></accountDetails>
  </v-content>
</template>

<script>
import MyCars from "./MyCars/MyCars.vue";
import Orders from "./Orders.vue";
import Cart from "./Cart/Cart.vue";
import AccountDetails from "./AccountDetails/AccountDetails.vue";
export default {
  mounted() {},
  components: { Orders, Cart, AccountDetails, MyCars },
  props: {
    prop: "prop",
  },
  data: () => ({}),
  methods: {},
};
</script>

<style></style>
