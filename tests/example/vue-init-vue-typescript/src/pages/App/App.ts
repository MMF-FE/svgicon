/**
 * App
 */

import Vue from 'components/base'
import { Component } from 'vue-property-decorator'
import template from './App.vue'

@Component({
    name: 'App',
    mixins: [template]
})
export default class App extends Vue {
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
    protected created() {}
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
