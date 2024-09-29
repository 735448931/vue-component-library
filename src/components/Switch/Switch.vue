<template>
	<div class="x-switch"   :class="{
    [`vk-switch--${size}`]: size,
    'is-disabled': disabled,
    'is-checked': checked
  }"
  @click="switchValue"
  >
		<input
			class="x-swtich__input"
			type="checkbox"
      ref="input"
			:name="name"
			:disabled="disabled"
      @keydown.enter="switchValue"
		/>

		<div class="x-switch__core">
			<div class="x-switch__core-inner">
				<span
					v-if="activeText || inactiveText"
					class="x-switch__core-inner-text"
				>
					{{checked ? activeText : inactiveText}}
				</span>
			</div>
			<div class="x-switch__core-action"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { SwtichProps, SwtichEmits } from "./types"
import { computed,ref,onMounted,watch } from "vue";

defineOptions({
  inheritAttrs: false
})


const props = withDefaults(defineProps<SwtichProps>(), {
	activeValue: true,
	inactiveValue: false,
})
const input = ref<HTMLInputElement>()
const innerValue = ref(props.modelValue)

// 现在是否被选中
const checked = computed(() => innerValue.value === props.activeValue)

const emits = defineEmits<SwtichEmits>()


const switchValue = () => {
  if (props.disabled) return
  const newValue = checked.value ? props.inactiveValue : props.activeValue
  innerValue.value = newValue
  emits('update:modelValue', newValue)
  emits('change', newValue)
}


onMounted(() => {
  input.value!.checked = checked.value
})
watch(checked, (val) => {
  input.value!.checked = val 
})
watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})



</script>

<style scoped lang="scss">
.x-switch {
	display: inline-flex;
	align-items: center;
	font-size: 14px;
	line-height: 20px;
	height: 32px;
	.x-switch__input {
		position: absolute;
		width: 0;
		height: 0;
		opacity: 0;
		margin: 0;
        &:focus-visible {
            & ~ .x-switch__core {
                outline: 2px solid #409eff;
                outline-offset: 1px;
            }
        }
	}

    &.is-disabled {
        opacity: 0.6;
        .x-switch__core {
            cursor: not-allowed;
        }
    }
    
    &.is-checked {
        .x-switch__core {
            border-color:#409eff ;
            background-color: #409eff;
            .x-switch__core-action {
                left: calc(100% - 17px)
            }
            .x-switch__core-inner {
                padding: 0 18px 0 4px;
            }
        }
    }
}

.x-switch--large {
  font-size: 14px;
  line-height: 24px;
  height: 40px;
  .x-switch__core {
    min-width: 50px;
    height: 24px;
    border-radius: 12px;
    .x-switch__core-action {
      width: 20px;
      height: 20px;
    }
  }
  &.is-checked {
    .x-switch__core .x-switch__core-action {
      left: calc(100% - 21px);
      color: #409eff;
    }
  }
}
.x-switch--small {
  font-size: 12px;
  line-height: 16px;
  height: 24px;
  .x-switch__core {
    min-width: 30px;
    height: 16px;
    border-radius: 8px;
    .x-switch__core-action {
      width: 12px;
      height: 12px;
    }
  }
  &.is-checked {
    .x-switch__core .x-switch-core-action {
      left: calc(100% - 13px);
      color: #409eff;
    }
  }
}
.x-switch__core {
  display: inline-flex;
  align-items: center;
  position: relative;
  height: 20px;
  min-width: 40px;
  border: 1px solid #dcdfe6;
  outline: none;
  border-radius: 10px;
  box-sizing: border-box;
  background: #dcdfe6;
  cursor: pointer;
  transition: border-color 0.3s,background-color 0.3s;
  .x-switch__core-action {
    position: absolute;
    left: 1px;
    border-radius: 100%;
    width: 16px;
    height: 16px;
    background-color: #fff;
    transition: all 0.3s;
  }
  .x-switch__core-inner {
    width: 100%;
    transition: all 0.3s;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 0 4px 0 18px;
    .x-switch__core-inner-text {
      font-size: 12px;
      color: var(--x-color-white);
      user-select: none;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
