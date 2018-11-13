<template>
  <div class="card">
    <div class="delete-card-btn" v-on:click="removeCurrentCard">
      <span>×</span>
    </div>
    <p><b>id:</b> {{card.id}}</p>
    <p>{{card.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    }
  },
  methods: {
    removeCurrentCard () {
      // console.log(this.card.id)
      // Make request to the server and if status 200 or 204 (no content):
      this.$axiosBackendAuthorized.delete('/api/kanban/card/' + this.card.id)
        .then(response => {
          console.log(response)
          this.$emit('card-removed', this.card.id)
        }).catch(function (error) {
          console.log(error)
          console.log(error.response)
        })
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  background-color: #1f1f22;
  color: #aaa;
  padding: 5px 10px;
  white-space: normal;
  font-size: 16px;
  margin-top: 10px;
}

.delete-card-btn {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.delete-card-btn:hover {
  color: white;
  cursor: pointer;
}
</style>
