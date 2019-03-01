<template>
  <div>
    <h1>Home</h1>
    <div>
      <router-link to="/about">To About</router-link>
      <icon icon="@icon/arrow.svg"></icon>
      <icon icon="@icon/sora/fit/arrow.svg"></icon>
      <c1></c1>
      <c2></c2>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import C1 from '@/components/C1.vue'
import C2 from '@/components/C2.vue'
import h from '@/common/highlight'
console.log(h)

export default Vue.extend({
    components: {
        C1,
        C2
    }
})
</script>

