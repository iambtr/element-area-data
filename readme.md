# 说明
	1.省市区数据基于 area-data的库 change.js 是转化数据代码
	2.eleAreaData.json 是转了之后适配Cascader 级联选择器的数据
# 使用
	
	1.引入
	import options from '@/utils/eleAreaData.json'
	data(){
		return {
			options,
			areas: [],
		}
	}
	<el-cascader v-model="areas" clearable filterable :options="options"></el-cascader>
	