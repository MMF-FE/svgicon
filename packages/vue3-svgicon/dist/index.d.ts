import { App } from 'vue';
import { Props, Options, setOptions, Icon, IconData } from '@yzfe/svgicon';
declare const VueSvgIcon: {
    new (...args: any[]): import("vue").ComponentPublicInstance<Readonly<{
        data?: any;
        width?: any;
        height?: any;
        scale?: any;
        dir?: any;
        color?: any;
        title?: any;
        fill?: any;
        original?: any;
    }>, {}, {}, {}, {}, Record<string, any>, import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, import("vue").ComponentOptionsBase<Readonly<{
        data?: any;
        width?: any;
        height?: any;
        scale?: any;
        dir?: any;
        color?: any;
        title?: any;
        fill?: any;
        original?: any;
    }>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<{
    data?: any;
    width?: any;
    height?: any;
    scale?: any;
    dir?: any;
    color?: any;
    title?: any;
    fill?: any;
    original?: any;
}>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string> & {
    props: ("data" | "width" | "height" | "scale" | "dir" | "color" | "title" | "fill" | "original")[];
} & ThisType<import("vue").ComponentPublicInstance<Readonly<{
    data?: any;
    width?: any;
    height?: any;
    scale?: any;
    dir?: any;
    color?: any;
    title?: any;
    fill?: any;
    original?: any;
}>, {}, {}, {}, {}, Record<string, any>, Readonly<{
    data?: any;
    width?: any;
    height?: any;
    scale?: any;
    dir?: any;
    color?: any;
    title?: any;
    fill?: any;
    original?: any;
}>, import("vue").ComponentOptionsBase<Readonly<{
    data?: any;
    width?: any;
    height?: any;
    scale?: any;
    dir?: any;
    color?: any;
    title?: any;
    fill?: any;
    original?: any;
}>, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string>>>;
declare const VueSvgIconPlugin: {
    install: (app: App, options: {
        tagName: string;
    }) => void;
};
export { VueSvgIcon, VueSvgIconPlugin, setOptions, Props, Options, Icon, IconData, };
