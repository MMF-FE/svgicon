import Vue from 'vue';
import { PluginOptions, Icon } from './lib/type';
declare let VueSvgIconPlugin: {
    icons: {
        [key: string]: Icon;
    };
    register(newIcons: {
        [key: string]: Icon;
    }): void;
    install(vue: import("vue").VueConstructor<Vue>, options?: PluginOptions): void;
};
export default VueSvgIconPlugin;
