<script setup lang="ts">
import { Product } from 'mock-api';

defineProps<{ product?: Product }>();
</script>

<template>
  <div class="container">
    <p class="title">{{ product?.title }}</p>
    <div class="image">
      <img alt="image" :src="$props.product?.image" />
    </div>

    <button>Add to cart</button>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  height: 400px;
  overflow: hidden;
  border: 1px solid black;
  padding: 1rem 2rem;
  border-radius: 0.2rem;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 6px 6px 0 black;
  }

  .title {
    text-align: center;
    font-weight: 900;
  }

  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    margin-bottom: 2rem;

    > img {
      height: 100%;
      width: auto;
    }
  }

  > button {
    background-color: white;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    cursor: pointer;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 3px 3px 0 black;
    }
  }
}
</style>
