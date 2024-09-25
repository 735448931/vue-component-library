export type ButtonType = "primary" | "success" | "warning" | "error"
export type ButtonSize = "small" | "middle" | "large"

export interface ButtonProps {
	type?: ButtonType
	size?: ButtonSize
	plain?: boolean
	round?: boolean
	circle?: boolean
	disabled?: boolean
	icon?: string
	autofocus?: boolean
	loading?: boolean
}

export interface ButtonInstance {
	ref: HTMLButtonElement
}
