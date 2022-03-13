<template>
  <v-content>
    <div class="dashMainGrid">
      <div class="sideBar">
        <!-- <v-btn depressed rounded="true">My Cart</v-btn> -->
        <button @click="select" id="cart" class="sideMenuNav clickAnimation">
          My Cart
        </button>
        <button @click="select" id="orders" class="sideMenuNav clickAnimation">
          My Orders
        </button>
        <button @click="select" id="cars" class="sideMenuNav clickAnimation">
          My Cars
        </button>
        <button @click="select" id="details" class="sideMenuNav clickAnimation">
          Account details
        </button>

        <button id="logout" class="sideMenuNav clickAnimation">
          LOG OUT
          <font-awesome-icon
            class="logouticon"
            :icon="['fas', 'sign-out-alt']"
          />
        </button>
      </div>
      <div class="separatpor"></div>
    </div>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    selected: null,
  }),

  methods: {
    setLocation: function(location) {
      sessionStorage.setItem("lastDashboardLocation", location);
    },
    select: function(event) {
      const parent = event.path[1];

      const arr = parent.getElementsByClassName("enabled");

      if (arr.length == 1) {
        arr[0].classList.remove("enabled");
      }
      let el = event.target;

      this.selected = el.id;
      this.setLocation(this.selected);
      if (el.classList.contains("enabled")) {
        el.classList.remove("enabled");
      } else {
        el.classList.add("enabled");
      }

      this.$emit("clicked", this.selected);
    },
  },
};
</script>

<style>
.sideBar {
  display: grid;
  width: 200px;
  grid-template-rows: 50px 50px 50px 350px 40px;
  height: 75vh;
  margin-left: 80px;
}
.dashMainGrid {
  display: grid;
  grid-template-columns: 300px 4px;
  grid-gap: 0px;
}
.separatpor {
  margin-right: 200px;
  border: 1px solid #c9c9c9;
  border-radius: 10px;
}
.sideMenuNav {
  color: #aaaaaa;
  border-radius: 10px;
  width: 100%;
  height: 35px;
  background-color: white;
  font-weight: 500;
  font-size: 1em;
  text-transform: uppercase;
}

.sideMenuNav:hover {
  background-color: #e0e0e0;
}
.enabled {
  color: #5a5a5a;
  background-color: #f0f0f0;
}
#logout {
  color: #5a5a5a;
  transition: background 0.8s;
}
.clickAnimation {
  background-position: center;
  transition: background 0.8s;
}

.clickAnimation:hover {
  background: #f0f0f0 radial-gradient(circle, transparent 1%, #e0e0e0 1%)
    center/15000%;
}

.clickAnimation:active {
  background-color: #f0f0f0;
  background-size: 100%;
  transition: background 0s;
}

#logout:hover {
  color: red;
}
#logout:active {
  color: rgb(209, 0, 0);
}
</style>
