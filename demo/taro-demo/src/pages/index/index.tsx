import 'default-passive-events'
import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Picker, Input } from '@tarojs/components'
import classNames from 'classnames'
import { Props, TaroSvgIcon, TaroSvgIconFC } from '@yzfe/taro-svgicon'
import icons from '@/icons'
import awesome from '@/awesome'

import VueIcon from '@icon/vue.svg'
import MaskIcon from '@icon/sora/fit/mask.svg'

import { debounce } from '../../utils/lodash'

import '@yzfe/svgicon/lib/svgicon.css'

import styles from './style.module.scss'

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
                width: Taro.pxTransform(50, 750),
                height: Taro.pxTransform(50, 750),
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
        value: string | boolean | number
    ): void {
        this.setState({
            props: {
                ...this.state.props,
                [prop]: value,
            },
        })
    }

    protected updateIcon(ix: number): void {
        const index = Number(ix)
        this.setState({
            icon: icons[index],
            iconIndex: index,
        })
    }

    get iconSelector() {
        const selecotrArr: string[] = []
        icons.forEach((n) => {
            selecotrArr.push(n.iconName)
        })
        return selecotrArr || []
    }

    componentWillMount() {}

    componentDidMount() {}

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    public render(): JSX.Element {
        const { iconIndex, props } = this.state

        const Icon = this.state.icon

        const currentIcon = icons[iconIndex].iconName
        return (
            <View className={styles.app}>
                <View className={styles.content}>
                    <View className={styles.icon}>
                        <Icon
                            {...this.state.props}
                            className="demo-icon"
                        ></Icon>
                    </View>
                    <View className={styles.form}>
                        <View className={styles.formItem}>
                            <View className={styles.formControl}>
                                <Picker
                                    className={styles.picker}
                                    mode="selector"
                                    value={iconIndex}
                                    range={this.iconSelector}
                                    onChange={(e) => {
                                        const ix = Number(e.detail.value)
                                        this.updateIcon(ix)
                                    }}
                                >
                                    <View className="mmf-row content-sb">
                                        <View className={styles.formLabel}>
                                            选择图标
                                        </View>
                                        <View className="picker">
                                            {currentIcon}
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formControl}>
                                <Picker
                                    className={styles.picker}
                                    mode="selector"
                                    value={0}
                                    range={this.dirList}
                                    onChange={(e) => {
                                        this.updateProps(
                                            'dir',
                                            this.dirList[e.detail.value]
                                        )
                                    }}
                                >
                                    <View className="mmf-row content-sb">
                                        <View className={styles.formLabel}>
                                            方向:
                                        </View>
                                        <View className="picker">
                                            {props.dir}
                                        </View>
                                    </View>
                                </Picker>
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>宽度：</View>
                            <View className={styles.formControl}>
                                <Input
                                    className={styles.input}
                                    value={String(props.width)}
                                    type="number"
                                    placeholder="请输入图标宽度"
                                    onInput={debounce((e) => {
                                        this.updateProps(
                                            'width',
                                            e.detail.value
                                        )
                                    }, 250)}
                                />
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>高度：</View>
                            <View className={styles.formControl}>
                                <Input
                                    className={styles.input}
                                    value={String(props.height)}
                                    type="number"
                                    placeholder="请输入图标高度"
                                    onInput={debounce((e) => {
                                        this.updateProps(
                                            'height',
                                            e.detail.value
                                        )
                                    })}
                                />
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>颜色：</View>
                            <View className={styles.formControl}>
                                <Input
                                    className={styles.input}
                                    value={props.color}
                                    type="number"
                                    placeholder="请输入图标颜色值"
                                    onInput={debounce((e) => {
                                        this.updateProps(
                                            'color',
                                            e.detail.value
                                        )
                                    })}
                                />
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>缩放：</View>
                            <View className={styles.formControl}>
                                <Input
                                    className={styles.input}
                                    value={String(props.scale)}
                                    type="number"
                                    placeholder="请输入图标缩放度"
                                    onInput={(e) => {
                                        this.updateProps(
                                            'scale',
                                            e.detail.value
                                        )
                                    }}
                                />
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>是否填充：</View>
                            <View className={styles.formControl}>
                                <View
                                    className={classNames({
                                        [styles.checkbox]: true,
                                        [styles.isChecked]: !!props.fill,
                                    })}
                                    onClick={(e) => {
                                        this.updateProps('fill', !props.fill)
                                    }}
                                ></View>
                            </View>
                        </View>

                        <View className={styles.formItem}>
                            <View className={styles.formLabel}>
                                显示原始图标：
                            </View>
                            <View className={styles.formControl}>
                                <View
                                    className={classNames({
                                        [styles.checkbox]: true,
                                        [styles.isChecked]: !!props.original,
                                    })}
                                    onClick={(e) => {
                                        this.updateProps(
                                            'original',
                                            !props.original
                                        )
                                    }}
                                ></View>
                            </View>
                        </View>

                        <View>Test Unique ID</View>
                        <View></View>
                        <View className="form">
                            <VueIcon
                                data-id="20"
                                original
                                className="vue-icon"
                                style={{
                                    fontSize: '32rpx',
                                }}
                            ></VueIcon>
                            <MaskIcon original></MaskIcon>
                        </View>
                        <View className="form">
                            <VueIcon original></VueIcon>
                            {this.state.props.dir !== 'left' && (
                                <MaskIcon original></MaskIcon>
                            )}
                        </View>
                    </View>
                </View>

                <View className={styles.grid}>
                    {awesome.map((AweSomeIcon, index) => (
                        <View key={index} className={styles.gridItem}>
                            <AweSomeIcon {...this.state.props}></AweSomeIcon>
                        </View>
                    ))}
                </View>
            </View>
        )
    }
}
