/**
 * register plugins hooks for vue component
 */

import { Component } from 'vue-property-decorator'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave'])
