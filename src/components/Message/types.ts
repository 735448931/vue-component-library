// ComponentInternalInstance:代表了组件的实例
import type { VNode, ComponentInternalInstance } from "vue"

// 
export interface MessageProps {
	message: string | VNode
	duration?: number
	showClose?: boolean
	type?: "success" | "info" | "warning" | "danger"
	offset?: number
	transitionName?: string
	id: string
	zIndex: number
	onDestory: () => void
}
// 所有的消息都放在一个数组里 数组里单个消息的配置
export interface MessageContext {
	id: string
	vnode: VNode
	vm: ComponentInternalInstance
	props: MessageProps
	destory: () => void
}

// 使用时创建的配置项
export type CreateMessageProps = Omit<MessageProps,"onDestory" | "id" | "zIndex">
