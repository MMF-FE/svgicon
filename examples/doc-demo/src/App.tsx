import { Component, Vue } from 'vue-property-decorator'
import DemoBlock from '@/components/DemoBlock.vue'

@Component({
    components: {
        DemoBlock
    }
})
export default class App extends Vue {
    protected colors =
        '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'

    protected render() {
        return (
            <div id="app">
                <p>
                    <icon
                        class="vue-logo"
                        data={require('@icon/vue.svg')}
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
                <demo-block />
            </div>
        )
    }
}
