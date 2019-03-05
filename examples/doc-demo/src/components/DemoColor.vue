<template>
    <div>
        <h2>Color (defalt: inherit)</h2>
        <p style="color: darkorange;">
            <demo-block :code="code">
                <icon data="@icon/arrow.svg" width="50" height="50"></icon>
                <icon data="@icon/arrow.svg" width="50" height="50" color="red"></icon>
                <icon data="@icon/arrow.svg" width="50" height="50" color="green"></icon>
                <icon data="@icon/arrow.svg" width="50" height="50" color="blue"></icon>
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
    <icon data="@icon/arrow.svg" width="50" height="50" />
    <icon data="@icon/arrow.svg" width="50" height="50" color="red" />
    <icon data="@icon/arrow.svg" width="50" height="50" color="green" />
    <icon data="@icon/arrow.svg" width="50" height="50" color="blue" />
    `
}
</script>
