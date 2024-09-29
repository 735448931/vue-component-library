<template>
    <Dropdown 
      placement="bottom" 
      trigger="hover" 
      :menu-options="options"
      @visible-change="e => inlineConsole('visible change', e)"
      @select="e => inlineConsole('select', e)"
      ref="tooltipRef"
    >
      鼠标移入显示
    </Dropdown>
</template>

<script setup lang="ts">
import Dropdown from '../../../src/components/Dropdown/Dropdown.vue';
import { ref, onMounted, h } from 'vue'
import type { MenuOption } from '../../../src/components/Dropdown/types';

const options: MenuOption[] = [
  { key: 1, label: h('b', 'this is bold') },
  { key: 2, label: 'item2', disabled: true },
  { key: 3, label: 'item3', divided: true },
  { key: 4, label: 'item4' }
]

const inlineConsole = (...args: any) => {
  console.log(...args)
}
</script>

<style scoped>

</style>