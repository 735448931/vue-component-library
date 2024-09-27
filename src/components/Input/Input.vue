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
					:type="
						showPassword
							? passwordVisible
								? 'text'
								: 'password'
							: type
					"
					class="x-input__inner"
					ref="inputRef"
					:disabled="disabled"
					:autocomplete="autocomplete"
					:placeholder="placeholder"
					:autofocus="autofocus"
					v-bind="attrs"
					:readonly="readonly"
					v-model="innerValue"
					@input="handleInput"
					@change="handleChange"
					@focus="handleFocus"
					@blur="handleBlur"
				/>

				<!-- 内侧 slot suffix -->
				<span v-if="$slots.suffix || showClear || showPasswordArea" class="x-input__suffix" @click="keepFocus">
					<slot name="suffix"> </slot>
					<Icon
						icon="circle-xmark"
						class="x-input__clear"
						v-if="showClear"
						@click="clear"
						@mousedown.prevent="NOOP"
					/>
					<Icon
						icon="eye"
						v-if="showPasswordArea && passwordVisible"
						class="x-input__password"
						@click="togglePasswordVisible"
					/>
					<Icon icon="eye-slash" 
							v-if="showPasswordArea && !passwordVisible"
						class="x-input__password"
						@click="togglePasswordVisible"
					/>
				</span>
			</div>

			<!-- 外侧 slot append -->
			<div v-if="$slots.append" class="x-input__append">
				<slot name="append"></slot>
			</div>
		</template>

		<!-- 文本框 -->
		<template v-else>
			<textarea
				ref="inputRef"
				class="x-input__wrapper"
				:disabled="disabled"
				:autocomplete="autocomplete"
				:placeholder="placeholder"
				:autofocus="autofocus"
				v-bind="attrs"
				:readonly="readonly"
				v-model="innerValue"
				@input="handleInput"
				@change="handleChange"
				@focus="handleFocus"
				@blur="handleBlur"
			></textarea>
		</template>
	</div>
</template>

<script setup lang="ts">
import { useAttrs, ref, watch, computed, Ref,nextTick } from "vue"
import Icon from "../../components/Icon/Icon.vue"
import type { InputProps, InputEmits } from "./types"

defineOptions({ inheritAttrs: false })

const attrs = useAttrs()

const props = withDefaults(defineProps<InputProps>(), {})

const emits = defineEmits<InputEmits>()

// 子组件绑定的 v-model 来自于 props.modelValue
const innerValue = ref(props.modelValue)
// 是否聚焦
const isFocus = ref(false)
// 是否显示密码可见
const passwordVisible = ref(false)
// 获取组件的 ref
const inputRef = ref() as Ref<HTMLInputElement>
// 是否显示清除图标
const showClear = computed(
	() =>
		props.clearable &&
		!props.disabled &&
		!!innerValue.value &&
		isFocus.value
)
// 是否显示密码可见图标
const showPasswordArea = computed(
	() => props.showPassword && !props.disabled && !!innerValue.value
)

// 可能通过编程方式修改，所以需要监听 props.modelValue 的变化
watch(
	() => props.modelValue,
	(newValue) => {
		innerValue.value = newValue
	}
)


const NOOP = () => {}
const keepFocus = async () => {
  await nextTick()
  inputRef.value.focus()
}


const handleInput = () => {
	emits("update:modelValue", innerValue.value)
	emits("input", innerValue.value)
}

const handleChange = () => {
	emits("change", innerValue.value)
}

const handleFocus = (event: FocusEvent) => {
	isFocus.value = true
	emits("focus", event)
}

const handleBlur = (event: FocusEvent) => {
	isFocus.value = false
	emits("blur", event)
}

// 清除图标点击事件
const clear = () => {
	innerValue.value = ""
	emits("update:modelValue", "")
	emits("clear")
	emits("input", "")
	emits("change", "")
}

// 切换密码显示与隐藏
const togglePasswordVisible = () => {
	passwordVisible.value = !passwordVisible.value
}

defineExpose({
	ref: inputRef,
})
</script>

<style scoped lang="scss">
.x-input {
	&.is-disabled {
		cursor: not-allowed;
		.x-input__wrapper {
			background-color: #999;
			box-shadow: 0 0 0 1px #999 inset;
		}
		.x-input__inner {
			background-color: #888;
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
