import React from 'react';
import { Props, Options, setOptions, Icon, IconData } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
interface ComponentProps extends Props {
    [key: string]: unknown;
}
declare const ReactSvgIcon: (props: ComponentProps) => JSX.Element;
/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<ComponentProps> {
    data: Icon;
}
export { ReactSvgIcon, ReactSvgIconFC, Props, Options, setOptions, Icon, IconData, };
