<template>
  <div class="create-column-form">

    <template v-if="!formIsOpen">
      <button class="btn" v-on:click="formIsOpen = true">New Column</button>
    </template>

    <template v-if="formIsOpen">
      <input type="text">
      <button class="btn">New Column</button>
      <span class="cancel-add-column-btn" v-on:click="formIsOpen = false">Cancel</span>
    </template>

  </div>
</template>

<script>
export default {
  name: 'CreateColumnForm',
  data () {
    return {
      formIsOpen: false
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
