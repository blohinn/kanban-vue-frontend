<template>
  <div class="create-board-form">

    <template v-if="!formIsOpen">
      <button class="btn" v-on:click="formIsOpen = true">New Board</button>
    </template>

    <template v-if="formIsOpen">
      <input type="text" v-model="board.name">
      <button class="btn" v-on:click="pushNewBoard">New Board</button>
      <span class="cancel-add-board-btn" v-on:click="formIsOpen = false">Cancel</span>
    </template>

  </div>
</template>

<script>
export default {
  name: 'CreateBoardForm',
  data () {
    return {
      formIsOpen: false,
      board: {
        name: ''
      }
    }
  },
  methods: {
    pushNewBoard () {
      // Make request to the server and if status 200:
      let vue = this
      vue.$axiosBackendAuthorized.post('/api/kanban/board/', {
        name: this.board.name
      }).then(response => {
        console.log(response)
        this.$emit('board-pushed', {
          board: {
            id: response.data.id,
            name: response.data.name
          }
        })

        this.board.name = ''
        this.formIsOpen = false
      }).catch(function (error) {
        console.log(error)
        console.log(error.response)
      })
    }
  }
}
</script>

<style scoped>
.create-board-form input[type="text"] {
  outline: none;
  border: none;
  padding: 7px;
  color: #cfcfcf;
  background-color: #4f4f4f;
}

.cancel-add-board-btn {
  margin-left: 10px;
  font-size: 14px;
  color: #616161;
  cursor: pointer;
}

.cancel-add-board-btn:hover {
  color: #cfcfcf;
}
</style>
