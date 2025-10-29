<script setup lang="ts">
import { ref, computed, type Ref, type ComputedRef } from 'vue';

const name: string = 'Vue 3';
const counter: Ref<number> = ref<number>(0);
const favoritos: Ref<number[]> = ref<number[]>([]);

const increment: () => void = (): void => {
  counter.value++;
};

const decrement: () => void = (): void => {
  counter.value--;
};

const reset: () => void = (): void => {
  counter.value = 0;
};

const addToFavoritos: () => void = (): void => {
  const currentValue: number = counter.value;
  const exists: boolean = favoritos.value.includes(currentValue);

  if (!exists) {
    favoritos.value.push(currentValue);
  }
};

const isInFavoritos: ComputedRef<boolean> = computed<boolean>(() => {
  const currentValue: number = counter.value;
  const listaFavoritos: number[] = favoritos.value;
  const found: boolean = listaFavoritos.includes(currentValue);
  return found;
});

const chunkSize: number = 10;

const chunkedFavoritos: ComputedRef<number[][]> = computed<number[][]>(() => {
  const chunks: number[][] = [];
  const lista: number[] = favoritos.value;
  const total: number = lista.length;

  for (let i: number = 0; i < total; i += chunkSize) {
    const startIndex: number = i;
    const endIndex: number = i + chunkSize;
    const slice: number[] = lista.slice(startIndex, endIndex);
    chunks.push(slice);
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
      :key="rowIndex"
      class="favorites-row"
    >
      <div
        v-for="(fav, index) in chunk"
        :key="index"
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
  max-width: 800px;
  margin: 16px auto;
  padding: 16px;
  background-color: #2a2a2a;
  border-radius: 8px;
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
}

.favorites-row {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  flex-wrap: nowrap;
  justify-content: flex-start;
}

.favorite-item {
  background-color: #fff;
  color: #000;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
  border: 2px solid #4a90e2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
