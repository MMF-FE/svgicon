<template>
  <div class="code">
    <component :is="child"></component>
    <div class="code-src">
      <pre>
        <code ref="code" class="html">

        </code>
      </pre>
    </div>
  </div>
</template>

<style src="highlight.js/styles/github-gist.css"></style>

<style>
  .code {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .code > div {
    float: left;
    width: 50%;
  }

  code {
    text-align: left;
    line-height: 1.5;
    font-size: 12px;
    border-radius: 5px;
    background: #f4f4f4 !important;
    font-family: 'Roboto Mono', monospace;
  }

  @media(max-width: 1000px) {
    .code {
      display: block;
    }
    .code > div {
      width: 100%;
    }
  }
</style>

<script>
  import Vue from 'vue'
  import codeMap from './codeMap'
  import hlj from './highlight.js'

  export default {
    props: ['code', 'datas'],

    data () {
      return {
        child: {
          name: 'child',
          template: '<div></div>'
        }
      }
    },

    computed: {
      codeString () {
        return codeMap[this.code]
      }
    },

    mounted () {
      this.child = {
        name: 'preview',
        template: `<div>${this.codeString[0]}</div>`,
        data: () => {
          return {
            datas: this.datas || []
          }
        }
      }

      let codeEl = this.$refs.code
      if (codeEl) {
        codeEl.textContent = this.codeString[1]
          ? this.codeString[1].replace(/#{{(\w+)}}/g, (match, name) => {
            return this.codeString[0]
          })
          : this.codeString[0]

        hlj.highlightBlock(codeEl)
      }
    }
  }
</script>



