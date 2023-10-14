<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import IconVue from '@icon/vue.svg?component'
import IconVue2 from '@icon/vue.svg'
console.log('component:', IconVue)
console.log('data: ', IconVue2)
</script>

<template>
    <div>
        <IconVue original @click="() => console.log('click')" />
        <icon data="@icon/vue.svg" color="red blue"></icon>
    </div>
</template>

<style>
</style>
