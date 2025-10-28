<script setup lang="ts">
import { ref, computed } from 'vue';

const name: string = 'Vue 3';
const counter = ref<number>(0);
const favoritos = ref<number[]>([]);

// Acciones
const increment = (): void => {
  counter.value++;
};

const decrement = (): void => {
  counter.value--;
};

const reset = (): void => {
  counter.value = 0;
};

const addToFavoritos = (): void => {
  if (!favoritos.value.includes(counter.value)) {
    favoritos.value.push(counter.value);
  }
};

// Desactivar botón si el número ya está en favoritos
const isInFavoritos = computed(() => favoritos.value.includes(counter.value));

// Dividir favoritos en columnas de 10
const chunkSize = 10;
const chunkedFavoritos = computed(() => {
  const chunks: number[][] = [];
  for (let i = 0; i < favoritos.value.length; i += chunkSize) {
    chunks.push(favoritos.value.slice(i, i + chunkSize));
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
  <div class="favorites-columns">
    <div
      v-for="(chunk, colIndex) in chunkedFavoritos"
      :key="colIndex"
      class="column"
    >
      <table class="favorites-table">
        <tr v-for="(fav, index) in chunk" :key="index">
          <td>{{ fav }}</td>
        </tr>
      </table>
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

/* Estilos para columnas dinámicas */
.favorites-columns {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 16px;
}

.column {
  display: flex;
  flex-direction: column;
}

.favorites-table {
  background-color: #fff;
  color: #000;
  border-radius: 6px;
  border-collapse: collapse;
  width: 80px;
}

.favorites-table td {
  border: 1px solid #ccc;
  padding: 6px;
  text-align: center;
}
</style>
