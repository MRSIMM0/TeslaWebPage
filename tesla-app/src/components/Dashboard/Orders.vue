<template>
  <div class="MyOrders">
    <div class="OrdersList">
      <v-simple-table fixed-header height="60ch">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Order Number
              </th>
              <th class="text-left">
                Order Name
              </th>
              <th class="text-left">
                Quantity
              </th>
              <th class="text-left">
                Shipping staus
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="order in items"
              @click="setFocus(order)"
              v-bind:key="order.orderNumber"
            >
              <td>{{ order.orderNumber }}</td>
              <td>{{ order.name }}</td>
              <td>{{ order.quantity }}</td>
              <td>{{ order.deliveryStatus }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="OrderContent">
      <div
        class="Image"
        v-bind:style="{ 'background-image': 'url(' + focusedImage + ')' }"
      ></div>
      <div class="OrderInfo">
        {{ focusedOrder }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    focusedOrder: null,

    focusedImage: null,

    items: [
      {
        orderNumber: 23,
        name: "Tesla Model 3",
        quantity: 1,
        deliveryStatus: "Sent",
        image: "tesla-build.png",
      },
      {
        orderNumber: 24,
        name: "Tesla Roof Rack",
        quantity: 1,
        deliveryStatus: "Sent",
        image: "roofRack.jpg",
      },
    ],
  }),
  methods: {
    setFocus(order) {
      this.focusedImage = require("../../assets/" + order.image);
      this.focusedOreder = order;
    },
  },
};
</script>

<style>
.MyOrders {
  height: 70vh;
  display: grid;
  grid-template-columns: 50% 40%;
}
.Image {
  margin-left: 50px;
  border-radius: 20px;
  z-index: 1;
  width: 40vw;
  height: 50vh;
  background-size: cover;
  background-position: center;
}
.OrderTable {
  z-index: 2;
  width: 100%;
  background-color: #f0f0f0;
}
.header {
  font-size: 1.3em;
}
.OrderContent {
  display: grid;
  grid-template-rows: 60% 50%;
}
.OrderInfo {
  display: grid;
  justify-content: center;
}
td:hover {
  cursor: pointer;
}
</style>
