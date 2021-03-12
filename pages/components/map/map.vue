<template>
	<view>
		地图组件
		<map id="map" class="mapView" style="width:70vw;height:70vh;" scale="1" longitude="40" latitude="28"
			:polyline="polyline"></map>
		<button type="warn" @click="doit()">uni.createMapContext(mapId,this)</button>
	</view>
</template>

<script>
	import JsonToString from '../../../server/JsonToString.js';
	export default {
		data() {
			return {
				polyline: [{ //指定一系列坐标点，从数组第一项连线至最后一项
					points: [{
							latitude: 40,
							longitude: 28
						},
						{
							latitude: 40,
							longitude: 48
						},
						{
							latitude: 30,
							longitude: 38
						}
					],
					color: "#ff0000", //线的颜色
					width: 10, //线的宽度
					dottedLine: true, //是否虚线
					arrowLine: true, //带箭头的线 开发者工具暂不支持该属性
				}]
			}
		},
		methods: {
			doit() {
				let mapContext = uni.createMapContext('map', this);
				mapContext.getCenterLocation().then(data => {
					uni.showModal({
						title: "getCenterLocation",
						content: JsonToString(data)
					})
				});
			}
		}
	}
</script>

<style>

</style>
