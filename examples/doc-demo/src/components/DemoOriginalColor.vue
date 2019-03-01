<template>
    <div>
        <h2>Use original colors</h2>
        <p>
            <demo-block :code="code">
                <icon data="@icon/colorwheel.svg" width="100" height="100" original></icon>
                <!-- overwrite original color -->
                <icon
                    data="@icon/colorwheel.svg"
                    width="100"
                    height="100"
                    original
                    color="_ black _ black _"
                ></icon>
                <icon
                    data="@icon/colorwheel.svg"
                    width="100"
                    height="100"
                    original
                    color="_ r-black _ r-red _"
                ></icon>
                <icon data="@icon/gift.svg" width="100" height="100" original></icon>
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
        <icon data="@icon/colorwheel.svg" width="100" height="100" original></icon>
        <!-- overwrite original color -->
        <icon data="@icon/colorwheel.svg" width="100" height="100" original color="_ black _ black _"></icon>
        <icon data="@icon/colorwheel.svg" width="100" height="100" original color="_ r-black _ r-red _"></icon>
        <icon data="@icon/gift.svg" width="100" height="100" original></icon>
    `
}
</script>
