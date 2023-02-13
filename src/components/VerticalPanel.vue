<template>
  <div class="container">
    <div class="marker-container">
      <Marker />
    </div>
    <div class="counter">{{markedItemsCount}}</div>
  </div>
</template>

<script lang="ts">
import Marker from "./Marker.vue";

export default {
  name: "VerticalPanel",
  components: {Marker}
}
</script>
<script setup lang="ts">
  import {useStore} from "../store";
  import {computed} from "vue";

  const store = useStore();
  const markedItemsCount = computed(() => store.state.items.filter(item => item.isSelected).length);
</script>

<style scoped lang="scss">
  .container {
    padding: 20px 0;
    width: 300px;
    display: flex;
    gap: 10px;
    border-left: 1px solid gray;
  }
  .marker-container {
    position: relative;
    width: 50px;
    bottom: 5px;
  }

  .counter {
    font-weight: bold;
    font-size: 40px;
  }
</style>