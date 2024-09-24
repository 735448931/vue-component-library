---
title: Tooltip
description: Tooltip 组件的文档
---

# Tooltip 组件


## 基本使用

<preview path="./demo/Tooltip/TooltipBasic.vue"></preview>

## 动画相关

<preview path="./demo/Tooltip/TooltipManual.vue"></preview>


## Api

## 属性

| 属性名     | 说明                                    | 类型               | 默认值  |
| ---------- | --------------------------------------- | ------------------ | ------- |
| content    | 显示的内容                              | string             |         |
| trigger    | 触发方式                                | 'hover' \| 'click' | 'hover' |
| placement  | 弹出框出现位置                          | enum               |         |
| manual     | 控制Tooltip显示和隐藏是否由用户手动控制 | boolean            |         |
| transition | 动画 默认是 fade                        | string             |         |
| openDelay  | 延时打开                                | number             |         |
| closeDelay | 延时关闭                                | number             |         |


## Slots 插槽

| 插槽名  | 说明             |
| ------- | ---------------- |
| default | 触发弹出框的元素 |
| content | 自定义内容       |


## Expose 暴露

|       |      |
| ----- | ---- |
| show  |      |
| hide |      |


