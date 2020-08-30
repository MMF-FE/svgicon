<template>
    <div>
        <h1>HELLO</h1>
        <icon :data="vueIcon" original />
        <icon data="@icon/arrow.svg" original dir="right"/>
    </div>
</template>
<script>
import vueIcon from '@icon/vue.svg'

export default {
    data() {
        return {
            vueIcon
        }
    }
}
</script>