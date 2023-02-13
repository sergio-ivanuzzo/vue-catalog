<template>
  <div class="marker" />
</template>

<script>
export default {
  name: "Marker"
}
</script>

<style scoped lang="scss">
  .marker {
    position: relative;
    width: 20px;
    height: 20px;
  }

  .marker::before {
    position: absolute;
    left: 0;
    bottom: 37px;
    background-color: rgba(orange, .9);
    content: "\25AA";
    color: red;
    font-size: 35px;
    transform: translateX(57px) rotate(-128deg);
    transform-origin: center 50px;
  }

  .marker::after {
    position: absolute;
    left: 10px;
    top: 20px;
    height: 8px;
    width: 100%;
    background-color: rgba(red, .9);
    content: "";
    transform: translateX(18px) rotate(-130deg);
    transform-origin: left bottom;
  }
</style>