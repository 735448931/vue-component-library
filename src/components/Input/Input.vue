<template>
	<div
		class="x-input"
		:class="{
			[`x-input--${type}`]: type,
			'is-disabled': disabled,
		}"
	>
		<!-- 输入框 -->
		<template v-if="type !== 'textarea'">
			<!-- 外侧 slot prepend -->
			<div v-if="$slots.prepend" class="x-input__prepend">
				<slot name="prepend"></slot>
			</div>

			<div class="x-input__wrapper">
				<!-- 内侧 slot prefix -->
				<span v-if="$slots.prefix" class="x-input__prefix">
					<slot name="prefix"></slot>
				</span>

				<input
					type="text"
					class="x-input__inner"
					:disabled="disabled"
					:autocomplete="autocomplete"
					:placeholder="placeholder"
					:autofocus="autofocus"
					v-bind="attrs"
					:readonly="readonly"
					v-model="innerValue"
					@change="handleInput"
				/>

				<!-- 内侧 slot suffix -->
				<span v-if="$slots.suffix" class="x-input__suffix">
					<slot name="suffix"> </slot>
					<Icon icon="circle-xmark" />
					<Icon icon="eye" />
					<Icon icon="eye-slash" />
				</span>
			</div>

			<!-- 外侧 slot append -->
			<div v-if="$slots.append" class="x-input__append">
				<slot name="append"></slot>
			</div>
		</template>

		<!-- 文本框 -->
		<template v-else>
			<textarea></textarea>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useAttrs, ref, watch, onMounted } from "vue"
import Icon from "../../components/Icon/Icon.vue"
import type { InputProps, InputEmits } from "./types"

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()
const props = withDefaults(defineProps<InputProps>(), {})

const emits = defineEmits<InputEmits>()

// 子组件绑定的 v-model 来自于 props.modelValue
const innerValue = ref(props.modelValue)

// 可能通过编程方式修改，所以需要监听 props.modelValue 的变化
watch(
	() => props.modelValue,
	(newValue) => {
		innerValue.value = newValue
	}
)

const handleInput = () => {
    console.log('子组件handleInput 触发');
	emits("update:modelValue", innerValue.value)
	emits("input", innerValue.value)
}
</script>

<style scoped lang="scss">
.x-input {
	border: 1px solid #999;
	&.is-disabled {
		cursor: not-allowed;
		.x-input__wrapper {
			background-color: #999;
			box-shadow: 0 0 0 1px #999 inset;
		}
		.x-input__inner {
			color: #999;
			cursor: not-allowed;
		}
		.x-textarea__inner {
			background-color: #999;
			box-shadow: 0 0 0 1px #999 inset;
			color: #999;
			cursor: not-allowed;
		}
	}
}
</style>
