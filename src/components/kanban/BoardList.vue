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
  },
  beforeCreate () {
    // eslint-disable-next-line
    let vue = this
    this.$axiosBackendAuthorized.get('/api/kanban/board/').then(response => {
      console.log(response)
      vue.boards = response.data
    }).catch(function (error) {
      console.log(error)
    })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding-bottom: 10px;
}
</style>
