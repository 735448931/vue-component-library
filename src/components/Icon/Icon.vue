<template>
    <i class="x-icon" :style="customStyles" v-bind="$attrs">
        <FontAwesomeIcon  v-bind="filteredProps"></FontAwesomeIcon>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { omit } from 'lodash-es'
import type {IconProps} from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

defineOptions({
  name: 'XIcon',
  inheritAttrs: false
})

const props = defineProps<IconProps>()

const filteredProps = computed(() => omit(props, ['type', 'color']))

const customStyles = computed(() => {
  return props.color ? { color: props.color } : {}
})


</script>

<style scoped>

</style>