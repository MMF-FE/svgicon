import { Component, Vue } from 'vue-property-decorator'
import { Props } from '@yzfe/vue-svgicon'
import icons from './icons'

@Component({
    components: {},
})
export default class App extends Vue {
    protected props: Partial<Props> = {
        data: icons.find((v) => v.name === 'vue'),
        width: '100',
        height: '100',
        color: '',
        fill: true,
        original: true,
        scale: void 0,
        dir: void 0,
    }

    protected icons = icons
    protected dirList = ['', 'left', 'right', 'up', 'down']
}
