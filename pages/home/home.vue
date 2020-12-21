<template>
	<view>
		<view>
			测试clunch如何在uni-app中进行支持
		</view>
		<view id='canvas' style="width: 750rpx; height: 200px;">
		</view>
	</view>
</template>

<script>
	import Clunch from 'clunch/dist/clunch-template.js';
	export default {
		data() {
			return {

			}
		},
		methods: {

		},
		mounted() {
			// let query=uni.createSelectorQuery();
			// let canvas=query.select('#canvas');
			// debugger
			// new Clunch({
			// 	el:canvas,
			// 	template:"<circle :cx='_width*0.5' cy='50' radius='50' />"
			// });
		}
	}
</script>

<style>

</style>
