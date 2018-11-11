<template>
  <div class="card">
    <div class="delete-card-btn">
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
}

.card:not(:last-child) {
  margin-bottom: 15px;
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
