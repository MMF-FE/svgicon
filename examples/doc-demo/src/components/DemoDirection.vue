<template>
    <div>
        <h2>Direction (default: right)</h2>
        <p>
            <demo-block :code="code">
                <icon data="@icon/arrow.svg" width="50" height="50" dir="left" title="left"/>
                <icon data="@icon/arrow.svg" width="50" height="50" dir="up" title="up"/>
                <icon data="@icon/arrow.svg" width="50" height="50" title="right"/>
                <icon data="@icon/arrow.svg" width="50" height="50" dir="down" title="down"/>
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
        <icon data="@icon/arrow.svg" width="50" height="50" dir="left" title="left"></icon>
        <icon data="@icon/arrow.svg" width="50" height="50" dir="up" title="up"></icon>
        <icon data="@icon/arrow.svg" width="50" height="50" title="right"></icon>
        <icon data="@icon/arrow.svg" width="50" height="50" dir="down" title="down"></icon>
    `
}
</script>
