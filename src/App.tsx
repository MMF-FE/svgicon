import { Component, Vue } from 'vue-property-decorator'
import DemoBlock from '@/components/DemoBlock'

@Component({
    components: {
        DemoBlock
    }
})
export default class App extends Vue {
    protected colors =
        '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'

    protected mounted() {
        setTimeout(() => {
            import('@/components/icons-async').then(() => {
                console.log('Async icons loaded')
            })
        }, 3000)
    }

    protected render() {
        return (
            <div id="app">
                <p>
                    <icon
                        class="vue-logo"
                        name="vue"
                        width="15rem"
                        height="15rem"
                    />
                </p>
                <h1>Vue Svg Icon</h1>
                <p>
                    <a
                        class="github-button"
                        href="https://github.com/MMF-FE/vue-svgicon"
                        data-size="large"
                        data-show-count="true"
                        aria-label="Star MMF-FE/vue-svgicon on GitHub"
                    >
                        Star
                    </a>
                </p>
                <div>
                    <h2>Color (defalt: inherit)</h2>
                    <p style="color: darkorange">
                        <demo-block code="color" />
                    </p>

                    <h2>Multi Color (define by path/shape order)</h2>
                    <demo-block code="multi-color" />
                    <demo-block code="multi-color2" datas={[this.colors]} />

                    <h2>Use original colors</h2>
                    <demo-block code="original-color" />

                    <h2>Gradient</h2>
                    <demo-block code="gradient" />

                    <h2>Size (defalt unit: px)</h2>
                    <demo-block code="size" />

                    <h2>Fill (default: fill)</h2>
                    <demo-block code="fill" />

                    <h2>r-color (reverse fill property)</h2>
                    <demo-block code="r-color" />
                    <div>circle is fill, path is stroke</div>

                    <h2>Direction (default: right)</h2>
                    <demo-block code="dir" />

                    <h2>Namespace</h2>
                    <demo-block code="namespace" />

                    <h2>Unique Id</h2>
                    <demo-block code="uid" />

                    <h2>Async</h2>
                    <demo-block code="async" />
                </div>
                <svg style="width: 0; position: absolute; opacity: 0">
                    <defs>
                        <linearGradient
                            id="gradient-1"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stop-color="#57f0c2" />
                            <stop offset="95%" stop-color="#147d58" />
                        </linearGradient>
                        <linearGradient
                            id="gradient-2"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop offset="5%" stop-color="#7295c2" />
                            <stop offset="95%" stop-color="#252e3d" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        )
    }
}
