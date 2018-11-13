<template>
  <div id="board">

    <div id="board-menu">
      <create-column-form v-on:column-pushed="pushColumnToBoard"></create-column-form>
    </div>

    <div id="row">
      <column v-for="(column, i) in columns" v-bind:key="i" v-bind:column="column" v-on:column-removed="removeColumnFromBoard"></column>
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
      columns: []
    }
  },
  methods: {
    pushColumnToBoard (event) {
      this.columns.push(event.column)
    },
    removeColumnFromBoard (columnId) {
      for (let i = 0; i < this.columns.length; i++) {
        if (this.columns[i].id === columnId) {
          this.columns.splice(i, 1)
        }
      }
    }
  },
  beforeCreate () {
    if (!this.$store.state.accessToken) {
      window.location.replace('/')
    }

    // eslint-disable-next-line
    let vue = this
    this.$axiosBackendAuthorized.get('/api/kanban/board/' + vue.$route.params.id).then(response => {
      console.log(response)
      vue.columns = response.data.columns
    }).catch(function (error) {
      console.log(error)
      console.log(error.response)
    })
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
