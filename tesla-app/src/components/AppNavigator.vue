<template>
  <div>
    <span class="pa-0" v-if="!shop">
      <v-app-bar fixed flat app color="transparent">
        <v-toolbar-title>
          <svg
            @click="redirecHome"
            class="pointer"
            version="1.1"
            id="svg9"
            width="200"
            height="200"
            viewBox="0 0 3000 2000"
            sodipodi:docname="tesla.svg"
            inkscape:version="1.1 (c68e22c387, 2021-05-23)"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <path
              d="m 346,850 c 9.069,26.615 28.065,52.153 57,58.739 14.536,3.308 31.165,1.261 46,1.261 12.666,0 25.333,-0.046 37.999,0.005 4.915,0.021 11.6,-0.645 15.562,2.899 4.415,3.95 3.427,11.788 3.437,17.096 L 506,973 v 176 h 58 V 975 l 10e-4,-44 c 0.006,-5.332 -1.074,-13.138 2.836,-17.436 3.617,-3.977 10.283,-3.51 15.164,-3.551 11.998,-0.1 24,-0.013 35.999,-0.013 15.763,0 33.559,2.253 49,-1.261 27.835,-6.335 50.291,-31.7 57,-58.739 H 346 m 522,0 c 6.289,25.371 25.207,47.576 50,56.588 23.848,8.669 55.911,3.412 81,3.412 h 98 c 18.33,0 39.01,2.621 57,-1.214 28.49,-6.073 51,-31.14 58,-58.786 H 868 m 512,0 v 177 h 269 v 63 h -144 c -22.63,0 -50.04,-4.17 -72,1.64 -29.03,7.68 -57.02,30.86 -69,58.36 h 343 V 969 h -198 -49 c -5.54,-0.002 -14.82,1.503 -19.16,-2.836 -3.82,-3.819 -2.83,-11.269 -2.84,-16.164 v -41 h 141 c 21.95,0 48.71,4.105 70,-1.589 26.84,-7.176 52.13,-30.323 59,-57.411 h -328 m 493,0 v 300 h 181 57 c 10.03,0 21.18,1.31 31,-1.04 25.48,-6.07 45.15,-33.47 50,-57.96 h -261 l 1,-241 h -59 m 436,0 c 7.48,27.029 28.59,52.585 57,58.774 18.55,4.04 40.08,1.226 59,1.226 h 97 c 25.81,0 59.78,5.768 84,-4.226 24.42,-10.077 39.68,-31.504 48,-55.774 H 2309 M 868,968 c 5.375,26.139 26.465,49.74 52,57.76 23.695,7.44 55.305,2.24 80,2.24 h 106 c 17.17,0 37.45,2.91 54,-2.23 26.05,-8.08 45.69,-31.724 52,-57.77 H 868 m 1450,1 v 181 h 58 v -121 h 212 v 121 h 58 V 969 H 2318 M 868,1090 c 5.386,26.19 27.178,50.49 53,58 16.932,4.92 37.51,2 55,2 h 108 c 24.31,0 55.98,5.31 79,-3.34 24.41,-9.17 42.8,-31.65 49,-56.66 z"
              id="tesla"
            />
          </svg>
        </v-toolbar-title>

        <v-spacer> </v-spacer>

        <v-btn
          v-if="sideMenu"
          color="transparent"
          depressed="true"
          class="font-weight-bold"
          rounded="true"
          >Model S</v-btn
        >
        <v-btn
          v-if="sideMenu"
          color="transparent"
          depressed="true"
          class="font-weight-bold"
          rounded="true"
          >Model 3</v-btn
        >
        <v-btn
          v-if="sideMenu"
          color="transparent"
          depressed="true"
          class="font-weight-bold"
          rounded="true"
          >Model X</v-btn
        >
        <v-btn
          v-if="sideMenu"
          color="transparent"
          depressed="true"
          class="font-weight-bold"
          rounded="true"
          >Model Y</v-btn
        >

        <v-spacer></v-spacer>

        <v-btn
          id="shop"
          color="transparent"
          depressed="true"
          class="font-weight-bold"
          rounded="true"
          @click="redirectStore"
        >
          Shop
        </v-btn>
        <div v-if="sideMenu">
          <v-btn
            id="account"
            color="transparent"
            depressed="true"
            class="font-weight-bold ml-2"
            rounded="true"
            @click="redirectLogin"
            >account</v-btn
          >
        </div>
      </v-app-bar>
    </span>

    <span class="pa-0" v-if="shop">
      <v-app-bar fixed flat app color="transparent">
        <v-toolbar-title>
          <svg
            @click="redirecHome"
            class="pointer"
            version="1.1"
            id="svg9"
            width="200"
            height="200"
            viewBox="0 0 3000 2000"
            sodipodi:docname="tesla.svg"
            inkscape:version="1.1 (c68e22c387, 2021-05-23)"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:svg="http://www.w3.org/2000/svg"
          >
            <path
              d="m 346,850 c 9.069,26.615 28.065,52.153 57,58.739 14.536,3.308 31.165,1.261 46,1.261 12.666,0 25.333,-0.046 37.999,0.005 4.915,0.021 11.6,-0.645 15.562,2.899 4.415,3.95 3.427,11.788 3.437,17.096 L 506,973 v 176 h 58 V 975 l 10e-4,-44 c 0.006,-5.332 -1.074,-13.138 2.836,-17.436 3.617,-3.977 10.283,-3.51 15.164,-3.551 11.998,-0.1 24,-0.013 35.999,-0.013 15.763,0 33.559,2.253 49,-1.261 27.835,-6.335 50.291,-31.7 57,-58.739 H 346 m 522,0 c 6.289,25.371 25.207,47.576 50,56.588 23.848,8.669 55.911,3.412 81,3.412 h 98 c 18.33,0 39.01,2.621 57,-1.214 28.49,-6.073 51,-31.14 58,-58.786 H 868 m 512,0 v 177 h 269 v 63 h -144 c -22.63,0 -50.04,-4.17 -72,1.64 -29.03,7.68 -57.02,30.86 -69,58.36 h 343 V 969 h -198 -49 c -5.54,-0.002 -14.82,1.503 -19.16,-2.836 -3.82,-3.819 -2.83,-11.269 -2.84,-16.164 v -41 h 141 c 21.95,0 48.71,4.105 70,-1.589 26.84,-7.176 52.13,-30.323 59,-57.411 h -328 m 493,0 v 300 h 181 57 c 10.03,0 21.18,1.31 31,-1.04 25.48,-6.07 45.15,-33.47 50,-57.96 h -261 l 1,-241 h -59 m 436,0 c 7.48,27.029 28.59,52.585 57,58.774 18.55,4.04 40.08,1.226 59,1.226 h 97 c 25.81,0 59.78,5.768 84,-4.226 24.42,-10.077 39.68,-31.504 48,-55.774 H 2309 M 868,968 c 5.375,26.139 26.465,49.74 52,57.76 23.695,7.44 55.305,2.24 80,2.24 h 106 c 17.17,0 37.45,2.91 54,-2.23 26.05,-8.08 45.69,-31.724 52,-57.77 H 868 m 1450,1 v 181 h 58 v -121 h 212 v 121 h 58 V 969 H 2318 M 868,1090 c 5.386,26.19 27.178,50.49 53,58 16.932,4.92 37.51,2 55,2 h 108 c 24.31,0 55.98,5.31 79,-3.34 24.41,-9.17 42.8,-31.65 49,-56.66 z"
              id="tesla"
            />
          </svg>
        </v-toolbar-title>

        <v-spacer> </v-spacer>

        <div v-if="sideMenu">
          <v-btn
            id="account"
            color="transparent"
            depressed="true"
            class="font-weight-bold ml-2"
            rounded="true"
            @click="redirectLogin"
            >account</v-btn
          >
        </div>
        <navSearch></navSearch>
        <div class="shoppingCart">
          <font-awesome-icon :icon="['fas', 'shopping-basket']" />
        </div>
        <navcart></navcart>
      </v-app-bar>
    </span>
  </div>
