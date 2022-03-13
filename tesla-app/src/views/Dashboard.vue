<template>
  <span class="mainDash">
    <sideBar @clicked="onClickChild"></sideBar>
    <dashboardContent v-bind:prop="this.selected"></dashboardContent>
  </span>
</template>

<script>
import Loader from "../components/loader.vue";
import SideBar from "../components/Dashboard/SideBar.vue";
import DashboardContent from "../components/Dashboard/DashboardContent.vue";
export default {
  mounted() {
    if (sessionStorage.getItem("lastDashboardLocation") == undefined) {
      this.selected = "cart";
    } else {
      this.selected = sessionStorage.getItem("lastDashboardLocation");
    }
    document.getElementById(this.selected).classList.add("enabled");
  },
  data: () => ({
    selected: null,
  }),
  components: {
    SideBar,
    DashboardContent,
    Loader,
  },
  methods: {
    onClickChild(value) {
      this.selected = value;
    },
  },
};
</script>

<style>
.mainDash {
  margin-top: 10vh;
  width: 100vw;
  height: 80vh;
  display: grid;
  grid-template-columns: 20% 60%;
}
</style>
