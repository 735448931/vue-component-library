<template>
    <h5>基础使用</h5> 
    <Input v-model="value1"></Input>
    <h5>禁用</h5>
    <Input v-model="value2" disabled></Input>
    <h5>可清空</h5>
    <Input v-model="value3" clearable></Input>
    <h5>自动聚焦</h5>
    <Input v-model="value4" autofocus></Input>
    <h5>密码类型</h5>
    <Input v-model="value5" type="password" ></Input>
    <h5>密码类型</h5>
    <Input v-model="value6" type="password" showPassword></Input>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../../src/components/Input/Input.vue'
const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>

