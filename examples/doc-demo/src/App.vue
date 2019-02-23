<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <icon ref="icon" name="@icon?vue"></icon>
    <button @click="setName">SetName</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
    components: {}
})
export default class App extends Vue {
    show = false

    icon1 = require('@icon?logo')

    setName() {
        console.log(typeof this.icon1)
        this.show = !this.show
    }
}
</script>

<style>
/* recommended css code for vue-svgicon */
.svg-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: inherit;
    vertical-align: middle;
    fill: none;
    stroke: currentColor;
}

.svg-fill {
    fill: currentColor;
    stroke: none;
}

.svg-up {
    /* default */
    transform: rotate(0deg);
}

.svg-right {
    transform: rotate(90deg);
}

.svg-down {
    transform: rotate(180deg);
}

.svg-left {
    transform: rotate(-90deg);
}
</style>
