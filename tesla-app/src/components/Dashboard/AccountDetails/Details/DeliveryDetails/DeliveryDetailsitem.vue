<template>
  <div class="delivery-details-item-main">
    <font-awesome-icon class="map-icon" :icon="['fas', 'map']" />
    <h2>Address Name</h2>
    <div class="icons">
      <font-awesome-icon class="map-icon pen" :icon="['fas', 'pen']" />
      <font-awesome-icon class="map-icon trash" :icon="['fas', 'trash']" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.delivery-details-item-main {
  background-color: #e4e4e4;
  border-radius: 10px;
  padding-left: 10px;
  display: grid;
  align-items: center;
  width: 100%;
  height: 40px;
  grid-template-columns: auto auto auto;
}

.map-icon {
  font-size: 1.5em;
}
.trash {
  margin-right: 10px;
}

.pen:hover {
  cursor: pointer;
  color: rgb(255, 251, 0);
  transition: all 0.3s ease;
}
.pen:active {
  color: rgb(185, 185, 2);
  transition: all 0.1s ease;
}
.icons {
  display: grid;
  margin-left: auto;
  grid-gap: 0.5em;
  grid-template-columns: auto auto;
}
</style>
