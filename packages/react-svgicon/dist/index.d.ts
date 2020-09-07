import React from 'react';
import { Props, Options, setOptions, Icon, IconData } from '@yzfe/svgicon';
interface ComponentProps extends Props {
    [key: string]: unknown;
}
declare class ReactSvgIcon extends React.PureComponent<ComponentProps> {
    render(): JSX.Element;
}
/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<ComponentProps> {
    iconName: string;
}
export { ReactSvgIcon, ReactSvgIconFC, Props, Options, setOptions, Icon, IconData, };
