<template>
    <div class="x-collapse">
        <slot></slot>
    </div>
</template>
<script setup lang="ts">
import {provide, ref,watch} from 'vue'
import {NameType,CollapseProps,CollapseEmits,collapseContextKey} from './types'

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

// 当前的激活项
const activeNames = ref<NameType[]>(props.modelValue)

// 监听modelValue变化,并更新activeNames
watch(()=>props.modelValue,() => {
    activeNames.value = props.modelValue
})

// 提示问题
if (props.accordion && activeNames.value.length > 1) {
    console.warn('accordion为true时,activeNames不能超过1个')
}

// 点击触发
const handleItemClick = (item: NameType) => {
    let _activeNames = [...activeNames.value]
    if(props.accordion) {
        _activeNames = [activeNames.value[0] === item ? '' : item]
    } else {
        const index = _activeNames.indexOf(item)
        if(index > -1) {
            // 存在，删除数组中对应的一项
            _activeNames.splice(index,1)
        } else {
            _activeNames.push(item)
        }
    }
    activeNames.value = _activeNames

    emits('update:modelValue',_activeNames)
    emits('change',_activeNames)
}

// 提供给子组件
provide(collapseContextKey,{
    activeNames,
	handleItemClick
})

</script>

<style scoped>



</style>