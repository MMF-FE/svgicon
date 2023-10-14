<template>
    <div id="app">
        <icon data="@icon/vue.svg" original width="100" height="100" />
    </div>
</template>

<script>
import test from '@icon/vue.svg'
console.log(test)
export default {
    name: 'App',
    components: {},
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
