<template>
    <button class="x-button" :class="{
        [`x-button--${type}`]: type
    }">

        <span>
      <slot></slot>
    </span>
    </button>
</template>

<script setup lang="ts">
import type { ButtonType,ButtonSize,ButtonProps,ButtonInstance } from './types'


const props = withDefaults(defineProps<ButtonProps>(), {

})
</script>

<style scoped lang="scss">
@import './style.scss';
</style>