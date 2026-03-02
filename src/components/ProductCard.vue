<template>
  <div class="">
    <p>{{ product.brand }} | {{ product.title }}</p>
    <div class="flex gap-2">
      <p>{{ product.rating }} | {{ product.price }}</p>
      <p class="line-through text-red-600">{{ product.oldPrice }}</p>
    </div>
    <p>{{ product.inStock ? 'В наличии' : 'Будет позже' }}</p>
    <p>{{ product.description }}</p>
    <button @click="cart!.push(product)" class="cursor-pointer">Купить</button>
    <RouterLink :to="`/products/${product.id}`">Подробнее</RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types/types'
import { inject, type Ref } from 'vue'
const cart = inject<Ref<Product[]>>('cart')
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
