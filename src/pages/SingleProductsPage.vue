<script setup lang="ts">
import type { Product } from '@/types/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const product = ref<Product>()

onMounted(async () => {
  const data = await ky.get<Product>(`http://localhost:3000/products/${route.params.id}`).json()
  product.value = data
})
</script>
<template>
  <div v-if="product">
    <div>
      <h1>Карточка товара</h1>
      <p>Название: {{ product.title }}</p>
      <p>Цена: {{ product.price }}</p>
      <p>Категория: {{ product.category }}</p>
      <p>Рейтинг: {{ product.rating }}</p>
      <p>{{ product.inStock ? 'В наличии' : 'Возможно когда нибудь если что нибудь, то будет' }}</p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
