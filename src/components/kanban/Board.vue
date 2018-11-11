<template>
  <div id="board">

    <div id="board-menu">
      <create-column-form></create-column-form>
    </div>

    <div id="row">
      <column v-for="(column, i) in columns" v-bind:key="i" v-bind:column="column"></column>
    </div>

  </div>
</template>

<script>
import Column from '@/components/kanban/Column'
import CreateColumnForm from '@/components/kanban/CreateColumnForm'

export default {
  name: 'Board',
  components: {
    Column,
    CreateColumnForm
  },
  data () {
    return {
      columns: [
        {
          id: 1,
          name: 'ON HOLD',
          cards: [
            {
              id: 1,
              body: 'Demo card'
            }
          ]
        },
        {
          id: 2,
          name: 'IN PROGRESS',
          cards: []
        }
      ]
    }
  }
}
</script>

<style scoped>
#board {
  background-color: #35383f;
  height: 100%;
}

#board-menu {
  height: 60px;
  box-sizing: border-box;
  padding: 15px;
}

#row {
  overflow-x: scroll;
  white-space: nowrap;
  height: calc(100% - 60px);
}
</style>
