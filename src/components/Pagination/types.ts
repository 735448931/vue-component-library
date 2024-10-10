export interface PaginationProps {
	pageSize: number // 每页显示条目个数
	total: number // 总条目数
	pagerCount: number                    //  最大页码按钮书 超过的话会折叠
    currentPage: number  // 当前页数
	
}






export interface PaginationEmits {
	// page-size     改变时触发
	(e: "size-change", page: number): void
	// current-page  改变时触发
	(e: "current-change", page: number): void
	// current-page 或 page-size 更改时触发
	(e: "change", page: number): void
}



        // page-size / v-model:page-size    
        // total                            总条目数
