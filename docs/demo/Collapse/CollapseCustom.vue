<template>
	<Collapse v-model="open">
		<Item name="title1">
            <template #title>
                <div :style="{fontSize:'24px'}">使用插槽:自定义标题</div>
            </template>
            <template #default>
                <div :style="{fontSize:'20px'}">使用插槽:自定义内容</div>
                <div :style="{fontSize:'12px'}">描述一下</div>
            </template>
        </Item>
		<Item name="title2" title="标题2"> 内容2 </Item>
		<Item name="title3" title="标题3"> 内容3 </Item>
	</Collapse>
</template>

<script setup>
import { ref } from "vue"
import Collapse from "@/components/Collapse/Collapse.vue"
import Item from "@/components/Collapse/CollapseItem.vue"

// 默认展开项
const open = ref(["title1"])
</script>

<style scoped></style>
