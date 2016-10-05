<template>
  <section class="todo">
    <h1>Todo List</h1>
    <form class="todo__form" @submit.prevent="add">
      <input v-model="newTodo" type="text" placeholder="new todo"/>
      <button class="todo__btn" type="submit">Add</button>
    </form>

    <ul class="todo__list">
      <li v-for="todo in todos">{{ todo.text }} <button class="todo__btn" @click="remove(todo)" type="button">Delete</button></li>
    </ul>
  </section>
</template>

<script>
export default {
  data () {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    add () {
      if (!this.newTodo) return

      this.todos.push({
        text: this.newTodo
      })

      this.newTodo = ''
    },
    remove (todo) {
      if (!todo) return

      this.todos.splice(this.todos.indexOf(todo), 1)
    }
  }
}
</script>

<style lang="scss">
.todo {
  margin: 1rem 0;
  background-color: #ffffff;
  color: #000000;
  padding: 2rem;
}

  .todo__form {
    input {
      border: 1px solid #000000;
    }
  }

  .todo__list {
    list-style: none;
    text-align: left;
  }

  .todo__btn {

  }
</style>
