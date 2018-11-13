<template>

  <div class="home">

    <template v-if="!accessToken">
      <p><a v-bind:href="loginUri">Login</a> and see you boards</p>
    </template>

    <template v-if="accessToken">
      <br>
      <board-list></board-list>
    </template>

  </div>

</template>

<script>
import BoardList from '@/components/kanban/BoardList'
export default {
  name: 'Home',
  components: {
    BoardList
  },
  data () {
    return {
    }
  },
  computed: {
    loginUri () {
      let redirectUri = ''

      if (process.env.NODE_ENV === 'development') {
        redirectUri = 'http://localhost:8080/receive-token'
      } else {
        redirectUri = window.location.protocol + '//' + window.location.hostname + '/receive-token'
      }

      let uri = `${process.env.BACKEND_URI}/oauth/authorize?client_id=${process.env.APP_ID}&response_type=token&redirect_uri=${redirectUri}`

      return uri
    },
    accessToken () {
      return this.$store.state.accessToken
    }
  }
}
</script>

<style scoped>
.home {
  padding-left: 15px;
}
</style>
