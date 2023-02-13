<template>
  <div class="container">
    <div class="overlay" />
    <div class="modal" @keydown.esc="onClose">
      <div class="header">
        <div>
          Add New Item
        </div>
      </div>
      <form action="" @submit.prevent="() => onSubmit(item)">
        <div class="body">
          <input type="text" v-model="item.title" placeholder="Title" />
          <input type="text" v-model="item.description" placeholder="Description" />
        </div>
        <div class="footer">
          <div>
            <button type="submit" :disabled="!item.title">Add</button>
            <button type="button" @click="onClose">Cancel</button>
          </div>

          <div>
            <input type="checkbox" v-model="shouldClose" :checked="shouldClose" /> Should close ?
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CreateItemModal"
}
</script>
<script setup lang="ts">
  import {IItem, useStore} from "../store";
  import {reactive, ref} from "vue";
  import {v4 as uuidv4} from "uuid";

  const emit = defineEmits(["close"]);

  const store = useStore();

  function draw(): string {
    const canvas = document.createElement("canvas");
    canvas.width = 200;
    canvas.height = 200;
    const context = canvas.getContext("2d");

    if (context) {
      let num = Math.round(Math.random() * 15);
      while( num --> 0 ) {
        drawCircle(context);
        drawRect(context);
        drawTriangle(context);
      }
    }

    function degreesToRadians(degrees: number) {
      return (degrees * Math.PI) / 180;
    }

    function getBackgroundColor() {
      return "rgb("+[
        Math.round(Math.random()*0xFF),
        Math.round(Math.random()*0xFF),
        Math.round(Math.random()*0xFF)
      ].join()+")";
    }

    function drawCircle(context: CanvasRenderingContext2D) {
      let radius = Math.floor(Math.random() * 40);
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      context.beginPath();
      context.arc(x, y, radius, 0, degreesToRadians(360), true);
      context.fillStyle = getBackgroundColor();
      context.fill();
    }

    function drawRect(context: CanvasRenderingContext2D) {
      context.fillStyle = getBackgroundColor();
      context.fillRect(Math.random()*canvas.width, Math.random()*canvas.height,Math.random()*100,Math.random()*100);
    }

    function drawTriangle(context: CanvasRenderingContext2D) {
      context.fillStyle = getBackgroundColor();

      context.beginPath();
      context.moveTo(Math.random()*canvas.width, Math.random()*canvas.height);
      context.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
      context.lineTo(Math.random()*canvas.width, Math.random()*canvas.height);
      context.fill();

    }

    return canvas.toDataURL();
  }

  function onClose() {
    emit("close");
  }

  function onSubmit(item: IItem) {
    store.state.items.push({...item, src: draw()});
    if (shouldClose.value) {
      onClose();
    }
  }

  const item = reactive<IItem>({
    id: uuidv4(),
    title: "",
    src: "",
    description: ""
  });

  const shouldClose = ref(false);
</script>

<style scoped lang="scss">
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.3;
    background: darkgray;
    z-index: 1;
  }

  .modal {
    box-shadow: 0 1px 3px 2px darkgray;
    z-index: 2;
    background: white;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 300px;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 5px;

    .header, .body, .footer {
      padding: 0 8px;

      & > * {
        margin: 8px;
      }
    }

    .header {
      font-weight: bold;
      text-align: center;
    }

    .body {
      input {
        padding: 18px;
        border: none;
        box-shadow: 0 0 3px 0 salmon;
        font-size: 14px;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      gap: 5px;

      & > div {
        display: flex;
        gap: 5px;
      }

      button {
        padding: 10px;
      }
    }
  }
</style>