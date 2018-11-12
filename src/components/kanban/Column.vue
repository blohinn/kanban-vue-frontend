<template>

  <div class="column">

    <div class="column-header">
      <div class="delete-column-btn" v-on:click="removeCurrentColumn">
        <span>×</span>
      </div>
      <p>{{column.name}} ({{column.cards.length}}) </p>
    </div>

    <div class="column-content">

      <Container @drop="onDrop" :group-name="'column'" :get-child-payload="getChildPayload">
        <Draggable v-for="card in column.cards" :key="card.id">
          <card v-bind:key="card.id" v-bind:card="card" v-on:card-removed="removeCardFromColumn"></card>
        </Draggable>
      </Container>

      <!-- <card v-for="card in column.cards" v-bind:key="card.id" v-bind:card="card" v-on:card-removed="removeCardFromColumn"></card> -->
    </div>

    <create-card-form v-bind:columnId="column.id" v-on:card-pushed="pushCardToColumn"></create-card-form>

  </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag } from './utils.js'

import Card from '@/components/kanban/Card'
import CreateCardForm from '@/components/kanban/CreateCardForm'

export default {
  name: 'Column',
  components: {
    Card,
    CreateCardForm,
    Container,
    Draggable
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
    },
    removeCardFromColumn (cardId) {
      for (let i = 0; i < this.column.cards.length; i++) {
        if (this.column.cards[i].id === cardId) {
          this.column.cards.splice(i, 1)
          // console.log(this.column.cards[i])
        }
      }
    },
    removeCurrentColumn () {
      // console.log(this.column.id)
      // Make request to the server and if status 200 or 204 (no content):
      this.$emit('column-removed', this.column.id)
    },
    onDrop: function (dropResult) {
      this.column.cards = applyDrag(this.column.cards, dropResult)
      // this.column.cards = collection
      // this.hideAddACardTextarea()
      // this[collection] = applyDrag(this[collection], dropResult)
      // saveItems(collection, this[collection])
    },
    getChildPayload (index) {
      return this.column.cards[index]
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
  position: relative;
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
  padding: 5px 15px 10px 15px;
}

.create-card-form p {
  margin: 0;
}

.delete-column-btn {
  position: absolute;
  right: 10px;
  cursor: pointer;
}

.delete-column-btn:hover {
  color: white;
  cursor: pointer;
}
</style>
