<template>
  <header>
    <div class="flex justify-between container mx-auto py-5">
      <RouterLink class="text-2xl" to="/">LOGO</RouterLink>
      <nav class="flex gap-x-5 text-blue-600">
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/todos">Список дел</RouterLink>
        <RouterLink to="/products">Товары</RouterLink>
        <RouterLink to="/exchange">Обмен валют</RouterLink>
      </nav>
    </div>
  </header>

  <main class="container mx-auto"><RouterView /></main>

  <footer></footer>
</template>

<script setup lang="ts"></script>
