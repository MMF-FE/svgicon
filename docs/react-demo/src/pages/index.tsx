import React from 'react'
import styles from './index.less'
import { Props, ReactSvgIconFC } from '@yzfe/react-svgicon'
import icons from '@/icons'
import awesome from '@/awesome'

import '@yzfe/react-svgicon/dist/index.css'
import VueIcon from '@icon/vue.svg'
import MaskIcon from '@icon/sora/fit/mask.svg'

export default class App extends React.Component<
    Record<string, unknown>,
    { props: Props; icon: ReactSvgIconFC; iconIndex: number }
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

    public render(): JSX.Element {
        const directionOptions = this.dirList.map((dir) => {
            return <option key={dir} value={dir} label={dir}></option>
        })

        const Icon = this.state.icon

        return (
            <div className={styles.app}>
                <div className={styles.content}>
                    <div className={styles.icon}>
                        <Icon
                            {...this.state.props}
                            className="demo-icon"
                        ></Icon>
                    </div>
                    <div className={styles.form}>
                        <select
                            value={this.state.iconIndex}
                            placeholder="icon"
                            onChange={(e) => this.updateIcon(e.target.value)}
                        >
                            {icons.map((icon, ix) => {
                                return (
                                    <option
                                        value={ix}
                                        label={icon.iconName}
                                        key={ix}
                                    ></option>
                                )
                            })}
                        </select>

                        <select
                            value={this.state.props.dir}
                            placeholder="direction"
                            onChange={(e) => this.updateProps('dir', e)}
                        >
                            {directionOptions}
                        </select>

                        <input
                            value={this.state.props.width}
                            type="text"
                            placeholder="width"
                            onChange={(e) => this.updateProps('width', e)}
                        />
                        <input
                            value={this.state.props.height}
                            type="text"
                            placeholder="height"
                            onChange={(e) => this.updateProps('height', e)}
                        />
                        <input
                            value={this.state.props.color}
                            type="text"
                            placeholder="color"
                            onChange={(e) => this.updateProps('color', e)}
                        />
                        <input
                            value={this.state.props.scale}
                            type="text"
                            placeholder="scale"
                            onChange={(e) => this.updateProps('scale', e)}
                        />
                        <label>
                            <input
                                checked={this.state.props.fill}
                                type="checkbox"
                                onChange={(e) =>
                                    this.updateProps('fill', e, true)
                                }
                            />
                            <span>Fill</span>
                        </label>
                        <label>
                            <input
                                checked={this.state.props.original}
                                type="checkbox"
                                onChange={(e) =>
                                    this.updateProps('original', e, true)
                                }
                            />
                            <span>Use Original Color</span>
                        </label>
                        <div>Test Unique ID</div>
                        <div></div>
                        <div className="form">
                            <VueIcon
                                data-id="20"
                                original
                                className="vue-icon"
                                style={{
                                    fontSize: '12px',
                                }}
                            ></VueIcon>
                            <MaskIcon original></MaskIcon>
                        </div>
                        <div className="form">
                            <VueIcon original></VueIcon>
                            {this.state.props.dir !== 'left' && (
                                <MaskIcon original></MaskIcon>
                            )}
                        </div>
                    </div>
                </div>

                <div className={styles.grid}>
                    {awesome.map((AweSomeIcon, index) => (
                        <div key={index} className={styles.gridItem}>
                            <AweSomeIcon {...this.state.props}></AweSomeIcon>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
