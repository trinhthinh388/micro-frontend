<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref, onMounted } from 'vue';
import ProductCard from './components/ProductCard.vue';
import { getProducts, Product } from 'mock-api';

const products = ref<Product[]>([]);

async function fetchProducts() {
  const data = await getProducts();
  products.value = data;
}

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <h1 class="title">Micro E-commerce</h1>
  <div class="list">
    <ProductCard v-for="product in products" :product="product" />
  </div>
</template>

<style>
#app {
  padding: 3rem;
}
</style>

<style scoped lang="scss">
.title {
  font-weight: 900;
  margin: 0 0 3rem 0;
}

.list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}
</style>
