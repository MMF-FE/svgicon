<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <icon :data="vueIcon" original></icon>
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import vueIcon from '@yzfe/assets/svg/vue.svg'

export default {
    name: 'App',
    components: {
        HelloWorld,
    },
    data() {
        return {
            vueIcon,
        }
    },
}
</script>

<style>
#app {
    margin-top: 60px;
    color: #2c3e50;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
