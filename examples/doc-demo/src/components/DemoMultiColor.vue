<template>
    <div>
        <h2>Multi Color (define by path/shape order)</h2>
        <p>
            <demo-block :code="code">
                <icon
                    data="@icon/check.svg"
                    :fill="false"
                    width="100"
                    height="100"
                    color="r-#42b983 white"
                ></icon>
            </demo-block>
        </p>
        <p>
            <demo-block :code="code2">
                <icon data="@icon/colorwheel.svg" width="200" height="200" :color="colors"></icon>
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
    protected colors =
        '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'
    protected code = `
    <icon
        data="@icon/check.svg"
        :fill="false"
        width="100"
        height="100"
        color="r-#42b983 white" />
    `

    protected code2 = `
    <template>
        <icon data="@icon/colorwheel.svg" width="200" height="200" :color="colors" />
    </template>

    <script>
        export default {
            data () {
                return {
                    colors: '#FBAD20 #F5EB13 #B8D433 #6BC9C6 #058BC5 #34469D #7E4D9F #C63D96 #ED1944'
                }
            }
        }
    <\/script>
    `
}
</script>
