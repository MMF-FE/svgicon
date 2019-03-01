<template>
  <div id="app">
    <img alt="Vue logo" :src="logoPng">
    <icon ref="icon" icon="@icon/mask.svg" @click="setName" color="blue"></icon>
    <icon
      ref="icon"
      icon="./assets/svg/vue.svg"
      @click="setName"
      color="red blue"
      width="300"
      height="300"
    ></icon>
    <icon icon="./assets/svg/sora/fit/arrow.svg"></icon>
    <button @click="setName">SetName</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
// @ts-ignore
import logoPng from '@/assets/logo.png'

@Component({
    components: {}
})
export default class App extends Vue {
    show = false
    logoPng = logoPng

    setName() {
        this.show = !this.show
    }
}
</script>