</template>

<script>
import NavSearch from "./NavSearch.vue";
export default {
  mounted() {
    this.hideMenu();
  },
  components: { NavSearch },
  data: () => ({
    menuExludedPaths: ["/build", "/dashboard", "/login"],
    sideMenu: true,
    shop: false,
  }),

  methods: {
    redirecHome: function() {
      this.$router.push("/");
      window.location.reload();
    },
    redirectLogin: function() {
      this.$router.push("/login");
      window.location.reload();
    },
    redirectStore: function() {
      this.$router.push("/store");
      window.location.reload();
    },
    hideMenu: function() {
      this.menuExludedPaths.forEach((n) => {
        if (n == this.$route.path) {
          this.sideMenu = false;
        }
      });
      if (this.$route.path == "/store") {
        this.shop = true;
      }
    },
  },
};
</script>

<style>
.spacer {
  height: 400px;
}
.pointer:hover {
  cursor: pointer;
}
.shoppingCart {
  font-size: 1.2em;
  display: grid;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 13px;
  border: 1px solid rgb(153, 153, 153);
  width: 40px;
  height: 40px;
  transition: color 0.2s linear;

  color: #8a8a8a;
}

.shoppingCart :hover {
  cursor: pointer;
  color: #b8b8b8;
}
.shoppingCart :active {
  color: #8a8a8a;
}
</style>
