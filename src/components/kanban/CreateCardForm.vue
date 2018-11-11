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
      // console.log(this.card.body)
      // console.log(this.columnId)
      // Make request to the server and if status 200:
      this.$emit('card-pushed', {
        card: {
          id: Math.floor(Math.random() * 999) + 1, // From server response
          body: this.card.body
        },
        columnId: this.columnId
      })
      this.card.body = ''
      this.formIsOpen = false
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
