import { Component, Vue } from 'vue-property-decorator'
import { Props } from '@yzfe/vue-svgicon'
import icons from './icons'
import awesome from './awesome'

@Component({
    components: {},
})
export default class App extends Vue {
    protected props: Partial<Props> = {
        data: icons.find((v) => v.name === 'vue'),
        width: '50',
        height: '50',
        color: '',
        fill: true,
        original: true,
        scale: void 0,
        dir: void 0,
    }

    protected icons = icons
    protected awesome = awesome
    protected dirList = ['', 'left', 'right', 'up', 'down']

    protected className = 'test'

    protected iconClick(): void {
        console.log('click')
    }
}
