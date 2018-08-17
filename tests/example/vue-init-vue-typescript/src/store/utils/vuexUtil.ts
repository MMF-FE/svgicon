/**
 * vuex util
 */

import {
    Getter,
    GetterTree,
    Mutation,
    MutationTree,
    Action,
    ActionTree
} from 'vuex'
import { BindingHelper } from 'vuex-class/lib/bindings'

// type alias
type RootState = Types.State.RootState

export function getter<S, T extends GetterTree<S, RootState>>(
    state: S,
    getters: T
): { [K in keyof T]: Getter<S, RootState> } {
    return getters
}

export function mutation<S, T extends MutationTree<S>>(
    state: S,
    mutations: T
): { [K in keyof T]: Mutation<S> } {
    return mutations
}

export function action<S, T extends ActionTree<S, RootState>>(
    state: S,
    actions: T
): { [K in keyof T]: Action<S, RootState> } {
    return actions
}

export function decorator<D extends BindingHelper, T>(helper: D, keyMap: T) {
    type KeyType = keyof T
    type Decorator = (target, key: string) => void

    function decoratorWrapper(target, key: KeyType): void
    function decoratorWrapper(originKey: KeyType): Decorator
    function decoratorWrapper(a, b?: KeyType): Decorator | void {
        if (typeof b === 'string') {
            const target = a
            const key = b

            return helper(target, key)
        }

        const originKey = a

        return helper(originKey)
    }

    return decoratorWrapper
}
