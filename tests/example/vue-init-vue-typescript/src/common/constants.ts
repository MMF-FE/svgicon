import * as enums from 'common/enum'
import util from 'common/util'

let constants = Object.assign({}, enums)

util.deepFreeze(constants)

export default constants
