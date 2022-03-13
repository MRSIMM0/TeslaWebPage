<template>
  <div class="search-main-grid">
    <input class="search-input search-input-hidden " />
    <button @click="expand()" class="search-btn">
      <font-awesome-icon :icon="['fas', 'search']" />
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    expand: function() {
      var button = document.getElementsByClassName("search-btn")[0];
      var textField = document.getElementsByClassName("search-input")[0];
      button.classList.add("search-btn-expand");
      textField.classList.remove("search-input-hidden");
    },
  },
};
</script>

<style>
.search-btn {
  border-radius: 13px;
  border: 1px solid rgb(153, 153, 153);
  width: 40px;
  height: 40px;
  transition: color 0.2s linear;
  border-left: none;
  color: #8a8a8a;
}
.search-btn :hover {
  color: #b8b8b8;
}
.search-btn :active {
  color: #8a8a8a;
}

.search-btn-expand {
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
}
.search-input {
  position: relative;
  padding-left: 5px;
  border-radius: 13px;
  border: 1px solid rgb(153, 153, 153);
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: none;
  max-width: 200px;
  width: 200px;
  height: 40px;
  transition: all 0.5s linear;
  z-index: 1;
}
.search-input:focus {
  outline: none;
}

.search-input-hidden {
  position: absolute;
  z-index: -1;
  max-width: 20px;
  transition: all 0.5s linear;
}

.search-main-grid {
  align-items: center;
  display: grid;
  grid-template-columns: auto auto;
}
</style>
