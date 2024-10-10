<template>
	<div class="x-pagination">
		<div class="x-pagination-size">
			<span>每页显示</span>
			<input type="text" :value="pageSize" />
			<span>条数据</span>
		</div>
		<a
			class="x-pagination-prev"
			@click="changePage(curPage - 1)"
			:class="{ disabled: curPage === 1 }"
		>
			<Icon icon="angle-left" />
		</a>
		<ul class="x-pagination-list">
			<li
				v-for="i in totalPage"
				:key="i"
				@click="changePage(i)"
				:class="{ 'is-active': i === curPage }"
				class="x-pagination-list-item"
			>
				<a href="#">{{ i }}</a>
			</li>
		</ul>
		<a
			class="x-pagination-next"
			@click="changePage(curPage + 1)"
			:class="{ disabled: curPage === totalPage }"
		>
			<Icon icon="angle-right" />
		</a>
		<div class="x-pagination-total">共 {{totalPage}} 页</div>
		<div class="x-pagination-jump">
			<span>跳至</span>
			<input type="text" v-model="jumpTo"/>
			<span>页</span>
			<span href="#" @click="changePage(jumpTo)" class="x-pagination-jump-btn">跳转</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { PaginationProps, PaginationEmits } from "./types"
import Icon from "../../components/Icon/Icon.vue"
import { computed, ref, watch } from "vue"

const props = withDefaults(defineProps<PaginationProps>(), {
	currentPage: 1,
	pageSize: 10,
	total: 50,
})

const emits = defineEmits<PaginationEmits>()

// 当前页
const curPage = ref(props.currentPage)
// 总页码数
const totalPage = computed(() => Math.ceil(props.total / props.pageSize))
// 跳转至
const jumpTo = ref(1) 

const changePage = (index: number) => {
	console.log(index,'6666');
	index = Number(index)
	if (index === 0) {
		console.log('最小了');
		curPage.value = 1
		return
	}
	if (index > totalPage.value) {
		console.log('最大了');
		curPage.value = totalPage.value
		return
	}
	if (curPage.value !== index) {
		curPage.value = index
		emits("current-change", curPage.value)
	}
}

watch(
	() => props.currentPage,
	(newValue) => {
		curPage.value = props.currentPage
		changePage(newValue) // 可能存在问题
	}
)


</script>

<style scoped lang="scss">
.x-pagination {
	display: flex;
	height: 30px;
	width: 800px;
	border: 1px solid #ccc;
	line-height: 30px;
	input {
		width: 50px;
	}
	.x-pagination-size {
		margin-right: 10px;
	}
	.x-pagination-list-item {
		&.is-active {
			background-color: #ccc;
		}
	}
	.x-pagination-prev {
		display: block;
		width: 30px;
		height: 30px;
		text-align: center;
		border: 1px solid #ccc;
		&.disabled {
			color: #ccc;
		}
	}
	.x-pagination-next {
		display: block;
		width: 30px;
		height: 30px;
		text-align: center;
		border: 1px solid #ccc;
		&.disabled {
			color: #ccc;
		}
	}
	.x-pagination-list {
		display: flex;
		margin: 0 20px;
		a {
			display: block;
			width: 30px;
			height: 30px;
			text-align: center;
			border: 1px solid #ccc;
		}
	}
	.x-pagination-total {
		margin: 0 10px;
	}
	.x-pagination-jump {
		.x-pagination-jump-btn {
			border: 1px solid #666;
			padding: 3px;
		}
	}
}
</style>
