---
title: Collapse
description: Collapse 组件的文档
---


# Collapse 组件

## 基本使用

<preview path="./demo/Collapse/CollapseBasic.vue"></preview>

## 手风琴模式

当设置 accordion="true" 时，开启手风琴模式，每次只能展开一个面板

<preview path="./demo/Collapse/CollapseAccordion.vue"></preview>

## 自定义插槽

<preview path="./demo/Collapse/CollapseCustom.vue"></preview>

## Api

### Collapse 属性

| 属性名    | 详情           | 类型    | 默认值 |
| --------- | -------------- | ------- | ------ |
| v-model   | 当前活动面板   | array   | []     |
| accordion | 是否手风琴模式 | boolean | false  |


### Collapse 事件

| 事件名 | 说明             | 类型     |
| ------ | ---------------- | -------- |
| change | 切换当前活动面板 | Function |

### Collapse Item 属性

| 属性名   | 说明       | 类型            | 默认值 |
| -------- | ---------- | --------------- | ------ |
| name     | 唯一标识符 | string / number |        |
| title    | 面板标题   | string          |        |
| disabled | 是否禁用   | boolean         | false  |

### Collapse Item 插槽

| 插槽名  | 说明                 | 类型 |
| ------- | -------------------- | ---- |
| default | Collapse Item 的内容 |      |
| title   | Collapse Item 的标题 |      |

