<template>
  <div class="details-main ">
    <div class="card-details-left">
      <detailsItem
        @openEditor="openEditor"
        style="margin-bottom:10px"
        v-for="item in details"
        :key="item"
        :title="item.title"
        :content="item.content"
      ></detailsItem>
    </div>
    <div class="card-details-right card-details-right-disabled">
      <detailsEditor :content="test" @openEditor="openEditor" />
    </div>
  </div>
</template>

<script>
import PersonalDetails from "./Details/PersonalDetails.vue";
import DetailsItem from "./DetailsItem.vue";
import PaymentDetails from "./Details/PaymentDetails/PaymentDetails.vue";
import DeliveryDetails from "./Details/DeliveryDetails/DeliveryDetails.vue";
import DetailsEditor from "./DetailsEditor.vue";
export default {
  components: {
    DetailsItem,
    PaymentDetails,
    PersonalDetails,
    DeliveryDetails,
    DetailsEditor,
  },
  methods: {
    openEditor: function(value) {
      this.test = value.component;
      var el = document.getElementsByClassName("details-main")[0];
      var el2 = document.getElementsByClassName("card-details-right")[0];
      if (el.classList.contains("activeGrid")) {
        el.classList.remove("activeGrid");
        el2.classList.add("card-details-right-disabled");
      } else {
        el.classList.add("activeGrid");
        el2.classList.remove("card-details-right-disabled");
      }
    },
  },
  data: () => ({
    test: null,
    details: [
      {
        title: "Personal Details",
        content: PersonalDetails,
      },

      {
        title: "Delivery Details",
        content: DeliveryDetails,
      },
      {
        title: "Payment Methods",
        content: PaymentDetails,
      },
    ],
  }),
};
</script>

<style>
.details-main {
  display: grid;
  height: 76vh;
  width: 75vw;
  grid-gap: 20px;
  transition: all 0.2s ease-in;
}

.card-details-left {
  overflow: scroll;
  height: 76vh;
  transition: all 0.2s ease-in;
}
.activeGrid {
  grid-template-columns: 58% 40%;
  transition: all 0.2s ease-in;
}
.card-details-right {
  display: block;
  transition: all 0.2s ease-in;
}
.card-details-right-disabled {
  display: none;
}
</style>
