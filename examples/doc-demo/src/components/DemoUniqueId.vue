<template>
    <div>
        <h2>Unique Id</h2>
        <p>
            <demo-block :code="code">
                <icon data="@icon/mask.svg" width="100" height="100"></icon>
                <icon
                    data="@icon/sora/fit/mask.svg"
                    width="100"
                    height="100"
                    color="url(#svgicon_sora_fit_mask_a) red green"
                ></icon>
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
    <icon data="@icon/mask.svg" width="100" height="100" />

    <icon
        data="@icon/sora/fit/mask.svg"
        width="100"
        height="100"
        color="url(#svgicon_sora_fit_mask_a) red green" />
    `
}
</script>
