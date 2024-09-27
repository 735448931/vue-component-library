<template>
<Input v-model="value1" @change="handlerChange"></Input>
<Input v-model="value2" @input="handlerInput"></Input>
<Input v-model="value3" @focus="handlerFocus"></Input>
<Input v-model="value4" @blur="handlerBlur"></Input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../src/components/Input/Input.vue'

const value1 = ref()
const value2 = ref()
const value3 = ref()
const value4 = ref()

const handlerChange = () => {
    console.log('handlerChange',value1.value)
}

const handlerInput = () => {
    console.log('handlerInput',value1.value)
}

const handlerFocus = () => {
    console.log('handlerFocus',value1.value)
}

const handlerBlur = () => {
    console.log('handlerBlur',value1.value)
}
</script>

<style scoped>

</style>