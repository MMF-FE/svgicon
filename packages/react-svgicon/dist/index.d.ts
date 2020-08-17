import React from 'react';
import SvgIconClass, { Props, Options } from '@yzfe/svgicon';
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
export { SvgIcon, setOptions };
