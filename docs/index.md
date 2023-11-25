---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "svgicon"
  text: "SVG icon components and tool set"
  actions:
    - theme: brand
      text: Quick Start →
      link: /guide/

features:
- title: Support multiple js frameworks
  details: Vue 2.x, Vue 3.x, React >= 16.8 icon components are provided by default, and components that support other frameworks can be written through @yzfe/svgicon
- title: Load with webpack loader
  details: Load SVG files into icon data or icon components through webpack loader (@yzfe/svgicon-loader) or vite-plugin-svgicon, and you can customize the generated code.
- title: Multiple features
  details: Supports multiple colors, including gradients; Supports set fill and stroke attributes at the same time; supports original colors, and can modify a certain color; Supports zoom, animation etc.
- title: Icon Preview
  details: In any folder, use @yzfe/svgicon-viewer to view the SVG icon effect
footer: MIT Licensed | Copyright © 2020-present YZFE
---
