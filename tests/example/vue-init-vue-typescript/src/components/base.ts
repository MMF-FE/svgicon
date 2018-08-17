/**
 * 所有组件的基类
 */

import Vue from 'vue'
import api from 'api'
import util from 'common/util'
import env from 'env'
import constants from 'common/constants'

export default class Base extends Vue {
    //#region datas ******************************/
    // constants
    protected readonly constants = constants
    // config
    protected readonly config = env
    // backend api
    protected readonly api = api
    // utils
    protected readonly util = util
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
    //#endregion life cycle **********************/

    //#region hooks ******************************/
    //#endregion hooks ***************************/

    //#region event handler **********************/
    //#endregion event handler *******************/

    //#region methods ****************************/
    //#endregion methods *************************/
}
