<template>
  <div id="app">
    <w-header/>
    <router-view/>
    <w-footer/>
  </div>
</template>
<script>
import wHeader from './components/wHeader';
import wFooter from './components/wFooter';
export default {
  components: {
    wHeader,
    wFooter,
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

/* #app a {
  color: rgb(196, 27, 27);
} */

body {
  background: black;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
