---
title: Icon
description: Icon 组件的文档
---

# Icon 图标

:::info
该方式目前只提供 [FontAwesome](https://fontawesome.com/) 中 free-solid-svg-icons 风格的图标(可扩展其他风格)
:::

## 实现方式

[FontAwesome Vue使用官方文档](https://docs.fontawesome.com/web/use-with/vue/use-with)

## 基本使用

Icon 组件的 icon 属性为图标名称

<preview path="./demo/Icon/IconBasic.vue"></preview>

## 动画相关

<preview path="./demo/Icon/IconAnimation.vue"></preview>

## Api


| 属性名    | 说明                       | 类型             | 可选值                                                       |
| --------- | -------------------------- | ---------------- | ------------------------------------------------------------ |
| icon      | 图标名称                   | String           |                                                              |
| color     | 图标颜色                   | String           |                                                              |
| size      | 图标大小                   | String           | '2xs' \| 'xs' \| 'sm' \| 'lg' \| 'xl' \| '2xl' \| '1x' \| '2x' \| '3x' ...  '10x' |
| rotation  | 图标旋转角度               | String \| Number | 90 \| 180 \| 270 \| '90' \| '180' \| '270'                   |
| border    | 边框                       | Boolean          |                                                              |
| flip      | 翻转                       | String           | 'horizontal' \| 'vertical' \| 'both'                         |
| pull      | 控制图标是向左还是向右偏移 |                  | 'left' \| 'right'                                            |
| spin      | 让图标持续旋转             | Boolean          |                                                              |
| bounce    | 动画                       | Boolean          |                                                              |
| shake     | 动画                       | Boolean          |                                                              |
| beat      | 动画                       | Boolean          |                                                              |
| fade      | 动画                       | Boolean          |                                                              |
| beatFade  | 动画                       | Boolean          |                                                              |
| spinPulse | 动画                       | Boolean          |                                                              |



