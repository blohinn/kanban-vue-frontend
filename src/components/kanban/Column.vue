<template>

  <div class="column">

    <div class="column-header">
      <p>{{column.name}} ({{column.cards.length}})</p>
    </div>

    <div class="column-content">
      <card v-for="card in column.cards" v-bind:key="card.id" v-bind:card="card"></card>
    </div>

    <create-card-form v-bind:columnId="column.id" v-on:card-pushed="pushCardToColumn"></create-card-form>

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
  props: {
    column: {
      type: Object,
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    pushCardToColumn (event) {
      this.column.cards.push(event.card)
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
