<template>
  <div>
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button v-on:click="count = count + 1">+</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
