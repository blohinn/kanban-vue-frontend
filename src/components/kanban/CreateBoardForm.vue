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
      this.$emit('board-pushed', {
        board: {
          id: Math.floor(Math.random() * 999) + 1, // From server response
          name: this.board.name
        }
      })

      this.board.name = ''
      this.formIsOpen = false
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
