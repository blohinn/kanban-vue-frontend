<template>
  <div class="board-list">
    <create-board-form v-on:board-pushed="pushBoardToBoardList"></create-board-form>

    <h1>Your boards:</h1>
    <ul>
      <li v-for="board in boards" :key="board.id">
        <a v-bind:href="'/board/' + board.id">{{board.name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import CreateBoardForm from '@/components/kanban/CreateBoardForm'
export default {
  name: 'BoardList',
  components: {
    CreateBoardForm
  },
  data () {
    return {
      boards: []
    }
  },
  methods: {
    pushBoardToBoardList (event) {
      this.boards.push(event.board)
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
