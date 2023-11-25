import './App.scss'
import { Checkbox, Input } from 'antd'
import { ReactSvgIcon as Icon } from '@yzfe/react-svgicon'

import icons from './icons'
import iconMeta from './meta'
import { useMemo, useState } from 'react'

type FillType = 'fill' | 'original' | 'stroke'

const fillTypeList: FillType[] = ['fill', 'original', 'stroke']

function App() {
    const [fillType, setFillType] = useState<FillType[]>(['original'])
    const [query, setQuery] = useState('')

    const isShowFill = fillType.includes('fill')
    const isShowOriginal = fillType.includes('original')
    const isShowStroke = fillType.includes('stroke')

    const currentIcons = useMemo(() => {
        if (query) {
            return icons.filter((v) => {
                let meta = iconMeta[v.name]
                let name = meta ? meta.name + v.name : v.name
                return name.includes(query)
            })
        }
        return icons
    }, [query])

    return (
        <div>
            <div className="filters">
                <div className="left">
                    <Checkbox.Group defaultValue={fillType}>
                        {fillTypeList.map((v) => (
                            <Checkbox
                                key={v}
                                value={v}
                                checked={fillType.includes(v)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setFillType((x) => [...x, v])
                                    } else {
                                        setFillType((x) =>
                                            x.filter((i) => i !== v)
                                        )
                                    }
                                }}
                            >
                                {v}
                            </Checkbox>
                        ))}
                    </Checkbox.Group>
                </div>
                <div className="right">
                    <Input
                        value={query}
                        placeholder="Search Icons"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="page-section">
                {!!fillType.length && (
                    <div className="icon-list">
                        {currentIcons.map((v) => (
                            <div key={v.name} className="icon-item">
                                <div className="icon">
                                    {isShowFill && (
                                        <Icon data={v} title="fill" />
                                    )}
                                    {isShowOriginal && (
                                        <Icon
                                            data={v}
                                            original
                                            title="original"
                                        />
                                    )}
                                    {isShowStroke && (
                                        <Icon
                                            data={v}
                                            fill={false}
                                            title="stroke"
                                        />
                                    )}
                                </div>
                                <p className="icon-name">
                                    {v.name}
                                    <br />
                                    {iconMeta[v.name] && (
                                        <span>{iconMeta[v.name].name}</span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default App
