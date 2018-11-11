<template>
  <div class="create-card-form">

    <template v-if="!formIsOpen">
      <div class="add-card-open-form-btn" v-on:click="formIsOpen = true">
        <p>Add card...</p>
      </div>
    </template>

    <template v-if="formIsOpen">
      <div class="add-card-form-open-state">
        <textarea id="" cols="29" rows="3"></textarea>
        <br>
        <button class="btn">Add new card</button>
        <span class="cancel-add-card-btn" v-on:click="formIsOpen = false">Cancel</span>
      </div>
    </template>

  </div>
</template>

<script>
export default {
  name: 'CreateCardForm',
  data () {
    return {
      formIsOpen: false
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
