<template>
    <div class="demo-block">
        <div>
            <slot></slot>
        </div>
        <div>
            <pre>
                <code ref="code" class="html"></code>
            </pre>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import hlj from '@/common/highlight'

@Component
export default class DemoBlock extends Vue {
    @Prop()
    protected code!: string

    protected mounted() {
        let codeEl: HTMLElement = this.$refs.code as HTMLElement
        if (codeEl) {
            codeEl.textContent = this.code
            hlj.highlightBlock(codeEl)
        }
    }
}
</script>


