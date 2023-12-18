---
outline: deep
---
# Other

## Icon Preview
Use `@yzfe/svgicon-viewer` to preview SVG files in any folder.

#### Installation
```bash
# Global installation
yarn global add @yzfe/svgicon-viewer
```

#### Usage
```bash
# svgicon-viewer <svgFilePath> [metaFile]
svgicon-viewer ./src/assets/svg
```

![svgicon-viewer](../svgicon-viewer.png)

Use meta.json to add additional information. Currently, only one name field is supported, which can be used to describe the icon.

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

![svgicon-viewer](../svgicon-viewer-meta.png)

### Generate static html page

```
svgicon-viewer ./src/assets/svg -o ./dist
```
