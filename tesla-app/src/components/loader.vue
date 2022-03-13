<template>
  <div class="ajuents">
    <div class="lds-dual-ring"></div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ajuents {
  width: 100vw;
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
.lds-dual-ring {
  display: inline-block;
  width: 80px;
  height: 80px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #c4c4c4;
  border-color: #e0e0e0 transparent #e0e0e0 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
