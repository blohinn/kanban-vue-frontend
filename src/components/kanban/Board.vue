<template>
  <div id="board">

    <div id="board-menu">
      <button class="btn">New Column</button>
    </div>

    <div id="row">
      <column v-for="(column, i) in columns" v-bind:key="i" v-bind:column="column"></column>
    </div>

  </div>
</template>

<script>
import Column from '@/components/kanban/Column'
export default {
  name: 'Board',
  components: {
    Column
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
              body: 'Card 1'
            },
            {
              id: 2,
              body: 'Card 2'
            }
          ]
        },
        {
          id: 2,
          name: 'IN PROGRESS',
          cards: [
            {
              id: 3,
              body: 'Card 3'
            }
          ]
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
