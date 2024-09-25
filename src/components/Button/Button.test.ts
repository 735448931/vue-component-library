import { describe, test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Button from "./Button.vue"

describe("Button.vue", () => {
	test("basic button", () => {
		const wrapper = mount(Button, {
			props: {
				type: "primary",
			},
			slots: {
				default: "button",
			},
		})
		console.log(wrapper.html())
		expect(wrapper.classes()).toContain("x-button--primary")
		// // slot
		// // get, find
		expect(wrapper.get("button").text()).toBe("button")
		// // events
		// wrapper.get("button").trigger("click")
		// console.log(wrapper.emitted())
		// expect(wrapper.emitted()).toHaveProperty("click")
	})
})
