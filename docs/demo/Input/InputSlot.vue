<template>
	<Input v-model="value1" placeholder="请输入内容">
		<template #prepend>
			<Icon icon="user"></Icon>
		</template>

		<template #prefix>
			<Icon icon="car"></Icon>
		</template>

		<template #suffix>
			<Icon icon="edit"></Icon>
		</template>

		<template #append>
			<Icon icon="apple"></Icon>
		</template>
	</Input>
</template>

<script setup lang="ts">
import { ref } from "vue"
import Input from "../../../src/components/Input/Input.vue"
import Icon from "../../../src/components/Icon/Icon.vue"
const value1 = ref("")
</script>

<style scoped></style>
