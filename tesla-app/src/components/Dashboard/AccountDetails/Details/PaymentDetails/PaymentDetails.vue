<template>
  <div>
    <cardInfo v-for="i in details" :key="i" :card="i"></cardInfo>
    <div class="paymentDetails-main">
      <div class="paymentDetails-addCard">
        <button
          @click="clicked(null)"
          class="paymentDetails-addCard-button clickAnimation"
        >
          Add Card
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfo from "./CardInfo.vue";
import PaymentDetailsRight from "./PaymentDetialsRight.vue";
export default {
  data: () => ({
    details: [
      {
        Name: "Test",
        isPrimary: false,
        CardNumber: "12312312312312",
        ExpDate: "12/23",
        CVV: "123",
      },
    ],
  }),
  components: {
    CardInfo,
    PaymentDetailsRight,
  },
  methods: {
    clicked: function(details) {
      this.$emit("accountDetailsAddButton", {
        component: PaymentDetailsRight,
        value: details,
      });
    },
  },
};
</script>

<style>
.paymentDetails-main {
  display: grid;
  justify-content: center;
  grid-template-rows: max-content;
}
.paymentDetails-align {
  background-color: #ff0000;
}

.paymentDetails-addCard-button {
  margin-top: 10px;
  font-size: 1.1em;
  font-weight: 500;
  background-color: #e4e4e4;
  width: 100px;
  height: 40px;
  border-radius: 10px;
}
.paymentDetails-addCard-button:hover {
  background-color: #b6b6b6;
}
.paymentDetails-addCard-button:active {
  background-color: #e4e4e4;
}
</style>
