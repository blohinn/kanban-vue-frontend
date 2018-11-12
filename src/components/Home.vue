<template>
  <div class="home">
    <p><a v-bind:href="loginUri">Login</a> and see you boards</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
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
    }
  }
}
</script>

<style scoped>
.home {
  padding-left: 15px;
}
</style>
