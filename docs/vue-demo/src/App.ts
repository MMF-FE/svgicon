import { Component, Vue } from 'vue-property-decorator'
import { Props } from '@yzfe/vue-svgicon'
import icons from './icons'
import awesome from './awesome'

console.log(JSON.stringify(icons.find((v) => v.name === 'mask')))

@Component({
    components: {},
})
export default class App extends Vue {
    private props: Partial<Props> = {
        data: icons.find((v) => v.name === 'vue'),
        width: '50',
        height: '50',
        color: '',
        fill: true,
        original: true,
        scale: void 0,
        dir: void 0,
    }

    private icons = icons
    private awesome = awesome
    private dirList = ['', 'left', 'right', 'up', 'down']

    private className = 'test'

    private iconClick() {
        console.log('click')
    }

    private mounted() {
        console.log(this.$refs)
    }
}
