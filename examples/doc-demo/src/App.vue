<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <svgicon ref="icon" :name="test"></svgicon>
    <button @click="setName">test</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class App extends Vue {
    test = 'bbb'

    setName() {
        this.test = 'aaa'
        console.log(this.$refs.icon)
    }
}
</script>
