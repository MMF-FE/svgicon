import { useState } from 'react'
import icons from '@/icons/icons'
import awesome from '@/icons/awesome'
import { Props } from '@yzfe/react-svgicon'

import VueIcon from '@icon/vue.svg'
import MaskIcon from '@icon/sora/fit/mask.svg'

import styles from './App.module.scss'

const dirList = ['', 'left', 'right', 'up', 'down']

function App() {
    const [iconIndex, setIconIndex] = useState(0)
    const Icon = icons[iconIndex]

    const [iconProps, setIconProps] = useState<Props>({
        width: 50,
        height: 50,
        original: true,
        fill: true,
        dir: '',
        color: '',
        scale: '',
    })

    const updateProps = (prop: keyof Props, value: any) => {
        setIconProps({
            ...iconProps,
            [prop]: value,
        })
    }

    return (
        <div className={styles.app}>
            <div className={styles.content}>
                <div className={styles.icon}>
                    <Icon {...iconProps} className="demo-icon"></Icon>
                </div>
                <div className={styles.form}>
                    <select
                        value={iconIndex}
                        placeholder="icon"
                        onChange={(e) => setIconIndex(Number(e.target.value))}
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
                        value={iconProps.dir}
                        placeholder="direction"
                        onChange={(e) => updateProps('dir', e.target.value)}
                    >
                        {dirList.map((dir, ix) => (
                            <option key={ix} value={dir} label={dir}></option>
                        ))}
                    </select>

                    <input
                        value={iconProps.width}
                        type="text"
                        placeholder="width"
                        onChange={(e) => updateProps('width', e.target.value)}
                    />
                    <input
                        value={iconProps.height}
                        type="text"
                        placeholder="height"
                        onChange={(e) => updateProps('height', e.target.value)}
                    />
                    <input
                        value={iconProps.color}
                        type="text"
                        placeholder="color"
                        onChange={(e) => updateProps('color', e.target.value)}
                    />
                    <input
                        value={iconProps.scale}
                        type="text"
                        placeholder="scale"
                        onChange={(e) =>
                            updateProps('scale', Number(e.target.value))
                        }
                    />
                    <label>
                        <input
                            checked={iconProps.fill}
                            type="checkbox"
                            onChange={(e) =>
                                updateProps('fill', e.target.checked)
                            }
                        />
                        <span>Fill</span>
                    </label>
                    <label>
                        <input
                            checked={iconProps.original}
                            type="checkbox"
                            onChange={(e) =>
                                updateProps('original', e.target.checked)
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
                        {iconProps.dir !== 'left' && (
                            <MaskIcon original></MaskIcon>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.grid}>
                {awesome.map((AweSomeIcon, index) => (
                    <div key={index} className={styles.gridItem}>
                        <AweSomeIcon {...iconProps}></AweSomeIcon>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default App
