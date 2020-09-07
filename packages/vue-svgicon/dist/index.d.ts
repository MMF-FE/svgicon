import { CreateElement, VNode, RenderContext } from 'vue';
import { Props, Options, setOptions, Icon, IconData } from '@yzfe/svgicon';
declare const VueSvgIcon: {
    functional: boolean;
    props: ("data" | "width" | "height" | "scale" | "dir" | "color" | "title" | "fill" | "original")[];
    render(h: CreateElement, context: RenderContext<Props>): VNode;
};
export { VueSvgIcon, setOptions, Props, Options, Icon, IconData };
