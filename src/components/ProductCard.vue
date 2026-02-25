<template>
  <div class="">
    <p>{{ product.brand }} | {{ product.title }}</p>
    <div class="flex gap-2">
      <p>{{ product.rating }} | {{ product.price }}</p>
      <p class="line-through text-red-600">{{ product.oldPrice }}</p>
    </div>
    <p>{{ product.inStock ? 'В наличии' : 'Будет позже' }}</p>
    <p>{{ product.description }}</p>
    <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'

// defineProps(['brand', 'title', 'rating', 'price'])

// defineProps({
//   id: Number,
//   brand: String,
//   title: String,
//   rating: Number,
//   price: Number,
//   oldPrice: Boolean,
// })

// Способы выше - фигня

// defineProps({
//   id: {
//     type: Number,
//     required: true,
//   },
// })

// defineProps<Product>()

defineProps<{
  product: Product
}>()
</script>
