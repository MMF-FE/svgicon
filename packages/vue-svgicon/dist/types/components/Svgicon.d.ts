import Vue from 'vue';
import { PluginOptions, Icon } from '../lib/type';
export declare function setOptions(opts: PluginOptions): void;
declare const _default: import("vue").VueConstructor<{
    loaded: boolean;
} & {
    addColor(data: string): string;
    addOriginalColor(data: string): string;
    getValidPathData(pathData: string): string;
    setTitle(pathData: string): string;
    onClick(e: Event): void;
} & {
    clazz: string;
    iconName: string;
    iconData: Icon | null;
    colors: string[];
    path: string;
    box: string;
    style: CSSStyleDeclaration;
} & {
    name: string;
    icon: string;
    width: string;
    height: string;
    scale: string;
    dir: string;
    color: string;
    title: string;
    fill: boolean;
    original: boolean;
} & Vue>;
export default _default;
