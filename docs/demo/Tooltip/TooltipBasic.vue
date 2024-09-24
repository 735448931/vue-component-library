<template>
	<div class="tooltip-base-box">
		<div class="row center">
			<div class="box-item">
				<Tooltip content="top-start" placement="top-start">top-start</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="top" placement="top">top</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="top-end" placement="top-end">top-end</Tooltip>
			</div>
		</div>
		<div class="row">
			<div class="box-item">
				<Tooltip content="left-start" placement="left-start">left-start</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="right-start" placement="right-start">right-start</Tooltip>
			</div>
		</div>
		<div class="row">
			<div class="box-item">
				<Tooltip content="left" placement="left">left</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="right" placement="right">right</Tooltip>
			</div>
		</div>
		<div class="row">
			<div class="box-item">
				<Tooltip content="left-end" placement="left-end">left-end</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="right-end" placement="right-end">right-end</Tooltip>
			</div>
		</div>
		<div class="row center">
			<div class="box-item">
				<Tooltip content="bottom-start" placement="bottom-start">bottom-start</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="bottom" placement="bottom">bottom</Tooltip>
			</div>
			<div class="box-item">
				<Tooltip content="bottom-end" placement="bottom-end">bottom-end</Tooltip>
			</div>
		</div>
	</div>

	
	<div>
		<h3>点击触发</h3>
		<Tooltip content="点击触发" trigger="click">
			<button>click me</button>
		</Tooltip>
	</div>
</template>

<script setup lang="ts">
import Tooltip from "../../../src/components/Tooltip/Tooltip.vue"
</script>

<style scoped>
.tooltip-base-box {
  margin: 50px;
  width: 600px;
}
.tooltip-base-box .row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.tooltip-base-box .center {
	justify-content: center;
}

.tooltip-base-box .box-item {
	width: 110px;
	margin-top: 10px;
}
</style>
