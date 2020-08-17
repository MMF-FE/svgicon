import React from 'react';
import SvgIconClass, { Props, Options, SvgIconConstructor, Icon } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
interface ComponentProps extends Props {
    onClick?: () => void;
}
declare function setOptions(options: Options): void;
declare class SvgIcon extends React.Component<ComponentProps, {
    svgicon: SvgIconClass;
}> {
    constructor(props: ComponentProps);
    render(): JSX.Element;
}
/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface SvgIconFC extends React.FC<Props> {
    data: Icon;
}
export { SvgIcon, SvgIconFC, setOptions, Icon, Props, Options, SvgIconConstructor, };
