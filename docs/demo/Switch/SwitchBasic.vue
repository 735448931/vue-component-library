<template>
    <Switch v-model="value"></Switch>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import Switch from '../../../src/components/Switch/Switch.vue'

const value = ref(true)

</script>

<style scoped>

</style>