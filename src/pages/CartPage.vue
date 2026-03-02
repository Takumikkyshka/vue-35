<script setup lang="ts">
import type { Product } from '@/types/types'
import { inject, type Ref } from 'vue'

const cart = inject<Ref<Product[]>>('cart')
</script>

<template>
  <div v-if="cart?.length">
    <div v-for="product in cart" :key="product.id">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
