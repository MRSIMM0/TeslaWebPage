import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPen,
  faMap,
  faLock,
  faStore,
  faTrash,
  faPlus,
  faMinus,
  faAngleDown,
  faSignOutAlt,
  faSearch,
  faShoppingBasket,
  faCreditCard,
  faEdit,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faRoute,
  faTools,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faCcAmex,
} from "@fortawesome/fontawesome-free-brands";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add([
  faPen,
  faMap,
  faLock,
  faStore,
  faTrash,
  faPlus,
  faMinus,
  faAngleDown,
  faSignOutAlt,
  faSearch,
  faShoppingBasket,
  faCreditCard,
  faEdit,
  faBatteryFull,
  faBatteryThreeQuarters,
  faBatteryHalf,
  faBatteryQuarter,
  faBatteryEmpty,
  faRoute,
  faTools,
  faRobot,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
  faCcAmex,
]);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
