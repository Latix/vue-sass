<template>
  <div class="container">
    <div class="strip animate__animated animate__shakeX animate__slower animate__infinite	infinite">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="todos__container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'
import '../public/scss/main.scss'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
}
</script>

<style>

</style>
