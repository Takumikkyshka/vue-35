<script setup lang="ts">
import type { Todo } from '@/types/types'
import { inject, ref, type Ref } from 'vue'

const newToDO = ref<string>('')

const showAdd = ref<boolean>(false)

const todos2 = inject<Ref<Todo[]>>('todos2')

function addTodo() {
  // todos2.value

  todos2!.value.push({
    id: Date.now(),
    title: newToDO.value,
    completed: false,
  })

  newToDO.value = ''
}
</script>
<template>
  <div>
    <button @click="showAdd = !showAdd">{{ showAdd ? 'Закрыть' : 'Добавить дело' }}</button>

    <!-- <form action="" v-show="showAdd"></form> -->

    <form v-if="showAdd" @submit.prevent="addTodo()">
      <input type="text" placeholder="Введите дело" v-model="newToDO" />
      <button>Создать</button>
    </form>
    <div v-else>
      <p>Подсказка: нажмите кнопку</p>
    </div>
  </div>
</template>
