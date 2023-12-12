<template>
    <div id="app">
        <icon data="@icon/vue.svg" :original="false"  @click="log" style="font-size: 100px" class="my-class" />
    </div>
</template>

<script>
import test from '@icon/vue.svg'
console.log(test)
export default {
    name: 'App',
    components: {},
    methods: {
        log() {
            console.log('click')
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.my-class {
    color: red;
}
</style>
