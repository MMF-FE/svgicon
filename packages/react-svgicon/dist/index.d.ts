import React from 'react';
import SvgIconClass, { Props, Options, SvgIconConstructor, Icon, IconData } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
interface ComponentProps extends Props {
    onClick?: () => void;
}
declare class ReactSvgIcon extends React.Component<ComponentProps, {
    svgicon: SvgIconClass;
}> {
    constructor(props: ComponentProps);
    render(): JSX.Element;
}
/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<Props> {
    data: Icon;
}
declare const setOptions: typeof SvgIconClass.setOptions;
export { Icon, IconData, ReactSvgIcon, SvgIconConstructor, ReactSvgIconFC, setOptions, Props, Options, };
