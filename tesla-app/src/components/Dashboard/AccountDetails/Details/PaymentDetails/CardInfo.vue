<template>
  <div class="card-info-main">
    <font-awesome-icon class="cardIcon" :icon="['fas', 'credit-card']" />
    <div class="card-info-info">Name: {{ card.Name }}</div>
    <div class="card-info-info">Card Number: {{ card.CardNumber }}</div>
    <div class="card-ifo-icons">
      <font-awesome-icon class="trash" icon="trash" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: "card",
  },
};
</script>

<style>
.card-info-main {
  margin-bottom: 10px;
  padding-left: 20px;
  align-content: center;
  background-color: #e4e4e4;
  border-radius: 10px;
  height: 40px;
  width: auto;
  display: grid;
  grid-template-columns: 4% 40% 52% 3%;
}
.card-info-info {
  font-weight: 500;
}
.cardIcon {
  font-size: 1.3em;
}
.card-ifo-icons {
  display: grid;
  grid-template-columns: 60% 50%;
  font-size: 1.3em;
}
.trash {
  transition: all 0.3s ease;
}
.trash:hover {
  cursor: pointer;
  color: red;
  transition: all 0.3s ease;
}
.trash:active {
  color: rgb(230, 0, 0);
  transition: all 0.1s ease;
}
.edit {
  transition: all 0.3s ease;
}
.edit:hover {
  cursor: pointer;
  color: rgb(97, 97, 97);
  transition: all 0.3s ease;
}
.edit:active {
  color: rgb(44, 44, 44);
  transition: all 0.1s ease;
}
</style>
