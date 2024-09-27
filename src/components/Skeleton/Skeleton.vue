<template>
	<div
		class="x-skeleton"
		:style="{ width, height }"
		:class="{ shine: animated }"
	>
		<div class="block" :style="{ backgroundColor: background }"></div>
	</div>
</template>

<script setup lang="ts">
import type { SkeletonProps } from "./types"

const props = withDefaults(defineProps<SkeletonProps>(), {
	background: "#efefef",
	width: "200px",
	height: "15px",
	animated: true,
})
</script>

<style scoped>
.x-skeleton {
	display: inline-block;
	position: relative;
	overflow: hidden;
	vertical-align: middle;
	.block {
		width: 100%;
		height: 100%;
		border-radius: 2px;
	}

}

.shine {  
  &::after {  
    content: "";  
    position: absolute;  
    animation: shine 1.5s ease 0s infinite;  
    top: 0;  
    width: 50%;  
    height: 100%;  
    background: linear-gradient(  
      to left,  
      rgba(255, 255, 255, 0) 0,  
      rgba(255, 255, 255, 0.3) 50%,  
      rgba(255, 255, 255, 0) 100%  
    );  
    transform: skewX(-45deg);  
  }  
}  
  

@keyframes shine {
	0% {
		left: -100%;
	}
	100% {
		left: 120%;
	}
}
</style>
