<template>
    <div>
        <h2>Size (defalt unit: px)</h2>
        <p>
            <demo-block :code="code">
                <icon data="@icon/arrow.svg"></icon>
                <icon data="@icon/arrow.svg" width="50" height="50"></icon>
                <icon data="@icon/arrow.svg" height="50"></icon>
                <icon data="@icon/arrow.svg" scale="15"></icon>
                <icon data="@icon/arrow.svg" width="10em" height="10em"></icon>
            </demo-block>
        </p>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import DemoBlock from './DemoBlock.vue'

@Component({
    components: {
        DemoBlock
    }
})
export default class extends Vue {
    protected code = `
        <icon data="@icon/arrow.svg"></icon>
        <icon data="@icon/arrow.svg" width="50" height="50"></icon>
        <icon data="@icon/arrow.svg" height="50"></icon>
        <icon data="@icon/arrow.svg" scale="15"></icon>
        <icon data="@icon/arrow.svg" width="10em" height="10em"></icon>
    `
}
</script>
