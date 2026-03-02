<template>
  <header>
    <div class="flex justify-between container mx-auto py-5">
      <RouterLink class="text-2xl" to="/">LOGO</RouterLink>
      <nav class="flex gap-x-5 text-blue-600">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/todos">Список дел</RouterLink>
        <RouterLink to="/products">Товары</RouterLink>
        <RouterLink to="/exchange">Обмен валют</RouterLink>
        <RouterLink to="/cart">Корзина</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container mx-auto"><RouterView /></main>

  <footer></footer>
</template>

<script setup lang="ts">
import { onMounted, provide, ref, watch } from 'vue'
import { type Todo, type Product } from './types/types'

onMounted(() => {
  if (localStorage.getItem('todos2')) {
    todos2.value = JSON.parse(localStorage.getItem('todos2')!)
  }
})
const start_cart = JSON.parse(localStorage.getItem('cart')!) || []

const cart = ref<Product>(start_cart)
provide('cart', cart)

const todos2 = ref<Todo[]>([])
provide('todos2', todos2)
</script>
