<template>
	<div
		class="x-collapse-item"
		:class="{
			'is-disabled': disabled,
		}"
	>
		<!-- 标题 -->
		<div
			:class="{
				'is-disabled': disabled,
				'is-active': isActive,
			}"
			class="x-collapse-item__header"
			:id="`item-header-${name}`"
			@click="handleClick"
		>
			<slot name="title">{{ title }}</slot>
		</div>
		<!-- 折叠 -->
		<Transition name="slide" v-on="transitionEvents">
			<div class="x-collapse-item__wrapper" v-show="isActive">
				<div
					class="x-collapse-item__content"
					:id="`item-content-${name}`"
				>
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

<style scoped>
.x-collapse-item__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 48px;
	line-height: 48px;
	background-color: #fff;
	color: #303133;
	cursor: pointer;
	font-size: 13px;
	font-weight: 500;
	transition: border-bottom-color 0.3s;
	outline: none;
	border-bottom: 1px solid #e4e7ed;
	&.is-disabled {
		color: #a8abb2;
		cursor: not-allowed;
		background-image: none;
	}
	&.is-active {
		border-bottom-color: transparent;
		.header-angle {
			transform: rotate(90deg);
		}
	}
	.header-angle {
		transition: transform 0.3s;
	}
}
.x-collapse-item__content {
	will-change: height;
	background-color: #fff;
	overflow: hidden;
	box-sizing: border-box;
	font-size: 13px;
	color: #303133;
	border-bottom: 1px solid #e4e7ed;
	padding-bottom: 25px;
}
.slide-enter-active,
.slide-leave-active {
	transition: height 0.3s;
}
</style>
