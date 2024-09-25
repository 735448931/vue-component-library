<template>
	<div>
        <h3>基础</h3>
		<Button type="primary">111</Button>
		<Button type="success">222</Button>
		<Button type="warning">333</Button>
		<Button type="error">444</Button>
	</div>

    <div>
        <h3>形态</h3>
	    <Button>111</Button>
	    <Button plain>111</Button>
	    <Button round>111</Button>
	    <Button circle>111</Button>
	    <Button disabled>111</Button>
    </div>

    <div>
        <h3>尺寸</h3>
	    <Button size="small">111</Button>
	    <Button size="middle">111</Button>
	    <Button size="large">111</Button>
    </div>
</template>

<script setup lang="ts">
import Button from "../../../src/components/Button/Button.vue"
</script>

<style scoped></style>
