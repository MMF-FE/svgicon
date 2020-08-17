import React from 'react';
import SvgIcon, { Props } from '@yzfe/svgicon';
import '@yzfe/svgicon/lib/svgicon.css';
interface ComponentProps extends Props {
    onClick?: () => void;
}
export default class SvgIconComponent extends React.Component<ComponentProps, {
    svgicon: SvgIcon;
}> {
    constructor(props: ComponentProps);
    render(): JSX.Element;
}
export {};
