<template>
	<div class="icons">
		<Icon icon="user" bounce></Icon>
		<Icon icon="user" shake></Icon>
		<Icon icon="user" beat></Icon>
		<Icon icon="user" fade></Icon>
		<Icon icon="user" beatFade></Icon>
		<Icon icon="user" spinPulse></Icon>
		<Icon icon="user" spin></Icon>
	</div>
</template>

<script setup>
import Icon from "@/components/Icon/Icon.vue"
</script>

<style scoped>
.icons {
    display: flex;
    flex-direction: column;
}
</style>
