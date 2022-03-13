<template>
  <span class="snap">
    <div class="child-snap">
      <promo />
    </div>
    <div class="child-snap">
      <specyfication />
    </div>
  </span>
</template>

<script>
// @ is an alias to /src
import Promo from "../components/Promo.vue";
import Specyfication from "../components/Specyfication/Specyfication.vue";

export default {
  components: { Specyfication, Promo },
  mounted() {
    document.addEventListener("scroll", this.isInView);
  },

  methods: {
    isInView: function() {
      var el = document.getElementById("car-specyfication");
      var svg = document.getElementById("tesla");

      var shop = document.getElementById("shop");

      var account = document.getElementById("account");

      if (el.offsetTop.valueOf() <= window.pageYOffset.valueOf()) {
        shop.classList.add("white--text");
        account.classList.add("white--text");

        svg.style.fill = "white";
      } else {
        svg.style.fill = "black";
        shop.classList.remove("white--text");
        account.classList.remove("white--text");
      }
    },
  },
};
</script>
<style>
html {
  scroll-snap-type: y proximity;
}
.child-snap {
  scroll-snap-align: start;
}
</style>
