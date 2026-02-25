<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue'
import type { Product } from '@/types/types'
import ky from 'ky'
import { onMounted, ref } from 'vue'

const products = ref<Product[]>([])

// const loading = ref(true)

onMounted(async () => {
  //   const resp = await fetch('http://localhost:3000/products')
  //   const data = await resp.json()
  //   products.value = data

  const data = await ky.get<Product[]>('http://localhost:3000/products').json()
  products.value = data

  // loading.value = false
})
</script>
<template>
  <h1>Каталог товаров</h1>

  <div v-if="products.length" class="grid grid-cols-5 gap-5 pt-5">
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
