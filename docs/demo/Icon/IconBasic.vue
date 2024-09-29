<template>
	<div class="icons">
		<Icon icon="user"></Icon>
		<Icon icon="children" color="skyblue"></Icon>
		<Icon icon="home" size="2xs"></Icon>
		<Icon icon="home" border></Icon>
		<Icon icon="home" rotation="90"></Icon>
		<Icon icon="home" flip="vertical"></Icon>
		<Icon icon="home" pull="right"></Icon>
	</div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue"
</script>

<style scoped>
.icons {
    display: flex;
    flex-direction: column;
}
</style>
