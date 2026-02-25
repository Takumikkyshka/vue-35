<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CounterItem from '../components/CounterItem.vue'
import { type EditingInput, type Todo } from '../types/types'

onMounted(() => {
  if (localStorage.getItem('todos')) {
    todos.value = JSON.parse(localStorage.getItem('todos')!)
  }
})

const showModal = ref<boolean>(false)

const editingInput = ref<EditingInput>({
  id: 0,
  text: '',
})

const todos = ref<Todo[]>([])

watch(
  () => todos.value,
  () => {
    console.log(todos)

    localStorage.setItem('todos', JSON.stringify(todos.value))
  },
  {
    deep: true,
  },
)

const showAdd = ref<boolean>(false)

const text = ref<string>('')

const newToDO = ref<string>('')

function addTodo() {
  // todos.value

  todos.value.push({
    id: Date.now(),
    title: newToDO.value,
    completed: false,
  })

  newToDO.value = ''
}

// todos.value.splice(3, 1)

function deleteToDO(id: number) {
  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    todos.value.splice(index, 1)
  } else {
    console.log('Элемента не существа')
  }
}

function editToDo(id: number) {
  showModal.value = true

  const index = todos.value.findIndex((todo) => todo.id === id)

  if (index !== -1) {
    editingInput.value.text = todos.value[index]!.title
    editingInput.value.id = id
  }
}

function saveToDO() {
  const index = todos.value.findIndex((todo) => todo.id === editingInput.value.id)

  todos.value[index]!.title = editingInput.value.text

  showModal.value = false
}
</script>

<template>
  <h1>Привет VUE!</h1>

  <input type="text" v-model="text" />
  <p>{{ text }}</p>

  <CounterItem></CounterItem>
  <h1>ToDO List</h1>
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
  <!-- <div v-for="todo in todos" v-bind:key="todo.id"></div> -->
  <div
    class="todo-item"
    :class="{ 'todo-completed': todo.completed }"
    v-for="todo in todos"
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
