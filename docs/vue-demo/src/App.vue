<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" />
        <button @click="toggleDir">toggleDir</button>
        <icon
            data="@icon/vue.svg"
            v-if="dir === 'right'"
            :dir="dir"
            :width="width"
        ></icon>
        <icon
            data="@icon/vue.svg"
            v-if="dir === 'left'"
            :dir="dir"
            :width="width"
            original
        ></icon>
        <icon
            data="@icon/vue.svg"
            :dir="dir"
            :width="width"
            :fill="false"
        ></icon>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data: function () {
        return {
            dir: 'left',
            width: 100,
        }
    },
    methods: {
        toggleDir: function () {
            this.dir = this.dir === 'left' ? 'right' : 'left'
            this.width = this.width === 100 ? 200 : 100
        },
    },
})
// import { Component, Vue } from 'vue-property-decorator'
// import HelloWorld from './components/HelloWorld.vue'

// @Component({
//     components: {
//         HelloWorld,
//     },
// })
// export default class App extends Vue {
//     protected dir = 'left'
//     protected width = 100

//     protected toggleDir() {
//         this.dir = this.dir === 'left' ? 'right' : 'left'
//         this.width = this.width === 100 ? 200 : 100
//     }

//     created() {}
// }
</script>

<style lang="scss">
#app {
    margin-top: 60px;
    color: #2C3E50;
    text-align: center;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
