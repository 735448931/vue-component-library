<template>
    <Input v-model="value" @input="test">
    </Input>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../src/components/Input/Input.vue'
const value = ref('123')
const test = () => {
    console.log('父组件触发了输入')
}
</script>

