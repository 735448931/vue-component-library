export type SwitchValueType = boolean | string | number
export interface SwtichProps {
	// 绑定至 必须等于 activeValue 或 inactiveValue 默认是 boolean 类型
	modelValue: SwitchValueType
	disabled?: boolean
	// switch 打开时的文字描述
	activeText?: string
	// switch 关闭时的文字描述
	inactiveText?: string
	// switch 打开时的值
	activeValue?: SwitchValueType
	// switch 关闭时的值
	inactiveValue?: SwitchValueType
	name?: string
	// input 的 ID
	id?: string
	size?: "small" | "large"
}

export interface SwtichEmits {
	(e: "update:modelValue", value: SwitchValueType): void
	(e: "change", value: SwitchValueType): void
}
