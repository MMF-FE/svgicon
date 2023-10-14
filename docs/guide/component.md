---
toc
---
# 组件

## 颜色

<demo-color title="单色 (默认: 继承字体颜色)" />
::: details 查看代码
<<<.vuepress/components/DemoColor.vue#demo
:::

<demo-reverse-color title="r-color (反转填充或描边属性)" />

颜色值加上 `r-` 前缀，反转当前 fill 属性
> 时钟图标：圆形是填充，时针分针是描边， Vue 图标：第一个 path 是描边，第二个是 path 是填充

::: details 查看代码
<<<.vuepress/components/DemoReverseColor.vue#demo
:::

<demo-multi-color title="多色（按照 path/shape 的顺序设置）" />
::: details 查看代码
<<<.vuepress/components/DemoMultiColor.vue#demo
:::

<demo-original-color title="原色 (original)" />
::: details 查看代码
<<<.vuepress/components/DemoOriginalColor.vue#demo
:::

> 第二和第三个色轮是在原色的基础上修改某些颜色

<demo-gradient title="渐变" />
::: details 查看代码
<<<.vuepress/components/DemoGradient.vue#demo
:::

<demo-gradient-colors title="修改原始渐变颜色" />
::: details 查看代码
<<<.vuepress/components/DemoGradientColors.vue#demo
:::
> `original` 必须是 true 才有效果

## 填充/描边
<demo-fill title="fill, 默认：true" />
::: details 查看代码
<<<.vuepress/components/DemoFill.vue#demo
<<<.vuepress/components/DemoFill.vue#css
:::

## 大小
<demo-size title="size, 默认单位：px, 默认大小：16px" />
::: details 查看代码
<<<.vuepress/components/DemoSize.vue#demo
:::

## 方向
<demo-direction title="dir, 默认：up" />
::: details 查看代码
<<<.vuepress/components/DemoDirection.vue#demo
:::

## 替换内容
<demo-replace title="替换 svg 代码 (replace)" />
::: details 查看代码
<<<.vuepress/components/DemoReplace.vue#demo
:::