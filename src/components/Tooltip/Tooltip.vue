<template>
	<div class="x-tooltip" ref="popperContainerNode" v-on="outerEvents">
		<div class="x-tooltip__trigger" ref="triggerNode" v-on="events">
			<slot></slot>
		</div>
		<Transition name="fade">
			<div v-if="isOpen" class="x-tooltip__popper" ref="popperNode">
				<slot name="content">{{ content }}</slot>
				<div id="arrow" data-popper-arrow></div>
			</div>
		</Transition>
	</div>
</template>

<script setup lang="ts">
import { createPopper } from "@popperjs/core"
import type { Instance } from "@popperjs/core"
import type { TooltipProps, TooltipEmits, TooltipInstance } from "./types"
import { ref, watch, onUnmounted, computed, reactive } from "vue"
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
import useClickOutside from "../../hooks/useClickOutside"
import { debounce } from "lodash-es"
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()

let popperInstance: null | Instance = null
let openTimes = 0
let closeTimes = 0
// 最终要传递给popper的配置
const popperOptions = computed(() => {
	return {
		placement: props.placement,
		modifiers: [
			{
				name: "offset",
				options: {
					offset: [0, 9],
				},
			},
		],
		...props.popperOptions,
	}
})

const props = withDefaults(defineProps<TooltipProps>(), {
	placement: "right",
	trigger: "hover",
	openDelay: 0,
	closeDelay: 0,
})
const emits = defineEmits<TooltipEmits>()

useClickOutside(popperContainerNode, () => {
	if (props.trigger === "click" && isOpen.value && !props.manual) {
		closeFinal()
	}
	if (isOpen.value) {
		emits("click-outside", true)
	}
})

// 触发打开
const open = () => {
	openTimes++
	console.log("open times", openTimes)
	isOpen.value = true
	emits("visible-change", true)
}

// 触发关闭
const close = () => {
	closeTimes++
	console.log("close times", closeTimes)
	isOpen.value = false
	emits("visible-change", false)
}

const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, props.closeDelay)

const openFinal = () => {
	closeDebounce.cancel()
	openDebounce()
}
const closeFinal = () => {
	openDebounce.cancel()
	closeDebounce()
}
const togglePopper = () => {
	if (isOpen.value) {
		closeFinal()
	} else {
		openFinal()
	}
}
// 绑定事件
const attachEvents = () => {
	if (props.trigger === "hover") {
		events["mouseenter"] = open
		outerEvents["mouseleave"] = close
	} else if (props.trigger === "click") {
		events["click"] = togglePopper
	}
}

if (!props.manual) {
	attachEvents()
}

watch(
	() => props.manual,
	(isManual) => {
		if (isManual) {
			events = {}
			outerEvents = {}
		} else {
			attachEvents()
		}
	}
)

watch(
	() => props.trigger,
	(newTrigger, oldTrigger) => {
		if (newTrigger !== oldTrigger) {
			events = {}
			outerEvents = {}
			attachEvents()
		}
	}
)



// 监听isOpen的变化，控制popper的显示与隐藏
watch(
	isOpen,
	(newValue) => {
		if (newValue) {
			if (triggerNode.value && popperNode.value) {
				popperInstance = createPopper(
					triggerNode.value,
					popperNode.value,
					popperOptions.value
				)
			} else {
				popperInstance?.destroy()
			}
		}
	},
	{ flush: "post" }
)

onUnmounted(() => {
	popperInstance?.destroy()
})

defineExpose<TooltipInstance>({
	show: openFinal,
	hide: closeFinal,
})
</script>

<style scoped>
.x-tooltip {
	display: inline-block;
	.x-tooltip__popper {
		background: #fff;
		border-radius: 4px;
		border: 1px solid #dcdfe6;
		padding: 12px;
		color: #606266;
		line-height: 1.4;
		text-align: justify;
		font-size: 14px;
		word-break: break-all;
		box-sizing: border-box;
		z-index: 1000;

		#arrow,
		#arrow::before {
			position: absolute;
			width: 8px;
			height: 8px;
			box-sizing: border-box;
			background: #fff;
		}
		#arrow {
			visibility: hidden;
		}
		#arrow::before {
			visibility: visible;
			content: "";
			transform: rotate(45deg);
		}
		&[data-popper-placement^="top"] > #arrow {
			bottom: -5px;
		}

		&[data-popper-placement^="bottom"] > #arrow {
			top: -5px;
		}

		&[data-popper-placement^="left"] > #arrow {
			right: -5px;
		}

		&[data-popper-placement^="right"] > #arrow {
			left: -5px;
		}
		&[data-popper-placement^="top"] > #arrow::before {
			border-right: 1px solid #dcdfe6;
			border-bottom: 1px solid #dcdfe6;
		}
		&[data-popper-placement^="bottom"] > #arrow::before {
			border-left: 1px solid #dcdfe6;
			border-top: 1px solid #dcdfe6;
		}
		&[data-popper-placement^="left"] > #arrow::before {
			border-right: 1px solid #dcdfe6;
			border-top: 1px solid #dcdfe6;
		}
		&[data-popper-placement^="right"] > #arrow::before {
			border-left: 1px solid #dcdfe6;
			border-bottom: 1px solid #dcdfe6;
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.3s;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
}
</style>
