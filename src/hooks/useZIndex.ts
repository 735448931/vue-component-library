import { ref, computed } from "vue"

const zIndex = ref(0)

const useZIndex = (initialValue = 2000) => {
    // 初始化值
	const initialZIndex = ref(initialValue)
    // 当前的 ZIndex
	const currentZIndex = computed(() => zIndex.value + initialZIndex.value)
    // 下一次的 ZIndex
	const nextZIndex = () => {
		zIndex.value++
		return currentZIndex.value
	}

	return {
		currentZIndex,
		nextZIndex,
		initialZIndex,
	}
}

export default useZIndex
