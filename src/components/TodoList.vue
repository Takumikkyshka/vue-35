<script setup lang="ts">
import type { EditingInput, Todo } from '@/types/types'
import { inject, type Ref, ref, watch } from 'vue'
import TodoAdd from './TodoAdd.vue'

const todos2 = inject<Ref<Todo[]>>('todos2')

const showModal = ref<boolean>(false)

const editingInput = ref<EditingInput>({
  id: 0,
  text: '',
})

watch(
  () => todos2!.value,
  () => {
    console.log(todos2)

    localStorage.setItem('todos2', JSON.stringify(todos2!.value))
  },
  {
    deep: true,
  },
)

// todos2.value.splice(3, 1)

function deleteToDO(id: number) {
  const index = todos2!.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos2!.value.splice(index, 1)
  } else {
    console.log('Элемента не существа')
  }
}

function editToDo(id: number) {
  showModal.value = true

  const index = todos2!.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    editingInput.value.text = todos2!.value[index]!.title
    editingInput.value.id = id
  }
}

function saveToDO() {
  const index = todos2!.value.findIndex((todo) => todo.id === editingInput.value.id)

  todos2!.value[index]!.title = editingInput.value.text

  showModal.value = false
}
</script>
<template>
  <h1>TodoList</h1>
  <h1>ToDO List</h1>
  <TodoAdd></TodoAdd>
  <!-- <div v-for="todo in todos2" v-bind:key="todo.id"></div> -->
  <div
    class="todo-item"
    :class="{ 'todo-completed': todo.completed }"
    v-for="todo in todos2"
    :key="todo.id"
  >
    <p>{{ todo.id }}</p>
    <span>{{ todo.title }}</span>
    <input type="checkbox" v-model="todo.completed" />
    <button @click="deleteToDO(todo.id)">Delete</button>
    <button @click="editToDo(todo.id)">Edit</button>
  </div>
  <div v-if="showModal" @click="showModal = false" class="modal-overlay">
    <!-- @click = "(e) => e.stopPropagation" -->
    <div @click.stop class="modal">
      <button @click="showModal = false">x</button>
      <h3>Редактировать дело</h3>
      <form @submit.prevent="saveToDO()">
        <input type="text" v-model="editingInput.text" />
        <button>Сохранить</button>
      </form>
    </div>
  </div>
</template>
<style scoped>
h1 {
  color: red;
}

.todo-item {
  display: flex;
  align-items: center;
  column-gap: 40px;
  margin-top: 10px;
}

.todo-completed span {
  text-decoration: line-through;
}

.modal {
  background-color: white;
  max-width: 500px;
  width: 100%;
  padding: 100px;
}

.modal-overlay {
  background-color: rgba(0, 0, 0, 0.497);
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
