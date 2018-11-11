<template>
  <div id="board">

    <div id="board-menu">
      <button class="btn">New Column</button>
    </div>

    <div id="row">
      <column></column>
      <column></column>
      <column></column>
      <column></column>
      <column></column>
      <column></column>
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
        1,
        2,
        3,
        4
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
