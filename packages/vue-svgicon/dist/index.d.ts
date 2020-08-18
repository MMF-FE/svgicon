import Vue from 'vue';
import SvgIconClass, { Props, Options, SvgIconConstructor, Icon, IconData } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
declare const VueSvgIcon: import("vue/types/vue").ExtendedVue<Vue, {
    svgicon: SvgIconClass;
}, {
    onClick(e: Event): void;
}, unknown, Record<never, any>>;
declare const setOptions: typeof SvgIconClass.setOptions;
export { Icon, IconData, VueSvgIcon, SvgIconConstructor, setOptions, Props, Options, };
