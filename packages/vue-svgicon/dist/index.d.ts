import { CreateElement, VNode, RenderContext } from 'vue';
import { Props, Options, setOptions, Icon, IconData } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
declare const VueSvgIcon: {
    functional: boolean;
    render(h: CreateElement, context: RenderContext<Props>): VNode;
};
export { VueSvgIcon, setOptions, Props, Options, Icon, IconData };
