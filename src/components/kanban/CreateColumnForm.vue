<template>
  <div class="create-column-form">
    <template v-if="!formIsOpen">
      <button class="btn" v-on:click="formIsOpen = true">New Column</button>
    </template>

    <template v-if="formIsOpen">
      <input type="text" v-model="column.name">
      <button class="btn" v-on:click="pushNewColumn">New Column</button>
      <span class="cancel-add-column-btn" v-on:click="formIsOpen = false">Cancel</span>
    </template>

  </div>
</template>

<script>
export default {
  name: 'CreateColumnForm',
  props: {
    boardId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      formIsOpen: false,
      column: {
        name: ''
      }
    }
  },
  methods: {
    pushNewColumn () {
      // Make request to the server and if status 200:
      let vue = this
      vue.$axiosBackendAuthorized.post('/api/kanban/column/board/' + vue.boardId, {
        name: this.column.name
      }).then(response => {
        console.log(response)
        this.$emit('column-pushed', {
          column: {
            id: response.data.id,
            name: response.data.name,
            cards: response.data.cards
          }
        })

        this.column.name = ''
        this.formIsOpen = false
      }).catch(function (error) {
        console.log(error)
        console.log(error.response)
      })
      /** ******* */
      // this.$emit('column-pushed', {
      //   column: {
      //     id: Math.floor(Math.random() * 999) + 1, // From server response
      //     name: this.column.name,
      //     cards: []
      //   }
      // })
      // this.column.name = ''
      // this.formIsOpen = false
    }
  }
}
</script>

<style scoped>
.create-column-form input[type="text"] {
  outline: none;
  border: none;
  padding: 7px;
  color: #cfcfcf;
  background-color: #4f4f4f;
}

.cancel-add-column-btn {
  margin-left: 10px;
  font-size: 14px;
  color: #616161;
  cursor: pointer;
}

.cancel-add-column-btn:hover {
  color: #cfcfcf;
}
</style>
