<template>
  <div>
    <h1>About</h1>
    <div>
      <router-link to="/">To Home</router-link>
      <icon icon="@icon/arrow.svg"></icon>
      <icon icon="@icon/vue.svg"></icon>
    </div>
    <c1></c1>
    <c3></c3>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import C1 from '@/components/C1.vue'
import C3 from '@/components/C3.vue'
import h from '@/common/highlight'
console.log(h)

export default Vue.extend({
    components: {
        C1,
        C3
    }
})
</script>
