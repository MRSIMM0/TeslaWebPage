<template>
  <div class="cart-grid">
    <div class="cart-left">
      <cartItem v-for="item in data" :key="item.name" :cartItem="item" />
      <div class="cart-empty" v-if="data.length == 0">
        <h1 class="display-1">CART EMPTY</h1>
        <button class="shopping" @click="redirectStore">Go shopping</button>
      </div>
    </div>
    <div class="cart-left-footer">
      <h1 class="display-2">CART TOTAL: ${{ sum }}</h1>
      <v-btn height="60px" color="primary" depressed rounded="true"
        >Checkout</v-btn
      >
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  mounted() {
    console.log();
    if (sessionStorage.getItem("shoppingCart") == undefined) {
      sessionStorage.setItem("shoppingCart", JSON.stringify(this.items));
      this.data = items;
      window.location.reload();
    } else {
      let json = sessionStorage.getItem("shoppingCart");
      this.data = JSON.parse(json);
    }
  },
  methods: {
    redirectStore: function() {
      this.$router.push("/store");
      window.location.reload();
    },
  },

  data: () => ({
    total: 0,

    data: [],

    items: [
      {
        name: "Wall Connector",
        option: "8.5' Cable",
        quantity: 1,
        price: 500,
        description:
          "Wall Connector is the most convenient charging solution for houses, apartments, hospitality properties and workplaces.",
        url: "accesories/wallConnector.jpg",
      },
      {
        price: 2000,
        quantity: 1,
        name: "Model 3 18 Aero Wheel and Winter Tire Package",
        url: "accesories/model3Rims.jpg",
      },
    ],
  }),
  computed: {
    sum: function() {
      var sum = 0;
      this.data.forEach((el) => {
        sum += el.price * el.quantity;
      });
      return sum;
    },
  },
  components: { CartItem },
};
</script>

<style>
.cart-left-footer {
  display: grid;
  grid-template-rows: 55vh 20vh;
  color: #8a8a8a;
  border-top: 2px solid #aaaaaa;
}
.cart-grid {
  display: grid;
  grid-template-columns: 50vw 26vw;
  height: 80vh;
  width: 80vw;
}
.cart-left {
  overflow: scroll;
  height: 77vh;
  width: 40vw;
  display: inline;
}
.cart-empty {
  display: grid;
  grid-template-rows: 100px;
  justify-content: center;
}
.shopping {
  height: 50px;
  border-radius: 10px;
  background-color: #c4c4c4;
  color: #ffffff;
}

.shopping:hover {
  background-color: #a1a1a1;
}
.shopping:active {
  background-color: #c4c4c4;
}
</style>
