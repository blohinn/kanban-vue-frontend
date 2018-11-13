<template>
  <div class="create-card-form">

    <template v-if="!formIsOpen">
      <div class="add-card-open-form-btn" v-on:click="formIsOpen = true">
        <p>Add card...</p>
      </div>
    </template>

    <template v-if="formIsOpen">
      <div class="add-card-form-open-state">
        <textarea v-model="card.body" cols="29" rows="3"></textarea>
        <br>
        <button class="btn" v-on:click="pushCardToColumn">Add new card</button>
        <span class="cancel-add-card-btn" v-on:click="formIsOpen = false">Cancel</span>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'CreateCardForm',
  props: {
    columnId: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      formIsOpen: false,
      card: {
        body: ''
      }
    }
  },
  methods: {
    pushCardToColumn () {
      // Make request to the server and if status 200:
      let vue = this
      vue.$axiosBackendAuthorized.post('/api/kanban/card/column/' + vue.columnId, {
        body: this.card.body,
        // TODO Need fix on server. Column is not required because request contain column id
        column: vue.columnId
      }).then(response => {
        console.log(response)
        this.$emit('card-pushed', {
          card: {
            id: response.data.id,
            body: response.data.body
          }
        })

        this.card.name = ''
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
.create-card-form {
  background-color: #2f2f36;
  cursor: pointer;
}

.add-card-open-form-btn {
  padding: 15px 15px 15px 16px;
  color: #cfcfcf;
}

.add-card-open-form-btn p {
  margin: 0;
}

.add-card-open-form-btn:hover {
  background-color: #404046;
}

.add-card-form-open-state {
  padding: 0 15px 15px 15px;
}

.add-card-form-open-state textarea {
  resize: none;
  border: none;
  padding: 10px;
  color: #cfcfcf;
  background-color: #4f4f4f;
  border: 1px solid #4f4f4f;
  margin-bottom: 10px;
  outline: none;
}

.cancel-add-card-btn {
  margin-left: 10px;
  font-size: 14px;
  color: #616161;
}

.cancel-add-card-btn:hover {
  color: #cfcfcf;
}
</style>
