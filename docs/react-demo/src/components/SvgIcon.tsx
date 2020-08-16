import React from 'react'
import SvgIcon, { Props } from '@yzfe/svgicon'

export default class SvgIconComponent extends React.Component<Props> {
    private svgicon: SvgIcon | null = null

    constructor(props: Props) {
        super(props)
        this.svgicon = new SvgIcon(props)
    }

    public render(): JSX.Element {
        return (
            <svg
                version="1.1"
                dangerouslySetInnerHTML={{ __html: this.svgicon?.path || '' }}
                className={this.svgicon?.clazz || ''}
                viewBox={this.svgicon?.box}
                style={this.svgicon?.style}
            ></svg>
        )
    }
}
