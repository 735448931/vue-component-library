<template>
	<div class="x-collapse-item">
		<!-- 标题 -->
		<div class="x-collapse-item__header" @click="handleClick">
			<slot name="title">{{ title }}</slot>
		</div>
		<!-- 折叠 -->
		<Transition v-on="transitionEvents">
			<div class="x-collapse-item__wrapper" v-show="isActive">
				<div class="x-collapse-item__content">
					<slot></slot>
				</div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { computed, inject, toValue } from "vue"
import { NameType, CollapseItemProps, collapseContextKey } from "./types"

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)

// 激活状态
const isActive = computed(() => {
	return collapseContext?.activeNames.value.includes(props.name)
})

// 点击触发
const handleClick = () => {
	if (props.disabled) {
		return
	}
	collapseContext?.handleItemClick(props.name)
}

// 过渡动画
const transitionEvents: Record<string, (el: HTMLElement) => void> = {
	beforeEnter(el) {
		el.style.height = "0px"
		el.style.overflow = "hidden"
	},
	enter(el) {
		el.style.height = `${el.scrollHeight}px`
	},
	afterEnter(el) {
		el.style.height = ""
		el.style.overflow = ""
	},
	beforeLeave(el) {
		el.style.height = `${el.scrollHeight}px`
		el.style.overflow = "hidden"
	},
	leave(el) {
		el.style.height = "0px"
	},
	afterLeave(el) {
		el.style.height = ""
		el.style.overflow = ""
	},
}
</script>

<style scoped></style>
