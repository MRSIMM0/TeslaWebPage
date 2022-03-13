<template>
  <div class="paymentDetailsMain">
    <input class="detailsEditor-name" placeholder="Name" />
    <div class="cardSelect">
      <div
        class="cardSelectCard "
        :id="i"
        v-for="i in icons"
        :key="i"
        @click="selectCard(i)"
      >
        <font-awesome-icon class="cardSelectCardIcon" :icon="['fab', i]" />
      </div>
    </div>
    <input placeholder="Card Number" class="detailsEditorCardNumber" />

    <div class="detailsEditor-subinput">
      <input class="subinput" placeholder="CVV" />
      <div class="expDateMain">
        <input class="expDate" placeholder="MM" size="2" maxlength="2" />
        <span class="slash">/</span>
        <input class="expDate" placeholder="YY" size="2" maxlength="2" />
      </div>
    </div>
    <div class="detailsEditor-buttonContainer">
      <div id="detailseditorAdd" @click="spin" class="addbutton">
        <font-awesome-icon class="addbuttoniocon" :icon="['fas', 'plus']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    icons: ["cc-visa", "cc-mastercard", "cc-paypal", "cc-amex"],
  }),
  methods: {
    selectCard: function(value) {
      var activeEl = document.getElementsByClassName("cardSelectCardActive");
      activeEl.forEach((el) => {
        el.classList.remove("cardSelectCardActive");
      });
      var prop = document.getElementById(value);
      prop.classList.add("cardSelectCardActive");
    },
    spin: function(prop) {
      var el = document.getElementById("detailseditorAdd");

      if (el.classList.contains("rotate")) {
        el.classList.remove("rotate");
      } else {
        el.classList.add("rotate");
      }
    },
  },
};
</script>

<style>
:root {
  --inputHeight: 40px;
}

.paymentDetailsMain {
  height: 60vh;
  display: grid;
  justify-content: center;
  grid-template-rows: 20% 21% 22% 15%;
}

.detailsEditor-name {
  border-bottom: 2px solid #c5c5c5;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  width: 20vw;
  height: var(--inputHeight);
}

.detailsEditor-name:focus {
  outline: none;
}
.detailsEditorCardNumber {
  text-align: center;
  padding-left: 10px;
  width: 25vw;
  height: var(--inputHeight);
  border-bottom: 2px solid #e0e0e0;
}
.detailsEditorCardNumber:focus {
  outline: none;
}
.slash {
  color: #c5c5c5;
  font-size: 1.6em;
  padding-bottom: 2px;
  height: var(--inputHeight);
}
.detailsEditor-subinput {
  display: flex;
  justify-content: center;
}

.subinput {
  text-align: center;
  padding-left: 5px;
  margin-left: auto;
  margin-right: auto;
  height: var(--inputHeight);
  width: 5vw;
  border-bottom: 2px solid #c5c5c5;
}

.subinput:focus {
  outline: none;
}

.expDateMain {
  justify-content: center;
  align-content: center;
  display: flex;
  padding-left: 5px;
  margin-left: auto;
  margin-right: auto;
  height: var(--inputHeight);
  width: 5vw;
  border-bottom: 2px solid #c5c5c5;
}
.expDate {
  height: var(--inputHeight);
  width: 50%;
}
.expDate:focus {
  outline: none;
}
.detailsEditorCardType {
  height: var(--inputHeight);
}

.cardSelect {
  justify-content: center;
  height: var(--inputHeight);
  display: flex;
}
.cardSelectCardIcon {
  z-index: 2;
  font-size: 3em;
}
.cardSelectCard {
  color: #e0e0e0;
  margin-right: auto;
  margin-left: auto;
}

.cardSelectCard:hover {
  color: #919191;
  cursor: pointer;
}

.cardSelectCard:active {
  color: #7c7c7c;
}

.cardSelectCardActive {
  color: #7c7c7c;
}
.detailsEditor-buttonContainer {
  display: grid;
  justify-content: center;
  align-items: center;
}
.addbutton {
  aspect-ratio: 1/1;
  display: grid;
  align-items: center;
  justify-content: center;
  width: 4vw;
  font-size: 2em;
  border-radius: 30%;
  color: #e0e0e0;
  background-color: #ffffff;
  border: 2px solid #e0e0e0;

  transition: all 1.1s linear;
}
.addbutton:hover {
  background-color: #e0e0e0;
  color: #ffffff;
  cursor: pointer;
}
.addbutton:active {
  background-color: #c5c5c5;
}

.rotate {
  transform: rotate(360deg);
}
</style>
