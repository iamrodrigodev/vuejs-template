<script setup lang="ts">
import { ref, computed } from 'vue';

// Constants
const name = 'Vue 3';
const CHUNK_SIZE = 10;

// Reactive state
const counter = ref(0);
const favoritos = ref<number[]>([]);

// Actions
const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;

const addToFavoritos = () => {
  if (!favoritos.value.includes(counter.value)) {
    favoritos.value.push(counter.value);
  }
};

// Computed properties
const isInFavoritos = computed(() =>
  favoritos.value.includes(counter.value)
);

const chunkedFavoritos = computed(() => {
  const chunks: number[][] = [];
  for (let i = 0; i < favoritos.value.length; i += CHUNK_SIZE) {
    chunks.push(favoritos.value.slice(i, i + CHUNK_SIZE));
  }
  return chunks;
});
</script>

<template>
  <h1>Hola {{ name }}!</h1>
  <h2 :class="counter >= 0 ? 'positive' : 'negative'">{{ counter }}</h2>

  <div class="button-group">
    <button class="btn green" @click="increment">Increment</button>
    <button class="btn red" @click="decrement">Decrement</button>
    <button class="btn gray" @click="reset">Reset</button>
    <button class="btn blue" :disabled="isInFavoritos" @click="addToFavoritos">
      Add
    </button>
  </div>

  <h2>Mis Favoritos</h2>
  <div class="favorites-container">
    <div
      v-for="(chunk, rowIndex) in chunkedFavoritos"
      :key="`row-${rowIndex}`"
      class="favorites-row"
    >
      <div
        v-for="fav in chunk"
        :key="fav"
        class="favorite-item"
      >
        {{ fav }}
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  color: #f2f2f2;
}

h2 {
  color: #dcdcdc;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.green {
  background-color: green;
}

.red {
  background-color: red;
}

.gray {
  background-color: gray;
}

.blue {
  background-color: #1e40af;
}

.btn:hover:not(:disabled) {
  opacity: 0.85;
}

.favorites-container {
  max-width: 900px;
  margin: 16px auto;
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  border: 1px solid #ddd;
  padding: 16px;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

.favorites-row {
  display: flex;
  gap: 0;
  margin-bottom: 0;
}

.favorite-item {
  padding: 8px 16px;
  text-align: center;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  min-width: 60px;
}

.favorite-item:last-child {
  border-right: none;
}

.favorites-row:last-child .favorite-item {
  border-bottom: none;
}
</style>
