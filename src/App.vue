<script setup lang="ts">
import { ref } from "vue";

const name: string = "Vue 3";
const counter = ref<number>(0);

const increment = (): void => {
  counter.value++;
};

const decrement = (): void => {
  counter.value--;
};

const reset = (): void => {
  counter.value = 0;
};
</script>

<template>
  <h1>Hola {{ name }}!</h1>
  <h2 :class="counter >= 0 ? 'positive' : 'negative'">
    {{ counter }}
  </h2>

  <button @click="increment">Incrementar</button>
  <button @click="decrement">Decrementar</button>
  <button @click="reset">Reset</button>
</template>

<style scoped>
.negative {
  color: red;
}

.positive {
  color: green;
}

button {
  margin-right: 5px;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background: #f2f2f2;
}
button:hover {
  background: #ddd;
}
</style>
