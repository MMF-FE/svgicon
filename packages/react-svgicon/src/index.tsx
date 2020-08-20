import React from 'react'
import {
    svgIcon,
    Props,
    Options,
    setOptions,
    Icon,
    IconData,
} from '@yzfe/svgicon'
import '@yzfe/svgicon/lib/svgicon.css'

// interface ComponentProps extends Props {
//     onClick?: () => void
// }

// class ReactSvgIcon extends React.Component<
//     ComponentProps,
// > {
//     constructor(props: ComponentProps) {
//         super(props)
//         this.state = {
//             svgicon: new SvgIconClass(props),
//         }
//     }

//     public render(): JSX.Element {
//         this.state.svgicon.props = this.props

//         return (
//             <svg
//                 version="1.1"
//                 dangerouslySetInnerHTML={{
//                     __html: this.state.svgicon.path || '',
//                 }}
//                 className={this.state.svgicon.clazz || ''}
//                 viewBox={this.state.svgicon.box}
//                 style={this.state.svgicon.style}
//                 onClick={this.props.onClick}
//             ></svg>
//         )
//     }
// }

/** SvgIcon function component, define in @yzfe/svgicon-loader compile */
interface ReactSvgIconFC extends React.FC<Props> {
    data: Icon
}

export {
    Icon,
    IconData,
    ReactSvgIcon,
    ReactSvgIconFC,
    setOptions,
    Props,
    Options,
}
