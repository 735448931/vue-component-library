<template>
	<div class="x-dropdown">
		<Tooltip
			:trigger="trigger"
			:placement="placement"
			:popper-options="popperOptions"
			:open-delay="openDelay"
			:close-delay="closeDelay"
			:manual="manual"
			@visible-change="visibleChange"
			ref="tooltipRef"
		>
			<slot></slot>

			<template #content>
				<ul class="x-dropdown__menu">
					<template v-for="item in menuOptions" :key="item.key">
						<li v-if="item.divided" class="divided-placeholder"></li>
						<li
							class="x-dropdown__item"
							@click="itemClick(item)"
							:class="{
								'is-disabled': item.disabled,
								'is-divided': item.divided,
							}"
							:id="`dropdown-item-${item.key}`"
						>
							<RenderVnode :vNode="item.label" />
						</li>
					</template>
				</ul>
			</template>
		</Tooltip>
	</div>
</template>

<script setup lang="ts">
import { ref, watch} from "vue"
import Tooltip from "../Tooltip/Tooltip.vue"
import type { TooltipInstance } from "../Tooltip/types"
import type {
	DropdownProps,
	DropdownInstance,
	DropdownEmits,
	MenuOption,
} from "./types"
import RenderVnode from '../../components/Common/RenderVnode'


defineOptions({
  name: 'xDropdown'
})

const tooltipRef = ref<TooltipInstance | null>(null)

const props = withDefaults(defineProps<DropdownProps>(), {
	hideAfterClick: true,
})

const emits = defineEmits<DropdownEmits>()


const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}



const visibleChange = (e: boolean) => {
	emits("visible-change", e)
}
</script>

<style scoped>

.vk-dropdown {
  display: inline-block;
  .vk-tooltip {
    padding: 5px 0;
  }
}
.vk-dropdown__menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
  .vk-dropdown__item {
    display: flex;
    align-items: center;
    white-space: nowrap;
    list-style: none;
    line-height: 22px;
    padding: 5px 16px;
    margin: 0;
    font-size: 14px;
    color: #606266;
    cursor: pointer;
    outline: none;
    &:hover {
      background-color: #53A8FF;
      color: #409eff;
    }
    &.is-disabled {
      color: #ebeef5;
      cursor: not-allowed;
      background-image: none;
    }
  }
  .divided-placeholder {
    margin: 6px 0;
    border-top: 1px solid #ebeef5;
  }
}


</style>
