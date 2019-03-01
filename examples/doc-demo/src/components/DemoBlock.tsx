import { Component, Vue, Prop } from 'vue-property-decorator'
import codeMap from '@/common/codeMap'
import hlj from '@/common/highlight'

@Component({
    components: {}
})
export default class DemoBlock extends Vue {
    @Prop() protected code!: string

    @Prop() protected datas!: any[]

    protected get codeString() {
        return codeMap[this.code]
    }

    protected mounted() {
        let codeEl: HTMLElement = this.$refs.code as HTMLElement
        if (codeEl) {
            codeEl.textContent = this.codeString[1]
                ? this.codeString[1].replace(/#{{(\w+)}}/g, (match, name) => {
                      return this.codeString[0]
                  })
                : this.codeString[0]

            hlj.highlightBlock(codeEl)
        }
    }

    protected render() {
        if (this.codeString) {
            let datas = this.datas || []

            @Component({
                name: 'PreviewBlock',
                template: `
                    <div>${this.codeString[0]}</div>
                `
            })
            class PreviewBlock extends Vue {
                protected datas: any[] = datas
            }

            return (
                <div class="demo-block">
                    <PreviewBlock />
                    <div>
                        <pre>
                            <code ref="code" class="html" />
                        </pre>
                    </div>
                </div>
            )
        } else {
            return <div />
        }
    }
}
