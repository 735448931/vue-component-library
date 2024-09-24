import { defineConfig } from "vitepress"
import { fileURLToPath, URL } from "node:url"
import {
	containerPreview,
	componentPreview,
} from "@vitepress-demo-preview/plugin"

export default defineConfig({
	title: "Vue3 Component Library",
	titleTemplate: "HaoXuan",
	base: "/vue-component-library/",
	description: "A VitePress Site",
	markdown: {
		config(md) {
			md.use(containerPreview)
			md.use(componentPreview)
		},
	},
	vite: {
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("../../src", import.meta.url)),
			},
		},
	},
	themeConfig: {
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "基础组件",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
					{ text: "Tooltip", link: "/tooltip" },
				],
			},
			{
				text: "表单组件",
				items: [
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
				],
			},
			{
				text: "Data 数据展示",
				items: [
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
				],
			},
			{
				text: "Navigation 导航",
				items: [
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
				],
			},
			{
				text: "Feedback 反馈组件",
				items: [
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
				],
			},
			{
				text: "其他组件",
				items: [
					{ text: "Icon 图标", link: "/icon" },
					{ text: "Collapse", link: "/collapse" },
				],
			},
		],
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2024-present Hao Xuan",
		},
		docFooter: {
			prev: "上一页",
			next: "下一页",
		},
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/735448931/vue-component-library",
			},
		],
	},
})
