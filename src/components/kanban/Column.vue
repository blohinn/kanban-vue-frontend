<template>
  <div class="column">

    <div class="column-header">
      <p>IN PROGRESS</p>
    </div>

    <div class="column-content">
      <card></card>
      <card></card>
    </div>

    <create-card-form></create-card-form>

  </div>
</template>

<script>
import Card from '@/components/kanban/Card'
import CreateCardForm from '@/components/kanban/CreateCardForm'
export default {
  name: 'Column',
  components: {
    Card,
    CreateCardForm
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.column {
  display: inline-block;
  margin-left: 15px;
  margin-right: 50px;
  margin-bottom: 15px;
  width: 300px;
  vertical-align: top;
}

.column:last-child {
  margin-right: 15px;
}

.column-header {
  color: white;
  text-shadow: 0 0 4px #4b5263;
  text-transform: uppercase;
  padding: 10px 10px;
  background-color: #2a92bf;
}

.column-header p {
  margin: 0;
  overflow-x: hidden;
  text-overflow: ellipsis;
}

.column-content {
  background-color: #2f2f36;
  padding: 15px;
}

.create-card-form p {
  margin: 0;
}
</style>
