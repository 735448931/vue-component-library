import type { Ref, InjectionKey } from "vue"

// v-model 绑定的类型
export type NameType = string | number

export interface CollapseProps {
	modelValue: NameType[]
	// 手风琴模式(只允许同时展开一个面板)
	accordion?: boolean
}

export interface CollapseItemProps {
	name: NameType
	title?: string
	disabled?: boolean
}

export interface CollapseEmits {
	(e: "update:modelValue", values: NameType[]): void
	(e: "change", values: NameType[]): void
}

// provide 提供给子组件的 context 
export interface CollapseContext {
	activeNames: Ref<NameType[]>
	handleItemClick: (name: NameType) => void
}

// provide 的 key 名
export const collapseContextKey: InjectionKey<CollapseContext> = Symbol("collapseContextKey")