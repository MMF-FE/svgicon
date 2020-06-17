<template>
    <div>
        <h2>r-color (reverse fill property)</h2>
        <p>
            <demo-block :code="code">
                <icon data="@icon/clock.svg" color="#8A99B2 r-#1C2330" width="100" height="100"></icon>

                <icon
                    data="@icon/clock.svg"
                    color="#8A99B2 r-var(--color-primary)"
                    width="100"
                    height="100"
                />
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
    <icon data="@icon/clock.svg" color="#8A99B2 r-#1C2330" width="100" height="100" />

    <icon data="@icon/clock.svg" color="#8A99B2 r-var(color-primary)" width="100" height="100" />
    `
}
</script>

