---
outline: deep
---
# 其他

## 图标预览
使用 `@yzfe/svgicon-viewer` 可以预览任意文件夹的 SVG 文件。

### 安装
```bash
# 全局安装
yarn global add @yzfe/svgicon-viewer
```

### 使用
```bash
# svgicon-viewer <svgFilePath> [metaFile]
svgicon-viewer ./src/assets/svg
```
![svgicon-viewer](../../images/svgicon-viewer.png)

### meta.json
使用 meta.json 可以添加额外的信息，目前只支持一个 name 字段，可以用来描述图标。默认读取 SVG 文件路径下的 meta.json


```json
// meta.json demo
{
    "arrow": {
        "name": "箭头"
    }
}
```

```bash
svgicon-viewer ./src/assets/svg ./src/assets/svg/meta.json
```

![svgicon-viewer](../../images/svgicon-viewer-meta.png)

### 输出静态 html 页面
添加 --output (alias: -o) 会生成静态 html 页面到指定的输出目录

```
svgicon-viewer ./src/assets/svg -o ./dist
```
