<template>
	<div class="box">
		<button @click="show">show</button>
		<button @click="hide">hide</button>
	</div>
	<Tooltip content="bottom" placement="bottom" manual ref="tooltipRef">
		bottom
	</Tooltip>
</template>
<script setup lang="ts">
import { ref } from "vue"
import Tooltip from "@/components/Tooltip/Tooltip.vue"

const tooltipRef = ref()

const show = () => {
	tooltipRef.value.show()
}

const hide = () => {
	tooltipRef.value.hide()
}
</script>

<style scoped>
.box {
	background-color: #fff;
	color: black;
	width: 200px;
	height: 50px;
}
</style>
