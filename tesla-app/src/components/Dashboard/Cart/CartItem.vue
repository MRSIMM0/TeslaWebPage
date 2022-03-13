<template>
  <v-layout>
    <div>
      <div class="cart-item ">
        <button @click="remove()" class="close-btn">
          <font-awesome-icon icon="trash" />
        </button>
        <div class="cart-item-name">
          {{ cartItem.name }}
        </div>
        <div class="cart-quantity-grid">
          <button
            @click="
              if (cartItem.quantity >= 0) {
                cartItem.quantity++;
              }
              store();
            "
            class="close-btn add"
          >
            <font-awesome-icon icon="plus" />
          </button>
          <div class="cart-quantity-number close-btn">
            {{ cartItem.quantity }}
          </div>
          <button
            @click="
              if (cartItem.quantity > 0) {
                cartItem.quantity--;
              }
              store();
            "
            class="close-btn add"
          >
            <font-awesome-icon icon="minus" />
          </button>
        </div>
        <div class="font-weight-black">
          Total: ${{ cartItem.price * cartItem.quantity }}
        </div>
        <div id="toggleCollapside" class="toggleCollapside">
          <font-awesome-icon
            class="toggle"
            @click="openCollaps"
            :icon="['fas', 'angle-down']"
          />
        </div>
      </div>
      <div class="CollapsideContent hideCollapside">
        <div class="contentGrid">
          <div
            v-bind:style="{ 'background-image': 'url(' + bgImage + ')' }"
            class="contentImage"
          ></div>
          <div class="collapsideDes">
            <h2 class="dislpay-2">Price ${{ cartItem.price }}</h2>
            <h3 v-if="cartItem.option !== undefined">
              Option: {{ cartItem.option }}
            </h3>
            <h5 v-if="cartItem.description !== undefined" class="dislpay-5">
              <h3>Description:</h3>
              {{ cartItem.description }}
            </h5>
          </div>
        </div>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  mounted() {
    this.bgImage = require("../../../assets/" + this.cartItem.url);
  },
  data: () => ({
    bgImage: null,
  }),
  props: {
    cartItem: "cartItem",
  },

  methods: {
    store: function() {
      let items = JSON.parse(sessionStorage.getItem("shoppingCart"));
      items.forEach((item) => {
        if (this.cartItem.url == item.url) {
          items[items.indexOf(item)] = this.cartItem;
          sessionStorage.clear();
          sessionStorage.setItem("shoppingCart", JSON.stringify(items));
        }
      });
    },
    remove: function() {
      let items = JSON.parse(sessionStorage.getItem("shoppingCart"));
      items.forEach((item) => {
        if (this.cartItem.url == item.url) {
          items.splice(items.indexOf(item), 1);
          sessionStorage.clear();
          sessionStorage.setItem("shoppingCart", JSON.stringify(items));
          window.location.reload();
        }
      });
    },

    openCollaps: function(event) {
      const el = event.path[3];

      let header = el.getElementsByClassName("cart-item")[0];

      let content = el.getElementsByClassName("CollapsideContent")[0];

      let toggle = el.getElementsByClassName("toggle")[0];
      if (header == undefined || content == undefined || toggle == undefined) {
        const el2 = event.path[4];
        header = el2.getElementsByClassName("cart-item")[0];
        content = el2.getElementsByClassName("CollapsideContent")[0];
        toggle = el2.getElementsByClassName("toggle")[0];
      }

      if (content.classList.contains("hideCollapside")) {
        header.classList.add("CollapsideActive");
        content.classList.remove("hideCollapside");
        toggle.style.transform = "rotateZ(180deg)";
      } else {
        header.classList.remove("CollapsideActive");

        content.classList.add("hideCollapside");

        toggle.style.transform = "rotate(360deg)";
      }
    },
  },
};
</script>

<style>
.cart-item {
  padding-left: 20px;
  display: grid;
  align-items: center;
  margin-top: 5px;
  width: 40vw;
  height: auto + 50px;
  border-radius: 10px;
  background-color: #f0f0f0;
  grid-template-columns: 15% 30% 25% 25% 5%;
  padding-bottom: 10px;
  padding-top: 10px;
}

.close-btn {
  z-index: 2;
  color: #b9b9b9;
  padding-top: 2px;
  width: 30px;
  height: 30px;
  border-radius: 30%;
  background-color: #e2e2e2;
}
.cart-item-name {
  font-weight: 500;
}
.close-btn:hover {
  color: red;
  background-color: rgb(231, 231, 231);
}
.close-btn:active {
  color: rgb(219, 0, 0);
}
.cart-quantity-grid {
  display: grid;
  grid-template-columns: 25% 25% 33%;
}
.cart-quantity-number {
  display: grid;
  justify-content: center;
  align-content: center;
  background-color: white;
}
.cart-quantity-number:hover {
  cursor: default;
  color: #b9b9b9;
  background-color: white;
}
.add {
  z-index: 2;
}
.add:hover {
  color: #a5a5a5;
}
.add:active {
  color: #b9b9b9;
}
.toggleCollapside {
  z-index: 2;
  transition: all 0.2s ease-out;
  font-size: 1.5em;
  color: #b9b9b9;
}
.toggleCollapside:hover {
  cursor: pointer;
  color: #a5a5a5;
}
.toggleCollapside:active {
  color: #b9b9b9;
}
.toggle {
  transition: all 0.2s ease-out;
}
.CollapsideActive {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.CollapsideContent {
  opacity: 1;
  z-index: 0;
  padding: 10px 10px;
  height: 300px;
  background-color: #f0f0f0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: all 0.2s ease-out;
}
.hideCollapside {
  z-index: -1;
  height: 0;
  opacity: 0;
  transition: all 0.2s ease-out;
}
.contentGrid {
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  height: 100%;
}
.contentImage {
  border-radius: 10px;

  background-position: center;
  background-size: 100%;
  width: 90%;
  height: 100%;
}
.collapsideDes {
  display: grid;
  padding-left: 10px;
  padding-top: 10px;
  grid-template-rows: 50px 50px;
}
</style>
