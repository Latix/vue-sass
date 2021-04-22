<template>
  <div class="container">
    <div class="strip animating">
      <div class="box"></div>
      <div class="box"></div>
      <div class="box"></div>
    </div>
    <div class="woven-container">
      <div class="woven-container__header animating">
        <h4>Header</h4>
        <p>Welcome to the header</p>
      </div>
      <div class="woven-container__content">Content</div>
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
import '../public/css/main.min.css'

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
