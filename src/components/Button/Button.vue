<template>
	<button
		class="x-button"
		:class="{
			[`x-button--${type}`]: type,
			[`x-button--${size}`]: size,
			'is-plain': plain,
			'is-round': round,
			'is-circle': circle,
			'is-disabled': disabled,
			'is-loading': loading,
		}"
		:disabled="disabled || loading"
	>
		<Icon icon="spinner" spin v-if="loading" />
		<Icon :icon="icon" v-if="icon" />
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script setup lang="ts">
import type {
	ButtonType,
	ButtonSize,
	ButtonProps,
	ButtonInstance,
} from "./types"
import Icon from "../../components/Icon/Icon.vue"
const props = withDefaults(defineProps<ButtonProps>(), {
	loading: true,
})
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
