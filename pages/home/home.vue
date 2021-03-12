<template>
	<view>
		<button type='primary' @click="doit1()">1.获取位置</button>
		<button type='primary' @click="doit2()">2.查看位置</button>
		<navigator url='../components/map/map'>
			<button type="primary">3.Map组件和地图组件控制</button>
		</navigator>
	</view>
</template>

<script>
	import JsonToString from '../../server/JsonToString.js';
	export default {
		data() {
			return {

			}
		},
		methods: {
			doit1() {

				let local = uni.getLocation({
					success: data => {
						uni.showModal({
							title: '1.获取位置',
							content: JsonToString(data)
						});

					}
				});

			},
			doit2() {

				uni.openLocation({
					latitude: 32,
					longitude: 118
				})

			}
		},
		mounted() {

		}
	}
</script>

<style>

</style>
