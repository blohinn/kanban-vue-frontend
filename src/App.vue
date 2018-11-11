<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {}
  }
}
</script>

<style>
* {
  font-family: Arial, sans-serif;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}

.btn {
  padding: 7px;
  border: none;
  background-color: #616161;
  color: #cfcfcf;
  cursor: pointer;
  outline: none;
}

.btn:hover {
  background-color: #505050;
}
</style>
