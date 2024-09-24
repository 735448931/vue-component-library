<template>
<Transition :name="transitionName" @after-leave="destroyComponent" @enter="updateHeight">    
  <div class="x-message" v-show="visible" @mouseenter="clearTimer" @mouseleave="startTimer"  ref="messageRef" :style="cssStyle">
        <div class="x-message__content">
            <slot>
                <RenderVnode :vNode="message" v-if="message" />
            </slot>
        </div>
        <div class="x-message__close" v-if="showClose">
            <Icon @click.stop="visible = false" icon="xmark"></Icon>
        </div>
    </div>
    </Transition>
</template>

<script setup lang="ts">
import { ref,onMounted,computed } from 'vue';
import Icon from '../Icon/Icon.vue';
import type { MessageProps } from './types'
import useEventListener from '../../hooks/useEventListener';
import RenderVnode from '../Common/RenderVnode.ts'
import { getLastBottomOffset } from './method'

const props = withDefaults(defineProps<MessageProps>(),{
  type: 'info',
  duration: 3000,
  offset: 40,
  transitionName: 'fade-up'
})

// 计算高度相关
const height = ref(0)
// 上一个实例的最下面的坐标数字，第一个是 0
const lastOffset = computed(() => getLastBottomOffset(props.id))
// 这个元素应该使用的 top
const topOffset = computed(() => props.offset + lastOffset.value)
// 这个元素为下一个元素预留的 offset，也就是它最低端 bottom 的 值
const bottomOffset = computed(() => height.value + topOffset.value)

const cssStyle = computed(() => ({
  top: topOffset.value + 'px',
  zIndex: props.zIndex
}))


const messageRef = ref<HTMLDivElement>()

const visible = ref(true)
// 定时器标识符 
let timer:any = null

// 开启定时器
const startTimer = () => {
    // 如果duration为0,则提示一直存在 除非手动关闭
    if (props.duration === 0) return
    timer = setTimeout(() => {
        visible.value = false
    },props.duration)

}

//关闭定时器 
const clearTimer = () => {
    clearTimeout(timer)
}

const keydown = (e:Event) => {
    const event = e as KeyboardEvent
    if (event.code === 'Escape') {
    visible.value = false
  }
}
// 暂时不理解为什么在setup中监听 而不在onMounted中
useEventListener(document, 'keydown', keydown)

onMounted(() => {
  // 挂载后,立刻开启
  visible.value = true
  // 开启定时器函数,在duration后关闭
  startTimer()   
})

// 销毁组件
const destroyComponent=  () => {
  props.onDestory()
}
// 当有新的消息时 需要更新高度
const updateHeight = () => {
  height.value = messageRef.value!.getBoundingClientRect().height
}

defineExpose({
  bottomOffset,
  visible
})
</script>

<style scoped>
.x-message {
  width: fit-content;
  border-radius: 4px;
  border-width: 1px;
  border-style: 1px solid #dcdfe6;
  border-color: #ebeef5;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  background-color: #999;
    padding: 15px 19px;
    display: flex;
  align-items: center;
}
.x-message.fade-up-enter-from,
.x-message.fade-up-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>