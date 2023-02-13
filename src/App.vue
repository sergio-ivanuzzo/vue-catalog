<template>
  <div class="container">
    <Catalogue />
    <VerticalPanel />
  </div>
</template>

<script setup lang="ts">
  import Catalogue from "./components/Catalogue.vue";
  import VerticalPanel from "./components/VerticalPanel.vue";
</script>

<script lang="ts">
  export default {
    name: "App",
  }
</script>

<style scoped>
  .container {
    display: flex;
  }
</style>