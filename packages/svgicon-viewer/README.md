# @yzfe/svgicon-viewer

Preview SVG icon

## Usage

```bash
# Install global
npm install -g @yzfe/svgicon-viewer

# Install in project
npm install  @yzfe/svgicon-viewer --dev

# preview svg icon
svgicon-viewer ./svg/folder
```

## SVG icon display name

You can configure the SVG icon display name by specifying a json config file.

> 你可以通过指定配置自定义预览的 SVG 图标名称

```bash
svgicon-viewe ./svg/folder ./meta.json
```

meta.json example

```json
{
    "iconName": {
        "name": "icon display name"
    }
}
```
