<template>
    <div>
        <h2>Gradient</h2>
        <p>
            <svg style="width: 0; position: absolute; opacity: 0;">
                <defs>
                    <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stop-color="#57f0c2"></stop>
                        <stop offset="95%" stop-color="#147d58"></stop>
                    </linearGradient>
                    <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stop-color="#7295c2"></stop>
                        <stop offset="95%" stop-color="#252e3d"></stop>
                    </linearGradient>
                </defs>
            </svg>
            <demo-block :code="code">
                <icon
                    data="@icon/vue.svg"
                    width="15rem"
                    height="15rem"
                    color="url(#gradient-1) url(#gradient-2)"
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
    <svg style="width: 0; position: absolute; opacity: 0">
        <defs>
            <linearGradient id="gradient-1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stop-color="#57f0c2"/>
                <stop offset="95%" stop-color="#147d58"/>
            </linearGradient>
            <linearGradient id="gradient-2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stop-color="#7295c2"/>
                <stop offset="95%" stop-color="#252e3d"/>
            </linearGradient>
        </defs>
    </svg>

    <icon
        data="@icon/vue.svg"
        width="15rem"
        height="15rem"
        color="url(#gradient-1) url(#gradient-2)" />
    `
}
</script>
