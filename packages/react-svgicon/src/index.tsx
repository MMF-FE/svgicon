import React from 'react'
import SvgIconClass, {
    Props,
    Options,
    SvgIconConstructor,
    Icon,
} from '@yzfe/svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

interface ComponentProps extends Props {
    onClick?: () => void
}

function setOptions(options: Options): void {
    SvgIconClass.options = {
        ...SvgIconClass.options,
        ...options,
    }
}

class SvgIcon extends React.Component<
    ComponentProps,
    { svgicon: SvgIconClass }
> {
    constructor(props: ComponentProps) {
        super(props)
        this.state = {
            svgicon: new SvgIconClass(props),
        }
    }

    public render(): JSX.Element {
        this.state.svgicon.props = this.props

        return (
            <svg
                version="1.1"
                dangerouslySetInnerHTML={{
                    __html: this.state.svgicon.path || '',
                }}
                className={this.state.svgicon.clazz || ''}
                viewBox={this.state.svgicon.box}
                style={this.state.svgicon.style}
                onClick={this.props.onClick}
            ></svg>
        )
    }
}

/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface SvgIconFC extends React.FC<Props> {
    data: Icon
}

export {
    SvgIcon,
    SvgIconFC,
    setOptions,
    Icon,
    Props,
    Options,
    SvgIconConstructor,
}
