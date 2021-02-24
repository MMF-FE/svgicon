import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Props, TaroSvgIcon, TaroSvgIconFC } from '@yzfe/taro-svgicon'
import icons from '@/icons'
import '@yzfe/svgicon/lib/svgicon.css'
import './index.scss'

export default class Index extends Component<
Record<string, unknown>,
{ props: Props; icon: TaroSvgIconFC; iconIndex: number }
> {
  constructor(props: Record<string, unknown>) {
    super(props)
    this.state = {
        iconIndex: 0,
        icon: icons[0],
        props: {
            width: 50,
            height: 50,
            original: true,
            fill: true,
            dir: '',
            color: '',
            scale: '',
        },
    }
}

protected dirList = ['', 'left', 'right', 'up', 'down']

protected updateProps(
    prop: keyof Props,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    isCheckBox = false
): void {
    this.setState({
        props: {
            ...this.state.props,
            [prop]: isCheckBox
                ? (e.target as HTMLInputElement).checked
                : e.target.value,
        },
    })
}

protected updateIcon(ix: string): void {
    const index = Number(ix)
    this.setState({
        icon: icons[index],
        iconIndex: index,
    })
}

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const Icon = icons[0]

    return (
      <View className='index'>
        <Icon
          {...this.state.props}
          className="demo-icon"
          ></Icon>
      </View>
    )
  }
}
