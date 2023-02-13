<template>
  <div class="container">
    <div class="item-container">
      <SingleItem v-for="item in items" :item="item" />
    </div>
    <div class="button-container">
      <button @click="showCreateModal">Add Item</button>
    </div>
    <CreateItemModal v-if="isModalOpened" @close="closeModal" @focus="isModalOpened" />
  </div>
</template>

<script lang="ts">
  export default {
    name: "Catalogue"
  }
</script>
<script setup lang="ts">
  import {IItem, useStore} from "../store";
  import SingleItem from "./SingleItem.vue";
  import {ref} from "vue";
  import CreateItemModal from "./CreateItemModal.vue";

  const store = useStore();
  const items: Array<IItem> = store.state.items;

  const isModalOpened = ref(false);

  function showCreateModal() {
    isModalOpened.value = true;
  }

  function closeModal() {
    isModalOpened.value = false;
  }

</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    width: 90%;

    .item-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      align-items: flex-start;

      & > * {
        flex: 1 1 120px;
      }
    }

    .button-container {
      margin-top: 10px;

      button {
        border: none;
        padding: 10px;
        box-shadow: 0 0 2px 0 silver;
        border-radius: 3px;

        &:hover {
          cursor: pointer;
          box-shadow: 0 0 3px 0 darksalmon;
          background: darksalmon;
        }
      }
    }
  }
</style>