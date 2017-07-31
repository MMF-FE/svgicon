<template>
  <div id="app">
    <svg style="width: 0; position: absolute; opacity: 0">
       <defs>
          <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stop-color="#57f0c2"/>
              <stop offset="95%" stop-color="#147d58"/>
          </linearGradient>
          <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stop-color="#7295c2"/>
              <stop offset="95%" stop-color="#252e3d"/>
          </linearGradient>
      </defs>
    </svg>
    <p>
      <icon class="vue-logo" name="vue" width="15rem" height="15rem"></icon>
    </p>
    <h1>Vue Svg Icon</h1>
    <p>
      <!-- Place this tag where you want the button to render. -->
      <a class="github-button" href="https://github.com/MMF-FE/vue-svgicon" data-size="large" data-show-count="true" aria-label="Star MMF-FE/vue-svgicon on GitHub">Star</a>
    </p>
    <div>
      <h2>Direction (default: right)</h2>
      <demo code="dir"></demo>

      <h2>Size (defalt unit: px, defalt size: 16px / 16px)</h2>
      <p>
        <demo code="size"></demo>
      </p>

      <h2>Fill (default: fill)</h2>
      <demo code="fill"></demo>

      <h2>r-color (reverse fill property)</h2>
      <demo code="r-color"></demo>
      <div>circle is fill, path is stroke</div>

      <h2>Color (defalt: inherit)</h2>
      <p style="color: darkorange">
        <demo code="color"></demo>
      </p>

      <h2>Multi Color (define by path/shape order)</h2>
      <p>
        <demo code="multi-color"></demo>
      </p>
      <p>
        <demo code="multi-color2" :datas="[colors]"></demo>
      </p>

      <h2>Gradient</h2>
      <demo code="gradient"></demo>

      <h2>Namespace</h2>
      <demo code="namespace"></demo>

      <h2>Unique Id</h2>
      <demo code="uid"></demo>
    </div>
  </div>
</template>

<script>
import 'icons'
import Demo from './demo.vue'

export default {
  name: 'app',
  components: {
    Demo
  },
  data () {
    return {
      colors: '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'
    }
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

h2 {
  padding-top: 20px;
  border-top: 1px solid #dcdcdc;
}

.vue-logo path[pid="0"] {
    fill: #42b983
}

.vue-logo path[pid="1"] {
    fill: #35495e
}

</style>
