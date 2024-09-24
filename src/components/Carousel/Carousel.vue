<template>
	<div
		class="x-carousel-container"
		:class="{}"
		:style="{ height: height + 'px' }"
	>
		<div class="x-carousel-content">
			<div
				class="x-carousel-scroll"
				:style="{ transform: `translateX(${translate}px)` }"
			>
			<template v-for="item in srcArr">
				<img :src="item"/>
			</template>
				
			</div>
		</div>
		<!-- <div class="x-carousel-dots">...</div> -->
		<div class="x-carousel-prev" @click="handlePrev">
			<Icon icon="angle-left"></Icon>
		</div>
		<div class="x-carousel-next" @click="handleNext">
			<Icon icon="angle-right"></Icon>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import Icon from "../Icon/Icon.vue"
import type { CarouselProps } from "./types"
const props = withDefaults(defineProps<CarouselProps>(), {
	autoplay: true,
})


// 处理图片路径问题 详见 Vite 官网 处理静态资源
const srcArr = computed(() => {
	let arr:any = []
	props.srcArray.forEach(item => {
		// 原本是png图片 经过new URL 变成了 jpg 暂时写死png格式 不清楚原因 todo
		arr.push(new URL(`../../assets/${item}.png`, import.meta.url).href)
	})
	// 因为无缝 所以多添加第一张和最后一张
	arr.unshift(arr[0])
	arr.push(arr.at(-1)!)
	return arr
})

const timer = ref<ReturnType<typeof setInterval> | null>(null)

// 记录水平的位移距离
let translate = ref(0)

// 当前页码
let activeIndex = ref(0)

// 点击上一页
const handlePrev = () => {
	activeIndex.value--
	translate.value = translate.value + 150
}

// 点击下一页
const handleNext = () => {
	activeIndex.value++
	translate.value = translate.value - 150
}

// 当鼠标移走时,开始轮播
const startTime = () => {}
// 当鼠标移入时,停止轮播
const stopTime = () => {}
</script>

<style scoped lang="scss">
.x-carousel-container {
	width: 150px;
	height: 100%;
	border-bottom: 1px solid #666;
	position: relative;

	.x-carousel-prev {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.x-carousel-next {
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
	}

	.x-carousel-dots {
		position: absolute;
		bottom: 5px;
		left: 50%;
		transform: translateX(-50%);
	}

	.x-carousel-content {
		overflow: hidden;
		.x-carousel-scroll {
			display: flex;
		}
	}
}
</style>
