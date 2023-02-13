<template>
  <div class="item" @click="item.isSelected = !item.isSelected" :class="{selected: item.isSelected}">
    <div class="marker-container">
      <Marker v-show="item.isSelected"/>
    </div>
    <div class="logo">
      <img :src="item.src" alt="" />
    </div>
    <div>
      <div class="title">{{item.title}}</div>
      <div class="description" v-show="item.description">{{item.description}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  export default {
    name: "SingleItem"
  }
</script>

<script setup lang="ts">
  import {IItem} from "../store";
  import Marker from "./Marker.vue";

  interface IProps {
    item: IItem;
  }

  defineProps<IProps>();
</script>

<style scoped lang="scss">
  .item {
    position: relative;
    box-shadow: 2px 2px 3px 4px rgba(darkgray, 0.4);
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    max-width: 120px;

    &:hover, &.selected {
      cursor: pointer;
      box-shadow: 2px 1px 6px 3px rgba(red, 0.2);
      background: rgba(snow, .5);
    }

    .marker-container {
      position: absolute;
      right: 28px;
      bottom: 15px;
    }

    .logo {
      img {
        width: 100px;
        height: 100px;
      }
    }

    .title {
      width: 100%;
      text-align: center;
      font-weight: bold;
    }

    .description {
      word-break: break-all;
    }
  }
</style>