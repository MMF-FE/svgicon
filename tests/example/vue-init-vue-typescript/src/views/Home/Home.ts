/**
 * Home
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './Home.vue'
import HelloWorld from 'components/HelloWorld'

@Component({
    name: 'Home',
    mixins: [template],
    components: {
        HelloWorld
    }
})
export default class Home extends Vue {
    //#region datas ******************************/
    //#endregion datas ***************************/

    //#region props ******************************/
    //#endregion props ***************************/

    //#region vuex *******************************/
    //#endregion vuex ****************************/

    //#region computed ***************************/
    //#endregion computed ************************/

    //#region watchers ***************************/
    //#endregion watchers ************************/

    //#region life cycle *************************/
    protected async created() {
        // api example
        try {
            let res = await this.api.getPackage({})
            console.log(res.content)
        } catch (err) {
            console.log(err)
        }
    }

    //#endregion life cycle **********************/

    //#region hooks ******************************/
    protected beforeRouteEnter(to, from, next) {
        console.log('before home enter')
        next()
    }

    protected beforeRouteLeave(to, from, next) {
        console.log('before home leave')
        next()
    }
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
