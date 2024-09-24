import type { Placement, Options } from "@popperjs/core"
export interface TooltipProps {
	content?: string
	trigger?: "hover" | "click"
	placement?: Placement
	// 控制Tooltip显示和隐藏是否由用户手动控制
	manual?: boolean
	popperOptions?: Partial<Options>
	// 默认是 fade
	transition?: string
	openDelay?: number
	closeDelay?: number
}

export interface TooltipEmits {
	(e: "visible-change", value: boolean): void
	(e: "click-outside", value: boolean): void
}

export interface TooltipInstance {
	show: () => void
	hide: () => void
}